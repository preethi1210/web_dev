let val=myText.value;
val=Number(val);
let temp;
mySubmit.onclick=function(){
    if(f_c.checked){
         temp=Number(myText.value);
        temp=(temp-32)*(5/9);
        res.textContent=temp.toFixed(1)+"C";
    }
    else if(c_f.checked){
         temp=Number(myText.value);
        temp=(temp)*(9/5) +32;
        res.textContent=temp +"F"; 
    }
    else{
        res.textContent="Choose a option";
    }
}