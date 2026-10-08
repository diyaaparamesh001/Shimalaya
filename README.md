# Shimalaya

Portfolio site for Shimalaya, actor, Delhi, India.

A static site (HTML, CSS and JavaScript, no build step):

| File | What it is |
| --- | --- |
| `index.html` | All the content: home, profile, showreel, work, frames, contact |
| `styles.css` | Design: colours and fonts are at the top under `:root` |
| `main.js` | Menu, scroll reveals, showreel player, work filters, image viewer |
| `assets/` | Images |

## Adding your content

**Images.** These live in `assets/`. Until a file is there, the site
shows a dark green frame in its place, so nothing looks broken.

| File | Where |
| --- | --- |
| `hero-cutout.webp` | Home screen portrait, background removed (transparent), so the head sits in front of the name |
| `portrait.webp` | Profile section |
| `showreel.mp4`, `reel-poster.jpg` | Showreel video and the still shown before it plays |
| `frame-1.webp` … `frame-5.webp` | Frames strip (any shape works; add or remove `<li>` rows in `index.html`) |
| `og.jpg` | Preview image when the link is shared (1200 × 630) |

**Work.** Each credit is one `<li class="credit">`. Copy a row to add one.
`data-type` is `film`, `ad` or `collab`, which drives the filter buttons.

**Contact.** WhatsApp, email and Instagram are in the contact section and the home screen.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on Netlify

Drag the folder onto app.netlify.com/drop, or connect this repository:
no build command, publish directory `/`.
