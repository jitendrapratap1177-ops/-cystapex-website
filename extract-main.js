import fs from 'fs';
import path from 'path';

const pages = ['Home', 'Services', 'About', 'Results', 'Contact'];

for (const page of pages) {
  const filePath = path.join(process.cwd(), 'src', 'pages', `${page}.tsx`);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract only <main>...</main>
  const mainMatch = content.match(/<main[^>]*>[\s\S]*?<\/main>/);
  if (mainMatch) {
    let mainContent = mainMatch[0];
    
    // Quick fix for closing tags inside mainContent
    // Since the original was already processed, we just wrap it
    const jsx = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nexport default function ${page}() {\n  return (\n    <>\n      ${mainContent}\n    </>\n  );\n}\n`;
    fs.writeFileSync(filePath, jsx);
    console.log(`Fixed ${page}.tsx`);
  } else {
    // If no <main> tag, just strip </header> and opening loose divs
    content = content.replace(/<\/header>/, '');
    const jsx = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nexport default function ${page}() {\n  return (\n    <>\n      ${content}\n    </>\n  );\n}\n`;
    fs.writeFileSync(filePath, jsx);
    console.log(`Fixed ${page}.tsx (no main)`);
  }
}
