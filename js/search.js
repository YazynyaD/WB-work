const search = function () {
    const searchInput = document.querySelector('.search-block > input');
    const searcBtn = document.querySelector('.search-block > button');
    
    searchInput.addEventListener('input', (event) => {
        const inputValue = event.target.value
        searcBtn.addEventListener('click', () => {
            console.log (inputValue)
        }
    )}); 
}

search();