const button1 = document.querySelector('.about_picture_man'); 
const elementsGroup1 = document.querySelectorAll('.about_picture_man, .about_picture_salad, .about_picture_round, .about_picture_ellipse'); 
 
button1.addEventListener('click', () => {
  elementsGroup1.forEach(el => {
    el.classList.toggle('active');
  });
});