self.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open('pwa-cache').then((cache)=>{
            return caches.addAll([
                './',
                './index.html',
                './CSS/bookCreatorStyle.css',
                './CSS/style.css',
                './HTML/bookCreator.html',
                './JS/createFeats.js',
                './JS/createModifiers.js',
                './JS/createSpecies.js',
                './JS/createBackground.js'
            ]);
        })
    );
});

self.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((response)=>{
            return response || fetch(event.request);
        })
    )
});