# Ember & Oak: restaurant website demo

A static, build-free restaurant website concept (HTML, CSS, vanilla JS). Everything is fictional sample content.

## Run locally
Open `index.html` in a browser. No install needed. The whole site is three files in one folder: `index.html`, `style.css`, `script.js`.

## Deploy to GitHub Pages
1. Create a GitHub repository and upload the contents of this folder (so `index.html` is at the repo root).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute your site appears at `https://<username>.github.io/<repo>/`. All paths are relative, so project URLs work.

## Customise
All editable content sits at the top of `js/script.js`: `SITE` (address, phone, email, hours, social links), `IMG` (hero/story images), `MENU` (dishes, prices, categories, images) and `GALLERY`.

## Notes
- Photos load from Unsplash's CDN (free under the Unsplash License) as demo assets. For a real client, replace them with your own licensed photography: put the image files in this same folder and point the URLs in `script.js` at them (for example `"hero.jpg"`).
- If an image fails to load, a branded placeholder appears instead.
- Reservation and contact forms are demos: nothing is sent or stored.
- Testimonials are fictional placeholders.
