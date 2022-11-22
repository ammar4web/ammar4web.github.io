$(function () {
  var currentDate = new Date();
  $("#currentYear").text(currentDate.getFullYear());
});

// JavaScript
// Select Skills Selector
let ourSkills = document.querySelector(".skills");

// window.onscroll = function () {
//   // Skills Offset Top
//   let skillsOffsetTop = ourSkills.offsetTop;

//   // Skills Outer Height
//   let skillsOuterHeight = ourSkills.offsetHeight;

//   // Window Height
//   let windowHeight = this.innerHeight;

//   // Window ScrollTop
//   let windowScrollTop = this.pageYOffset;

//   if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
//     let allSkills = document.querySelectorAll(
//       ".skill-box .skill-progress span"
//     );

  //   allSkills.forEach((skill) => {
  //     skill.style.width = skill.dataset.progress;
  //   });
  // }
// };
