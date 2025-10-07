// SDG Kids Game Logic
let currentScore = 0;
let currentQuizIndex = 0;
let currentRiddleIndex = 0;
let currentSDGIndex = 0;

// Screen navigation
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));

    // Show selected screen
    const target = document.getElementById(screenId);
    target.classList.remove('hidden');

    // Initialize screen content
    if (screenId === 'quiz') {
        showQuizQuestion();
    } else if (screenId === 'riddle') {
        showRiddle();
    } else if (screenId === 'learn') {
        showSDGInfo();
    } else if (screenId === 'score') {
        showScoreScreen();
    }
}

// Update score display
function updateScoreDisplay() {
    document.getElementById('totalScore').textContent = currentScore;
}

// Quiz functionality
function showQuizQuestion() {
    const question = quizQuestions[currentQuizIndex];
    document.getElementById('quizQuestion').innerHTML = `
        <p>${question.question}</p>
    `;

    const optionsHtml = question.options.map((option, index) => `
        <button onclick="checkQuizAnswer(${index})" class="quiz-btn" data-option="${index}">${option}</button>
    `).join('');

    document.getElementById('quizOptions').innerHTML = optionsHtml;

    // Add animation to options
    setTimeout(() => {
        const options = document.querySelectorAll('.quiz-btn');
        options.forEach((btn, index) => {
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 100);
}

function checkQuizAnswer(selectedIndex) {
    const question = quizQuestions[currentQuizIndex];
    const buttons = document.querySelectorAll('.quiz-btn');

    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        showFeedback(`🌟 Great job! You earned 10 points! SDG ${question.sdg} is proud of you!`, 'positive');
        currentScore += 10;
        updateScoreDisplay();
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
        showFeedback(`🤔 Hmm, the right answer is: ${question.options[question.correct]}. Try again!`, 'negative');
    }

    // Disable buttons and move to next question after delay
    buttons.forEach(btn => btn.onclick = null);
    currentQuizIndex = (currentQuizIndex + 1) % quizQuestions.length;

    setTimeout(() => {
        buttons.forEach(btn => {
            btn.classList.remove('correct', 'wrong');
            btn.style.opacity = '0.5';
            btn.style.transform = 'translateY(-10px)';
        });
        showQuizQuestion();
    }, 2500);
}

// Riddle functionality
function showRiddle() {
    const riddle = riddles[currentRiddleIndex];
    document.getElementById('riddleQuestion').innerHTML = `
        <p>${riddle.question}</p>
        <button onclick="showHint()" class="hint-btn" style="margin-top: 10px; font-size: 12px;">💡 Need a Hint?</button>
    `;
    document.getElementById('riddleAnswer').value = '';
}

function checkRiddleAnswer() {
    const userAnswer = document.getElementById('riddleAnswer').value.toLowerCase().trim();
    const riddle = riddles[currentRiddleIndex];
    if (userAnswer.includes(riddle.answer)) {
        showFeedback(`⭐ Brilliant! You got it right and earned 15 points! SDG ${riddle.sdg} is impressed!`, 'positive');
        currentScore += 15;
        updateScoreDisplay();
        currentRiddleIndex = (currentRiddleIndex + 1) % riddles.length;
        setTimeout(showRiddle, 2000);
    } else {
        showFeedback('🤷 Hmm, not quite right. Want to try again or need a hint?', 'negative');
    }
}

function showHint() {
    const riddle = riddles[currentRiddleIndex];
    document.getElementById('hintText').innerHTML = `<p>💡 Hint: ${riddle.hint}</p>`;
    showScreen('hint');
}

// Feedback system
function showFeedback(message, type) {
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = `feedback ${type}`;
    feedback.textContent = message;

    // Add to body
    document.body.appendChild(feedback);

    // Animate in
    setTimeout(() => feedback.classList.add('show'), 100);

    // Remove after 2.5 seconds
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => document.body.removeChild(feedback), 500);
    }, 2500);
}

// Learn section
function showSDGInfo() {
    const sdg = sdgs[currentSDGIndex];
    document.getElementById('sdgInfo').innerHTML = `
        <div class="sdg-card">
            <h3>${sdg.symbol} SDG ${sdg.id}: ${sdg.name}</h3>
            <p>${sdg.description}</p>
            <p>This goal helps make the world a better place for everyone!</p>
        </div>
    `;

    document.getElementById('funFact').innerHTML = `
        <div class="fun-fact">
            <h4>🤩 Fun Fact!</h4>
            <p>${sdg.funFact}</p>
        </div>
    `;
}

function showScoreScreen() {
    let scoreMessage;
    if (currentScore >= 100) {
        scoreMessage = `🏆 Amazing! You're a SDG Champion with ${currentScore} points! Keep helping make the world better!`;
    } else if (currentScore >= 50) {
        scoreMessage = `⭐ Great job! You have ${currentScore} points! You're learning all about SDGs!`;
    } else if (currentScore >= 10) {
        scoreMessage = `👍 Good start! You have ${currentScore} points. Try answering more questions!`;
    } else {
        scoreMessage = `🌟 You have ${currentScore} points! Play quizzes and solve riddles to earn more!`;
    }

    document.getElementById('scoreDisplay').innerHTML = `
        <div class="sdg-card" style="font-size: 24px; padding: 30px;">
            <h3 style="font-size: 32px;">Total Points Earned</h3>
            <p style="font-size: 28px; color: #FFD700;">🎯 ${currentScore}</p>
            <p style="font-size: 20px;">${scoreMessage}</p>
        </div>
    `;
}

function nextSDG() {
    // Add animation before changing
    const infoDiv = document.getElementById('sdgInfo');
    infoDiv.style.opacity = '0';
    infoDiv.style.transform = 'translateX(-20px)';

    setTimeout(() => {
        currentSDGIndex = (currentSDGIndex + 1) % sdgs.length;
        showSDGInfo();

        // Animate back in
        setTimeout(() => {
            infoDiv.style.opacity = '1';
            infoDiv.style.transform = 'translateX(0)';
        }, 100);
    }, 300);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function () {
    updateScoreDisplay();
    showScreen('menu');
});
