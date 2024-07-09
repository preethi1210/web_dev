const btn=document.getElementById('btn');
const btn1=document.getElementById('btn1');
const btn2=document.getElementById('btn2');
const author=document.getElementById('name');
const job=document.getElementById('job');
const text=document.getElementById('text');
const photo=document.getElementById('photo');

const reviews=[
    { id:1,
        name:"Peter Jones",
        job:"INTERN",
        photo:"boy1.jpeg",
        text:"Sriracha  literally  flexitarian irony, vape marfa unicorn. Glossier  tattooed  8 - bit ,  fixie  waistcoat  offal  activated  charcoal  slow - carb  marfa  hell  of  pabst  raclette  post - ironic  jianbing  swag and I landed here.At my dream company amazon"
    },    
   { id:2,
    name:"Riya thakur",
    job:"WEB DEVELOPER",
    photo:"girl1.jpeg",
    text:"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land at amazing company.",
},{id:3,
    name:"Emma Bostian",
    job:"SOFTWARE ENGINEER",
    photo:"girl2.jpeg",
    text:"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence.",
 }];
 let index=0;
 window. addEventListener ("DOMContentLoaded", function () {
    showPerson(index)});
    function showPerson(person){
        const item=reviews[person];
        photo.src=item.photo;
        author.textContent=item.name;
        job.textContent=item.job;
        text.textContent=item.text;
    }
btn2.addEventListener("click",function(){
    index++;
    if(index>reviews.length){
        index=0;
    }
    showPerson(index);
});
btn1.addEventListener("click",function(){
    index--;
    if (index<0) {
        index=reviews.length-1;
    }
    showPerson(index);   
});
btn.addEventListener("click",function(){
    showPerson(Math.floor(Math.random()*reviews.length));
});