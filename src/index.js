import './sass/main.scss';

const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('#search'),
  container: document.querySelector('.container'),
  more: document.querySelector('#more'),
};

const onSubmit = e => {
  e.preventDefault();
  refs.container.innerHTML = '';
  // innerHTML
  const value = refs.input.value;

  fetch(`https://pixabay.com/api/?q=${value}&key=23129630-9573c017c45744d32c0b55f39`)
    .then(data => data.json())
    .then(result => renderCollection(result.hits))
    .catch(err => console.log(err));
};

let currentPage = 1;

// function createItem ({webformatURL, tags}) {
//   const article = `<article>
//     <img src='${webformatURL}' alt='${tags}'/>
//     <p>${tags}</p>
//   </article>
// `
// refs.container.insertAdjacentHTML('beforeend', article)
// }

function createItem({ webformatURL, likes, views, comments, downloads }) {
  const article = `<div class="photo-card">
  <img src="${webformatURL}" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
     ${likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
    ${views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${downloads}
    </p>
  </div>
</div>
`;

  refs.container.insertAdjacentHTML('beforeend', article);
}

function renderCollection(arr) {
  arr.forEach(el => createItem(el));
}

refs.form.addEventListener('submit', onSubmit);
refs.more.addEventListener('click', onSubmit);
