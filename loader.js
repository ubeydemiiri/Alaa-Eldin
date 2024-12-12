
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
    });
});


// dark-light
function Dark() {

    let bodyId = document.getElementById('bodyId');
    bodyId.style.backgroundColor = '#170F2F'
    bodyId.style.color = 'White'
    bodyId.style.transition = '0.5s'

}


function White() {
    let bodyId = document.getElementById('bodyId');
    bodyId.style.backgroundColor = 'white'
    bodyId.style.color = 'black'
    bodyId.style.transition = '0.5s'
}


AOS.init();
