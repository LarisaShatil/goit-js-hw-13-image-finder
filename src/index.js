import './sass/main.scss';
import { createItem } from './js/createItem.js';
import LoadMoreBtn from './js/loadMore.js';
import fetchPictures from './js/apiService.js';
// import * as basicLightbox from 'basiclightbox';

const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('#search'),
  container: document.querySelector('.container'),
  moreBtn: document.querySelector('#more'),
  // gallery: document.querySelector('.gallery')
}
  
const loadMoreBtn = new LoadMoreBtn({
  selector: ('#more'),
  hidden: true,
});

const newPictures = new fetchPictures();

refs.form.addEventListener('submit', onSubmit);
loadMoreBtn.refs.button.addEventListener('click', onLoadMoreBtn);
// refs.gallery.addEventListener('click', onOpenModal)



function onSubmit(e) {
  e.preventDefault();

  newPictures.searchQuery = e.currentTarget.elements.query.value;

  loadMoreBtn.show();
  newPictures.resetPage();

  clearContainer();
  bringPictures();
}

function onLoadMoreBtn() {
    newPictures.fetchPictures()
    .then(pictures => { renderCollection(pictures) })
    .then(() => refs.moreBtn.scrollIntoView({ behavior: 'smooth', block: 'end' }))
    .catch(err => console.log(err));
}

// function onOpenModal(event) {
//     if (event.target.nodeName !== 'IMG') return;
//   console.log("modal");
//     const src = event.target.dataset.source;
//     const instance = basicLightbox.create(`
//     <img src=${src} width="800" height="600">`)
//     instance.show()
// }

function bringPictures() {
  newPictures.fetchPictures()
    .then(pictures => { renderCollection(pictures) })
    .catch(err => console.log(err));
}

async function scrollToMoreBtn() {
  const pictures = await bringPictures();
  console.log('1');
  refs.moreBtn.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function renderCollection(arr) {
  console.log(arr);
  arr.forEach(el => createItem(el));
}

function clearContainer() {
  refs.container.innerHTML = '';
}

