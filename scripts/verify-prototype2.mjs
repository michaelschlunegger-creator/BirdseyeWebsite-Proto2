import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const prefix = '/BirdseyeWebsite-Proto2';
const pages = JSON.parse(fs.readFileSync('data/site-content.json', 'utf8')).pages;
for (const page of pages) {
  const file = path.join('out', page.route, 'index.html');
  assert.ok(fs.existsSync(file), `Missing route ${page.route}`);
  const html = fs.readFileSync(file, 'utf8');
  assert.ok(!html.includes('href="/BirdseyeWebsite/'), `Prototype 1 link on ${page.route}`);
  for (const match of html.matchAll(/(?:src|poster|href)="([^"#]+)"/g)) {
    const url = match[1].split(/[?#]/)[0];
    if (!url.startsWith(prefix + '/')) continue;
    const target = path.join('out', decodeURIComponent(url.slice(prefix.length)));
    assert.ok(fs.existsSync(target), `Missing local link or asset ${url} on ${page.route}`);
  }
}
const home = fs.readFileSync('out/index.html', 'utf8');
assert.ok(home.includes('Understand your assets.'));
assert.ok(home.includes('Improve your decisions.'));
assert.ok(home.includes('Explore our four solution areas'));
for (const route of [
  '/solutions/indoor-confined-space/',
  '/solutions/outdoor-asset-intelligence/',
  '/solutions/reality-capture-digital-engineering/',
  '/solutions/asset-intelligence-assessment/',
]) assert.ok(home.includes(`href="${prefix}${route}"`), `Missing solution route ${route}`);
for (const file of ['indoor-inspection.mp4', 'indoor-inspection-poster.jpg']) {
  assert.ok(fs.statSync(path.join('out/media', file)).size > 1000, `Missing media ${file}`);
}
const video = fs.readFileSync('out/media/indoor-inspection.mp4');
assert.equal(video.toString('ascii', 4, 8), 'ftyp', 'Video is not an MP4');
console.log(`Verified ${pages.length} routes, local asset references, four solution links and copied video.`);
