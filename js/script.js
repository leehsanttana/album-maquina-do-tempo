function changeBgTop() {
    const divTop = document.querySelector('.top');

    window.addEventListener('scroll', () =>{
        if(window.scrollY > 0){
            divTop.classList.add('bg-purple');
        } else {
            divTop.classList.remove('bg-purple');
        }
    });
}

changeBgTop();

function tabs(){
    const tabMenu = document.querySelectorAll('.js-tab-menu li');
    const tabContent = document.querySelectorAll('.js-tab-content section');

    tabMenu[0].classList.add('ativo');
    tabContent[0].classList.add('ativo');


    function activeTab(i){
        tabContent.forEach((section) =>{
            section.classList.remove('ativo');
        });

        tabContent[i].classList.add('ativo');
    }

    function activeItemMenu(i){
        tabMenu.forEach((li) =>{
            li.classList.remove('ativo');
        });

        tabMenu[i].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, i) => {
        itemMenu.addEventListener('click', () => {
            activeTab(i);
            activeItemMenu(i);
        });

    });
}

tabs();

function showPage() {
    const pageScroll = document.querySelectorAll('.js-scroll');
    pageScroll[0].classList.add('ativo');

    function scrollSection() {
        
        pageScroll.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - 900;
            
            if(sectionTop < 0){
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo');
            }

        });
    }

    window.addEventListener('scroll', scrollSection);
}

showPage();

const imageAlbum = document.querySelector('.img-album');
const descricaoMain = document.querySelector('.descricao');
const h1Description = descricaoMain.querySelector('h1');

const lg = window.matchMedia('(max-width: 992px)').matches;

if(lg){
    console.log('teste')
}



