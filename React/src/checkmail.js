function checkmail(){
    var email = document.getElementById('email1').value;
    if(email = null || email==""){
      alert("enter email first");
      return false;
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      alert("Wrong Email Format");
      return false;
    }
    else{
      return true
    }
}