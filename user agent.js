function detectBrowser(userAgent) {
    if (userAgent.includes('Chrome')){return "Google Chrome"}
        else if (userAgent.includes('Firefox')){return "Mozilla Firefox"}
        else {return "Internet Explorer"}
    }