# SunnyDays Daycare & Playschool

A simple, responsive static website for a daycare/playschool.

## Preview locally

- Option A (Python):
  ```bash
  cd /workspace/daycare-playschool
  python3 -m http.server 5173
  ```
  Then open `http://localhost:5173` in your browser.

- Option B (Node, if you have npx):
  ```bash
  cd /workspace/daycare-playschool
  npx --yes serve . -l 5173
  ```

## Customize

- Name, address, phone, email: edit them in `index.html` in the header, Enroll, and Contact sections.
- Brand/theme: tweak CSS variables at the top of `styles.css`.
- Programs: update the cards in the Programs section in `index.html`.
- Contact form: currently a demo handler (no backend). Hook it up to a forms service (Formspree, Basin, Netlify Forms) or your own API in `script.js`.

## Files

- `index.html` — markup and content
- `styles.css` — styling and responsive layout
- `script.js` — behavior (nav, smooth scroll, contact form)

## License

MIT