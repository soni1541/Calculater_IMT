document.addEventListener('DOMContentLoaded', function () {
    const height_input = document.getElementById('height');
    const weight_input = document.getElementById('width');
    const output = document.getElementById('output');
    const button = document.getElementById('btn');
    button.addEventListener('click', function () {
        let h = (+height_input.value)/100;
        let w = +weight_input.value;
        let imt = w / (h * h);
        output.value = imt.toFixed(2);
    })

    if('serviceWorker' in navigator)
    {
        navigator.serviceWorker
            .register('sw.js')
            .then(registration => {
                console.log('SW registred', registration)
            })
            .catch(error => {
                console.log('SW failed', error)
            })
    }
})