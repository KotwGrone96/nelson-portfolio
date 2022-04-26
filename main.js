import './style.scss';
import validationForm from './form/form';

validationForm();

// ?-----NAV BUTTON RESPONSIVE------
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

Object.values(navResponsive.children).forEach(a => {
  a.addEventListener('click', () => {
    navResponsive.style.transition = 'all .5s';
    navResponsive.style.marginLeft = '-100vw';
    setTimeout(() => (navResponsive.style.transition = 'none'), 500);
  });
});

// ?-----LANG OPTION RESPONSIVE------
const $langMenu = document.querySelector('.lang-menu');
const $langOptions = document.querySelector('.lang-options');

$langMenu.addEventListener('mouseenter', () => {
  $langOptions.style.display = 'block';
  $langOptions.style.opacity = '0';
  $langOptions.style.transition = 'opacity 1s';
  setTimeout(() => {
    $langOptions.style.opacity = '1';
  });
});

$langMenu.addEventListener('mouseleave', () => {
  $langOptions.style.opacity = 0;
  $langOptions.style.display = 'none';
});

const langMenuOptions = Object.values($langOptions.children);
langMenuOptions.forEach(e => {
  e.addEventListener('click', () => {
    const lang = e.classList.item(0);
    const url = location.href;
    if (location.pathname === '/' && lang === 'es') return;
    if (location.pathname === '/' && lang === 'en') {
      window.location.href = url + lang;
      return;
    }
    if (location.pathname === '/en' && lang === 'en') return;
    if (location.pathname === '/en' && lang === 'es') {
      window.location.href = location.origin;
      return;
    }
  });
});

// ?-----HEADER SCROLL-----
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 25) {
    header.style.backgroundColor = '#004a8c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

// ?-----SCROLL NAV BUTTONS DESKTOP-----
const navDesktop = Object.values(
  document.querySelector('.nav-desktop').children
);

window.addEventListener('load', () => {
  const aboutSection = document.getElementById('about');
  const portfolioSection = document.getElementById('portfolio');
  const contactSection = document.getElementById('contact');
  const aboutSectionOffset = aboutSection.offsetTop - 90;
  const portfolioSectionOffset = portfolioSection.offsetTop - 100;
  const contactSectionOffset = contactSection.offsetTop - 100;

  if (window.scrollY < aboutSectionOffset) {
    navDesktop[0].style.color = '#3ca4ff';
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY < aboutSectionOffset) {
      navDesktop[0].style.color = '#3ca4ff';
    } else navDesktop[0].style.color = '#fff';

    if (
      window.scrollY >= aboutSectionOffset &&
      window.scrollY < portfolioSectionOffset
    ) {
      navDesktop[1].style.color = '#3ca4ff';
    } else navDesktop[1].style.color = '#fff';

    if (
      window.scrollY >= portfolioSectionOffset &&
      window.scrollY < contactSectionOffset
    ) {
      navDesktop[2].style.color = '#3ca4ff';
    } else navDesktop[2].style.color = '#fff';

    if (window.scrollY >= contactSectionOffset) {
      navDesktop[3].style.color = '#3ca4ff';
    } else navDesktop[3].style.color = '#fff';
  });

  navDesktop.forEach(a => {
    a.addEventListener('mouseenter', () => (a.style.color = '#3ca4ff'));
    a.addEventListener('mouseleave', () => (a.style.color = '#fff'));
  });
});

// ?-----PORTFOLIO HOVER-----

const portfolioItems = Object.values(
  document.querySelector('.portfolio-proyects').children
);
portfolioItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.children[1].style.margin = 0;
  });
  item.addEventListener('mouseleave', () => {
    item.children[1].style.marginTop = '100%';
  });
});

// ?-----FORM SECTION-----

const form = document.getElementById('form');
const handleSubmit = async e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const res = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json'
    }
  });
  if (res.ok) {
    alert('mensaje eviado');
    form.reset();
  } else {
    alert('Ha ocurrido un error');
  }
};

form.addEventListener('submit', handleSubmit);
