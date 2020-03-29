if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(`${window.location.pathname}sw.js`)
    .then(reg =>
      console.log('service worker registered', reg, 'SW scope: ', reg.scope)
    )
    .catch(err => console.log('service worker not registered', err));
}
