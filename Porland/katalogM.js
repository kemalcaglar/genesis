var img = "https://cdn.hellosmpl.com/uploads/2021/06/30/tv55r7rq8ekrq1ioh2ueim4vg0.png";
var html = `
<div class="smpl-yeni-katalog" style="position: relative;left: 0;display: inline-block;cursor: pointer;margin-top:13px;">
<a href="https://www.porland.com/katalog"><img src="`+img+`" style="display: block;">
</a>
</div>
`
jQuery("#search").after(html);