document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach((item) => {
    const header = item.querySelector(".collapsible__header");
    const content = item.querySelector(".collapsible__content");

    header.addEventListener("click", function () {
      item.classList.toggle("collapsible--expanded");

      if (item.classList.contains("collapsible--expanded")) {
        // Set max-height to the content's scroll height
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        // Remove max-height to collapse the content
        content.style.maxHeight = "0";
      }
    });
  });
});
