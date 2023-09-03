let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector(".container");

const end = () => {
  isDown = false;
  slider.classList.remove("active");
};

const start = (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
};

(() => {
  slider.addEventListener("mousedown", start);
  slider.addEventListener("touchstart", start);

  slider.addEventListener("mousemove", move);
  slider.addEventListener("touchmove", move);

  slider.addEventListener("mouseleave", end);
  slider.addEventListener("mouseup", end);
  slider.addEventListener("touchend", end);
})();

// book slider

let isDown2 = false;
let startX2;
let scrollLeft2;
const bookslider = document.querySelector(".book-container");

const bookend = () => {
  isDown2 = false;
  bookslider.classList.remove("bookactive");
};

const start2 = (e) => {
  isDown2 = true;
  bookslider.classList.add("bookactive");
  startX2 = e.pageX || e.touches[0].pageX - bookslider.offsetLeft;
  scrollLeft2 = bookslider.scrollLeft;
};

const move2 = (e) => {
  if (!isDown2) return;

  e.preventDefault();
  const x2 = e.pageX || e.touches[0].pageX - bookslider.offsetLeft;
  const dist2 = x2 - startX2;
  bookslider.scrollLeft = scrollLeft2 - dist2;
};

(() => {
  bookslider.addEventListener("mousedown", start2);
  bookslider.addEventListener("touchstart", start2);

  bookslider.addEventListener("mousemove", move2);
  bookslider.addEventListener("touchmove", move2);

  bookslider.addEventListener("mouseleave", bookend);
  bookslider.addEventListener("mouseup", bookend);
  bookslider.addEventListener("touchend", bookend);
})();

// type slider

let isDowntype = false;
let startXtype;
let scrollLefttype;
const typelider = document.querySelector(".type-container");

const typeend = () => {
  isDowntype = false;
  typelider.classList.remove("typeactive");
};

const typestart = (e) => {
  isDowntype = true;
  typelider.classList.add("typeactive");
  startXtype = e.pageX || e.touches[0].pageX - typelider.offsetLeft;
  scrollLefttype = typelider.scrollLeft;
};

const typemove = (e) => {
  if (!isDowntype) return;

  e.preventDefault();
  const xtype = e.pageX || e.touches[0].pageX - typelider.offsetLeft;
  const typedist = xtype - startXtype;
  typelider.scrollLeft = scrollLefttype - typedist;
};

(() => {
  typelider.addEventListener("mousedown", typestart);
  typelider.addEventListener("touchstart", typestart);

  typelider.addEventListener("mousemove", typemove);
  typelider.addEventListener("touchmove", typemove);

  typelider.addEventListener("mouseleave", typeend);
  typelider.addEventListener("mouseup", typeend);
  typelider.addEventListener("touchend", typeend);
})();

//community slider

let commisDown = false;
let commstartX;
let commscrollLeft;
const commslider = document.querySelector(".community-container");

const commend = () => {
  commisDown = false;
  commslider.classList.remove("commactive");
};

const commstart = (e) => {
  commisDown = true;
  commslider.classList.add("commactive");
  commstartX = e.pageX || e.touches[0].pageX - commslider.offsetLeft;
  commscrollLeft = commslider.scrollLeft;
};

const commmove = (e) => {
  if (!commisDown) return;

  e.preventDefault();
  const commtype = e.pageX || e.touches[0].pageX - commslider.offsetLeft;
  const commdist = commtype - commstartX;
  commslider.scrollLeft = commscrollLeft - commdist;
};

(() => {
  commslider.addEventListener("mousedown", commstart);
  commslider.addEventListener("touchstart", commstart);

  commslider.addEventListener("mousemove", commmove);
  commslider.addEventListener("touchmove", commmove);

  commslider.addEventListener("mouseleave", commend);
  commslider.addEventListener("mouseup", commend);
  commslider.addEventListener("touchend", commend);
})();
