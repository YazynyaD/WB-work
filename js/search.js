const search = function () {
    const searchInput = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > button');

    searchBtn.addEventListener('click', () => {
        console.log(searchInput.value);
    })
}

search();