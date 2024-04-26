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
    const navi = _header.querySelector('.site-navi')
    const depth1Item = navi.querySelectorAll('.depth1-item')
    const depth2Wrap = navi.querySelectorAll('.depth2-wrap')

    // depth1Item.forEach(depth1Item => {
    //     depth1Item.addEventListener('mouseover', function() {
    //         depth2Wrap.forEach(depth2Wrap => {
    //             depth2Wrap.classList.remove('active')
    //         });
    //         const curDepth2Wrap = this.querySelector('.depth2-wrap')
    //         curDepth2Wrap.classList.add('active')
    //     });
    // });
}