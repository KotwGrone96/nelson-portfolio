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

//?-----PORTFOLIO HOVER-----

const portfolioItems = Object.values(
  document.querySelector('.portfolio-proyects').children
);
portfolioItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.children[1].style.margin = 0;
  });
  item.addEventListener('mouseleave', () => {
    item.children[1].style.marginTop = '100%';
  });
});

//?-----FORM SECTION-----

const form = document.getElementById('form');
const handleSubmit = async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const res = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  });
  if (res.ok) {
    alert('mensaje eviado');
    form.reset();
    return;
  } else {
    alert('Ha ocurrido un error');
  }
};

form.addEventListener('submit', handleSubmit);
