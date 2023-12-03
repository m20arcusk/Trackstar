// Create a new div for the draggable overlay

const overlayDiv = document.createElement('div');
overlayDiv.id = 'RaceTimerOverlay';

// Set styles to make the div draggable
overlayDiv.style.position = 'absolute';
overlayDiv.style.top = '0';
overlayDiv.style.left = '0';
overlayDiv.style.cursor = 'move';

// Add event listeners for drag functionality
let isDragging = false;
let offsetX, offsetY;

overlayDiv.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - overlayDiv.getBoundingClientRect().left;
    offsetY = e.clientY - overlayDiv.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        overlayDiv.style.left = e.clientX - offsetX + 'px';
        overlayDiv.style.top = e.clientY - offsetY + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

overlayDiv.innerHTML = `
<div class="timer">
   <h3>JAVASCRIPT COUNTDOWN</h3>
   <div class="timer--clock">
      <div class="minutes-group clock-display-grp">
         <div class="first number-grp">
            <div class="number-grp-wrp">
               <div class="num num-0"><p>0</p></div>
            </div>
         </div>
         <div class="second number-grp">
            <div class="number-grp-wrp">
               <div class="num timeLeft"><p>0</p></div>
            </div>
         </div>
      </div>
      <div class="clock-separator"><p>:</p></div>
      <div class="seconds-group clock-display-grp">
         <div class="first number-grp">
            <div class="number-grp-wrp">
               <div class="num num-0 timerDisplay"><p>0</p></div>
            </div>
            <div class="number-grp-wrp">
               <div class="num num-0 timeGained"><p>0</p></div>
            </div>
         </div>
      </div>
      <button class="finish">Finish</button>
       <button class="nextQ">Next Question</button>
   </div>
   <h4>THE MOST SIMPLE WAY YOU WOULD HAVE FOUND.</h4>
</div>
`;
// const linkElement = document.createElement('link');
// linkElement.rel = 'stylesheet';
// linkElement.type = 'text/css';
// linkElement.href = './styles.css'; 
// document.head.appendChild(linkElement);
// const scriptElement = document.createElement('script');
// scriptElement.type = 'text/javascript';
// scriptElement.src = './contentScriptCode.js'; // Replace with the actual path to your JavaScript file
// // Append the script element to the document body or head
// document.body.appendChild(scriptElement);

document.body.appendChild(overlayDiv);

// ** JAVASCRIPT CODE ** //

var nextQuestion = document.querySelector('.nextQ');
var finish = document.querySelector('.finish');

var timeLeft = 60
var timePerQuestion = 10
var timeGained = 0
var currentTime = 0
var timerDisplay = timePerQuestion
var finished = false;

var timeDisplayGetter = document.querySelector('.timerDisplay');
var timeLeftGetter = document.querySelector('.timeLeft');
var timeGainedGetter = document.querySelector('.timeGained');

timeLeftGetter.textContent = timeLeft.toString();
timeDisplayGetter.textContent = timePerQuestion.toString();
timeGainedGetter.textContent = timeGained.toString();

const intervalId = setInterval(() => {
    // Operations that happen every second
    
    if (currentTime > timePerQuestion) {
        if (timeGained < 0) {
            // Set time gained display to be red
            timeDisplayGetter.style.color = 'red';
        } else {
            // Keep color green
            timeDisplayGetter.style.color = 'green';
        }
    }

    currentTime++;
    timeDisplayGetter.textContent = (timePerQuestion - currentTime).toString();
    timeLeft--;
    timeLeftGetter.textContent = timeLeft.toString();
    console.log('hello');

    if (timeLeft <= 0 || finished) {
        // Additional actions when the loop should exit
        clearInterval(intervalId);
        // Display time up screen, and time gained
        // Additional actions after the loop
    }
}, 1000);

finish.addEventListener('click', function () {
    //break from the loop
finished = true;
});
nextQuestion.addEventListener('click', function () {
timeGained += timePerQuestion - currentTime
timeGainedGetter.textContent = timeGained.toString();
currentTime = 0
    timeDisplayGetter.textContent = timePerQuestion.toString();
    setTimeout(1000);
    intervalId();
});


// const decrementCounter = () => {
//     while (timeLeft > 0) { // while there is still time on the counter
//         finish.addEventListener('click', function () {
//             //break from the loop
//             finished = true;
//         });
//         if (finished) {
//          break;
//         }
//         nextQuestion.addEventListener('click', function () {
//             timeGained += timePerQuestion - currentTime
//             currentTime = 0
//             timeDisplayGetter.textContent = timePerQuestion.toString();
//         });

//         const intervalId = setInterval(() => {
//          // Operations that happen every second
     
//          if (currentTime > timePerQuestion) {
//              if (timeGained < 0) {
//                  // Set time gained display to be red
//                  timeDisplayGetter.style.color = 'red';
//              } else {
//                  // Keep color green
//                  timeDisplayGetter.style.color = 'green';
//              }
//          }
     
//          currentTime++;
//          timeDisplayGetter.textContent = (timePerQuestion - currentTime).toString();
//          timeLeft--;
//          console.log('hello');
     
//          if (timeLeft <= 0 || finished) {
//              // Additional actions when the loop should exit
//              clearInterval(intervalId);
//              // Display time up screen, and time gained
//              // Additional actions after the loop
//          }
//      }, 1000);
     
//     }
//     // when loop is exited display time up screen, display time gained
// }

