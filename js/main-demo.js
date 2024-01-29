
$(window).on('load', function () {
    $('html').data('animation', getRand(0, 30))
});


// Get Rand 
function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}