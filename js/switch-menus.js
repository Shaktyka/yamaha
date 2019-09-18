(function() {
  const nav_menu = document.querySelector(`.site-menu`);
  const models_menu = document.querySelector(`.models__list`);
  const years_menu = document.querySelector(`.info__years`);
  const colors_menu = document.querySelector(`.colors`);
  const features_menu = document.querySelector(`.features__list`);

  let curr_model = document.querySelector(`.model--current`);
  let curr_nav_item = document.querySelector(`.site-menu__item-current`);
  let curr_year_item = document.querySelector(`.year--current`);
  let color_item = document.querySelector(`.color--current`);
  let feature_item = document.querySelector(`.feature--current`);
  
  const CurrentClass = {
    SITE_MENU: `site-menu__item-current`,
    MOTO_MENU: `model--current`,
    YEARS_MENU: `year--current`,
    COLORS_MENU: `color--current`,
    FEATURES_MENU: `feature--current`
  };

  const navMenuClickHandler = (evt) => {
    const clickedEl = evt.target.closest(`li`);

    curr_nav_item.classList.remove(CurrentClass.SITE_MENU);
    clickedEl.classList.add(CurrentClass.SITE_MENU);
    curr_nav_item = clickedEl;
  };

  // Обработчик кликов по мото-меню
  const modelsMenuClickHandler = (evt) => {
    const clickedEl = evt.target.closest(`li`);
    
    curr_model.classList.remove(CurrentClass.MOTO_MENU);
    clickedEl.classList.add(CurrentClass.MOTO_MENU);
    curr_model = clickedEl;
  };

  // Обработчик кликов по меню годов выпуска
  const yearsMenuClickHandler = (evt) => {
    const clickedEl = evt.target.closest(`li`);

    curr_year_item.classList.remove(CurrentClass.YEARS_MENU);
    clickedEl.classList.add(CurrentClass.YEARS_MENU);
    curr_year_item = clickedEl;
  };

  // Обработчик кликов по меню цветов
  const colorsMenuClickHandler = (evt) => {
    const clickedEl = evt.target.closest(`li`);

    color_item.classList.remove(CurrentClass.COLORS_MENU);
    clickedEl.classList.add(CurrentClass.COLORS_MENU);
    color_item = clickedEl;
  };
  
  // Обработчик кликов по меню фичей
  const featuresMenuClickHandler = (evt) => {
    const clickedEl = evt.target.closest(`li`);

    feature_item.classList.remove(CurrentClass.FEATURES_MENU);
    clickedEl.classList.add(CurrentClass.FEATURES_MENU);
    feature_item = clickedEl;
  };

  nav_menu.addEventListener(`click`, navMenuClickHandler);
  models_menu.addEventListener(`click`, modelsMenuClickHandler);
  years_menu.addEventListener(`click`, yearsMenuClickHandler);
  colors_menu.addEventListener(`click`, colorsMenuClickHandler);
  features_menu.addEventListener(`click`, featuresMenuClickHandler);
})();
