// on load of window init will be called.
window.addEventListener('load', init);

function init() {
    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(function (entry) {
            if (entry.isIntersecting === true) {
                console.log('Element is fully visible in screen');
                entry.target.classList.remove('hidden-class');
                entry.target.classList.add('visible-class');
            } else {
                console.log('element is hidden!!');
                entry.target.classList.remove('visible-class');
                entry.target.classList.add('hidden-class');
            }
        })
    });
    let items = document.querySelectorAll('.animate');
    items.forEach(function (item) {
        observer.observe(item);
    })
}