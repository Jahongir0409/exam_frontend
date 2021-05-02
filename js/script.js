
let listVideos = document.querySelector('.list-videos')
// let imgIframe = document.querySelector('.iframe-image')



function filmsRenderer (array) {
	listVideos.innerHTML = null
	for(element of array) {
		let li = document.createElement('li')
		let divVideo = document.createElement('div')
		let imgIframe = document.createElement('img')
		let divTxWr = document.createElement('div')
		let imgVideo = document.createElement('img')
		let h3 = document.createElement('h3')
		let modalOpen = document.createElement('ion-icon')
		let elWrapper = document.createElement('div')
		let modalExit = document.createElement('ion-icon')
		let modalEl = document.createElement('div')
		let removeCircle = document.createElement('ion-icon')
		let spanDel = document.createElement('span')
		let divTxExtra = document.createElement('div')
		let vidText1 = document.createElement('span')
		let vidText2 = document.createElement('span')
		let vidText3 = document.createElement('span')

		li.classList.add('list-videos-item')
		divVideo.classList.add('div-video')
		imgIframe.classList.add('iframe-image')
		divTxWr.classList.add('videos-text-wrapper')
		imgVideo.classList.add('img-videos')
		h3.classList.add('heading-tertiary')
		modalOpen.classList.add('icon-ellipsis')
		elWrapper.classList.add('elipsis-wrapper')
		elWrapper.classList.add('plus-remove')
		modalExit.classList.add('modal-icon')
		modalEl.classList.add('modal-elipsis')
		removeCircle.classList.add('modal-icon')
		divTxExtra.classList.add('videos-text-extra')
		vidText1.classList.add('videos-watching')
		vidText2.classList.add('videos-watching')
		vidText3.classList.add('videos-watching')

		modalOpen.id = "modalOpen"
		modalExit.id = "modalExit"


		modalOpen.setAttribute('name', 'ellipsis-vertical')
		modalExit.setAttribute('name', 'close')
		removeCircle.setAttribute('name', 'remove-circle')

		divVideo.innerHTML = element.sourceLink
		imgIframe.setAttribute("src" , element.img)
		imgVideo.setAttribute("src" , element.img)

		h3.textContent = element.title
		spanDel.textContent = "Delete"
		vidText1.textContent = "From Channel"
		vidText2.textContent = "20 thous. times watched"
		vidText3.textContent = "6 months ago."

		modalEl.appendChild(removeCircle)
		modalEl.appendChild(spanDel)

		elWrapper.appendChild(modalExit)
		elWrapper.appendChild(modalEl)

		divTxWr.appendChild(imgVideo)
		divTxWr.appendChild(h3)
		divTxWr.appendChild(modalOpen)
		divTxWr.appendChild(elWrapper)

		divTxExtra.appendChild(vidText1)
		divTxExtra.appendChild(vidText2)
		divTxExtra.appendChild(vidText3)

		li.appendChild(divVideo)
		li.appendChild(imgIframe)
		li.appendChild(divTxWr)
		li.appendChild(divTxExtra)
		listVideos.appendChild(li)

		modalOpen.onclick = () => {
		elWrapper.classList.remove('plus-remove')
		}
		modalExit.onclick = () => {
		elWrapper.classList.add('plus-remove')
		}
		imgIframe.onclick =  () => {
		imgIframe.classList.add('plus-remove')
		}	
	}
}
filmsRenderer(films)


