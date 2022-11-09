'use strict'

const search = document.querySelector('.header__search')
const listItems = document.querySelectorAll('.header__list-item')

const checkText = e => {
	const text = e.target.value.toLowerCase()
	listItems.forEach(item => {
		if(item.textContent.toLowerCase().indexOf(text) === -1){
			item.style.display = 'none'
		}else{
			item.style.display = 'block'
		}
	})
}

search.addEventListener('keyup', checkText)




























