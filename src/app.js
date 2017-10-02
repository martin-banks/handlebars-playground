/* globals Handlebars */
import context from './content/index.js'
// import * as headerPartial from './layouts/partials/header.handlebars'

// Handlebars.registerPartial('./layouts/partials/header', '{{header}}')
// Handlebars.registerPartial('header', document.querySelector('#mypartial'))
Handlebars.partials = Handlebars.templates
console.log(Handlebars)
document.querySelector('#app').innerHTML = Handlebars.templates.layout(context)

const pars = document.querySelectorAll('p')
function clickPar() {
	if (this.classList.contains('red')) {
		this.classList.remove('red')
	} else {
		this.classList.add('red')
	}
}
pars.forEach(p => p.addEventListener('click', clickPar))
