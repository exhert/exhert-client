const fs = require('fs');
const path = require('path');

// Base URL of your website
const BASE_URL = 'https://exhert.com';

// Static routes
const routes = [
  {
    path: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    path: '/about-us',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    path: '/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  }
  // Add any other static routes here
];

// Function to generate sitemap XML
function generateSitemap(routes) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${route.path}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${BASE_URL}${route.path}?lang=fr"/>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

// Generate and write sitemap to public directory
const sitemap = generateSitemap(routes);
fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!'); 