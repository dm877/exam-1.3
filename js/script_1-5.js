let brandsData = [
    { title: 'Lenovo', link: '#', imageUrl: './imgs/brands/lenovo.svg'},
    { title: 'Sony', link: '#', imageUrl: './imgs/brands/sony.svg'},
    { title: 'Apple', link: '#', imageUrl: './imgs/brands/apple.svg'},
    { title: 'Acer', link: '#', imageUrl: './imgs/brands/acer.svg'},
    { title: 'ViewSonic', link: '#', imageUrl: './imgs/brands/view-sonic.svg'},
    { title: 'HP', link: '#', imageUrl: './imgs/brands/hp.svg'},
    { title: 'Samsung', link: '#', imageUrl: './imgs/brands/samsung.svg'},
    { title: 'Bosch', link: '#', imageUrl: './imgs/brands/bosch.svg'},
    { title: 'Xiaomi', link: '#', imageUrl: './imgs/brands/xiaomi.svg'},
    { title: 'Nokia', link: '#', imageUrl: './imgs/brands/nokia.svg'},
    { title: 'Huawei', link: '#', imageUrl: './imgs/brands/huawei.svg'}
];



let brandItemCount = 6;

let brandItemTemplate = document.querySelector('.brand-item-template').content;
let brandListWrapper = document.querySelector('.brand-list__brand-item-wrapper');



function mobileMod() {
    new Swiper('.brands__brand-list', {
    direction: 'horizontal',
    //loop: true,
    clickable: true,
    spaceBetween: 1,
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    width: 240,

    pagination: {
      el: '.brand-list__pagination',
    },
    observer: true,
    });

    for (let i = 0; i < brandItemCount; i++) {
        makeBrandItem(brandsData[i], true);
    }
    
}

function desktopMod() {
    let showMore = document.querySelector('.show-more');
    let additionalBrandItems = [];
    
    document.querySelector('.brands__brand-list').classList.remove('swiper');

    showMore.addEventListener('click', function () {
        if (showMore.textContent === 'Показать все') {
            for (let i = brandListWrapper.children.length - 1; i < brandsData.length; i++) {
                additionalBrandItems.push(makeBrandItem(brandsData[i]));
            }
            showMore.textContent = 'Скрыть';
        }
        else {
            while (additionalBrandItems.length > 0) {
                additionalBrandItems.pop().remove();
            }
            showMore.textContent = 'Показать все';
        }
    });
    for (let i = 0; i < brandItemCount; i++) {
        makeBrandItem(brandsData[i], false);
    }
}

function makeBrandItem(brandData, isMobile) {
    let brandItem = brandItemTemplate.cloneNode(true).querySelector('.brand-item');
    let brandItemLogo = brandItem.querySelector('.brand-item__logo');
    brandItemLogo.src = brandData.imageUrl;
    brandItemLogo.alt = brandData.title;

    let brandItemButton = brandItem.querySelector('.brand-item__button');
    brandItemButton.href = brandData.link;

    if(isMobile) {
        console.log(brandItem);
        brandListWrapper.appendChild(brandItem);
    }
    else {
        brandListWrapper.appendChild(brandItem);
    }
    return brandItem;
}

function setDisplayMod() {
    if(window.matchMedia('(min-width: 768px)').matches) { // от 768
        if (window.matchMedia( '(min-width: 1120px)').matches) { // от 1120 и больше
            brandItemCount = 8;
        }
        else { // от 768 до 1120
            brandItemCount = 6;
        }
        console.log('desktop mod');
        desktopMod();
    } else { // меньше 768
        console.log('mobile mod');
        brandItemCount = 8;
        mobileMod();
    }
}

setDisplayMod();
console.log(document.querySelector('.swiper-wrapper').children);
