var frontCommon = frontCommon || {};
frontCommon.Html = (function() {
    var instance = null;
    function init() {
        instance = {
            reset:function() {
                console.log('resize ing');
                frontCommonRisize();
                frontCommonScroll();
            }
        }
        return instance;
    }
    if(instance){
        return instance;
    } else {
        return init();
    }
})();

function frontCommonRisize() {
    window.addEventListener('resize',() => {
        console.log('resize ing')
    });
}

function frontCommonScroll() {
    window.addEventListener('scroll',() => {
        console.log('scroll ing')
    });
}