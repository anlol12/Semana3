function operacion(){
    var n1 = Nunber((document.getElementById("num1")).value);
    var n2 = Nunber((document.getElementById("num2")).value);
    var lblre = (document.getElementById("resultado"));
    if (isNaN(n1)||isNaN(n2)){
        lblre.innerHTML="error"
    }else{
        var lblre = document.getElementById("resultado")
        lblre.innerHTML=sumar(n1,n2)
    }
}