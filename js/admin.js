let formAdd = document.querySelector('#formAdd')
let inputImg =  document.querySelector('#inputImg')
let inputTitle = document.querySelector('#inputTitle')
let inputVideo = document.querySelector('#inputVideo')
formAdd.onsubmit = function (event) {
	event.preventDefault()
	let obj = {
		title : inputTitle.value,
		img : inputImg.value,
		sourceLink : inputVideo.value
	}
	films.push(obj)
	window.localStorage.setItem('data',JSON.stringify(films))

	inputTitle.value = null
	inputImg.value = null
	inputVideo.value = null
}
console.log(films)