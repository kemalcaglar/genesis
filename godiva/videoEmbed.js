var embedVideo = '<iframe width="400" height="225" src="https://www.youtube.com/embed/FmwT5siNknk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

jQuery('body').append('<div id="ed-closeVideo" style="cursor:pointer; position: fixed;width: 30px;left:372px;bottom: 225px;z-index: 999; display: none;"><img src="//cdn.hellosmpl.com/uploads/2020/04/21/f3q2tcni62ed447mgq61mf8qmk.png" style="width: 30px;"></div><div id="ed-Videocover" style="position: fixed;bottom: 0;left: 0;width: 400px;height: 225px;z-index: 99;"><div class="ed-videoArea" style="width: 400px;height: 225px;position: absolute;background: #fff;z-index: 99;">'+embedVideo+'</div></div>');
// setLevel(LEVEL_JOIN, "Shown");
setTimeout(function(){ 
jQuery('#ed-Videocover').animate({ left: '0' }, "slow");
jQuery('#ed-closeVideo').css('display','block');
}, 1000);
jQuery('#ed-closeVideo').click(function(){
    jQuery('#ed-closeVideo').remove();
    jQuery('#ed-Videocover').remove();
})


---------
var embedVideo = '<iframe width="320" height="180" src="https://www.youtube.com/embed/FmwT5siNknk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

jQuery('body').append('<div id="ed-closeVideo" style="cursor:pointer; position: fixed;width: 30px;right: 24px;bottom: 185px;z-index: 999; display: block;"><img src="//cdn.hellosmpl.com/uploads/2020/04/21/f3q2tcni62ed447mgq61mf8qmk.png" style="width: 30px;"></div><div id="ed-Videocover" style="position: fixed;bottom: 10px;left: 30px;width: 320px;height: 180px;z-index: 99;"><div class="ed-videoArea" style="width: 320px;height: 180px;position: absolute;background: #fff;z-index: 99;">'+embedVideo+'</div></div>');
setTimeout(function(){ 
jQuery('#ed-Videocover').animate({ right: '10px' }, "slow");
jQuery('#ed-closeVideo').css('display','block');
}, 1000);
jQuery('#ed-closeVideo').click(function(){
    jQuery('#ed-closeVideo').remove();
    jQuery('#ed-Videocover').remove();
})