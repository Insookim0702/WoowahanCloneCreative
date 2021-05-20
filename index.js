(() => {
    const BODY = document.body;
    const BUTTON_1 = document.querySelector('.button_1'); // 위
    const BUTTON_2 = document.querySelector('.button_2'); // 아래
    const BUTTON_3 = document.querySelector('.button_3');
    const FOOTER = document.querySelector('.footer_child');
    const F_CONTENT = document.querySelector('.fcontent');
    function init() {
        F_CONTENT.style.display = 'none';
        BUTTON_3.addEventListener('click', () => {
            if (F_CONTENT.style.display === 'none') {
                F_CONTENT.style.display = 'flex';
            } else {
                F_CONTENT.style.display = 'none';
            }
        });

        BUTTON_1.addEventListener('click', () => {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: BODY.offsetTop,
            });
        });

        BUTTON_2.addEventListener('click', () => {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: FOOTER.offsetTop,
            });
        });
    }

    init();
})();
