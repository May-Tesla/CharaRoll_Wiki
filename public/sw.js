const cacheName = self.location.pathname
const pages = [

  "/CharaRoll_Wiki/docs/example/",
  "/CharaRoll_Wiki/docs/example/table-of-contents/with-toc/",
  "/CharaRoll_Wiki/docs/example/table-of-contents/without-toc/",
  "/CharaRoll_Wiki/posts/creating-a-new-theme/",
  "/CharaRoll_Wiki/posts/migrate-from-jekyll/",
  "/CharaRoll_Wiki/docs/example/table-of-contents/",
  "/CharaRoll_Wiki/docs/example/collapsed/",
  "/CharaRoll_Wiki/posts/goisforlovers/",
  "/CharaRoll_Wiki/categories/",
  "/CharaRoll_Wiki/categories/Development/",
  "/CharaRoll_Wiki/tags/development/",
  "/CharaRoll_Wiki/posts/hugoisforlovers/",
  "/CharaRoll_Wiki/tags/go/",
  "/CharaRoll_Wiki/categories/golang/",
  "/CharaRoll_Wiki/tags/golang/",
  "/CharaRoll_Wiki/tags/hugo/",
  "/CharaRoll_Wiki/tags/",
  "/CharaRoll_Wiki/tags/templates/",
  "/CharaRoll_Wiki/tags/themes/",
  "/CharaRoll_Wiki/",
  "/CharaRoll_Wiki/docs/example/collapsed/3rd-level/4th-level/",
  "/CharaRoll_Wiki/docs/example/collapsed/3rd-level/",
  "/CharaRoll_Wiki/docs/example/hidden/",
  "/CharaRoll_Wiki/docs/shortcodes/",
  "/CharaRoll_Wiki/docs/shortcodes/buttons/",
  "/CharaRoll_Wiki/docs/shortcodes/columns/",
  "/CharaRoll_Wiki/docs/shortcodes/details/",
  "/CharaRoll_Wiki/docs/shortcodes/experimental/",
  "/CharaRoll_Wiki/docs/shortcodes/experimental/asciinema/",
  "/CharaRoll_Wiki/docs/shortcodes/experimental/badges/",
  "/CharaRoll_Wiki/docs/shortcodes/experimental/cards/",
  "/CharaRoll_Wiki/docs/shortcodes/experimental/images/",
  "/CharaRoll_Wiki/docs/shortcodes/hints/",
  "/CharaRoll_Wiki/docs/shortcodes/mermaid/",
  "/CharaRoll_Wiki/docs/shortcodes/section/",
  "/CharaRoll_Wiki/docs/shortcodes/section/first-page/",
  "/CharaRoll_Wiki/docs/shortcodes/section/second-page/",
  "/CharaRoll_Wiki/docs/shortcodes/steps/",
  "/CharaRoll_Wiki/docs/shortcodes/tabs/",
  "/CharaRoll_Wiki/posts/",
  "/CharaRoll_Wiki/zh/categories/",
  "/CharaRoll_Wiki/jp/categories/",
  "/CharaRoll_Wiki/zh/",
  "/CharaRoll_Wiki/docs/",
  "/CharaRoll_Wiki/jp/",
  "/CharaRoll_Wiki/docs/shortcodes/katex/",
  "/CharaRoll_Wiki/showcases/",
  "/CharaRoll_Wiki/zh/tags/",
  "/CharaRoll_Wiki/jp/tags/",
  "/CharaRoll_Wiki/book.min.cc2c524ed250aac81b23d1f4af87344917b325208841feca0968fe450f570575.css",
  "/CharaRoll_Wiki/en.search-data.min.67ac687d3d908df873aa3c7bad2c166e8a80238ab77bcd0dba3b4f7a0eae1e01.json",
  "/CharaRoll_Wiki/en.search.min.d9bf6b60cdb011be52c02d3234a34ace8c3346076d66f17e0f5f6df68c62a0f5.js",
  
];

self.addEventListener("install", function (event) {
  self.skipWaiting();

  caches.open(cacheName).then((cache) => {
    return cache.addAll(pages);
  });
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }

  /**
   * @param {Response} response
   * @returns {Promise<Response>}
   */
  function saveToCache(response) {
    if (cacheable(response)) {
      return caches
        .open(cacheName)
        .then((cache) => cache.put(request, response.clone()))
        .then(() => response);
    } else {
      return response;
    }
  }

  /**
   * @param {Error} error
   */
  function serveFromCache(error) {
    return caches.open(cacheName).then((cache) => cache.match(request.url));
  }

  /**
   * @param {Response} response
   * @returns {Boolean}
   */
  function cacheable(response) {
    return response.type === "basic" && response.ok && !response.headers.has("Content-Disposition")
  }

  event.respondWith(fetch(request).then(saveToCache).catch(serveFromCache));
});
