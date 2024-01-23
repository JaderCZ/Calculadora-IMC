

function cauculate(){
    var height=(document.getElementById("height").value)/100;
    var weight=document.getElementById("weight").value
    
    var imc= weight / height ** 2;
    var text=""
    
    if(imc<18.5){
       text=("VOVÊ ESTA MAGRO")
    
    }else if(imc<24.9){
        text=("VOCE ESTA NORMAL")
    }
    else if (imc<29.9){
        text=("VOCE ESTA COM SOBREPESO")
    }
    else if(imc<39.9){
        text=("VOCE ESTA COM OBESIDADE MÓRBIDA")
    }

    document.getElementById("text_area").innerText=text
}