const getStoredCart = () => {
    const storedCardString = localStorage.getItem('cart');

    if (storedCardString) {
        return JSON.parse(storedCardString);
    }
    return [];
}

const saveCartToDB = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}


const addToDB = (id) => {
    const cart = getStoredCart();


    const newCart = [...cart, id]
    saveCartToDB(newCart);
}

const removeFromLocalStorage = (id) => {
    const cart = getStoredCart();
    console.log(cart, id);

    const newCart = cart.filter(item => item !== id);
    console.log(newCart);
    saveCartToDB(newCart);
}


export { addToDB, getStoredCart, saveCartToDB, removeFromLocalStorage }
