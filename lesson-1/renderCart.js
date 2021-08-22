const products = [
    {id: 1, title : 'Shirt', price: 2000},
    {id: 2, title : 'Socks', price: 300},
    {id: 3, title : 'Jacket', price: 1000},
    {id: 4, title : 'Shoes', price: 3000},
];

const renderProduct = (title, price) =>
                `<div class = product-item>
                    <img src="img/card_1.jpg" alt="">
                    <h3>${title}</h3>
                    <p>${price}</p>
                    <button>Купить</button>
                </div>`;

const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.container').innerHTML = productList.join('');
};                

renderPage(products);
//render