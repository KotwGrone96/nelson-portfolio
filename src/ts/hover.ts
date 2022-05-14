export default function hover() {
  // ?-----PORTFOLIO HOVER-----

  const portfolioItems: Array<any> = Object.values(
    document.querySelector('.portfolio-proyects')!.children
  );
  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.children[1].style.margin = 0;
    });
    item.addEventListener('mouseleave', () => {
      item.children[1].style.marginTop = '100%';
    });
  });
}
