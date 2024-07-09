let run=false;
const clock=document.getElementById("clock");
let timer=null;
let startTime=0;
let endTime=0;
function start(){
if(!run){
    startTime=Date.now()-endTime;
    timer=setInterval(update,10);
    run=true;
}
}
function reset(){
    clearInterval(timer);
    let startTime=0;
    let endTime=0;
    let run=false;
    run=false;
    clock.textContent="00:00:00:00"
}
function stop(){
    if(run){
        clearInterval(timer);
        endTime=Date.now()-startTime;
        run=false;
    }
}
function update(){
    const currtime=Date.now();
    endTime=currtime-startTime;
    let hours=Math.floor(endTime/(1000*60*60));
    let minutes=Math.floor(endTime/(1000*60) % 60);
    let seconds=Math.floor(endTime/1000 % 60);
    let milliseconds=Math.floor(endTime%1000/10);
    hours=hours.toString().padStart(2,0);
    minutes=minutes.toString().padStart(2,0);
    seconds=seconds.toString().padStart(2,0);
    milliseconds=milliseconds.toString().padStart(2,0);
    clock.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
}