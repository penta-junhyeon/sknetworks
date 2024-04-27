var frontCommon = frontCommon || {};
frontCommon.Html = (function () {
  var instance = null;
  function init() {
    instance = {
      reset: function () {
        frontCommonResize();
        frontCommonScroll();
        header();
      },
    };
    return instance;
  }
  if (instance) {
    return instance;
  } else {
    return init();
  }
})();

function frontCommonResize() {
  window.addEventListener("resize", () => {

  });
}

function frontCommonScroll() {
  window.addEventListener("scroll", () => {

  });
}

function header() {

  const _header = document.getElementById("header")
  const depth1Item = _header.querySelectorAll(".depth1-item")

  if (_header) {
    // depth2가 8개 이상일 때 고유 스타일 추가
    depth1Item.forEach(depth1Item => {
      const depth2List = depth1Item.querySelector(".depth2-list")
      const depth2Length = depth2List.querySelectorAll(".depth2-item").length
      if (depth2Length > 7) {
        depth2List.style.maxWidth = "73.6rem"
        depth2List.style.flexWrap = "wrap"
      }
    });

    // 언어 셀렉트버튼 기능
    const lang = document.getElementById("lang")
    const selected = lang.querySelector(".selected")
    const optionArea = lang.querySelector(".option-area")

    selected.addEventListener("click", function () {
      optionArea.classList.contains("active") ? optionArea.classList.remove("active") : optionArea.classList.add("active")
    })
  }
}

function select() {
  const select = document.querySelectorAll(".field.select")

  select.forEach(select => {
    const selected = select.querySelector(".selected")
    const optionArea = select.querySelector(".option-area")
    const optionList = optionArea.querySelectorAll(".option-list")

    selected.addEventListener("click", function () {
      optionArea.classList.contains("active") ? optionArea.classList.remove("active") : optionArea.classList.add("active")
    })
  });
}