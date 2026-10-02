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
  { path: '/', title: 'Ecommerce Solutions | Web Development & SEO Agency', description: 'A remote web development and SEO partner for ambitious businesses. Build, improve and grow your digital presence with one accountable team.' },
  { path: '/services', title: 'Web Development Services | Ecommerce Solutions', description: 'Explore custom web development, e-commerce, integrations, automation, maintenance and digital growth services.' },
  { path: '/technologies', title: 'Technology Expertise | React, Node, Python & Shopify', description: 'Explore our practical experience across React, Next.js, Node.js, Python, MERN, Angular, Shopify and WordPress.' },
  { path: '/work', title: 'Selected Work | Ecommerce Solutions', description: 'Explore selected e-commerce and content platform work, including DMF Luxury and World of Reading.' },
  { path: '/pricing', title: 'Project Pricing Catalogue | Ecommerce Solutions', description: 'Compare scope options for websites, applications, e-commerce, SEO, automation and ongoing engineering support.' },
  { path: '/about', title: 'About | Ecommerce Solutions', description: 'Meet a small senior-led engineering team for web development, e-commerce, connected systems and SEO.' },
  { path: '/seo', title: 'SEO, AEO & GEO Services | Ecommerce Solutions', description: 'Technical SEO, answer engine readiness and clear structured content to help people and search systems understand your website.' },
  { path: '/contact', title: 'Contact | Start a Project with Ecommerce Solutions', description: 'Tell us about your website, e-commerce or SEO project. Contact Ecommerce Solutions to discuss a practical next step.' },
  { path: '/faq', title: 'FAQ | Working with Ecommerce Solutions', description: 'Answers about existing websites, international projects, codebase takeovers, ongoing support, technology expertise and project planning.' },
  { path: '/work/dmf-luxury', title: 'DMF Luxury Case Study | Ecommerce Solutions', description: 'Project overview, challenge, delivery approach, technology and verified scope for the DMF Luxury commerce experience.' },
  { path: '/work/world-of-reading', title: 'World of Reading Case Study | Ecommerce Solutions', description: 'Project overview, challenge, delivery approach, technology and verified scope for the World of Reading commerce experience.' },
];
const faqItems = [
  ['Can you work with our existing website?', 'Yes. We can review your current website, store or application and recommend improvements that build on what is already working. The right approach depends on its platform, condition and your goals.'],
  ['Do you work with international clients?', 'Yes. We work remotely with clients across time zones. Communication channels, working hours and review checkpoints are agreed during project planning.'],
  ['Can you take over an existing codebase?', 'Yes. We begin with a technical review and handover discussion, then document risks, priorities and a practical plan before proposing implementation work.'],
  ['Do you provide ongoing support?', 'Yes. Ongoing development, technical support and maintenance can be arranged around agreed priorities, capacity and response expectations.'],
  ['What technologies do you work with?', 'Our experience includes React, Next.js, Angular, Node.js, Express, Python, MERN, Shopify, WordPress, Sanity, PostgreSQL, GraphQL and technical SEO. We recommend a stack based on the project.'],
  ['How does a project start?', 'We start with a conversation about your goals, customers, existing systems and constraints. After that, we define scope, recommend an approach and share a proposal with milestones before work begins.'],
  ['Which engagement models are available?', 'We offer complete projects, dedicated developer capacity, ongoing development and technical support or maintenance. Availability and terms are confirmed for each engagement.'],
  ['How do you handle project pricing?', 'Pricing depends on scope, integrations, content and delivery timelines. We share a clear estimate and explain assumptions before asking you to commit.'],
];
await mkdir('build', { recursive: true });
const robots = ['User-agent: *', 'Allow: /', ...(base ? [`Sitemap: ${base}/sitemap.xml`] : [])].join('\n') + '\n';
await writeFile('build/robots.txt', robots);
const rootHtml = await readFile('build/index.html', 'utf8');
const org = { '@type': 'Organization', name: 'Ecommerce Solutions', email: 'simrankhanna0798@gmail.com', description: 'A senior-led digital engineering partner for web development, e-commerce, connected systems and search.', areaServed: 'Worldwide', knowsAbout: ['Web development', 'React', 'Next.js', 'Angular', 'Node.js', 'Express', 'Python', 'Shopify', 'WordPress', 'Azure IoT', 'Search engine optimization', 'E-commerce'] };
if (base) { org.url = base; org.logo = `${base}/favicon.svg`; }
const graph = [org, ...(base ? [{ '@type': 'WebSite', name: 'Ecommerce Solutions', url: base }] : [])];
const schemaScript = (items) => `<script id="agency-structured-data" type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': items })}</script>`;
const homeHtml = rootHtml.replace('</head>', `${base ? `<link rel="canonical" href="${base}/" /><meta property="og:url" content="${base}/" />` : ''}${schemaScript(graph)}</head>`);
await writeFile('build/index.html', homeHtml);
for (const page of pages.slice(1)) {
  const pageGraph = page.path === '/faq' ? [...graph, { '@type': 'FAQPage', mainEntity: faqItems.map(([question,answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }] : page.path === '/seo' ? [...graph, { '@type': 'Service', name: 'SEO, AEO and GEO services', serviceType: ['Technical SEO', 'Answer engine readiness', 'Generative search clarity'], provider: { '@type': 'Organization', name: 'Ecommerce Solutions' }, areaServed: 'Worldwide' }] : page.path.startsWith('/work/') ? [...graph, { '@type': 'Article', headline: page.title, description: page.description, author: { '@type': 'Organization', name: 'Ecommerce Solutions' }, publisher: { '@type': 'Organization', name: 'Ecommerce Solutions' }, mainEntityOfPage: base ? `${base}${page.path}` : page.path }] : graph;
  const pageHtml = rootHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${page.description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?\s*>/, `<meta property="og:title" content="${page.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?\s*>/, `<meta property="og:description" content="${page.description}" />`)
    .replace('</head>', `${base ? `<link rel="canonical" href="${base}${page.path}" /><meta property="og:url" content="${base}${page.path}" />` : ''}${schemaScript(pageGraph)}</head>`);
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
