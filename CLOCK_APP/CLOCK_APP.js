var  morningtime=6;
var officetime=8;
var lunchtime=12;
var returntime=16;
var eveningtime=17;
var sleeptime=20;
var currentTime=function (){
    var Time=new Date();
    var hours=Time.getHours();
    var minutes=Time.getMinutes();
    var seconds=Time.getSeconds();
    var hr=document.getElementById("hr");
    var sec=document.getElementById("sec");
    var min=document.getElementById("min");
    var meridian="AM";
    if(hours>12){
        meridian="PM";
    }
    if(hours>12){
        hours=hours-12;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    hr.innerText =hours;
    min.innerText =minutes;
    sec.innerText =seconds;
    
};

var updateTime=function() {
     //var time = new Date().getHours();
 var gettime=new Date().getHours();
 var msgtext=document.getElementById("msg");
 if(gettime >= 20 ){
    document.getElementById("header").style.color = "white";
    document.body.style.backgroundImage="url('./assets/night.jpg')"; 
    msgtext.style.color = "white"; 
    msgtext.innerText="Good Night Buddy!";
    }
else if(gettime >=18 ){
    msgtext.innerText="Graceful Evening!";
    document.body.style.backgroundImage="url('./assets/sunset-1.jpg')";  
    }
else if(gettime >= 12 ){
    msgtext.innerText="Sunny Day!";
    document.body.style.backgroundImage="url('./assets/afternoon.jpeg')";  
    }
else if(gettime >= 8){
    msgtext.innerText="Energified Morning!";
    document.body.style.backgroundImage="url('./assets/eightam1.jpg')";  
}
else if(gettime >= 6){
    msgtext.innerText="Good Morning!";
    document.body.style.backgroundImage="url('./assets/sunrise1.jpg')";  
}
   currentTime();
};
updateTime();
setInterval(updateTime,1000);
