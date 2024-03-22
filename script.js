function buttonclick(val){
    
    document.getElementById("result").value=document.getElementById("result").value+val;

    document.getElementById("")
}
function buttonclear(){
    document.getElementById("result").value=''
}
function equalclick(){
   var text= document.getElementById("result").value

   var output=eval(text)

   document.getElementById("result").value=output
}