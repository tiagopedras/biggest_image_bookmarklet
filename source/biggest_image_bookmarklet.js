javascript: (function () {

    var imgs = document.body.getElementsByTagName("img"),
        last_winner = "",
        last_winner_pixels = 0;
        
    for (var i in imgs) {
        var el = imgs[i],
            h = el.offsetHeight,
            w = el.offsetWidth,
            pixels = w * h;
        if (pixels > last_winner_pixels) {
            last_winner_pixels = pixels;
            last_winner = imgs[i].src;
        }
    }
    
    window.location = last_winner;

})(); /* by @tiagopedras */