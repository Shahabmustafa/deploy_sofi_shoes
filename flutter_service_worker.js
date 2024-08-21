'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b4c44d172901789b66e044e325877acf",
"version.json": "0fdec62a50d3415ad47345fb5926d309",
"index.html": "b62c5903ac4bc3d5c2997384d7280870",
"/": "b62c5903ac4bc3d5c2997384d7280870",
"main.dart.js": "df6ad6878e4362520a8e32dfdc148fb6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4b20fe75179100de58cba989c9a2d547",
"assets/AssetManifest.json": "686fac4a7c1d1e05e51ba41b426ea1c3",
"assets/NOTICES": "5a26882a0c2fc409caaa88af63edfb51",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4c4067c8084e0bf16bedb22a85b0ae93",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b20b1a95af6f34830b18a2d8589808d7",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "71d03ae23ab22c3bcbc492848f839eef",
"assets/fonts/MaterialIcons-Regular.otf": "45d1001360239c69669440ad3ea83fd1",
"assets/assets/images/target.svg": "83ecf1138bdc72b56ad01f61ef190990",
"assets/assets/images/icon_stock_position.svg": "b1d3c7718a7b4f6474fd660635548c71",
"assets/assets/images/user.svg": "0b7cc0ec74ea81ca9134bf5aaa2e1b90",
"assets/assets/images/sale.png": "b6638c74649a316de62be3db545243fc",
"assets/assets/images/total_product.png": "8061ecabcfb5e692f67e5fab0ef21105",
"assets/assets/images/purchase_invoice.png": "03937b04f5120c812f2152737936ba89",
"assets/assets/images/sale_invice.png": "47b8e4a36310168972aecc3a84f3feaa",
"assets/assets/images/today_sale.png": "c8a48401a67b27e1e04126b6cafbad62",
"assets/assets/images/purchase.svg": "42056e5f295f8a7655b1aff9cbff6c2e",
"assets/assets/images/sale_invoice.svg": "14f77fe965e477585b9323f5a93f8c43",
"assets/assets/images/icon_discount.svg": "439ed2ca7a338fca05b7b9cf43c93c22",
"assets/assets/images/person.png": "288ba4757aefa21aee328f57ab799fc3",
"assets/assets/images/dashboard.svg": "5f5402b6f9f4f4c4dd93d28c23e52b9c",
"assets/assets/images/target.png": "386abb15b15ad6b24c2bcc8b29c522d9",
"assets/assets/images/icon_voucher.svg": "3a692648b148cc4cee84ba2a0edcb3e7",
"assets/assets/images/total_warhouse.png": "a49d744b32abb2c3ed828e5d071c6089",
"assets/assets/images/copy.svg": "f9ebf13c77fc5ebf50bb02a19db48b50",
"assets/assets/images/shop_logo.png": "7844ff4ef7eec00002a83d354a68db0c",
"assets/assets/images/salemen.png": "577b154347894ba7b019f0bee3fab8ba",
"assets/assets/images/barcode_icon.svg": "2514e371ee49b661dcc5f439a2045639",
"assets/assets/images/icon_claim.svg": "311a29fa6a4c598ed1f62b4d78837bb2",
"assets/assets/images/safi.png": "9a2a12b93dde9ac57acba0a3c49554b3",
"assets/assets/images/salaries.svg": "7751b82e1ec1be3f476a9dcde6c69535",
"assets/assets/images/claims.png": "1fbceba686a13dca1009007d19536edc",
"assets/assets/images/icon_expense.svg": "fb9f5140b21d0660c26dcc3ad37a3af5",
"assets/assets/images/bank.svg": "f2196129e09d5ec7bee8fee2ffad2678",
"assets/assets/images/products.svg": "338a4cd57fa8b9ee94917a5ae4ce57b8",
"assets/assets/images/icon_report.svg": "e4b225a12af14dd7ccb464f8a94d4cd0",
"assets/assets/images/branches.png": "e556ec034971819d1b166a818d1f41df",
"assets/assets/images/salemen.svg": "c123ebaf8741bc3f99d973d293efbd02",
"assets/assets/images/barcode.png": "bc57d124879acc8ee799b593d655f414",
"assets/assets/images/company.svg": "5a39756cc8e792b355a10fa84671cefd",
"assets/assets/images/assign.svg": "35c669ff0ce0d3c6d17560988be7c1e6",
"assets/assets/images/customer.svg": "d77d474b451b56ead2579eca485b7336",
"assets/assets/invoice.json": "d5be9b7552ef6a606c3992e86c200873",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
