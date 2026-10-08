# Shimalaya

Portfolio site for Shimalaya, actor, Delhi, India.

A static site (HTML, CSS and JavaScript, no build step):

| File | What it is |
| --- | --- |
| `index.html` | All the content: hero, about, showreel, work, headshots, contact |
| `styles.css` | Design: colours and fonts are at the top under `:root` |
| `main.js` | Menu, scroll reveals, showreel player, work filters, image viewer |
| `assets/` | Images |

## Adding your content

Everything to change is marked `EDIT` in `index.html`.

**Images.** Put these files in `assets/`. Until a file is there, the site
shows a dark green frame in its place, so nothing looks broken.

| File | Where | Suggested size |
| --- | --- | --- |
| `hero.jpg` | Full-screen photo behind the name | 2400 × 1600, subject centred |
| `hero-cutout.png` | The **same** photo with the background removed (transparent PNG). It sits in front of the name, so your head overlaps the letters | Same size as `hero.jpg` |
| `portrait.jpg` | About section | 1200 × 1500 (4:5) |
| `reel-poster.jpg` | Still shown before the showreel plays | 1920 × 1080 |
| `gallery-1.jpg` … `gallery-6.jpg` | Headshots & stills. 1, 3 and 4 are the tall ones | 1200 × 1500 or taller |
| `og.jpg` | Preview image when the link is shared | 1200 × 630 |

Any background remover (remove.bg, Photoshop, Canva) will make `hero-cutout.png`.

**Showreel.** In `index.html`, find `data-youtube=""` and put the video ID
inside the quotes (for `youtube.com/watch?v=abc123` that is `abc123`).
For Vimeo, use `data-vimeo=""` instead.

**Work.** Each credit is one `<li class="credit">`. Copy a row to add one.
`data-type` is `film`, `series`, `theatre` or `ad`, which drives the filter buttons.

**Contact.** Update the email, agency and social links.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on Netlify

Drag the folder onto app.netlify.com/drop, or connect this repository:
no build command, publish directory `/`.
