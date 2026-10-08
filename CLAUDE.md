# Shimalaya site

Static portfolio site: `index.html`, `styles.css`, `main.js`, images in `assets/`.
No build step; Netlify serves the folder as is.

## Preview after every change

The owner wants a preview after **every** change. After editing the site:

1. Build the single-file preview into your scratchpad:
   `python3 scripts/build-preview.py <scratchpad>/preview-site`
2. Publish `<scratchpad>/preview-site/index.html` with the Artifact tool,
   `root` set to that folder and every file under `assets/` in `files`.
   Update the existing preview at https://claude.ai/artifact/6gjBtDYNLcpEhXAEg9C1UG
   (pass it as `url`; read it first if this session hasn't) instead of making a new one.
3. Give the owner the link in your reply.

Note: in the preview, the showreel video and mailto links don't work (the preview
host blocks embeds); they work on the live Netlify site.
