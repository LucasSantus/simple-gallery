const base = document.getElementById('gallery');

const letter = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz'.split("");

    return characters[Math.floor(Math.random() * characters.length)]
}

const addNewImage = ( element, total ) => {
    for( let count = 1; count <= total; count++ ) {
        element.innerHTML += `<img src='https://source.unsplash.com/random?${ letter() }=${ count }' />`;
    }
}

addNewImage( base, 50 )
