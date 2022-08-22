let brandsData = [
    { title: 'Apple', link: '#', imageUrl: '../imgs/brands/apple.svg'},
    { title: 'Sony', link: '#', imageUrl: '../imgs/brands/sony.svg'},
    { title: 'Lenovo', link: '#', imageUrl: '../imgs/brands/lenovo.svg'},
    { title: 'Apple', link: '#', imageUrl: '../imgs/brands/apple.svg'},
    { title: 'Sony', link: '#', imageUrl: '../imgs/brands/sony.svg'},
    { title: 'Lenovo', link: '#', imageUrl: '../imgs/brands/lenovo.svg'}
];

let brandItemTemplate = document.querySelector('.brand-items__brand-item-template').content;
let brandItems = document.querySelector('.brand-list__brand-items');

let showMore = document.querySelector('.show-more');
showMore.addEventListener('click', function () {
    if (showMore.textContent === 'Показать все') {
        for(let i = brandItems.children.length-1; i < brandsData.length; i++) {
            makeBrandItem(brandsData[i]);
        }
        showMore.textContent = 'Скрыть'; 
    }
    else {
        for(let i = brandItems.children.length-1; i < brandsData.length; i++) {
            makeBrandItem(brandsData[i]);
        }
        showMore.textContent = 'Показать все';
    }
});


function makeBrandItem(brandData) {
    let brandItem = brandItemTemplate.cloneNode(true).querySelector('.brand-item');
    let brandItemLogo = brandItem.querySelector('.brand-item__logo');
    brandItemLogo.src = brandData.imageUrl;
    brandItemLogo.alt = brandData.title;

    let brandItemButton = brandItem.querySelector('.brand-item__button');
    brandItemButton.href = brandData.link;

    brandItems.appendChild(brandItem);
    return brandItem;
}


console.log(makeBrandItem(brandsData[0]));
console.log(makeBrandItem(brandsData[1]));
console.log(makeBrandItem(brandsData[2]));