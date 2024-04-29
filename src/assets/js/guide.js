
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

// 가이드(pc,mo) - 헤더 메뉴 활성화/비활성화 기능
function asideToggleActive() {
    const layoutGuideList = document.getElementById("guide-list");
    layoutGuideList.classList.toggle("open-aside");
}

function select() {
    const select = document.querySelectorAll(".field.select")
  
    select.forEach(select => {
      const selected = select.querySelector(".selected")
      const optionArea = select.querySelector(".option-area")
  
      selected.addEventListener("click", function () {
        optionArea.classList.contains("active") ? optionArea.classList.remove("active") : optionArea.classList.add("active")
      })
    });
  }