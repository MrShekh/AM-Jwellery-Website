import './styles.scss';

document.querySelectorAll(".product-item").forEach((item) => {
  item.addEventListener("click", () => {
    const model = item.getAttribute("data-model");
    if (model) {
      // Redirect with query param
      window.location.href = `viewer.html?model=${encodeURIComponent(model)}`;
    }
  });
});
