import './../style.scss';
import navButtons from './ts/navButtons';
import scroll from './ts/scroll';
import hover from './ts/hover';
import form from './ts/form';
import lang from './ts/lang';

navButtons();
lang();
scroll();
hover();
window.addEventListener('load', form);
