const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const maxChars = 250;

textarea.addEventListener('input', () => {
  const currentLength = textarea.value.length;
  charCount.textContent = `${currentLength} / ${maxChars}`;

  if (currentLength >= maxChars) {
    textarea.classList.add('red-border');
  } else {
    textarea.classList.remove('red-border');
  }
});
