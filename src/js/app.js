const productos = document.querySelector('#productos');
const modal = document.querySelector('#modal');

eventListeners();


function eventListeners(){
    productos.addEventListener('click', productObject);
}


function productObject(e){
    e.preventDefault();

    const product = e.target;

    if(product.classList.contains('btn')){
        console.log(e.target.id);

        modal.innerHTML = `
            <div id="modal" class="modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <h1>${e.target.id}<h1>
                    </div>
                </div>
            </div>
        `
    }
}