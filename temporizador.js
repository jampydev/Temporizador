
// Temporizador|Timer
// Autor|Author:  @Jampydev
// Data|Date: 2025-02-24
// Linguagem|Language: JavaScript
// |Description: Temporizador com botões de iniciar, pausar, retomar e reiniciar. | Timer with start, pause, resume and reset buttons.


        let timer;
        let isRunning = false;
        let milliseconds = 0;

        const timerDisplay = document.getElementById("timer");
        const startButton = document.getElementById("start");
        const pauseButton = document.getElementById("pause");
        const resumeButton = document.getElementById("resume");
        const resetButton = document.getElementById("reset");
        


        function updateTimerDisplay() {

            let mins = Math.floor(milliseconds / 60000).toString().padStart(2, '0');
            let secs = Math.floor((milliseconds % 60000) / 1000).toString().padStart(2, '0');
            let millis = ((milliseconds % 1000) / 10).toFixed(0).padStart(2, '0');
            timerDisplay.textContent = `${mins}:${secs}:${millis}`;

        }

        
        function startTimer() {

            if (!isRunning) {
                isRunning = true;
                timerDisplay.classList.add("pulse");
                timer = setInterval(() => {
                    milliseconds += 10;
                    updateTimerDisplay();
                }, 10);
            }

        }
        

        function pauseTimer() {

            clearInterval(timer);
            isRunning = false;
            timerDisplay.classList.remove("pulse");

        }


        
        function resumeTimer() {

            if (!isRunning) {
                isRunning = true;
                timerDisplay.classList.add("pulse");
                timer = setInterval(() => {
                    milliseconds += 10;
                    updateTimerDisplay();
                }, 10);
            }

        }
        


        function resetTimer() {

            clearInterval(timer);
            isRunning = false;
            milliseconds = 0;
            updateTimerDisplay();
            timerDisplay.classList.remove("pulse");

        }
        


        startButton.addEventListener("click", startTimer);
        pauseButton.addEventListener("click", pauseTimer);
        resumeButton.addEventListener("click", resumeTimer);
        resetButton.addEventListener("click", resetTimer);
        
        updateTimerDisplay();
   