document.documentElement.classList.add("js");

/* ---------- Optional images: hide any that haven't been added yet ---------- */
document.querySelectorAll("img[data-optional]").forEach((img) => {
  const hide = () => {
    img.remove();
    const item = img.closest(".gallery__item");
    if (item) item.classList.add("is-empty");
  };
  if (img.complete && img.naturalWidth === 0) hide();
  else img.addEventListener("error", hide, { once: true });
});

/* ---------- Header state ---------- */
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- Menu ---------- */
const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");
const label = toggle.querySelector(".menu-toggle__label");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  label.textContent = open ? "Close" : "Menu";
  document.body.style.overflow = open ? "hidden" : "";
  if (open) {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add("is-open"));
  } else {
    menu.classList.remove("is-open");
    setTimeout(() => { if (!menu.classList.contains("is-open")) menu.hidden = true; }, 500);
  }
}
toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    toggle.focus();
  }
});

/* ---------- Scroll reveal ---------- */
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

/* ---------- Showreel: load the video only when asked ---------- */
const reel = document.querySelector(".reel__frame");
reel.querySelector(".reel__play").addEventListener("click", () => {
  const yt = reel.dataset.youtube.trim();
  const vimeo = reel.dataset.vimeo.trim();
  let src = "";
  if (yt) src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(yt)}?autoplay=1&rel=0`;
  else if (vimeo) src = `https://player.vimeo.com/video/${encodeURIComponent(vimeo)}?autoplay=1&title=0&byline=0`;
  if (!src) {
    reel.querySelector(".reel__caption").textContent = "Showreel coming soon";
    return;
  }
  const frame = document.createElement("iframe");
  frame.src = src;
  frame.title = "Shimalaya showreel";
  frame.allow = "autoplay; fullscreen; picture-in-picture";
  frame.allowFullscreen = true;
  reel.classList.add("is-playing");
  reel.appendChild(frame);
});

/* ---------- Work filters ---------- */
const filters = document.querySelectorAll(".filter");
const credits = document.querySelectorAll(".credit");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.filter;
    filters.forEach((b) => {
      const on = b === btn;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    credits.forEach((c) => { c.hidden = type !== "all" && c.dataset.type !== type; });
  });
});

/* ---------- Lightbox ---------- */
const lightbox = document.querySelector(".lightbox");
const lbImg = lightbox.querySelector("img");
let shots = [];
let current = 0;

function show(i) {
  current = (i + shots.length) % shots.length;
  lbImg.src = shots[current].currentSrc || shots[current].src;
  lbImg.alt = shots[current].alt;
}

document.querySelectorAll(".gallery__item").forEach((item) => {
  item.addEventListener("click", () => {
    shots = [...document.querySelectorAll(".gallery__item img")];
    const img = item.querySelector("img");
    if (!img) return;
    show(shots.indexOf(img));
    lightbox.showModal();
  });
});
lightbox.querySelector(".lightbox__close").addEventListener("click", () => lightbox.close());
lightbox.querySelector(".lightbox__prev").addEventListener("click", () => show(current - 1));
lightbox.querySelector(".lightbox__next").addEventListener("click", () => show(current + 1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); });
lightbox.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") show(current - 1);
  if (e.key === "ArrowRight") show(current + 1);
});

/* ---------- Footer year ---------- */
document.querySelector("[data-year]").textContent = new Date().getFullYear();
