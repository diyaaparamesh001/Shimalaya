"""Bundle the site into one page for the Claude preview link.

Writes .preview/index.html (or the folder given as the first argument) with styles.css and main.js inlined and the
<!doctype>/<html>/<head>/<body> wrappers removed (the preview host adds its own).
Images stay as relative assets/ paths; assets/ is copied next to the page.
"""
import pathlib
import re
import shutil
import sys

root = pathlib.Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text()
css = (root / "styles.css").read_text()
js = (root / "main.js").read_text()

html = html.replace('<link rel="stylesheet" href="styles.css">', f"<style>\n{css}\n</style>")
html = html.replace('<script src="main.js" defer></script>', f"<script>\n{js}\n</script>")
html = re.sub(r"<title>.*?</title>", "<title>Shimalaya</title>", html)
html = re.sub(r"<!doctype html>\s*", "", html, flags=re.I)
html = re.sub(r"</?(html|head|body)\b[^>]*>\s*", "", html, flags=re.I)
html = re.sub(r'\s*<meta (charset|name="viewport")[^>]*>', "", html)

out = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else root / ".preview"
out.mkdir(parents=True, exist_ok=True)
shutil.copytree(root / "assets", out / "assets", dirs_exist_ok=True)
(out / "index.html").write_text(html)
print(out / "index.html")
