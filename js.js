mySubmit.onclick=function(){
    const num=document.getElementById("num").value;
    const values=[];
    const images1=[];
    for (let i=0;i<num;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images1.push(`<img src="${value}.png" alt="err">`);
    }
    res.textContent=`dice:${values.join(',')}`;
    images.innerHTML=images1.join('');
}