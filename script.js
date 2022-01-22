let history= document.getElementById('historyClick');
let present=document.getElementById('presentClick');
let future=document.getElementById('futureClick');
let presentDiv=document.getElementById('present');
let historyDiv=document.getElementById('history');
let futureDiv=document.getElementById('future');
history.addEventListener("click", function(){
    historyDiv.scrollIntoView({behavior: "smooth", block:"center"});
});

present.addEventListener("click", function() {
    presentDiv.scrollIntoView({behavior: "smooth", block:"center"});
});

future.addEventListener("click", function() {  
    futureDiv.scrollIntoView({behavior: "smooth", block:"center"});
});