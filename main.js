function submit(){
    
  const namee=["name","subject","company","email","number","country","help"];
    var name=document.getElementById('name');
    var subject=document.getElementById('subject');
    var company=document.getElementById('company');
    var email=document.getElementById('email');
    var number=document.getElementById('number');
    var country=document.getElementById('country');
    var help=document.getElementById('help');
    
  for(var i=0;i<7;i++){
    document.getElementById(namee[i]).style.borderColor="";
    document.getElementById(namee[i]).style.background="";
    document.getElementById(namee[i]).style.backgroundSize="";
    document.getElementById(namee[i]+"1").innerHTML="";

if(document.getElementById(namee[i]).value==""){
    document.getElementById(namee[i]).style.borderColor="red";
    document.getElementById(namee[i]).style.background=" url('https://img.icons8.com/emoji/48/000000/exclamation-mark-emoji.png') no-repeat right";
    document.getElementById(namee[i]).style.backgroundSize="30px";
    document.getElementById(namee[i]+"1").innerHTML="<p style='color:red;'>Please your "+namee[i]+"</p>";

}
  }


}
function onClickMenu(){
  document.getElementById('menu').classList.toggle('icon');
  document.getElementById('nav').classList.toggle('change');

}