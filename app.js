function vaildate(){
    var x=0;
    var em=document.getElementById("email").value;
    for(var i=0; i < em.length; i++){
       if (em[i]=="@"){
           x++
       }
    }
       if(x!=1){
           document.getElementById("alert").style.display="block";
           document.getElementById("error").style.display="block";
       }
       else{
        document.getElementById("alert").style.display="none";
        document.getElementById("error").style.display="none";
       }
  }