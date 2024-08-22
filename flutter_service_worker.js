'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "166ea6f40b0998f673b79a8647ed567b",
"version.json": "0fdec62a50d3415ad47345fb5926d309",
"index.html": "91929a7351930e7c53e149708daf92aa",
"/": "91929a7351930e7c53e149708daf92aa",
"main.dart.js": "cdf7b0229b1211507aa95a2d321b4e87",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4b20fe75179100de58cba989c9a2d547",
".git/config": "7ff143e38f9225bc21225170f80620e9",
".git/objects/61/776bebb30d0d517b0d952c2f66a7ba511466e9": "77c258024fe4528f82fc0da13737e20b",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/9e/dc00d5541986826865040feb5a021c62aab2f4": "105f9d4e2f64e07dde12ad487f4df3b9",
".git/objects/51/7ee1d7afa3b58a385278acae91fce5ebcd9871": "85ad483a3c23f93eea37eabd4a7c3472",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/623b4e9eb09085653f29dbf299d9319bc2ea07": "1b2e45bb1a0cdc8597a4ba49bb6dec71",
".git/objects/34/a65280a3494af836ab6e1a101d9590795443e5": "c68c27322b031d032d54f903de98ac97",
".git/objects/ad/48796d70fb947ce1f59f61ea1293c0e34c981b": "e33b2b4d563113fbba2b5c9f089c7fdb",
".git/objects/b3/b274970c8bcf36ec3cd6b589caf9b47c4e74db": "7eb5044ee057c49fbd8c4c10b77e7646",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/2784627d33b966047869ac1d0b74454cf204f7": "314fecc4bd2b811c31d779392b15fc9b",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/4c610f92ccb51b4a05a7bc6620410bbdabcd1e": "5ac76d65e48748e0fb546cab33dae326",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/179d661c4f41dcc65b71cf7ae84bd0efb370f6": "ef6e27282c50c5f066d6cab7789d8151",
".git/objects/d6/632fc70852ad99f5ec8fa15ad663419f8b7553": "8125a9657a999807bac9e03e19f1d489",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/8a5c842d7507eda5cd92c9eda75532b36baa0a": "b43cd15df25e6a0ced1694d6508333e4",
".git/objects/e2/632d4ea7e06bf502a3857dca36ee033a0ad8b3": "e5629299f0dec953f1bdd35089dd84ee",
".git/objects/e2/cfb26e06f1bdf91e3bf5f9b5cc22995e31516f": "a79feb80e48448b840020b02a4a64361",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/449d1e979a9e16408ded76233ebb30439d93cf": "4f90f9f8c842fea44c70690773149b97",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/f5/3a84fa0b6711136a12abede106c66ad64761b9": "524ce4d8152efbe82d017f28423a59c5",
".git/objects/e4/4c7867b42ba0a762cca0c1c09c5195a71a8ce1": "9bc92f4526d2ad6e026549d2ebcbad9d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/17/89d36e4ac80486f889c31a9318ffa560d60c74": "db7aed1ca0fa575720a985268ca7db39",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ba8d8fb3f0cbf3358687129246b918ffcc2e1f": "68d0a597c7fda1b0faddd3e745f81876",
".git/objects/7e/f0cb60a520a3b77d56ed23327c08d5d801bea1": "deb62cfeacbcd587648b63dafa79729d",
".git/objects/21/dac1ff8c96f26728c3177f9bc7d37edb948bf7": "079a2e1cbfb7b69e661a2643032c2124",
".git/objects/75/443ad87f4ea01ffa93c21b07dbeafc29eb23a6": "24f5ae31bd18e7fe2d65d347ffac5ce5",
".git/objects/72/d18b167e71e30d51b9669582a2567779f068b2": "c5e496557c14f0d17f7c6668d8d7cc3c",
".git/objects/43/19d8baf581cd625b1885f165f2f1e515db9ec5": "9bfbea0d2fef8abb033db540c4c47ae4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/2c35fdb7273d57c49431e196b293b16b0e15c4": "c6cafe34334e7fb93761952ae9c31023",
".git/objects/5c/ced65a24cb5b6b64e451f8fbab0189f1b219f0": "bb6037dabb5b298481ad6deb3b56b199",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/b3b8a727fe1c75bcd99587a1b76fa2a9559f19": "1e0b2fb005ed102651083f4c6dcf34f1",
".git/objects/91/72f248d0da5488c9063bd3b1f932a1b407fc76": "690c31dd5719c9dfb4e449493854cc86",
".git/objects/65/64ccc18e772748dea24be3f0b8706469ac1ca0": "362dac1ee22358a40a94882040ae75ce",
".git/objects/53/f019ccb53d314134130e5959ea8af7f8508a56": "3036dee4a9973e7ea7dfc7c74e597c1c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/55/b517a4ae25f22186609d2a64e800316efde572": "135baa66279edd28931e7c373e7c922b",
".git/objects/d3/5f6346c6333667dc24c3972cd384d1ea5724f6": "d8b8b76dffb3f3db09de5d194382055c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4682dda648f37cea2659ac6a7bdc37e8698f17": "ce4d629e672d5fbeddbf9eff6961a4d7",
".git/objects/d5/9aeccbbc976a21a1c48fa36c986bce83fd8dce": "1dcea33cb5a38e0227964c76014b378a",
".git/objects/aa/ba1229a1706c73fa06e8039d91a25c41b32b19": "89677afebd49788264cee2c4957cd6a2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/efaa5cc3954dbc8db354de9e2b565bd5cd1210": "0d661b42ac754bb6e11fd1214a7f9276",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/1b24242ceb87089b966ce589f701c1df1db477": "a63b0150075df8b963dbb96a5b296410",
".git/objects/e7/46b42712a02877d9da642fb5d6482e8942014d": "ff00c640a9a11e4bdf94e0aa48b054b7",
".git/objects/cb/baff4d2fd3e7d236bb6ac154c83e3e68ddf22b": "fb09d88f9070e746e0ff27315630cfdf",
".git/objects/cb/572637c4bfedf124ad8b52983ee7c61dd15a20": "c03f3b227ef80fc32232b2caaca2f08b",
".git/objects/f8/68b3271e95e46f7f9ae30ba473fb957ceb3006": "42f032a29109b33c6f13c4311cd68f69",
".git/objects/46/e20f8b277bef5aa3e05a4c83d8edf43a609b77": "66f64c00d61a6fd7ac6af0822ce77dbf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/e0adcae5d7f0695acf17873c0196a6b36e81e4": "3a5b6f0ed5fabff8e7046dfea1b74d90",
".git/objects/2c/617b59200ad8e782a5855ec0ecbd16c23de9ba": "050841d1baec6b964fb5af854db8c358",
".git/objects/79/e9beccfd5bbca8dfd5de49c34ef15fb367336e": "a176a145fbab010c85dc39f25ca3bf79",
".git/objects/79/1f61807a7783427937e66adf28b9765f1fe3fa": "a9ea34d36370e9b872a6522a2f3e90ad",
".git/objects/79/363fa8deedd9b90c052bffecac676310134001": "48be3798f4e95475f2a15b71cbc06818",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/77/a4706048e89a8e558497c7034e23ff247b9bbd": "1b59bb77e47076fdc24bae237b5ba87a",
".git/objects/1e/7efd03ddbc22d5d49c3cce0199853a4e337811": "503a46475278af05291a05c12fe9b984",
".git/objects/4f/7c1c0389011cd8179f730196ea810264d6c19c": "1c7d4e516b139df464161e95dbca398c",
".git/objects/8d/1e46821d40533b11b693ebb0ec57f2b2d10544": "f182c89e9a858f73c51c0c1dcf4f5d3c",
".git/objects/8c/c44bcaf764b11f992ce87a1d5c100a7337bd38": "20b87192be47523573cc12056e0169b4",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/d9bfa3da75052e8addf70a76c6794ecce67c6c": "1237466c1ddc6c3f14e12600475e9efc",
".git/objects/2e/ac1e37e4d05d716f48be891f2b44f243ebd380": "c7afd6168c57e048d9f528e821e18cc6",
".git/objects/7f/08a2b890fea463543c07b76ef98eadad283fa7": "e7c15a8c6d8ed372d23fd2d3b1904490",
".git/objects/8e/baf02c5bffd1c6d0025d4fe2edce86ef487c1e": "c1d3b41da0c3fa6b95ea2e9b7b603199",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b6d227270e8dec1e4b3437885843c9ac",
".git/logs/refs/heads/main": "94f97bc4417c999ae1969740612896d6",
".git/logs/refs/remotes/origin/main": "62d4c524bb0711a560667ff81377927d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "221d9982cb0826f0694e0f98833a4039",
".git/refs/remotes/origin/main": "221d9982cb0826f0694e0f98833a4039",
".git/index": "8a6fa682e94fac89996b19a5b6159589",
".git/COMMIT_EDITMSG": "d7aae7bec03bb81689be701508460524",
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
