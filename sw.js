const cacheName = 'yuki-pwa-v1';
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png' // 確保這張圖真的在 GitHub 裡
];

// 安裝時：把檔案搬進倉庫
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('隱形管家：正在幫妳搬運檔案進倉庫...');
      return cache.addAll(filesToCache);
    })
  );
});

// 抓取時：如果倉庫有，就拿倉庫的；沒有才去網路上找
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
