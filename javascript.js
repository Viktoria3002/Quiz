function goToQuestion(id) {
  window.location.href = `question.html?id=${id}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.buttonFairyTale');

  buttons.forEach((button) => {
    const id = button.getAttribute('data-id');

    // Проверяем состояние каждой кнопки из локального хранилища
    if (localStorage.getItem(`buttonVisited_${id}`)) {
      button.classList.add('visited');
    }

    button.addEventListener('click', function () {
      // Действие при нажатии кнопки (например, переход на другую страницу)
      window.location.href = `http://127.0.0.1:5500/question.html?id=${id}`;

      // Сохраняем состояние кнопки как посещенной
      localStorage.setItem(`buttonVisited_${id}`, true);
    });
  });
});
