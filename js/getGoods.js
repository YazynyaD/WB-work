const getGoods = function () {
    const links = document.querySelectorAll('.navigation-link');
    

    const getData = () => {
        fetch('/db/db.json')
        .then((res) => res.json())
        .then ((data) => {
            console.log(data);
        })
    };
    
    links.forEach(function(link) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    });
    
    localStorage.setItem('goods', JSON.stringify({name=''}))
};

getGoods();