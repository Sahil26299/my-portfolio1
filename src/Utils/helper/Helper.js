export const loadBlurrImage = (
  backgroundClass,
  loadedImageClass,
  imageClass = "img"
) => {
  if (backgroundClass && imageClass) {
    const blurredImgDiv = document.querySelector(backgroundClass);
    const origImg = blurredImgDiv.querySelector(imageClass);
    function loaded() {
      console.log(loadedImageClass,'loadedImageClass');
      blurredImgDiv.classList.add(loadedImageClass);
    }
    if (origImg?.complete) {
      loaded();
    } else {
      origImg?.addEventListener("load", loaded);
    }
  }
};
