let video = document.querySelector("video");
let recordBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");
let captureBtn = document.querySelector(".capture-btn");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let transparentColor = "transparent";

let recordFlag = false;

let recorder; //store undefined value 
let chunks = []; // this is used to store the media stream chunks

let constraints = {
    video: true, // this is used to get the video stream from the camera
    audio: false, // this is used to get the audio stream from the microphone
  };

//navigator is a global obj where this gives info about browser like camera , microphone, as well as screen sharing // and other things

navigator.mediaDevices.getUserMedia(constraints) // this is used to get the media stream from the camera and microphone
.then(function (stream) {
    console.log(stream)
    video.srcObject = stream; // this is used to set the video source to the media stream //src and srcobject are used to set the video source to the media stream
    recorder = new MediaRecorder(stream); // this is used to create a new media recorder object
    recorder.addEventListener("start", (e) => {
        chunks = []; // this is used to reset the chunks array when the recorder starts
    })

    recorder.addEventListener("dataavailable", (e) => {
        chunks.push(e.data); // this is used to push the media stream chunks to the array
    })

    recorder.addEventListener("stop", (e) => {
        //convert the media chunks data to video 
        let blob = new Blob(chunks, { type: "video/mp4" }); // this is used to create a new blob object from the media stream chunks
        let videoURL = URL.createObjectURL(blob); // this is used to create a new object URL from the blob object
        let a = document.createElement("a");
        a.href = videoURL;
        a.download = "stream.mp4";
        a.click();   
    })

    recordBtnCont.addEventListener("click", (e)=>{
        if(!recorder) return; //true active or not 

        recordFlag = !recordFlag;
        if(recordFlag){ //start
            recorder.start();
            recordBtn.classList.add("scale-recorder");
            startTime();
        }else{
            //stop 
            recorder.stop();
            recordBtn.classList.remove("scale-recorder");
            stopTimer();
        }
    })
})
.catch(function (error) {
    console.log("Error: " + error); // this is used to catch any errors that occur while getting the media stream
});


//video is actully capture as chunks, but what chunks will have? each chunks will be having a frame, image is actully a frame 
captureBtnCont.addEventListener("click", (e) => {
    captureBtn.classList.add("scale-capture");

    let canvas = document.createElement("canvas"); // this is used to create a new canvas element
    canvas.width = video.videoWidth;
    canvas.hight = video.videoHeight; 
    let imageURL = canvas.toDataURL("image/jpeg", 1.0); // this is used to convert the canvas image to a data URL 


    let tool = canvas.getContext("2d"); // this is used to get the 2d context of the canvas element
    tool.drawImage(video, 0, 0, canvas.width, canvas.height); // this is used to draw the video image on the canvas element
    
    //filtering part 
    tool.fillStyle = transparentColor;
    tool.fillReact(0, 0, canvas.width, canvas.height);

    let a = document.createElement("a");
    a.href = imageURL;
    a.download = "Image.jpeg"; // this is used to set the download attribute of the anchor element to the image file name
    a.click();

    //remove animation 
    setTimeout(() => {
        captureBtn.classList.remove("scale-capture");
    }, 500);
})

//filtering 
let filter = document.querySelector(".filter-layer");

let allFilters = document.querySelectorAll(".filter"); // this is used to get all the filter elements
allFilters.forEach((filterElem) => {
    filterElem.addEventListener("click", (e) => {
        //get style 
        transparentColor = getComputedStyle(filterElem).getPropertyValue("background-color"); // this is used to get the background color of the filter element
        filter.style.backgroundColor = transparentColor; 
    })
}) // this is used to loop through all the filter elements


let timerID;
let counter = 0; //represents total seconds 
let timer = document.querySelector(".timer");
function startTime(){
    timer.style.display = "block";
    function displayTimer(){ 
        //how to calc the time is that 1. initilization a var that actully stores no.of sec, 
        // 2. when ever this function displayTimer is called then we need to inc the counter var, 
        // as each call of this funct is inc the 1sec in regular time.
        //  why? because we need to get the actual time when this thing needs counted.
        //how to count hours, min, & sec
        //counter  = 3725 
        //weknow 1hr= 3600sec
        // 3725/3600 => 1hr 
        //reminder 3725%3600 = 2min 
        // reminder % 60 = 5sec 
        let totalSec = counter;
        let hour = Number.parseInt(totalSec / 3600); // this is used to get the total hours from the total seconds
        totalSec = totalSec % 3600;
        let minutes = Number.parseInt(totalSec / 60);
        totalSec = totalSec % 60;
        let seconds = totalSec; // this is used to get the total minutes from the total seconds
        hour = (hour < 10) ? `0${hour}` : hour; // this is used to add a leading zero to the hours if it is less than 10
        minutes = (minutes < 10) ? `0${minutes}` : minutes; // this is used to add a leading zero to the minutes if it is less than 10
        seconds = (seconds < 10) ? `0${seconds}` : seconds; // this is used to add a leading zero to the seconds if it is less than 10 

        timer.innerText = `${hour}:${minutes}:${seconds}`; // this is used to set the timer text to the total hours, minutes, and seconds
        counter++ ;
    }
    timerID = setInterval(displayTimer, 1000); // this is used to call the displayTimer function every second
}
function stopTimer(){
    clearInterval(timerID); // this is used to clear the interval when the timer stops
    timer.style.display = "none"; // this is used to hide the timer when the timer stops
    timer.innerText = "00:00:00";
}
























