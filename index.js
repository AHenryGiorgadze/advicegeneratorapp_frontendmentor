const curAdviceIDText = document.getElementsByClassName("curAdviceID")[0];
const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#getData');

var curAdviceID = 100;
 
 
resBtn.addEventListener('click', () => {
  getAdvice();
});
 
window.onload = () => {
  getAdvice();
};
 
 
 
function getAdvice() {
  curAdviceID = Math.floor(Math.random() * 220);
  fetch('https://api.adviceslip.com/advice/' + curAdviceID).then(response => {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    resDiv.innerHTML = `<p>"${Adviceobj.advice}"</p>`;
    curAdviceIDText.innerHTML = "ADVICE #"+curAdviceID;
  }).catch(error => {
    console.log(error);
  });
 
}