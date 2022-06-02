var principal = document.querySelector(".input");
var agregar = document.querySelector(".boton-agregar");
var container = document.querySelector(".container");


class item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)

    }
    crearDiv(nuevaTarea) {
        var inputItem = document.createElement("input");

        inputItem.disabled = true;
        inputItem.classList.add("item-input")
        inputItem.value = nuevaTarea;


        var Item = document.createElement("div");
        Item.classList.add("item")



        var btnEditar = document.createElement("button");
        btnEditar.innerHTML = '<i class="fas fa-lock"></i>'
        btnEditar.classList.add("boton-editar")

        var btnRemover = document.createElement("button");
        btnRemover.innerHTML = '<i class="fas fa-trash"></i>'
        btnRemover.classList.add("boton-remover")

        Item.appendChild(inputItem);
        Item.appendChild(btnEditar);
        Item.appendChild(btnRemover);

        container.appendChild(Item);




        btnEditar.addEventListener("click", function () {
            if (inputItem.disabled === true) {
                inputItem.disabled = false
                btnEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            } else {
                inputItem.disabled = true
                btnEditar.innerHTML = "<i class='fas fa-lock'></i>"
            }
        });

        
        btnRemover.addEventListener("click", function () {
            container.removeChild(Item)
        });



    }
}

agregar.addEventListener("click", chequearInput)
function chequearInput() {
    if (principal.value) {
        var nuevaTarea = principal.value;
        new item(nuevaTarea);
        principal.value = "";
    }
}



