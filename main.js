
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  function drag2(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drag3(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drag4(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drag5(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drag6(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drag7(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drag8(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  




  function teste(){
// Array de URLs das imagens
const imageUrls = [
  'imagem1.jpg',
  'imagem2.jpg',
  'imagem3.jpg',
  'imagem4.jpg',
  'imagem5.jpg',
  'imagem6.jpg',
  'imagem7.jpg',
  'imagem8.jpg'
 

];

const selectButton = document.getElementById('selectButton');
const selectedImage = document.getElementById('selectedImage');

selectButton.addEventListener('click', () => {
  // Escolhe uma imagem aleatória 
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const imageUrl = imageUrls[randomIndex];

  // Define a imagem 
  selectedImage.src = imageUrl;
});

  }
    