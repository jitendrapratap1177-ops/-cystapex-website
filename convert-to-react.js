import fs from 'fs';
import path from 'path';

const pages = [
  { file: 'index.html', name: 'Home' },
  { file: 'services.html', name: 'Services' },
  { file: 'about.html', name: 'About' },
  { file: 'results.html', name: 'Results' },
  { file: 'contact.html', name: 'Contact' }
];

async function run() {
  for (const page of pages) {
    const filePath = path.join(process.cwd(), 'site', 'public', page.file);
    if (!fs.existsSync(filePath)) continue;
    
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Attempt to extract exactly what's inside <main>...</main>
    let content = '';
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    
    if (mainMatch) {
      // Use the <main> tag itself so it wraps the content
      content = mainMatch[0];
    } else {
      // Fallback: Between </nav> (or </header>) and <footer
      console.log(`No <main> for ${page.name}, using fallback...`);
      const headEnd = html.indexOf('</header>') > -1 ? html.indexOf('</header>') + 9 : (html.indexOf('</nav>') > -1 ? html.indexOf('</nav>') + 6 : html.indexOf('<body') + 5);
      const footSt = html.indexOf('<footer');
      if (headEnd > 0 && footSt > headEnd) {
        content = html.substring(headEnd, footSt);
        // Sometimes there are stray closing tags right at the headEnd
        content = content.replace(/^[\s]*<\/div>/g, '');
      } else {
        content = html;
      }
    }

    // JSX Replacements
    content = content.replace(/class=/g, 'className=')
      .replace(/for=/g, 'htmlFor=')
      .replace(/stroke-linecap=/g, 'strokeLinecap=')
      .replace(/stroke-width=/g, 'strokeWidth=')
      .replace(/fill-rule=/g, 'fillRule=')
      .replace(/clip-rule=/g, 'clipRule=')
      .replace(/preserveAspectRatio=/g, 'preserveAspectRatio=')
      .replace(/<!--(.*?)-->/gs, '{/* $1 */}')
      .replace(/<input([^>]*[^/])>/g, '<input$1 />')
      .replace(/<img([^>]*[^/])>/g, '<img$1 />')
      .replace(/<br([^>]*[^/])>/g, '<br$1 />')
      .replace(/<hr([^>]*[^/])>/g, '<hr$1 />')
      .replace(/rows="([^"]*)"/g, 'rows={$1}'); // Fix rows typing

    // Replace <a> tags with React Router <Link>
    content = content.replace(/<a([^>]+)href="([^"]+)"([^>]*)>/g, '<Link$1to="$2"$3>')
                     .replace(/<\/a>/g, '</Link>');

    // Style tags to object format
    content = content.replace(/style="([^"]+)"/g, (match, p1) => {
        const styles = p1.split(';').filter(s => s.trim()).map(s => {
            const [key, value] = s.split(':').map(str => str.trim());
            if (!key) return '';
            const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${camelKey}: '${value}'`;
        }).join(', ');
        return `style={{${styles}}}`;
    });

    // Remove any React imports if we don't want unused variable complaints.
    // Or just let vite auto-import React in jsx. No need to 'import React'.
    const jsx = `import { Link } from 'react-router-dom';\n\nexport default function ${page.name}() {\n  return (\n    <>\n      ${content}\n    </>\n  );\n}\n`;

    fs.writeFileSync(path.join(process.cwd(), 'src', 'pages', `${page.name}.tsx`), jsx);
    console.log(`Re-generated ${page.name}.tsx`);
  }
}

run();
