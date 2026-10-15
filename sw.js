/* 中文樂 service worker: works offline after the first visit.
   Bump VERSION whenever you upload a new index.html so tablets pick up the update. */
const VERSION='zhongwenle-v2.0.2';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);
  /* the app page: try the network first (gets updates), fall back to the saved copy when offline */
  if(req.mode==='navigate'||(url.origin===location.origin&&url.pathname.endsWith('.html'))){
    e.respondWith(fetch(req).then(r=>{const c=r.clone();caches.open(VERSION).then(ca=>ca.put('./index.html',c));return r;}).catch(()=>caches.match('./index.html').then(r=>r||caches.match('./'))));return;}
  /* everything else (icons, Google Fonts): saved copy first, refresh in the background */
  e.respondWith(caches.match(req).then(hit=>{const net=fetch(req).then(r=>{if(r&&(r.ok||r.type==='opaque')){const c=r.clone();caches.open(VERSION).then(ca=>ca.put(req,c));}return r;}).catch(()=>hit);return hit||net;}));});
