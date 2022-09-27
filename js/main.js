//Checking serviceWorker is supported
if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
        //change the file name here
            .register('./sw_cached_site.js')
            .then(reg => console.log('service worker: Registered'))
            .catch(err => console.log(`service worker:Error:${err}`))
    })
}

window.addEventListener('offline', e => {
    alert("offline")
})

window.addEventListener('online', e => {
    alert("online")
})