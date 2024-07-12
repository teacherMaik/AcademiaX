const hamBtn = document.getElementById('hamburger-btn');
const hamContainer = document.getElementById('hamburger');
const hamLineTop = document.querySelector('.hamburger-line.top');
const hamLineMid = document.querySelector('.hamburger-line.mid');
const hamLineBot = document.querySelector('.hamburger-line.bot');
const dropNavMenu = document.getElementById('drop-nav-menu');

function delay(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));
}

hamBtn.addEventListener('click', async (e) => {

  if (hamContainer.classList.contains('nav-open')) {

    dropNavMenu.classList.toggle('nav-open');
    await delay(500);
    hamContainer.classList.toggle('nav-open');
    hamLineTop.classList.toggle('nav-open');
    hamLineBot.classList.toggle('nav-open');
    await delay(420);
    hamLineMid.classList.toggle('nav-open');
  } else {

    hamContainer.classList.toggle('nav-open');
    hamLineMid.classList.toggle('nav-open');
    /* await delay(140); */
    hamLineTop.classList.toggle('nav-open');
    hamLineBot.classList.toggle('nav-open');
    await delay(200);
    dropNavMenu.classList.toggle('nav-open');
  }
});