(function() {
  const search_icon = document.querySelector(`.search`);
  const search_popup = document.querySelector(`.search-popup`);
  const search_field = search_popup.querySelector(`.form__field`);
  const search_btn = search_popup.querySelector(`.search-popup__btn`);

  // Обработчик клика по кнопке поиска
  const searchBtnClickHandler = (evt) => {
    evt.preventDefault();
    // Собираем и отправляем данные из поля, затем очищаем поле и закрываем окно
    search_field.value = ``;
    search_popup.classList.remove(`show`);
  };

  // Обработчик клика по иконке поиска
  const searchIconClickHandler = (evt) => {
    evt.preventDefault();
    search_popup.classList.toggle(`show`);

    if (search_popup.classList.contains(`show`)) {
      search_btn.addEventListener(`click`, searchBtnClickHandler);
    } else {
      search_btn.removeEventListener(`click`, searchBtnClickHandler);
      search_field.value = ``;
    }
  };

  // Обработчик на иконку поиска 
  search_icon.addEventListener(`click`, searchIconClickHandler);
})();
