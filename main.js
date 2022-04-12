import './style.scss';

//?-----NAV BUTTON------
const openBtn = document.getElementById('nav-open');
const closeBtn = document.getElementById('nav-close');
const navResponsive = document.getElementById('nav-responsive');

openBtn.addEventListener('click', () => {
  navResponsive.style.transition = 'all .5s';
  navResponsive.style.margin = 0;
  setTimeout(() => (navResponsive.style.transition = 'none'), 500);
});

closeBtn.addEventListener('click', () => {
  navResponsive.style.transition = 'all .5s';
  navResponsive.style.marginLeft = '-100vw';
  setTimeout(() => (navResponsive.style.transition = 'none'), 500);
});

Object.values(navResponsive.children).forEach((a) => {
  a.addEventListener('click', () => {
    navResponsive.style.transition = 'all .5s';
    navResponsive.style.marginLeft = '-100vw';
    setTimeout(() => (navResponsive.style.transition = 'none'), 500);
  });
});

//?-----HEADER SCROLL-----
const header = document.querySelector('header');
const navDesktop = Object.values(
  document.querySelector('.nav-desktop').children
);

navDesktop[0].style.color = '#3ca4ff';

window.addEventListener('scroll', () => {
  if (window.scrollY >= 25) {
    header.style.backgroundColor = '#004a8c';
    // navDesktop.forEach((a) => {
    //   a.style.color = '#fff';
    // });
  } else {
    header.style.backgroundColor = 'transparent';
    // navDesktop.forEach((a) => {
    //   a.style.color = '#000';
    // });
  }
});

// //?-----NAV HOVER BUTTONS-----
// navDesktop.forEach((a) => {
//   a.addEventListener('mouseenter', () => {
//     if (window.scrollY >= 25) {
//       a.style.color = '#3ca4ff';
//       return;
//     }
//     a.style.color = '#004a8c';
//   });
//   a.addEventListener('mouseleave', () => {
//     if (window.scrollY >= 25) {
//       a.style.color = '#fff';
//       return;
//     }
//     a.style.color = '#000';
//   });
// });
