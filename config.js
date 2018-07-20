/* eslint-disable quotes */
(function() {
    zuix.store("config", {
        "title": "HomeGenie",
        "googleSiteId": "UA-123-456",
        "resourcePath": "app/",
        "libraryPath": " http://192.168.2.104:8081/lib/",
        "genielabs.github.io": {
                "resourcePath": "/HomeGenie/app/",
                "libraryPath": "https://genielabs.github.io/zkit/lib/"
        }
});

    // Check that service workers are registered
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/HomeGenie/service-worker.js');
        });
    }
})();
