
// 가이드(pc,mo) 헤더 - menu 열었을 때 스크롤에 의한 백그라운드 변경
function headerBackChange() {
    const head = document.getElementById("head");
    const aside = document.getElementById("guide-list")

    aside.addEventListener("scroll",() => {
        aside.scrollTop > 0 ?
        head.classList.add('back-white'):
        head.classList.remove('back-white')
    });
}