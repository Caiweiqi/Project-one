window.onload = function (ev) {
    var oUm = 10;
    // var btnNum = $('.btn-num').text().replace(/[^0-9]/ig,"").substr(0,2);
    $(".img-Num").hide();
    $('#btn').on("click",function () {
        if( oUm == 0 ){
            return ;
        }
        oUm --;
        var oNum = $(".btn-num" ).html(function () {
            return "还剩"+ oUm  + "/10次"
        });
        if(oUm == 0){
            $('#btn').css({backgroundColor: 'gray'})
        }
        // var btnNum = $('.btn-num').text().replace(/[^0-9]/ig,"").substr(0,2);
        // if ( btnNum == 0 ){
        //     return 0;
        // }
        // btnNum --;
        var aRandom = Math.floor(Math.random()*4);
        $(".Img-des").children('img').eq(aRandom).attr('src','https://image-c.weimobwmc.com/activity/50cb2484269f47f287f197ae28a592bd.png');
        var imgNum = $(".img-Num").eq(aRandom).html();
            imgNum ++;
            if ( imgNum > 0){
                $(".img-Num").eq(aRandom).show();
            }
        $(".img-Num").eq(aRandom).html(function () {
            return imgNum;
        });
        console.log( aRandom);
    })
    $(".body-des").on("click", function(){
        var aIndex = $(this).index();
        $(".foot").eq(aIndex).show().siblings().hide();
        $(".body-des").eq(aIndex).css({ backgroundColor: '#ffe1c7', color: '#b02c2f'}).siblings().css({ backgroundColor: '#b02c2f', color: '#ffe1c7'});
    });



}
