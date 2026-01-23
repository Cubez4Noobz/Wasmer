const allowedReferrer = "wasmer-cubez4noobz.wasmer.app/index.html";
    
    // Check if the referrer does NOT start with your allowed website URL
    if (!document.referrer.startsWith(allowedReferrer)) {
        // "Kick out" the user by redirecting them elsewhere
        window.location.replace("https://google.com");
    }