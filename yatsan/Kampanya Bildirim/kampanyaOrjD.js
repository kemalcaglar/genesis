var campaing = "https://yatsan.com/d/kampanyalar";
          var discount2525pink =
            "https://cdn.hellosmpl.com/uploads/2021/04/13/45s79pb15ou5arr4teg3j1sndr.jpg";
          var discount40gold =
            "https://cdn.hellosmpl.com/uploads/2021/03/25/hjc622dtbd7mt4t14odc4cr9vj.png";
          var discount20gray =
            "https://cdn.hellosmpl.com/uploads/2021/03/25/i1goe599ilbhlq65jd86d0va1u.png";
            var discount25pink =
            "https://cdn.hellosmpl.com/uploads/2021/04/30/lsdivoj5fqn383a8pf902t4vcv.png";
            var discount50white = 
            "https://cdn.hellosmpl.com/uploads/2021/05/11/etkuh7mlg12hsk6tcb5gioolrv.png";
            var discount35green =
            "https://cdn.hellosmpl.com/uploads/2021/06/09/dam7nooeei88cckbcb9siudqi.png";
            var discount30blue =
            "https://cdn.hellosmpl.com/uploads/2021/09/08/frtr04h95n4miv58e7b7c4hs2f.jpg";
          var html =
            '\<div class="scenario-' + scenarioId + '-' + variationId + '">\
<div class="smpl-menu">\
<span class="smpl-count">3</span>\
  <ul>\
    <li class="smpl_list_item">\
       <div class="container">\
       <a href=' +
            campaing +
            ' style="display: inline-block;">\
        <div class="header" style="display:flex;justify-content:center;align-items:center;background:#673d27; border-top-right-radius: 5px;    border-top-left-radius: 5px;">\
            <div style="font-size:16px;padding-top:5px;padding-bottom:5px;text-transform: uppercase;">Ekim Fırsatları</div>\
        </div>\
       </a>\
        <div class="content">\
            <div style="border-bottom: 1px solid;">\
            <a href="https://yatsan.com/d/yastik?utm_source=smpl&utm_medium=icon&utm_campaign=yastik-fest">\
            <img style="width: 45px;margin-left: 10px;margin-top: 5px;margin-bottom: 5px;" src="' +
            discount40gold +
             '">\
            <span style="margin-left: 8px;">Yastık Festivaliyle Doğru Yastığı Bul!</span></a>\
            </div>\
          <div style="border-bottom: 1px solid;">\
            <a href="https://yatsan.com/d/king-koil-yataklar?utm_source=smpl&utm_medium=icon&utm_campaign=king-koil">\
            <img src="' +
            discount25pink +
             '" style="margin-bottom: 5px;margin-left: 10px;width: 43px;margin-top: 5px;">\
            <span style="margin-left: 10px;">King Koil Yeni Koleksiyonu Keşfet!</span></a>\
          </div>\
          <div style="border-bottom: 1px solid;">\
            <a href="https://yatsan.com/d/yataklar?m=serta&utm_source=smpl&utm_medium=icon&utm_campaign=serta">\
            <img src="' +
             discount35green +
            '" style="width: 61px;">\
            <span>Serta Yataklar %35 İndirimli!</span></a>\
          </div>\
      </div>\
    </div>\
   </li>\
  </ul>\
</div>\</div>\
';
          jQuery("body").append(html);
          setLevel(LEVEL_JOIN, "shown-notifi");
          jQuery(".smpl-menu").click(function () {
            if (jQuery(".smpl-menu").hasClass("active")) {
              jQuery(".smpl-menu").remove();
              jQuery(".smpl-menu").removeClass("active");
              setLevel(LEVEL_EXIT, "click-close");
            } else {
              jQuery(".smpl-menu").addClass("active");
              setLevel(LEVEL_JOIN, "Open-Notification");
            }
          });
          jQuery(".smpl-menu a:first").click(function () {
            setLevel(LEVEL_JOIN, "click-kampanyalara");
          });         
           jQuery(".smpl-menu li a").eq(0).click(function(){
            setLevel(LEVEL_JOIN, "click-bir");
            });
            jQuery(".smpl-menu li a").eq(1).click(function(){
            setLevel(LEVEL_JOIN, "click-iki");
            });
            jQuery(".smpl-menu li a").eq(2).click(function(){
            setLevel(LEVEL_JOIN, "click-uc");
            });

`
<style>
$bell : "https://cdn.hellosmpl.com/uploads/2021/01/15/b5m8a4vq38e9mieorkk5fn4phv.png";
$close : "https://cdn.hellosmpl.com/uploads/2021/01/15/omfv3fvt5isohkjq9bh18t8k9d.png";

.scenario-#{$scenarioId}-#{$variationId} {
  .smpl-menu {
    position: fixed;
    background: url("https://cdn.hellosmpl.com/uploads/2021/03/25/q14vfbjf8kpee0q5b92jv3c5dr.png") 0px 0px no-repeat transparent;
    width: 3em;
    height: 4em;
    cursor: pointer;
    bottom: 55px;
    left: 30px;
    z-index: 9999;
    background-size: 2em;
    transition: 0.5 all;
    background-position: center;

    &.active {
      background: url($close) 0px 0px no-repeat transparent;
      background-size: 2em;
      transition: 0.5 all;
      border-radius: 0;
      background-position: center;

      .smpl-count {
        display: none;
      }

      ul {
        transform: rotate(0deg) translateY(-100px);

        li {
          display: block;
        }
      }

    }

    .smpl-count {
      position: absolute;
      right: -5px;
      top: -7px;
      background: red;
      color: white;
      border-radius: 50%;
      font-size: 11px;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ul {
      list-style: none;
      padding: 0;
      position: relative;
      left: 40px;
      transform: rotate(180deg) translateY(-2em);
      transition: 1s all;
      top: -24px;

      li {
        padding: 4px;
        margin-top: 0.2em;
        text-align: center;
        transition: all 1s;
        display: none;
        z-index: -1;
        font-size: 10px;
        border-radius: 5px;

        &::nth-of-type(1) {
          transform: rotate(-45deg);
          position: absolute;
          left: -1px;
          top: -254px;
        }

        a {
          color: white;
          text-decoration: none;
          line-height: 40px;

        }

        .container {
          display: flex;
          flex-direction: column;
          width: 440px;
          height: 223px;
          margin-top: -57px;

          .content {
            display: flex;
            flex-direction: column;
            background: white;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            width: 100%;
            color: black;
            font-size: 14px;
            font-weight: 600;

            div {
              width: 100%;
              text-align: center;
              display: flex;

              a {
                display: inline-flex;
                width: 100%;
                color: black;
                align-items: center;
                span {
                }

                img {
                  padding: 2px;
                }
              }
            }
          }
        }
      }
    }
  }
}

</style>`