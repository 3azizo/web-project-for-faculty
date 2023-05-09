const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("scroll-animation");
  observer.unobserve(entry.target);
  // const
};
const sectionObesver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
allSection.forEach((sec) => {
  sectionObesver.observe(sec);
  sec.classList.add("scroll-animation");
});
