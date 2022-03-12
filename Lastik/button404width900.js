var html = `<div class="smpl-container" style="width: 100%; /*! height: 270px; */position: relative;display: flex;flex-direction: row;flex-wrap: wrap;justify-content: center;">
<a href="https://www.lastik.com.tr/Lastikler/Binek-Oto-Lastikleri/c/BNK" style="  border: 1px solid #2e8856;
  width:2.5rem;
  max-width:100%;
position: relative;
margin-top: 0.32rem;
margin-right: 5px;
" class="btn-default secondary"> <span style="color: #2e8856;">Binek Lastikler</span> </a>

<a href="https://www.lastik.com.tr/Lastikler/RFT-Lastikler/c/RFT" style="  border: 1px solid #2e8856;
  width:2.5rem;
  max-width:100%;
position: relative;
" class="btn-default secondary"> <span style="color: #2e8856;">RFT Lastikler</span> </a>

<a href="https://www.lastik.com.tr/Lastikler/4X4-Arazi-Lastikleri/c/OTR" style="  border: 1px solid #2e8856;
  width:2.5rem;
  max-width:100%;
position: relative;
margin-right: 5px;
" class="btn-default secondary"> <span style="color: #2e8856;">4*4 Arazi Lastikleri</span> </a>

<a href="https://www.lastik.com.tr/Lastikler/Hafif-Ticari-Ara%C3%A7-Lastikleri/c/LC" style="  border: 1px solid #2e8856;
  width:2.5rem;
  max-width:100%;
position: relative;
" class="btn-default secondary"> <span style="color: #2e8856;">Binek Oto Lastikleri</span> </a>

</div>`;
  
if(jQuery(".notfound-container").length == 1 ){
  jQuery(".notfound-container img").after(html);
  setLevel(LEVEL_JOIN, 'Shown_yonlendirme');
  jQuery(".smpl-container a").click(function(){
  setLevel(LEVEL_JOIN, 'Click_Button');
  })
}