const searchBar = document.getElementById('search-bar');

export function inputSearchBar() {

    searchBar && searchBar.addEventListener('input', (event) => {
        console.log(event.target.value);
    });

}