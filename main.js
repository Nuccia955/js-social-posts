/* Ricreiamo un feed social aggiungendo al layout di base fornito il nostro codice javascript in cui:
1. Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni (chiavi) necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
2. Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed. */

//1. posts array
const postsList = [
    {
        nomeAutore : 'Phil Mangione',
        imageProfileSrc : 'https://unsplash.it/300/300?image=15',
        dataPost : '2 secondi fa',
        testo : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imagePostSrc : 'https://unsplash.it/600/300?image=171',
        likes : '80',
    },
    {
        nomeAutore : 'Pinco Pallino',
        imageProfileSrc : 'https://picsum.photos/300',
        dataPost : '4 ore fa',
        testo : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, sequi labore iste a modi tempore eveniet unde quia eaque nobis rem obcaecati iusto earum incidunt, excepturi quo similique, facere ipsam.',
        imagePostSrc : 'https://picsum.photos/id/237/600/300',
        likes : '2010',
    },
    {
        nomeAutore : 'Ciccio Pasticcio',
        imageProfileSrc : 'https://picsum.photos/id/1010/300',
        dataPost : '3 giorni fa',
        testo : 'Quas quam qui sint tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad sit ipsum minima maiores consectetur blanditiis excepturi cumque fuga molestias illo est impedit quis, labore et enim, vel, vitae sunt?',
        imagePostSrc : 'https://picsum.photos/id/10/600/300',
        likes : '415',
    },
    {
        nomeAutore : 'Mario Rossi',
        imageProfileSrc : 'https://picsum.photos/id/1012/300',
        dataPost : '5 giorni fa',
        testo : 'Vel, facere. Suscipit, nobis neque dolorum dicta doloremque dolorem incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corporis ad delectus nisi fugiat dicta recusandae libero laboriosam blanditiis, illo dolores, fugit, a id esse quia dolorum animi ab voluptas!',
        imagePostSrc : 'https://picsum.photos/id/1004/600/300',
        likes : '303',
    },
    {
        nomeAutore : 'Maurizio Natalizio',
        imageProfileSrc : 'https://picsum.photos/id/1005/300',
        dataPost : '3 mesi fa',
        testo : 'Nostrum corporis ad delectus nisi fugiat dicta recusandae libero laboriosam blanditiis, illo dolores, fugit, a id esse quia dolorum animi ab voluptas! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, numquam sequi? Repellendus amet facilis, sint eveniet tempore ducimus. Labore obcaecati ipsa voluptates magni, aperiam commodi nostrum modi laboriosam magnam quod.',
        imagePostSrc : 'https://picsum.photos/id/1025/600/300',
        likes : '151',
    },
];

/* DOM refs */
const postContainer = document.querySelector('.posts-list');

//3. call genPostsList function
genPostsList(postContainer, postsList);

/*********
*FUNCTIONS
**********/
//2. define function gen posts list
function genPostsList (container, nameList) {
    container.innerHTML = '';
    for (let i = 0; i < nameList.length; i++) {
        const post = nameList[i];
        container.innerHTML += `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post.imageProfileSrc}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.nomeAutore}</div>
                    <div class="post-meta__time">${post.dataPost}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${post.testo}</div>
        <div class="post__image">
            <img src="${post.imagePostSrc}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up"   aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b>  persone
                </div>
            </div> 
        </div>    
        </div>`
    }
    return container;
}