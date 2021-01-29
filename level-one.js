/*
 * DOTS: Level One
 *
 */
//Target the dot in the scoreboard
const dots = document.querySelector('.js-dot');
const score = document.querySelector('.js-score');
//Add an event listener
dots.addEventListener('click', handleDotClick);

let newScore = 0;
//Define callback function
function handleDotClick(evt) {
    //if user clicks on dot add 10 points to score
    newScore += 10;
    if (newScore < 10) {
        //update innerText of the scoreboard
        score.innerHTML = '000' + newScore.toString();
    } else if (newScore < 100) {
        score.innerHTML = '00' + newScore.toString();
    } else if (newScore >= 100) {
        score.innerHTML = '0' + newScore.toString();
    }
    //score greater or equal to a 100 display winner notification
    if (newScore >= 100) {
        document.body.classList.add('game-over');
    }
}
