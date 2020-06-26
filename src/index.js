const body = document.querySelector('body');
const inp1 = document.createElement('input');
body.appendChild(inp1);
const inp2 = document.createElement('input');
body.appendChild(inp2);
const btn = document.createElement('button');
btn.textContent = 'Посчитать';
body.appendChild(btn);

function remove(err) {
  if (err == null) {
    return null;
  }
  err.parentNode.removeChild(err);
  return false;
}

function validation(inp) {
  if (!Number.isNaN(inp.value) && !inp.value.includes(' ') && inp.value !== '-0' && inp.value !== '') {
    return true;
  }
  const error = document.createElement('div');
  error.setAttribute('class', 'error-message');
  error.textContent = 'Это не число';
  inp.after(error);
  return false;
}

btn.addEventListener('click', function handler() {
  remove(document.querySelectorAll('.error-message')[0]);
  remove(document.querySelectorAll('.error-message')[0]);
  remove(document.querySelector('#result'));
  const valid1 = validation(inp1);
  const valid2 = validation(inp2);
  if (valid1 && valid2) {
    const result = document.createElement('p');
    result.id = 'result';
    result.innerHTML = parseInt(inp1.value, 0) + parseInt(inp2.value, 0);
    body.appendChild(result);
  }
});
