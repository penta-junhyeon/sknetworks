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
  const depth1All = document.querySelectorAll('.depth1')
  const depth2WrapAll = document.querySelectorAll(".depth2-wrap")

  if (_header) {
    window.addEventListener("resize", () => {
        const _width = window.innerWidth
        if(_width >= 1024) {
            _header.classList.remove("open")
            _header.removeAttribute("style")

            for (const item of depth1All) {
                item.classList.remove("active")
            }
            for (const item of depth2WrapAll) {
                item.removeAttribute("style")
            }
        }
    })


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
    
    // 

    _header.addEventListener("mouseenter", () => {
        if(_header.classList.contains("dark")) {
            _header.classList.add("hover")
        }
    }) 
    _header.addEventListener("mouseleave", () => {
        if(_header.classList.contains("dark")) {
            _header.classList.remove("hover")
        }
    })

    document.addEventListener("focusin", function(e) {
        const _target = e.target
        if(_target.closest(".dark")) {
            _header.classList.add("hover")
        } else {
            _header.classList.remove("hover")
        }
    })

    // MO > 메뉴 열기/닫기
    const navi = _header.querySelector(".site-navi")
    const util = _header.querySelector(".site-util")
    const menuHeader = _header.querySelector(".btn.menu-header")
    const menuHeadertxt = menuHeader.querySelector(".btn-text")
    
    let i = 1;
    for (const item of depth1Item) {
        item.style.animationDelay = (0.15 * i) + "s";
        i++;
    }

    menuHeader.addEventListener("click", function() {
        if(_header.classList.contains("open")) {
            menuHeadertxt.innerHTML = "메뉴 열기"
            _header.style.height = "5.8rem"
            setTimeout(() => {
                _header.classList.remove("open")
                for (const item of depth1All) {
                    item.classList.remove("active")
                }
                for (const item of depth2WrapAll) {
                    item.style.height = "0"
                }
            }, 300);
        } else {
            menuHeadertxt.innerHTML = "메뉴 닫기"
            navi.style.display = "block"
            util.style.display = "flex"
            _header.style.height = "100%"
            setTimeout(() => {
                _header.classList.add("open")
            }, 300);
        }
    })

    // MO > depth1 드롭다운 열림/닫힘 기능
    document.addEventListener("click", function (e) {
      const depth1 = e.target
      if (depth1.classList.contains("depth1")) {
        const depth1Item = depth1.closest(".depth1-item")
        const depth2Wrap = depth1Item.querySelector(".depth2-wrap")
        const depth2ListH = depth2Wrap.querySelector(".depth2-list").offsetHeight
        const _width = window.innerWidth
        if (_width < 1024) {
          if (depth1.classList.contains("active")) {
            depth1.classList.remove("active")
            depth2Wrap.style.height = "0"
          } else {
            depth1All.forEach(all => {
              all.classList.remove("active")
            });
            depth2WrapAll.forEach(all => {
              all.style.height = "0"
            })
            depth1.classList.add("active")
            depth2Wrap.style.height = depth2ListH + "px"
          }
        }
      }
    })
  }
}

function input() {
    const form = document.querySelectorAll(".form")

    form.forEach(input => {
        if(input.classList.contains("input") || input.classList.contains("search")) {
            const inputRemove = input.querySelector(".remove")
            if(inputRemove) {
                input.addEventListener("keyup", () => {
                    const inputValue = input.querySelector(".input-elem").value;
                    inputValue ? inputRemove.style.display = "block" : inputRemove.style.display = "none";
                })
                inputRemove.addEventListener("click", () => {
                    let inputElem = input.querySelector(".input-elem");
                    inputElem.value = null;
                    inputRemove.style.display = "none";
                })
            }
            input.classList.contains("disabled") ? input.querySelector(".input-elem").setAttribute("disabled", "") : ""
        }
    });
}

function select() {
  const select = document.querySelectorAll(".form.select")

  select.forEach(select => {
    const selected = select.querySelector(".selected")
    const optionArea = select.querySelector(".option-area")

    selected.addEventListener("click", function () {
      optionArea.classList.contains("active") ? optionArea.classList.remove("active") : optionArea.classList.add("active")
    })
  });
}

function swiperDesign1() {
    var sync1 = new Swiper(".sync1", {
        slidesPerView: 1,
        loopAdditionalSlides: 1,
        effect: "fade",
        loop: true,
        controller: {
            control: sync2
        }
    });
    var sync2 = new Swiper(".sync2", {
        slidesPerView: 1,
        loopAdditionalSlides: 1,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        controller: {
            control: sync1
        }
    });

    sync1.controller.control = sync2;
    sync2.controller.control = sync1;
}
