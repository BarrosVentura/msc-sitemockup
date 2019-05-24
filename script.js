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
    } else {
      courseDetails.classList.add('hidden');
    }
  });
});