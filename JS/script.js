window.onload = () => {
    function hide() {
        let d = document.querySelectorAll('body > div:nth-of-type(2)');
        let di = document.querySelector('.div');
        di.style.display = 'flex'
        d.forEach(e => {
            e.style.display = 'none';
        })
    }
    function show() {
        let d = document.querySelectorAll('body > div:nth-of-type(2)');
        let di = document.querySelector('.div');
        di.style.display = 'none'
        d.forEach(e => {
            e.style.display = 'block';
        })
    }
    let text = document.querySelector('.div h3');

    if (window.innerWidth < 1000) {
        hide();
        text.innerHTML = `
            Your screen resolution is not sufficient to display the website.<br><br>
            • The required screen width is: 1000 px<br>
            • Your screen width is: ${window.innerWidth} px
        `
    } else {
        show()
    }
    window.onresize = () => {
        if (window.innerWidth < 1000) {
            hide();
            text.innerHTML = `
            Your screen resolution is not sufficient to display the website.<br><br>
            • The required screen width is: 1000 px<br>
            • Your screen width is: ${window.innerWidth} px
        `
        } else {
            show()
        }
    }
}