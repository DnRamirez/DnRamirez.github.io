// Display loader for 2 seconds
window.onload = function() {
    var loaderWrapper = document.getElementById('loader-wrapper');
    
    setTimeout(function() {
        loaderWrapper.classList.add('show');
    }, 1500);
};
