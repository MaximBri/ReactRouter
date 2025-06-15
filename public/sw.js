const staticCacheName = 'static-site-v1'
const dynamicCacheName = 'dynamic-site-v1'

const ASSETS = ['/', '/index.html']

self.addEventListener('install', async (event) => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(ASSETS)
})

self.addEventListener('activate', async (event) => {
  const cachesKeysArr = await caches.keys()
  console.log('Service Worker has been activated')
  await Promise.all(
    cachesKeysArr
      .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
      .map((key) => caches.delete(key))
  )
})

self.addEventListener('fetch', (event) => {
  console.log('fetch event:', event)
  event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
  const cached = await caches.match(request)
  try {
    return (
      cached ??
      (await fetch(request).then((response) => {
        return networkFirst(request)
      }))
    )
  } catch (e) {
    return networkFirst(request)
  }
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName)
  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (err) {
    const cached = await cache.match(request)
    return cached ?? (await caches.match('/index.html'))
  }
}
