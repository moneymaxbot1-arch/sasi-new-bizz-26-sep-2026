import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const distDir = path.join(rootDir, 'dist');
const docsDir = path.join(rootDir, 'docs');
const assetsDir = path.join(rootDir, 'assets');
const distAssetsDir = path.join(distDir, 'assets');

// Clean previous build outputs
console.log('🧹 Cleaning previous build outputs...');
if (fs.existsSync(distDir)) fs.rmSync(distDir, { recursive: true, force: true });
if (fs.existsSync(docsDir)) fs.rmSync(docsDir, { recursive: true, force: true });
if (fs.existsSync(assetsDir)) fs.rmSync(assetsDir, { recursive: true, force: true });

console.log('🚀 Running Vite build...');
execSync('npx vite build --emptyOutDir', { stdio: 'inherit', cwd: rootDir });

// 1. Ensure CNAME and .htaccess exist in public, dist, and docs
const cnamePath = path.join(rootDir, 'public', 'CNAME');
fs.writeFileSync(cnamePath, 'bizz2u.com\n');
fs.writeFileSync(path.join(distDir, 'CNAME'), 'bizz2u.com\n');

const htaccessContent = `<IfModule mod_mime.c>
  AddType application/javascript .js .mjs
  AddType text/css .css
  AddType image/svg+xml .svg
  AddType application/json .json
  AddType font/woff .woff
  AddType font/woff2 .woff2
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`;
fs.writeFileSync(path.join(rootDir, '.htaccess'), htaccessContent);
fs.writeFileSync(path.join(rootDir, 'public', '.htaccess'), htaccessContent);
fs.writeFileSync(path.join(distDir, '.htaccess'), htaccessContent);

// 2. Generate canonical bundle.js and bundle.css inside dist/assets
if (fs.existsSync(distAssetsDir)) {
  const files = fs.readdirSync(distAssetsDir);
  const jsFiles = files.filter(f => f.endsWith('.js') && !f.includes('bundle'));
  const cssFiles = files.filter(f => f.endsWith('.css') && !f.includes('bundle'));

  if (jsFiles.length > 0) {
    const mainJs = jsFiles[0];
    fs.copyFileSync(path.join(distAssetsDir, mainJs), path.join(distAssetsDir, 'bundle.js'));
    console.log(`✅ bundle.js generated from ${mainJs}`);
  }

  if (cssFiles.length > 0) {
    const mainCss = cssFiles[0];
    fs.copyFileSync(path.join(distAssetsDir, mainCss), path.join(distAssetsDir, 'bundle.css'));
    console.log(`✅ bundle.css generated from ${mainCss}`);
  }
}

// 3. Sync pristine dist to docs
console.log('📦 Syncing dist to docs...');
fs.cpSync(distDir, docsDir, { recursive: true });

// 4. Sync dist/assets to assets
console.log('📦 Syncing assets...');
fs.cpSync(distAssetsDir, assetsDir, { recursive: true });

console.log('✨ Build & post-process complete! All deployment targets (dist, docs, assets) are updated cleanly.');
