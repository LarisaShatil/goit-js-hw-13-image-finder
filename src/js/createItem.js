export function createItem({ webformatURL, likes, views, comments, downloads }) {
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
`
document.querySelector('.container').insertAdjacentHTML('beforeend', article);
}
