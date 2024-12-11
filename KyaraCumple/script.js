// Variables globales
let currentIndex = 0;  // Índice de la imagen actual
const images = document.querySelectorAll('.slider img');  // Obtener todas las imágenes del slider

// Función para actualizar la posición del slider
function updateSlider() {
    const totalImages = images.length;

    // Alinear el slider para mostrar las imágenes correctas
    const offset = -(currentIndex * (images[0].clientWidth + 40));  // Desplazamiento ajustado para todas las imágenes
    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;

    // Asegurarse de que la imagen central esté más grande
    images.forEach((img, index) => {
        img.classList.remove('middle');  // Eliminar la clase 'middle' de todas las imágenes
        if (index === currentIndex) {  // Imagen central
            img.classList.add('middle');  // Añadir la clase 'middle' a la imagen central
        }
    });
}

// Función para ir a la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;  // Incrementar y envolver el índice
    updateSlider();
}

// Función para ir a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;  // Decrementar y envolver el índice
    updateSlider();
}

// Agregar eventos a los botones de navegación
document.querySelector('.next-btn').addEventListener('click', nextImage);
document.querySelector('.prev-btn').addEventListener('click', prevImage);

// Inicializar el slider mostrando las imágenes correctamente
updateSlider();

// Configuración inicial
const photoMosaic = document.getElementById('photo-mosaic');
const updateButton = document.getElementById('update-photos');

// Ruta a la carpeta de imágenes
const photoFolder = 'img/mosaicos/';

// Número total de imágenes disponibles en la carpeta
const totalPhotos = 74;  // Total de 100 fotos

// Función para obtener un conjunto aleatorio de imágenes
function getRandomPhotos(numPhotos) {
    const selectedPhotos = new Set();
    while (selectedPhotos.size < numPhotos) {
        const randomIndex = Math.floor(Math.random() * totalPhotos) + 1;
        // Usamos el formato n.jpg para los nombres de las imágenes
        selectedPhotos.add(`${photoFolder}${randomIndex}.jpg`);
    }
    return Array.from(selectedPhotos);
}

// Función para actualizar el mosaico
function updateMosaic() {
    const randomPhotos = getRandomPhotos(8); // Mostrar 8 fotos
    const photoMosaic = document.getElementById('photo-mosaic');
    photoMosaic.innerHTML = ''; // Limpia el mosaico
    randomPhotos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo;
        imgElement.alt = 'Foto del mosaico';
        photoMosaic.appendChild(imgElement);
    });
}

// Evento para el botón de actualizar
document.getElementById('update-photos').addEventListener('click', updateMosaic);

// Inicializa el mosaico con imágenes aleatorias al cargar la página
updateMosaic();

function changeVideo() {
    var videoNumber = document.getElementById("video-number").value;
    var videoSource = document.getElementById("video-source");
    var videoPlayer = document.getElementById("video-player");

    // Verifica que el número ingresado esté entre 1 y 22
    if (videoNumber >= 1 && videoNumber <= 22) {
        // Ruta del video según el número ingresado
        var videoUrl = "videos/" + videoNumber + ".mp4";
        videoSource.src = videoUrl;
        videoPlayer.load();  // Carga el nuevo video
        videoPlayer.play();  // Reproduce el video automáticamente
    } else {
        alert("Por favor, ingresa un número válido entre 1 y 22.");
    }
}

// Activar carrusel automático
var myCarousel = document.querySelector('#carouselExample');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000, // Tiempo en milisegundos entre cada slide
  ride: 'carousel' // Activar la opción de que el carrusel comience automáticamente
});
