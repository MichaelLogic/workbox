/* global goog */

importScripts('/packages/sw-lib/build/sw-lib.min.js');
importScripts('/packages/sw-precaching/test/browser-unit/data/skip-and-claim.js');
importScripts('/packages/sw-precaching/test/browser-unit/data/test-data.js');
importScripts('/packages/sw-lib/test/browser-unit/data/test-data.js');

const testSet = self.goog.__TEST_DATA['sw-lib']['revisioned'];
goog.swlib.cacheRevisionedAssets(testSet['set-4']);

goog.swlib.cacheRevisionedAssets(testSet['set-5']);

goog.swlib.cacheRevisionedAssets(testSet['set-6']);

// This allows tests to query the response from the SW.
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request));
});