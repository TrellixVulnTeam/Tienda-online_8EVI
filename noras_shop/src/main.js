import {headerHtml} from '../src/templates/header.js';
import {categoriasHtml} from './templates/categorias.js';
import {footerHtml} from './templates/footer.js'

const header = document.getElementById('header-main')
header.innerHTML = headerHtml;
console.log('despues de la asignacion')



//cargar categorias
const categorias = document.getElementById('categorias-main');
categorias.innerHTML = categoriasHtml;



//cargadno footer

const footer = document.getElementById('footer');
footer.innerHTML = footerHtml;