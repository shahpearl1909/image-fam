Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="picture_taken" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jhjFfOanx/model.json",modelLoaded);
function modelLoaded(){
console.log("model loaded");
}

function identify(){
    img=document.getElementById("picture_taken");
    classifier.classify(img, gotResult);
}

function gotResult(error, result){
    if (error) {
        console.error(error);
    } else {
       console.log(result);
       document.getElementById("result_name").innerHTML=result[0].label;
       document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(2);
    }
}