export default function lang() {
  // ?-----LANG OPTION RESPONSIVE------
  const $langMenu = document.querySelector('.lang-menu') as HTMLDivElement;
  const $langOptions = document.querySelector(
    '.lang-options'
  ) as HTMLUListElement;

  $langMenu.addEventListener('mouseenter', () => {
    $langOptions.style.display = 'block';
    $langOptions.style.opacity = '0';
    $langOptions.style.transition = 'opacity 1s';
    setTimeout(() => {
      $langOptions.style.opacity = '1';
    });
  });

  $langMenu.addEventListener('mouseleave', () => {
    $langOptions.style.opacity = '0';
    $langOptions.style.display = 'none';
  });

  const langMenuOptions = Object.values($langOptions.children);
  langMenuOptions.forEach(e => {
    e.addEventListener('click', () => {
      const lang = e.classList.item(0);
      if (location.pathname === '/' && lang === 'es') return;
      if (
        (location.pathname === '/' ||
          location.pathname === '/' + location.hash) &&
        lang === 'en'
      ) {
        window.location.href = `${location.protocol}//${location.host}/en`;
        return;
      }
      if (location.pathname === '/en/' && lang === 'en') return;
      if (
        (location.pathname === '/en/' ||
          location.pathname === '/en/' + location.hash) &&
        lang === 'es'
      ) {
        window.location.href = location.origin;
        return;
      }
    });
  });
}
