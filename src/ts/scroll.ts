export default function scroll() {
  // ?-----HEADER SCROLL-----
  const header = document.querySelector('header') as HTMLDivElement;
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 25) {
      header.style.backgroundColor = '#004a8c';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });

  // ?-----SCROLL NAV BUTTONS DESKTOP-----
  const navDesktopChildren = document.querySelector('.nav-desktop')!.children;
  const navDesktop: Array<any> = Object.values(navDesktopChildren);

  window.addEventListener('load', () => {
    const aboutSection = document.getElementById('about') as HTMLDivElement;
    const portfolioSection = document.getElementById(
      'portfolio'
    ) as HTMLDivElement;
    const contactSection = document.getElementById('contact') as HTMLDivElement;
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

  // ?-----SCROLL ANIMATION SECTION-----

  const $portfolioSection = document.getElementById(
    'portfolio'
  ) as HTMLDivElement;

  const $portfolioH2 = $portfolioSection.children[0] as HTMLHeadingElement;
  const $portfolioProjects = $portfolioSection.children[1] as HTMLDivElement;
  const $projectOne = $portfolioProjects.children[0] as HTMLDivElement;
  const $projectTwo = $portfolioProjects.children[1] as HTMLDivElement;

  window.addEventListener('scroll', () => {
    let $portfolioSectionScroll: number = $portfolioSection.offsetTop;
    let displayHeight: number = window.innerHeight;

    if (window.scrollY >= $portfolioSectionScroll - displayHeight + 200) {
      $portfolioH2.style.transition = 'transform 1s';
      $portfolioH2.style.transform = 'scale(1)';

      $projectOne.style.transition = 'all 1.5s';
      $projectOne.style.opacity = '1';
      $projectOne.style.transform = 'translate(0)';

      $projectTwo.style.transition = 'all 1.5s';
      $projectTwo.style.opacity = '1';
      $projectTwo.style.transform = 'translate(0)';
    }
  });
}
