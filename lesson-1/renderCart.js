class GoodsList {
    constructor(div = '.container'){
        this.div = div;
        this.products = [];
        this.allProducts = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.products = [
            {id: 1, title : 'Shirt', price: 2000},
            {id: 2, title : 'Socks', price: 300},
            {id: 3, title : 'Jacket', price: 1000},
            {id: 4, title : 'Shoes', price: 3000},
        ];
    }

    renderPage() {
        const block = document.querySelector(this.div);
        for(let product of this.products){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.renderDiv())
        }
    }

    getSum() {
        let s = 0;
        this.products.forEach(item=>{
            s += item.price;
        })
    }

}

class ProductItem {
    constructor(product, img = ''){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    renderDiv() {
        return `<div class = "product-item" data-id = "${this.id}">
                <img src="${this.img}" alt="Some img">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button>Купить</button>
                </div>`
    }
                
}

let list = new GoodsList();
list.renderPage();
list.getSum();

class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
    
    render(){
        
    }
}

class ElemBasket {
    render(){}

}