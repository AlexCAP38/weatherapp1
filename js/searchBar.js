const searchBar = document.getElementById('search-bar');
const searchBarBtn = document.getElementById('search-bar-btn');
const searchForm = document.getElementById('search-form');

export function inputSearchBar() {

    searchBarBtn.disabled = false;

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(searchBar.value);
    })
}