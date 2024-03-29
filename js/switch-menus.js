(function() {
  const nav_menu = document.querySelector(`.site-menu`);
  const models_menu = document.querySelector(`.models__list`);
  const years_menu = document.querySelector(`.info__years`);
  const colors_menu = document.querySelector(`.colors`);
  const features_menu = document.querySelector(`.features__list`);

  // Текущие выбранные элементы меню
  let curr_model = null;
  let curr_nav_item = null;
  let curr_year_item = null;
  let color_item = null;
  let feature_item = null;
  
  // Список классов для текущих элементов
  const CurrentClass = {
    SITE_MENU: `site-menu__item--current`,
    MOTO_MENU: `models__item--current`,
    YEARS_MENU: `years__item--current`,
    COLORS_MENU: `colors__item--current`,
    FEATURES_MENU: `features__item--current`
  };

  // Переключение классов
  const switchClasses = (curr_el, new_el, className) => {
    curr_el.classList.remove(className);
    new_el.classList.add(className);
    curr_el = new_el;
  };

  // Обработчик кликов по пунктам сайт-меню
  const navMenuClickHandler = (evt) => {
    evt.preventDefault();
    const clickedEl = evt.target.closest(`li`);
    clickedEl ? switchClasses(document.querySelector(`.` + CurrentClass.SITE_MENU), clickedEl, CurrentClass.SITE_MENU) : false;
  };

  // Обработчик кликов по пунктам меню выбора модели
  const modelsMenuClickHandler = (evt) => {
    evt.preventDefault();
    const clickedEl = evt.target.closest(`li`);
    clickedEl ? switchClasses(document.querySelector(`.` + CurrentClass.MOTO_MENU), clickedEl, CurrentClass.MOTO_MENU) : false;
  };

  // Обработчик кликов по меню годов выпуска
  const yearsMenuClickHandler = (evt) => {
    evt.preventDefault();
    const clickedEl = evt.target.closest(`li`);
    clickedEl ? switchClasses(document.querySelector(`.` + CurrentClass.YEARS_MENU), clickedEl, CurrentClass.YEARS_MENU) : false;
  };

  // Обработчик кликов по меню цветов
  const colorsMenuClickHandler = (evt) => {
    evt.preventDefault();
    const clickedEl = evt.target.closest(`li`);
    clickedEl ? switchClasses(document.querySelector(`.` + CurrentClass.COLORS_MENU), clickedEl, CurrentClass.COLORS_MENU) : false;
  };
  
  // Обработчик кликов по меню фичей
  const featuresMenuClickHandler = (evt) => {
    evt.preventDefault();
    const clickedEl = evt.target.closest(`li`);
    clickedEl ? switchClasses(document.querySelector(`.` + CurrentClass.FEATURES_MENU), clickedEl, CurrentClass.FEATURES_MENU) : false;
  };

  nav_menu.addEventListener(`click`, navMenuClickHandler);
  models_menu.addEventListener(`click`, modelsMenuClickHandler);
  years_menu.addEventListener(`click`, yearsMenuClickHandler);
  colors_menu.addEventListener(`click`, colorsMenuClickHandler);
  features_menu.addEventListener(`click`, featuresMenuClickHandler);
})();
