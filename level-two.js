/*
 * DOTS: Level Two
 *
 */
const dots = document.querySelectorAll('.js-dot');
const score = document.querySelector('.js-score');

dots.forEach(dot => {
    dot.addEventListener('click', handleDotClick);
});

let newScore = 0;

function handleDotClick(evt) {
    newScore += 10;
    if (newScore < 10) {
        score.innerHTML = '000' + newScore.toString();
    } else if (newScore < 100) {
        score.innerHTML = '00' + newScore.toString();
    } else if (newScore >= 100) {
        score.innerHTML = '0' + newScore.toString();
    }
    if (newScore >= 100) {
        document.body.classList.add('game-over');
    }
}
