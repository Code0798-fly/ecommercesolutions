import { mkdir, readFile, writeFile } from 'node:fs/promises';

let configuredSiteUrl = process.env.VITE_SITE_URL;
if (!configuredSiteUrl) {
  for (const envFile of ['.env.production.local', '.env.local', '.env.production', '.env']) {
    try {
      const contents = await readFile(envFile, 'utf8');
      const match = contents.match(/^\s*VITE_SITE_URL\s*=\s*(.*?)\s*$/m);
      if (match) { configuredSiteUrl = match[1].replace(/^['"]|['"]$/g, '').replace(/\s+#.*$/, ''); break; }
    } catch {}
  }
}
const base = (configuredSiteUrl || '').trim().replace(/\/$/, '');
const pages = [
  { path: '/', title: 'Digital Engineering & Web Development Agency | Ecommerce Solutions', description: 'A senior-led digital engineering partner for web and product development, e-commerce, integrations, automation and search.', heading: 'Build what your business needs next.', summary: 'Ecommerce Solutions helps businesses improve customer experiences, connect systems, and move important work forward through web and product development, frontend and backend engineering, e-commerce, Shopify, WordPress, AI and LLM integrations, Python automation, Azure IoT, SEO, performance optimization, integrations and support. The site includes project case studies, technology capabilities, industries, engagement models, a seven-step process and a project inquiry form.' },
  { path: '/services', title: 'Digital Engineering Services | Ecommerce Solutions', description: 'Explore web and product development, frontend, backend, Shopify, WordPress, AI, Python automation, IoT, SEO and support.', heading: 'Digital engineering services', summary: 'Services include web and product development; frontend development with React, Next.js and Angular; backend and API development with Node.js, Express and Python; full-stack applications; e-commerce and Shopify; WordPress; AI and LLM integrations; Python automation; Azure IoT; technical SEO; performance optimization; integrations; and ongoing support.' },
  { path: '/technologies', title: 'Technology Capabilities | React, Next.js, Node, Python & Shopify', description: 'Explore how React, Next.js, Angular, Node.js, Express, Python, Shopify, WordPress, PostgreSQL, Azure and APIs support client work.', heading: 'Technology capabilities', summary: 'Technology capabilities include React, Next.js, Angular, JavaScript and TypeScript; Node.js, Express, Python, MERN, REST APIs and GraphQL; Shopify, Liquid, Shopify Functions and WordPress; PostgreSQL, Azure, Azure IoT and integrations; technical SEO, accessibility and performance. The stack is selected around the client problem and existing environment.' },
  { path: '/work', title: 'Web Development & E-commerce Case Studies | Ecommerce Solutions', description: 'Explore verified project scope, client challenges, delivery approaches, services, technology and known outcomes.', heading: 'Selected project case studies', summary: 'Read project case studies for DMF Luxury and World of Reading. Each case study describes the project overview, client challenge, approach, services provided, technologies, key features and documented outcome. No unverified performance metrics or testimonials are published.' },
  { path: '/pricing', title: 'Project Pricing Catalogue | Ecommerce Solutions', description: 'Compare scope options for websites, applications, e-commerce, SEO, automation and ongoing engineering support.', heading: 'Project pricing catalogue', summary: 'Guide prices in USD: digital presence and WordPress websites $750–$2,500; web applications and product work $2,000–$8,000+; e-commerce projects $1,500–$5,000+; SEO audits $350–$900 or ongoing SEO $500–$1,200 per month; automation and AI integrations $850–$4,000+; IoT from $1,500; engineering support $400–$1,200 per month; dedicated developer capacity from $2,200 per month. Final pricing depends on scope, integrations, content and delivery needs.' },
  { path: '/about', title: 'About the Digital Engineering Team | Ecommerce Solutions', description: 'Meet a small senior-led engineering team for web development, e-commerce, connected systems and SEO.', heading: 'About Ecommerce Solutions', summary: 'Ecommerce Solutions is a small senior-led engineering team. Clients work directly with the people responsible for planning and delivery across technical leadership, product and experience, engineering, quality, SEO and support.' },
  { path: '/seo', title: 'SEO, AEO & GEO Services | Ecommerce Solutions', description: 'Technical SEO, answer engine readiness and clear structured content to help people and search systems understand your website.', heading: 'SEO, AEO and GEO services', summary: 'SEO services include technical SEO, crawl and index foundations, content structure, page performance, structured data, answer engine readiness and clear organization and service information for generative search. Rankings and AI citations are not guaranteed.' },
  { path: '/contact', title: 'Contact | Start a Project with Ecommerce Solutions', description: 'Tell us about your web, product, e-commerce, automation or SEO project and discuss a practical next step.', heading: 'Start a project conversation', summary: 'Contact Ecommerce Solutions about web development, product engineering, frontend or backend work, e-commerce, Shopify, WordPress, AI integrations, Python automation, IoT, SEO, performance, integrations or technical support. Email the team directly or submit the project inquiry form.' },
  { path: '/faq', title: 'Project FAQ | Ecommerce Solutions', description: 'Answers about existing websites, international projects, codebase takeovers, ongoing support, technology expertise and project planning.', heading: 'Frequently asked project questions', summary: 'Get answers about working with an existing website, international collaboration, codebase takeovers, ongoing support, technologies, project kickoffs, pricing and search visibility.' },
  { path: '/work/dmf-luxury', title: 'DMF Luxury Case Study | Ecommerce Solutions', description: 'Project overview, challenge, delivery approach, technology and verified scope for the DMF Luxury commerce experience.', heading: 'DMF Luxury case study', summary: 'This project connected Shopify commerce with a Next.js storefront and Sanity content. The engagement focused on bringing product discovery and brand storytelling together. Published scope includes a headless storefront, product and collection browsing, and editorial content managed in Sanity. No verified post-launch performance metrics were provided.' },
  { path: '/work/world-of-reading', title: 'World of Reading Case Study | Ecommerce Solutions', description: 'Project overview, challenge, delivery approach, technology and verified scope for the World of Reading commerce experience.', heading: 'World of Reading case study', summary: 'This project covered storefront navigation, collection structure, language hubs and reusable content experiences for a specialist bookseller. The published scope describes the commerce and content work; no verified conversion or revenue figures were supplied.' },
];
const faqItems = [
  ['Can you work with our existing website?', 'Yes. We can assess the current site, platform and integrations, then recommend improvements that preserve what is useful and address the main constraints.'],
  ['Do you work with international clients?', 'Yes. Remote collaboration is supported. Time-zone overlap, communication channels and review points are agreed during planning.'],
  ['Can you take over an existing codebase?', 'Yes. We start with a handover and technical review, document risks and dependencies, and propose a practical first set of priorities.'],
  ['Do you provide ongoing support?', 'Yes. Ongoing development, technical support and maintenance can be arranged with clear scope, capacity and response expectations.'],
  ['Which technologies do you work with?', 'Capabilities include React, Next.js, Angular, JavaScript and TypeScript, Node.js, Express, Python, MERN, Shopify, WordPress, PostgreSQL, Azure, APIs and technical SEO. We recommend the tools that fit your needs.'],
  ['How does a project start?', 'We begin with a conversation about goals, users, current systems and constraints. If there is a fit, we define the scope and provide a proposal with assumptions and milestones.'],
  ['How is pricing decided?', 'Pricing is scoped to the work, team mix, integrations, content and delivery needs. The proposal explains deliverables, exclusions, timing and commercial assumptions before you commit.'],
  ['Do you guarantee search rankings or AI citations?', 'No. Search rankings and AI-generated answers depend on factors outside any provider’s control. We can improve technical access, content clarity and structured information, then measure what is observable.'],
];
await mkdir('build', { recursive: true });
const robots = ['User-agent: *', 'Allow: /', ...(base ? [`Sitemap: ${base}/sitemap.xml`] : [])].join('\n') + '\n';
await writeFile('build/robots.txt', robots);
const rootHtml = await readFile('build/index.html', 'utf8');
const org = { '@type': 'Organization', name: 'Ecommerce Solutions', email: 'simrankhanna0798@gmail.com', description: 'A senior-led digital engineering partner for web development, e-commerce, connected systems and search.', areaServed: 'Worldwide', knowsAbout: ['Web development', 'React', 'Next.js', 'Angular', 'Node.js', 'Express', 'Python', 'Shopify', 'WordPress', 'Azure IoT', 'Search engine optimization', 'E-commerce'] };
if (base) { org.url = base; org.logo = `${base}/favicon.svg`; }
const graph = [org, ...(base ? [{ '@type': 'WebSite', name: 'Ecommerce Solutions', url: base }] : [])];
const schemaScript = (items) => `<script id="agency-structured-data" type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': items })}</script>`;
const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const pageSchema = (page) => {
  const pageUrl = base ? `${base}${page.path}` : page.path;
  const items = [...graph,
    { '@type': 'WebPage', name: page.title, description: page.description, url: pageUrl, inLanguage: 'en' },
    { '@type': 'BreadcrumbList', itemListElement: (page.path.startsWith('/work/') ? [['Home', '/'], ['Our work', '/work'], [page.title.split('|')[0].trim(), page.path]] : [['Home', '/'], [page.title.split('|')[0].trim(), page.path]]).map(([name, path], index) => ({ '@type': 'ListItem', position: index + 1, name, item: base ? `${base}${path}` : path })) },
  ];
  if (page.path === '/faq') items.push({ '@type': 'FAQPage', mainEntity: faqItems.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  if (page.path === '/services') items.push({ '@type': 'Service', name: 'Digital engineering services', serviceType: ['Web and product development', 'Frontend development', 'Backend and API development', 'Full-stack development', 'E-commerce and Shopify', 'WordPress', 'AI and LLM integrations', 'Python automation', 'Azure IoT', 'SEO and performance optimization', 'Integrations and ongoing support'], provider: { '@type': 'Organization', name: 'Ecommerce Solutions' }, areaServed: 'Worldwide' });
  if (page.path === '/technologies') items.push({ '@type': 'ItemList', name: 'Technology capabilities', itemListElement: ['React', 'Next.js', 'Angular', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'Python', 'MERN', 'Shopify', 'Liquid', 'GraphQL', 'Shopify Functions', 'WordPress', 'PostgreSQL', 'Azure', 'Azure IoT', 'APIs'].map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })) });
  if (page.path === '/seo') items.push({ '@type': 'Service', name: 'SEO, AEO and GEO services', serviceType: ['Technical SEO', 'Answer engine readiness', 'Generative search clarity'], provider: { '@type': 'Organization', name: 'Ecommerce Solutions' }, areaServed: 'Worldwide' });
  if (page.path.startsWith('/work/')) items.push({ '@type': 'Article', headline: page.title, description: page.description, author: { '@type': 'Organization', name: 'Ecommerce Solutions' }, publisher: { '@type': 'Organization', name: 'Ecommerce Solutions' }, mainEntityOfPage: pageUrl });
  return items;
};
const renderShell = (page) => {
  const pageUrl = base ? `${base}${page.path}` : page.path;
  const fallbackLinks = [['Home', '/'], ['Services', '/services'], ['Selected work', '/work'], ['Pricing', '/pricing'], ['Contact', '/contact']].filter(([, path]) => path !== page.path);
  const nav = fallbackLinks.map(([label, path]) => `<li><a href="${path}">${label}</a></li>`).join('');
  const fallback = `<div id="root"><main class="static-content"><h1>${escapeHtml(page.heading)}</h1><p>${escapeHtml(page.summary)}</p><nav aria-label="More pages"><ul>${nav}</ul></nav><p><a href="mailto:simrankhanna0798@gmail.com">Email Ecommerce Solutions</a></p></main></div>`;
  return rootHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?\s*>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?\s*>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta property="og:type" content="[^"]*"\s*\/?\s*>/, `<meta property="og:type" content="${page.path.startsWith('/work/') ? 'article' : 'website'}" />`)
    .replace('</head>', `${base ? `<link rel="canonical" href="${pageUrl}" /><meta property="og:url" content="${pageUrl}" />` : ''}<meta name="twitter:card" content="summary" />${schemaScript(pageSchema(page))}</head>`)
    .replace('<div id="root"></div>', fallback);
};
await writeFile('build/index.html', renderShell(pages[0]));
for (const page of pages.slice(1)) {
  const pageHtml = renderShell(page);
  const outputDir = `build${page.path}`;
  await mkdir(outputDir, { recursive: true });
  await writeFile(`${outputDir}/index.html`, pageHtml);
}
if (base) {
  const entries = pages.map(({ path }) => `  <url><loc>${base}${path}</loc></url>`).join('\n');
  await writeFile('build/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`);
  console.log(`Created sitemap for ${base}`);
} else {
  console.log('VITE_SITE_URL is unset; robots.txt was created. Set the deployed site URL to generate sitemap.xml.');
}
