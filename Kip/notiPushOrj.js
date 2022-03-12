/************* Available Variables *************

 functions  : initialize, toggleShow, onChangeConfig, setType, setLevel, setStep, render, createClass, interpolate, getViewport, useState, useEffect, useCallback, useMemo, useRef
 components : Layout, Container
 constants  :
 types       : TYPE_HEADERBAR, TYPE_FOOTERBAR, TYPE_NOTIFICATON, TYPE_TRIGGER, TYPE_POPUP, TYPE_ASSISTANT, TYPE_EMBEDED
 positions   : TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
 sizes       : MINI, DEFAULT_SIZE, LARGE, FULLSCREEN,
 orientation : HORIZONTAL, VERTICAL
 levels      : LEVEL_SHOW, LEVEL_HIDE, LEVEL_JOIN, LEVEL_EXIT, LEVEL_DONE, LEVEL_GOAL

 ************************************************/

export default (scenarioId, variationId, options, preview) => {
    initialize({ type: TYPE_EMBEDED }, (config) => {
        onChangeConfig((newConfig) => {
            console.log('new Config', newConfig);
        });

        toggleShow((status) => {
            if (!options.controlVariation) {
                if (status) {
                    if (Notification.permission === "default") {
                        var lockImg = "https://cdn.hellosmpl.com/uploads/2021/01/14/djq8hk03b2m3adt3pk7964q4nr.png";
                        var bellImg = "https://cdn.hellosmpl.com/uploads/2021/01/14/sfh3usra2cf7nomr4uqr81jpuf.png";
                        var smplPopup =
                            '<div class="scenario-' + scenarioId + '-' + variationId + '">\
          <div class="popUp-container">\
    <div class="popUp-layer"></div>\
    <div class="popUp-content">\
      <div class="popUp-close">×</div>\
      <div class="logo">\
        <img src=" https://cdn.hellosmpl.com/uploads/2021/01/09/dfccb9565c87anp7n9aao4hkur.jpg" alt="logo">\
      </div>\
      <div class="popUp-text">\
          <p>KİP kampanyalarını ve size özel fırsatları kaçırmayın!</p>\
          <ol>\
              <li> <span> Kilide tıkla </span>\
                  <i class=""><img src="'+ lockImg + '" alt="lock"></i>\
              </li>\
              <li> <span> Çıkan ekranda bildirimlere izin ver </span> \
                  <i class="bell"><img src="'+ bellImg + '" alt="notification"></i>\
              </li>\
          </ol>\
      </div>\
    </div>\
    </div>\
  </div>\
  ';
                        jQuery("body").append(smplPopup);
                        setLevel(LEVEL_JOIN, "Shown-Notification");
                        localStorage.setItem("ntf-permission", "off");

                        jQuery(".popUp-close").click(function () {
                            setLevel(LEVEL_EXIT, "Click-buttonClose");
                            jQuery(".popUp-container").fadeOut(500);
                            setTimeout(() => {
                                jQuery(".popUp-container").remove();
                            }, 500);
                        });
                        jQuery(".popUp-layer").click(function () {
                            setLevel(LEVEL_EXIT, "Click-overlayClose");
                            jQuery(".popUp-container").fadeOut(500);
                            setTimeout(() => {
                                jQuery(".popUp-container").remove();
                            }, 500);
                        });
                    }
                    else {
                        if (localStorage.getItem("ntf-permission") === "off" && Notification.permission == "granted") {
                            localStorage.setItem("ntf-permission", "on");
                            setLevel(LEVEL_JOIN, "change-permissionActive")
                        }
                    }
                } else {
                    // replace changes
                }
            }
        });
    });
}/*
.scenario-#{$scenarioId}-#{$variationId} {
    .popUp-container {
    position: fixed;
    z-index: 9998;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

.popUp-layer {
        position: absolute;
        z-index: 9998;
        background: rgba(0, 0, 0, 0.6);
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }

.popUp-content {
        position: fixed;
        background-color: rgb(245, 245, 245);
        z-index: 9999;
        top: 0;
        left: 0;
        border-bottom-right-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 550px;

    .popUp-close {
            cursor: pointer;
            width: 50px;
            height: 50px;
            right: 0px;
            top: 0px;
            position: absolute;
            z-index: 99991;
            font-size: 35px;
            color: rgb(0, 0, 0);
            text-align: center;
            font-weight: light;
        }

    .logo {
            width: 100px;
            height: 100px;

            img {
                width: 100%;
                height: 100%;
            }

        }

    .popUp-text {
            width: 80%;
            margin-top: 20px;
            padding-left: 10px;
            z-index: 9999;
            color: rgb(0, 0, 0);
            font-weight: 500;
            font-family: freight-text-pro;

            p {
                font-size: 20px;
                padding-right: 30px;
            }

            ol {
                padding-left: 15px;
                line-height: 1.8;

                span {
                    padding-right: 10px;
                }

                li {
                    i {
                        img {
                            width: 20px;
                        }
                    }

                .bell {
                        -webkit-animation: ring 4s .7s ease-in-out infinite;
                        -webkit-transform-origin: 50% 4px;
                        -moz-animation: ring 4s .7s ease-in-out infinite;
                        -moz-transform-origin: 50% 4px;
                        animation: ring 4s .7s ease-in-out infinite;
                        transform-origin: 50% 4px;
                    }
                }
            }
        }
    }
}
}

@keyframes ring {
    0% {
        transform: rotate(0);
    }

    1% {
        transform: rotate(30deg);
}

    3% {
        transform: rotate(-28deg);
}

    5% {
        transform: rotate(34deg);
}

    7% {
        transform: rotate(-32deg);
}

    9% {
        transform: rotate(30deg);
}

    11% {
        transform: rotate(-28deg);
}

    13% {
        transform: rotate(26deg);
}

    15% {
        transform: rotate(-24deg);
}

    17% {
        transform: rotate(22deg);
}

    19% {
        transform: rotate(-20deg);
}

    21% {
        transform: rotate(18deg);
}

    23% {
        transform: rotate(-16deg);
}

    25% {
        transform: rotate(14deg);
}

    27% {
        transform: rotate(-12deg);
}

    29% {
        transform: rotate(10deg);
}

    31% {
        transform: rotate(-8deg);
}

    33% {
        transform: rotate(6deg);
}

    35% {
        transform: rotate(-4deg);
}

    37% {
        transform: rotate(2deg);
}

    39% {
        transform: rotate(-1deg);
}

    41% {
        transform: rotate(1deg);
}

    43% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(0);
    }
}*/