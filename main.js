var Speechrecogntion = window.webkitSpeechRecognition;
var recognition = new Speechrecogntion ;

function start(){
document.getElementById("textbox").innerHTML="";

recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content =event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    }
}

function speak(){
    var speak_data="taking your selfie in five seconds";
    var synth = window.speechSynthesis;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function(){takeSnapshot();save();},5000);
    Webcam.attach(camera);
}
camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 function takeSnapshot(){
    Webcam.snap(function(data_uri) { 
        console.log("data_url",data_uri); 
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; });
}
function save(){
 link=document.getElementById("link");
 img=document.getElementById("selfie_image").src;
 link.href=img;
 link.click();
 console.log(img);
}
