const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const emailInput = form.querySelector('input[name="email"]');

// Функція для збереження даних у локальне сховище
function saveFormData() {
  const handleText = textarea.value.trim();
  const handleForm = emailInput.value.trim();
  const data = JSON.stringify({ handleText, handleForm });
  localStorage.setItem(STORAGE_KEY, data);
}

// Прослуховування події input на кожен елемент форми для збереження даних у локальне сховище
form.addEventListener('input', saveFormData);

// Перевірка наявності даних у локальному сховищі та заповнення поля форми цими даними
const jsn = localStorage.getItem(STORAGE_KEY);
if (jsn) {
  try {
    const data = JSON.parse(jsn);
    textarea.value = data.handleText || '';
    emailInput.value = data.handleForm || '';
  } catch (error) {
    console.error('Помилка розбору JSON:', error.message);
  }
}

// Функція для обробки сабміту форми
function formSubmitHandler(event) {
  event.preventDefault();

  const handleText = textarea.value.trim();
  const handleForm = emailInput.value.trim();

  // Перевірка на заповненість обох елементів форми перед сабмітом
  if (handleText === '' || handleForm === '') {
    alert('Будь ласка, заповніть обидва поля форми.');
    return;
  }

  // Виведення об'єкту з полями email та message у консоль
  console.log({ email: handleForm, message: handleText });

  // Очищення сховища
  localStorage.removeItem(STORAGE_KEY);

  // Очищення полів форми
  textarea.value = '';
  emailInput.value = '';
}

// Прослуховування події submit на формі
form.addEventListener('submit', formSubmitHandler);
