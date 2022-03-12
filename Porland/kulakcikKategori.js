var html = `<div class="smpl-kulakcik" style=" top:40%; position:fixed;z-index: 99999;"><a href="">
<img src="https://cdn.hellosmpl.com/uploads/2021/04/30/94ij90joaae933sijq17f8fn2l.jpg"></a>
</div>`;
jQuery("body").prepend(html);
setLevel(LEVEL_JOIN,'shown-kulakcik');
jQuery("smpl-kulakcik").click(function(){
    setLevel(LEVEL_JOIN,'click-kulakcik');
})