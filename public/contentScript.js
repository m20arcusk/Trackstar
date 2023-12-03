// Create a new div for the draggable overlay
const overlayDiv = document.createElement('div');
overlayDiv.id = 'RaceTimerOverlay';

// Set styles to make the div draggable
overlayDiv.style.position = 'absolute';
overlayDiv.style.top = '0px';
overlayDiv.style.left = '0px';
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
<div class="App">
<h1>Trackstar</h1>
    <form>
        <label for="numberOfQuestions">Number of Questions:</label>
        <input type="number" id="numberOfQuestions" name="numberOfQuestions" min="1" required>
        
        <label for="timePerQuestion">Time allotted per Question (in seconds):</label>
        <input type="number" id="timePerQuestion" name="timePerQuestion" min="1" required>
        
        <button class="submitButton" type="button">Create Quiz</button>
    </form>
</div>`;

document.body.appendChild(overlayDiv);

function startTimer() {
    overlayDiv.style.background = 'rgba(255, 255, 255, 0.8)'; // semi-transparent white background
    // Append the overlay to the body
    overlayDiv.innerHTML = `
      <div class="minutes-group clock-display-grp">
            <div class="number-grp-wrp">
               <div class="num timeLeft"><p>0</p></div>
            </div>
      </div>
      <div class="num"><p>---</p></div>
            <div class="number-grp-wrp">
               <div class="num num-0 timerDisplay"><p>0</p></div>
            </div>
            <div class="number-grp-wrp">
               <div class="num num-0 timeGained"><p>0213</p></div>
            </div>
      <button class="finish">Finish</button>
       <button class="nextQ">Next Question</button>
`;
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

    timeGainedGetter.style.color = 'blue';

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
        setTimeout(() => {
            intervalId();
        }, 1000);
    });
}

document.querySelector('.submitButton').addEventListener('click', function () {
    console.log("hellooo");
    startTimer();
});
