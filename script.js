document.addEventListener("DOMContentLoaded", function() {
    
    let count = 0;
    let timer = 5;
    let isTimerRunning = false;
    let timerInterval;

    const counter = document.getElementById("counter");
    const button = document.getElementById("clickButton");
    const timerDisplay = document.getElementById("timer");
    const restartButton = document.getElementById("restartButton");
    // Fonction pour démarrer le timer
    
    function startTimer() {
            if (!isTimerRunning) {
            isTimerRunning = true; // Empêche de redémarrer le timer
            const timerInterval = setInterval(() => {
                timer--;  // Décrémenter le temps
                timerDisplay.textContent = `Temps restant: ${timer}`;
                
                // Si le timer arrive à 0, arrête le jeu
                if (timer <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "Temps écoulé!";
                button.disabled = true; // Désactiver le bouton
                }
            }, 1000);
        }
    }

    function restartGame() {
        count = 0;  // Réinitialiser le compteur de clics
        timer = 5;  // Réinitialiser le timer à 10 secondes
        isTimerRunning = false;  // Réinitialiser l'état du timer
        clearInterval(timerInterval);  // Arrêter le timer actuel
        timerDisplay.textContent = `Temps restant: ${timer}`;  // Réinitialiser l'affichage du timer
        counter.textContent = count;  // Réinitialiser l'affichage du compteur
        button.disabled = false;  // Réactiver le bouton
    }

    button.addEventListener("click", () => {
        if (!isTimerRunning) {
            startTimer();  // Démarrer le timer lors du premier clic
        }
        count++;
        counter.textContent = count;
    });

    // Ajouter un écouteur d'événement pour le bouton de redémarrage
    restartButton.addEventListener("click", restartGame);

})

