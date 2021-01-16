document.addEventListener('DOMContentLoaded', function()
{
    console.log('DOMContentLoaded');
});

const wait = (tmout) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('ok')
        },tmout)
    })
}

(async function () {
    const ipt = $('#q')
    console.log('start run =>' ,window.location.href)

    // if(ipt.val()==='hello world'){
    if(ipt.val()==='茅台53度飞天'){
        console.log('already, not do')
        return
    }

    ipt.val('茅台53度飞天')
    await wait(500)
    $('#J_SearchForm > button').click()
    console.log('clicked')


    // var counter = new function () {
    //     var _count = 0;
    //     var _hwdn = 0;
    //
    //     function delay(handler, delay) {
    //         if (_hwdn) clearTimeout(_hwdn);
    //         _hwdn = setTimeout(handler, delay);
    //     };
    //
    //     this.add = function (count) {
    //         _count = _count + count;
    //         delay(function () {
    //             _count = 0;
    //         }, 1000);
    //         return _count;
    //     };
    //
    //     $(function () {
    //         $('[type="submit"]').click(function () {
    //             _count = 0;
    //         });
    //     });
    // }
    //
    // function clearBaiduAd() {
    //     return $("#content_left div[data-click] span:contains('广告')")
    //         .parents("#content_left div[data-click]")
    //         .remove()
    //         .length;
    // }
    //
    // $(document).bind("DOMNodeInserted", function (e) {
    //     var length = clearBaiduAd();
    //     var count = counter.add(length);
    //     chrome.runtime.sendMessage(count);
    //     console.log('found '+count)
    // });
})();

