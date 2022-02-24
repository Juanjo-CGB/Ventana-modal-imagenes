/**
 * @fileoverview Ventana modal para carrusel de imágenes, fácil de usar en cualquier proyecto o sitio web.
 * @version 0.1
 * @author Juanjo Alonso Sánchez <jj.alonso@esla.com>
 * @copyright cgb@esla.com
 */
const contenedorImagenes = document.querySelector(".galeria__container");
//Desaturar imágenes
contenedorImagenes.addEventListener("mouseover", (event) =>{      
    if(event.target.classList.contains('galeria__imagen')){
        for (let imagen of contenedorImagenes.children) {
            imagen.classList.add("galeria__imagen--desaturar");
        }
    }
});
contenedorImagenes.addEventListener("mouseout", (event) =>{
    if(event.target.classList.contains('galeria__imagen')){
        for (let imagen of contenedorImagenes.children) {
            imagen.classList.remove("galeria__imagen--desaturar");
        }
    }
});
const body = document.querySelector("body");
const imagenesModal = document.querySelector(".modal");
const imagenModal = document.querySelector(".modal__imagen");
const imagenModalNombre = document.querySelector(".modal__nombre");
//Abrir modal
contenedorImagenes.addEventListener("click", (event) =>{    
    if(event.target.classList.contains('galeria__imagen')){
        let srcImagen = event.target.src;
        let nombreImagen = event.target.title.split("/").pop();
        imagenesModal.style.display = "flex";
        imagenModal.setAttribute("src", srcImagen);
        imagenModalNombre.innerHTML = nombreImagen;
        body.style.overflow = "hidden";
    } 
});
//Cerrar modal
imagenesModal.addEventListener("click", (event) =>{
    if(event.target.classList.contains('modal__icon')){
        event.preventDefault();
        event.target.parentNode.parentNode.parentNode.parentNode.style.display = "none";
        body.style.overflow = "auto";
    }  
});