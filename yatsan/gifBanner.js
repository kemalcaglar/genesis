var html = `
<div class="smpl-discount-banner">
    <img src="https://cdn.hellosmpl.com/uploads/2021/05/12/uchu2b65cqb9ufqjodabq5bb77.gif" 
      style="width: 100%;">
</div>`
jQuery("#header").prepend(html);
jQuery("#header .promo-bar").hide()
setLevel(LEVEL_JOIN, "shown-banner");
