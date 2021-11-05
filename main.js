/* Ricreiamo un feed social aggiungendo al layout di base fornito il nostro codice javascript in cui:
1. Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni (chiavi) necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
2. Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed. */

//1. posts array
const posts = [
    {
        nomeAutore : 'Phil Mangione',
        imageProfileSrc : 'https://unsplash.it/300/300?image=15',
        dataPost : '4 mesi fa',
        testo : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imagePostSrc : 'https://unsplash.it/600/300?image=171',
        likes : '80',
    },
    {
        nomeAutore : 'Pinco Pallino',
        imageProfileSrc : 'https://unsplash.it/300/300?image=18',
        dataPost : '4 mesi fa',
        testo : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imagePostSrc : 'https://unsplash.it/600/300?image=456',
        likes : '2010',
    },
    {
        nomeAutore : 'Ciccio Pasticcio',
        imageProfileSrc : 'https://unsplash.it/300/300?image=129',
        dataPost : '4 mesi fa',
        testo : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imagePostSrc : 'https://unsplash.it/600/300?image=121',
        likes : '415',
    },
    {
        nomeAutore : 'Mario Rossi',
        imageProfileSrc : 'https://unsplash.it/300/300?image=150',
        dataPost : '4 mesi fa',
        testo : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imagePostSrc : 'https://unsplash.it/600/300?image=156',
        likes : '303',
    },
    {
        nomeAutore : 'Maurizio Natalizio',
        imageProfileSrc : 'https://unsplash.it/300/300?image=45',
        dataPost : '4 mesi fa',
        testo : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imagePostSrc : 'https://unsplash.it/600/300?image=1001',
        likes : '151',
    },
]