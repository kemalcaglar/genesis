var smplConfig = {
    animationTime: 300,
  };
if (jQuery("#spnTopSepetToplamUrun").text().trim() == 0) {
    var i_wr = 0;
    var text_show = ' Hemen Alışverişe Başla! || ';

    function triggerTab() {

      window.cl_status = 0;

      var objNewTab = {
        text: text_show,
        popup: 'true',
        docTitle: document.title,
        onetime: false,
      };


      document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
          window.cl_status = 1;
          var documentTitle = text_show;
          document.title = text_show;

          (function titleMarquee() {
            if (cl_status == 1) {
              document.title = documentTitle = documentTitle.substring(3) + documentTitle.substring(0, 3);
              setTimeout(titleMarquee, smplConfig.animationTime);
            } else {
              clearTimeout(titleMarquee, smplConfig.animationTime);
            }
          })();
          if (i_wr === 0) {
            i_wr = 1;
          }
        } else {
          window.cl_status = 0;
          document.title = objNewTab.docTitle;
          if (i_wr === 1) {
            i_wr = -1;
          }
        }
      });
    }

    triggerTab();
  }else {
    var i_wr = 0;
    var text_show = ' Sepetindeki Ürünler Seni Bekliyor || ';
    function triggerTab() {
      window.cl_status = 0;
      var objNewTab = {
        text: text_show,
        popup: 'true',
        docTitle: document.title,
        onetime: false,
      };
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
          window.cl_status = 1;
          var documentTitle = text_show;
          document.title = text_show;
          (function titleMarquee() {
            if (cl_status == 1) {
              document.title = documentTitle = documentTitle.substring(3) + documentTitle.substring(0, 3);
              setTimeout(titleMarquee, 300);
            } else {
              clearTimeout(titleMarquee, 300);
            }
          })();
          if (i_wr === 0) {
            i_wr = 1;
          }
        } else {
          window.cl_status = 0;
          document.title = objNewTab.docTitle;
          if (i_wr === 1) {
            i_wr = -1;
          }
        }

      });
    }
    triggerTab();
  }