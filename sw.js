// 給這個倉庫取個名字
const cacheName = 'yuki-pwa-v1';

// 當管家被安裝時，可以先叫他存一些基本檔案（也可以先留空）
self.addEventListener('install', (e) => {
  console.log('隱形管家：已經安裝完畢！');
});

// 當妳在滑網頁時，管家會幫妳抓取內容
self.addEventListener('fetch', (e) => {
  // 這裡可以寫怎麼抓快取，目前先讓它正常通過就好
});
