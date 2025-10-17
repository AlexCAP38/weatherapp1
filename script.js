const searchBar = document.querySelector('#search-bar');
searchBar && searchBar.addEventListener('input', callback);

function callback(event) {
    console.log(event.target.value);
}