(() => {
    const FUNC_DESC_MORE_BTN = document.querySelector('.func_desc_more_btn');
    const FUNC_DESC_MORE = document.querySelector('.func_desc_more');
    const FUNC_DESC_CUT_BTN = document.querySelector('.func_desc_cut_btn');
    const MORE_BTN_LIST = document.querySelectorAll('.more_btn');
    const REDUCE_BTN_LIST = document.querySelectorAll('.reduce_btn');
    const PROJECT_LIST = document.querySelectorAll('.project');
    const PROJECT_CONTENT_LIST = document.querySelectorAll('.project_content');

    function init() {
        let projectList = [];
        PROJECT_CONTENT_LIST.forEach((content) => {
            projectList.push(content.id);
        });

        FUNC_DESC_MORE_BTN.addEventListener('click', () => {
            FUNC_DESC_MORE.style.display = 'block';
            FUNC_DESC_MORE_BTN.style.display = 'none';
        });

        FUNC_DESC_CUT_BTN.addEventListener('click', () => {
            FUNC_DESC_MORE_BTN.style.display = 'block';
            FUNC_DESC_MORE.style.display = 'none';
        });

        MORE_BTN_LIST.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                PROJECT_LIST[event.target.id].style.height = `${PROJECT_CONTENT_LIST[event.target.id].offsetHeight}px`;
                //접기 버튼 보이기
                REDUCE_BTN_LIST[event.target.id].style.display = 'flex';
                MORE_BTN_LIST[event.target.id].style.display = 'none';
            });
        });

        REDUCE_BTN_LIST.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                PROJECT_LIST[event.target.id].style.height = `704px`;
                // 더보기 버튼 보이기
                REDUCE_BTN_LIST[event.target.id].style.display = 'none';
                MORE_BTN_LIST[event.target.id].style.display = 'flex';
            });
        });
    }

    init();
})();
