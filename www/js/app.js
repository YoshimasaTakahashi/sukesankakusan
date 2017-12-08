var page = "tab1.html";
function hyoji1(num)
{
  if (num == 0)
  {
    document.getElementById("navigationbar").style.display="block";
//    document.getElementsByName('navi-segment-a')[0].checked = true;
  }
  else
  {
    document.getElementById("navigationbar").style.display="none";
  }
}
function pop1(num)
{
  if (num == 0)
  {
//    document.getElementById("navigator1").popPage();
    document.getElementById("navigator1").resetToPage(page, {animation:"none"});
  }
  else
  {
    document.getElementById("navigationbar").style.display="none";
  }
}
function timetable1(num)
{
  if (num == 0)
  {
    document.getElementById("navigator1").popPage();
  }
  else
  {
    document.getElementById("navigationbar").style.display="none";
  }
}
function reset1(num){//日か週の保持
  if (num == 0){
    page = "tab1.html";
  }else{
    page = "tab3.html";
  }
}
