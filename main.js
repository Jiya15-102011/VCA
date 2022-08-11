var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var te=document.getElementById("textbox");

function t(){
te.innerHTML="";
recognition.start();
}

recognition.onresult= function(event){
    console.log(event);
    var c=event.results[0][0].transcript;
    te.innerHTML=c;
    console.log(c);
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    x="taking your selfie in 5 seconds";
    var y=new SpeechSynthesisUtterance(x);
    synth.speak(y);
    Webcam.attach(camera);
    setTimeout(function(){
        takeselfie();
        save();
    },5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 
 function takeselfie(){
    Webcam.snap( function(data_uri) {
        document.getElementById('result').innerHTML = '<img id="w" src="'+data_uri+'"/>';
    } );
 }
 function save(){
    t=document.getElementById("link");
    u=document.getElementById("w").src;
    t.href=u;
    t.click();
 }