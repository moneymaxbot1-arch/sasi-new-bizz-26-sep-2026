import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🚀 Running Vite build...');
execSync('npx vite build', { stdio: 'inherit', cwd: rootDir });

const distDir = path.join(rootDir, 'dist');
const docsDir = path.join(rootDir, 'docs');
const assetsDir = path.join(rootDir, 'assets');
const distAssetsDir = path.join(distDir, 'assets');

// 1. Ensure CNAME exists in public, dist, and docs
const cnamePath = path.join(rootDir, 'public', 'CNAME');
fs.writeFileSync(cnamePath, 'bizz2u.com\n');
fs.writeFileSync(path.join(distDir, 'CNAME'), 'bizz2u.com\n');

// 2. Refresh docs directory cleanly
console.log('📦 Syncing dist to docs...');
if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
}
fs.cpSync(distDir, docsDir, { recursive: true });

// 3. Refresh assets directory cleanly
console.log('📦 Syncing assets...');
if (fs.existsSync(assetsDir)) {
  fs.rmSync(assetsDir, { recursive: true, force: true });
}
fs.mkdirSync(assetsDir, { recursive: true });

if (fs.existsSync(distAssetsDir)) {
  const files = fs.readdirSync(distAssetsDir);
  for (const file of files) {
    fs.copyFileSync(path.join(distAssetsDir, file), path.join(assetsDir, file));
  }

  // Find primary JS and CSS files
  const jsFiles = files.filter(f => f.endsWith('.js') && !f.includes('bundle'));
  const cssFiles = files.filter(f => f.endsWith('.css') && !f.includes('bundle'));

  if (jsFiles.length > 0) {
    const mainJs = jsFiles[0];
    fs.copyFileSync(path.join(distAssetsDir, mainJs), path.join(assetsDir, 'bundle.js'));
    fs.copyFileSync(path.join(distAssetsDir, mainJs), path.join(docsDir, 'assets', 'bundle.js'));
    console.log(`✅ bundle.js generated from ${mainJs}`);
  }

  if (cssFiles.length > 0) {
    const mainCss = cssFiles[0];
    fs.copyFileSync(path.join(distAssetsDir, mainCss), path.join(assetsDir, 'bundle.css'));
    fs.copyFileSync(path.join(distAssetsDir, mainCss), path.join(docsDir, 'assets', 'bundle.css'));
    console.log(`✅ bundle.css generated from ${mainCss}`);
  }
}

console.log('✨ Build & post-process complete! All deployment targets (dist, docs, assets) are updated.');
