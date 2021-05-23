(() => {
    const FUNC_DESC_MORE_BTN = document.querySelector('.func_desc_more_btn');
    const FUNC_DESC_MORE = document.querySelector('.func_desc_more');
    const FUNC_DESC_CUT_BTN = document.querySelector('.func_desc_cut_btn');
    function init() {
        FUNC_DESC_MORE_BTN.addEventListener('click', () => {
            FUNC_DESC_MORE.style.display = 'block';
            FUNC_DESC_MORE_BTN.style.display = 'none';
        });

        FUNC_DESC_CUT_BTN.addEventListener('click', () => {
            FUNC_DESC_MORE_BTN.style.display = 'block';
            FUNC_DESC_MORE.style.display = 'none';
        });
    }

    init();
})();
