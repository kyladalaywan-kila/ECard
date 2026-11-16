const envelope=document.getElementById('envelope');
const openBtn=document.getElementById('openBtn');
const closeBtn=document.getElementById('closeBtn');
const hint=document.getElementById('hint');
const confetti=document.getElementById('confetti');

function celebrate(){
  const icons=['♡','✿','✨','🌸','💕'];
  for(let i=0;i<32;i++){
    const item=document.createElement('span');
    item.className='confetti-piece';
    item.textContent=icons[Math.floor(Math.random()*icons.length)];
    item.style.left=(Math.random()*100)+'%';
    item.style.animationDelay=(Math.random()*.8)+'s';
    item.style.animationDuration=(2+Math.random()*1.5)+'s';
    confetti.appendChild(item);
    item.addEventListener('animationend',()=>item.remove(),{once:true});
  }
}
function openLetter(){
  envelope.classList.add('open');
  openBtn.hidden=true;
  closeBtn.hidden=false;
  hint.textContent='Thank you for everything, Ma’am Roan! ♡';
  celebrate();
}
function closeLetter(){
  envelope.classList.remove('open');
  openBtn.hidden=false;
  closeBtn.hidden=true;
  hint.textContent='Tap the envelope to open your surprise!';
}
openBtn.addEventListener('click',openLetter);
envelope.addEventListener('click',()=>{if(!envelope.classList.contains('open'))openLetter()});
closeBtn.addEventListener('click',closeLetter);
