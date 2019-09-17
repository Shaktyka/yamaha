(function() {
  const models_block = document.querySelector(`.models__list`);
  let curr_model = document.querySelector(`.model--current`);

  // Обработчик кликов по мото-меню
  const modelsBlockClickHandler = (evt) => {
    const clickedEl = evt.target.closest(`li`);
    
    curr_model.classList.remove(`model--current`);
    clickedEl.classList.add(`model--current`);
    curr_model = clickedEl;
  };
  
  // Вешаем обработчик на блок мото-меню
  models_block.addEventListener(`click`, modelsBlockClickHandler);
})();
