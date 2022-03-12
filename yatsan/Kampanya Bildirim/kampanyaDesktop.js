var scenarioId = "scenarioId";
var variationId = "variationId";
let smplObj = {
    scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
    scenarioName: "scenario-" + scenarioId + "-" + variationId,
    campaing: "https://yatsan.com/d/kampanyalar",
    setCookie: function (cname, cvalue, min) {
        let d = new Date();
        d.setTime(d.getTime() + min * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: function (name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    fireEvent: function (label, eventName) {
        let device = window.innerWidth <= 768 ? "mobile" : "desktop";
        if (options.sendEvent) {
            if (label === "exit") {
                setLevel(LEVEL_EXIT, eventName + "(" + device + ")")
            } else if (label === "join") {
                setLevel(LEVEL_JOIN, eventName + "(" + device + ")")
            }
        }
    },
};
let html = `
<div class="`+ smplObj.scenarioName + `">
    <div class="smpl-menu">
        <span class="smpl-count">3</span>
        <ul>
            <li class="smpl_list_item">
                <div class="container">
                    <a href="`+ smplObj.campaing + `">
                        <div class="header">
                            <div>Ekim Fırsatları</div>
                        </div>
                    </a>
                    <div class="content">
                        <div class="campaign-list">
                            <a href="">
                                <span>İndirim Oranı</span>
                                <span>Text</span>
                            </a>
                        </div>
                        <div class="campaign-list">
                            <a href="">
                                <span>İndirim Oranı</span>
                                <span>Text</span>
                            </a>
                        </div>
                        <div class="campaign-list">
                            <a href="">
                                <span>İndirim Oranı</span>
                                <span>Text</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
`
jQuery("body").append(html);
//setLevel(LEVEL_JOIN, "shown-notifi");
jQuery(".smpl-menu").click(function () {
  if (jQuery(".smpl-menu").hasClass("active")) {
    jQuery(".smpl-menu").remove();
    jQuery(".smpl-menu").removeClass("active");
    //setLevel(LEVEL_EXIT, "click-close");
  } else {
    jQuery(".smpl-menu").addClass("active");
    //setLevel(LEVEL_JOIN, "Open-Notification");
  }
});
jQuery(".smpl-menu a:first").click(function () {
  //setLevel(LEVEL_JOIN, "click-kampanyalara");
});         
 jQuery(".smpl-menu li a").eq(0).click(function(){
  //setLevel(LEVEL_JOIN, "click-bir");
  });
  jQuery(".smpl-menu li a").eq(1).click(function(){
  //setLevel(LEVEL_JOIN, "click-iki");
  });
  jQuery(".smpl-menu li a").eq(2).click(function(){
  //setLevel(LEVEL_JOIN, "click-uc");
  });

 var style = `<style>
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
jQuery("head").append(style);

