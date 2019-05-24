// const option = document.querySelector('[data-course="estetica"]');
// const optionDetails = document.querySelector('[data-details=' + option.dataset.course + ']');

// option.addEventListener('click', () =>{
//   event.preventDefault();
//   if (optionDetails.classList.contains('hidden')) {
//     optionDetails.classList.remove('hidden');
//     console.log('Entrou no if');
//   } else {
//     optionDetails.classList.add('hidden');
//     console.log('Entrou no else');
//   }
// });

const allOptions = document.querySelectorAll('[data-course]');
const allOptionsDetails = document.querySelectorAll('[data-details]');

allOptions.forEach((item, index) => {
  item.addEventListener('click', () => {
    event.preventDefault();
    const courseDetails = allOptionsDetails[index];
    if (courseDetails.classList.contains('hidden')) {
      courseDetails.classList.remove('hidden');
      allOptionsDetails.forEach(courseItem => {
        if (courseItem !== courseDetails) {
          courseItem.classList.add('hidden');
          courseDetails.classList.remove('showing-animation');
        }
      });
      courseDetails.classList.add('showing-animation');
      console.log('Entrou no if');
    } else {
      courseDetails.classList.add('hidden');
      console.log('Entrou no else');
    }
  });
});