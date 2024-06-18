const modal1 = document.querySelector('#modal1');
const openModal1 = document.querySelector('.open-button');
const closeModal1 = document.querySelector('.close-button');

/* Modal #1 */
openModal1.addEventListener('click', () => {
  modal1.showModal();
})

closeModal1.addEventListener('click', () => {
  modal1.close();
})



/* Modal #2 */
const modal2 = document.querySelector('#modal2');
const openModal2 = document.querySelector('.open-button2');
const closeModal2 = document.querySelector('.close-button2');

openModal2.addEventListener('click', () => {
  modal2.showModal();
})

closeModal2.addEventListener('click', () => {
  modal2.close();
})