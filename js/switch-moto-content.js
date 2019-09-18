(function() {
  const nav_menu = document.querySelector(`.site-menu`);
  const models_menu = document.querySelector(`.models__list`);
  let curr_model = document.querySelector(`.model--current`);
  let curr_nav_item = document.querySelector(`.site-menu__item-current`);
  
  const CurrentEl = {
    SITE_MENU: `site-menu__item-current`,
    MOTO_MENU: `model--current`
  };

  const navMenuClickHandler = (evt) => {
    const clickedEl = evt.target.closest(`li`);

    curr_nav_item.classList.remove(`site-menu__item-current`);
    clickedEl.classList.add(`site-menu__item-current`);
    curr_nav_item = clickedEl;
  };

  // Обработчик кликов по мото-меню
  const modelsMenuClickHandler = (evt) => {
    const clickedEl = evt.target.closest(`li`);
    
    curr_model.classList.remove(`model--current`);
    clickedEl.classList.add(`model--current`);
    curr_model = clickedEl;
  };
  
  nav_menu.addEventListener(`click`, navMenuClickHandler);
  models_menu.addEventListener(`click`, modelsMenuClickHandler);
})();
