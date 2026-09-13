function tick(){
 const now=new Date(), h=now.getHours(), m=now.getMinutes(), s=now.getSeconds();
 document.querySelector(".h").style.transform=`rotate(${(h%12)*30+m*.5}deg)`;
 document.querySelector(".m").style.transform=`rotate(${m*6+s*.1}deg)`;
 document.querySelector(".s").style.transform=`rotate(${s*6}deg)`;
 document.getElementById("time").textContent=now.toLocaleTimeString("en-IN",{hour12:false});
 document.getElementById("date").textContent=now.toLocaleDateString("en-IN",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
}
tick();setInterval(tick,1000);
