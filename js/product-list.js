(function() {

    const products = [
        {
            id: "1",
            title: "Baby Yoda",
            imgUrl: "img/baby-yoda.svg",
            description: "Lorem ipsum .....",
            price: 10.99
        },
        {
            id: "2",
            title: "Banana",
            imgUrl: "img/banana.svg",
            description: "Lorem ipsum .....",
            price: 9.99
        },
        {
            id: "3",
            title: "Girl",
            imgUrl: "img/girl.svg",
            description: "Lorem ipsum .....",
            price: 8.99
        },
        {
            id: "4",
            title: "Viking",
            imgUrl: "img/viking.svg",
            description: "Lorem ipsum .....",
            price: 6.99
        }
    ];

    function renderProducts(products) {
        const productsContainer = document.querySelector('.products__list');
        for (const product of products) {
            productsContainer.innerHTML += `
                <article class="product">
                    <img class="product__img" src="${product.imgUrl}" alt="${product.title}">
                    <h3 class="product__title">${product.title}</h3>
                    <p class="product__description">${product.description}</p>
                    <div class="product__buttons">
                        <button class="button button-card">Info</button>
                        <button class="button button-card">${product.price} - Buy</button>
                    </div>
                </article>`;
        }
    }

    renderProducts(products);
})();