var guideCommon = guideCommon || {};
guideCommon.Html = (function() {
    var instance = null;
    function init() {
        instance = {
            reset:function() {
                console.log('hi');
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

function guideCommonRisize() {
    window.addEventListener('resize',() => {
        console.log('resize ing')
    });
}

function guideCommonScroll() {
    window.addEventListener('scroll',() => {
        console.log('scroll ing')
    });
}