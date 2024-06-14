const chalMenuBtn = document.getElementById('challenges-btn');
const chalBtnContainer = document.getElementById('challenges-btn-container');
const dropDownNav = document.querySelector('.nav-drop-down');

chalMenuBtn.addEventListener('click', (e) => {

  e.preventDefault();

  if (!chalBtnContainer.classList.contains('open')) {

    chalBtnContainer.classList.add('open');
    dropDownNav.style.display = 'block';
  } else {
    chalBtnContainer.classList.remove('open');
    dropDownNav.style.display = 'none';
  }


});