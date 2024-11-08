export function scrollToTop() {
  const contentContainer = document.getElementById("container-scrollable");

  if (contentContainer) {
    contentContainer.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
