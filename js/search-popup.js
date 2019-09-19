(function() {
  const search_btn = document.querySelector(`.search`);
  const search_popup = document.querySelector(`.search__popup`);
 
  const searchBtnClickHandler = (evt) => {
    evt.preventDefault();
    search_popup.classList.toggle(`show`);
  };

  search_btn.addEventListener(`click`, searchBtnClickHandler);
})();
