const imgShowcase = document.getElementById('img-showcase');
const imgMini = document.querySelectorAll('.img-mini');

imgMini.forEach(img => {

  img.addEventListener('click', (e) => {

    imgMini.forEach(img => {

      img.classList.remove('active-img');
    })

    if (img.src.search('origami') > 0) {

      console.log("window is " + window.innerWidth);
      console.log("origami found");
      img.classList.add('active-img');
      imgShowcase.innerHTML = '<img src="img-reto-assets/origami_1600x1000.png">';
    } else if (img.src.search('paddle') > 0) {

      console.log("window is " + window.innerWidth);
      console.log("Paddle found");
      img.classList.add('active-img');
      imgShowcase.innerHTML = '<img src="img-reto-assets/paddle_1600x900.jpg">';
    } else if (img.src.search('juggling') > 0) {

      console.log("window is " + window.innerWidth);
      console.log("Juggling found");
      img.classList.add('active-img');
      imgShowcase.innerHTML = '<img src="img-reto-assets/juggling_1600x900.jpg">';
    } else if (img.src.search('food') > 0) {

      console.log("window is " + window.innerWidth);
      console.log('Food found');
      img.classList.add('active-img');
      imgShowcase.innerHTML = '<img src="img-reto-assets/food_1600x900.jpg">';
    }

  })
})