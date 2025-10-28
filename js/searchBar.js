const searchBar = document.getElementById('search-bar');
const searchBarBtn = document.getElementById('search-bar-btn');

export function inputSearchBar() {

    searchBar && searchBar.addEventListener('input', (event) => {
        if (event.currentTarget.value) {
            searchBarBtn.disabled = false;
            console.log(event.target.value);
        }
    });

}