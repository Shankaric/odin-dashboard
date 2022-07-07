const sidebar = document.getElementById('sidebar');
const dark=document.querySelector('#dark');
const topnavbar=document.querySelector('.topavbar');
const maincontent=document.querySelector('.maincontent');
const  griditem=document.querySelectorAll('.griditem');
const  grid1=document.querySelectorAll('.grid1');
const btn1=document.querySelector('#btn1');
const btn2=document.querySelector('#btn2');
const btn3=document.querySelector('#btn3');
const sidemenu=document.querySelector('.sidemenu')
dark.addEventListener("click", function () {
 
    griditem.forEach(function (btn) {
        btn.style.color="rgb(186 182 182)"
        maincontent.style.color="white";
        btn1.style.backgroundColor="rgb(158 158 158)";
        btn2.style.backgroundColor="rgb(158 158 158)";
        btn3.style.backgroundColor="rgb(158 158 158)";
        sidebar.style.backgroundImage="radial-gradient(#9e9e9e, #9e9e9e, #9e9e9e)";
        topnavbar.classList.add('darknavbar');
        maincontent.classList.add('darkmaincontent');
        btn.classList.add('griddark');
        sidemenu.classList.add('darksidemenu');
    });
  

  });