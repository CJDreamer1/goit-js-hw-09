const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

function formSubmitHandler(event) {
  event.preventDefault();

  const handleText = textarea.value;
  const handleForm = form.elements.email.value;
  const data = JSON.stringify({ handleText, handleForm });
  localStorage.setItem(STORAGE_KEY, data);
}
form.addEventListener('submit', formSubmitHandler);

const jsn = localStorage.getItem(STORAGE_KEY) ?? '';
try {
  const data = JSON.parse(jsn);
  console.log(data);
  textarea.value = data.handleText;
  form.elements.email.value = data.handleForm;
} catch {
  console.log('Немає збереженої інформації!');
}
