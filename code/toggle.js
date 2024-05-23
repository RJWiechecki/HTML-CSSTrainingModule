document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".nav__toggler");
  const nav = document.querySelector(".nav");

  toggler.addEventListener("click", function () {
    nav.classList.toggle("collapsible--expanded");

    const content = nav.querySelector(".collapsible__content");
    if (nav.classList.contains("collapsible--expanded")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  });
});
