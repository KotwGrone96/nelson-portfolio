// ?-----NAV BUTTON RESPONSIVE------

export default function navButtons() {
  const openBtn = document.getElementById('nav-open') as HTMLImageElement;
  const closeBtn = document.getElementById('nav-close') as HTMLImageElement;
  const navResponsive = document.getElementById(
    'nav-responsive'
  ) as HTMLDivElement;

  openBtn.addEventListener('click', () => {
    navResponsive.style.transition = 'all .5s';
    navResponsive.style.margin = '0';
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
}
