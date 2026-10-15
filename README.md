# Md Shanian Moed: research website

A static academic site for GitHub Pages. All text lives in **`data.js`**, so you never need to touch the HTML.

## Files

| File | What it is |
|---|---|
| `index.html` | Page skeleton |
| `style.css` | Design (dark/light themes) |
| `main.js` | Builds the page from `data.js` |
| `data.js` | **Your content: edit this one** |
| `me.jpg` | Your square photo (add it yourself; initials show until you do) |
| `cv.pdf` | Your CV (add it yourself) |

## Publish

1. Create a public repo named **`shanianaca.github.io`**.
2. Click **uploading an existing file**, drag in all the files above, then **Commit changes**.
3. **Settings → Pages →** Deploy from a branch, **main**, **/ (root)**, then **Save**.
4. The site appears at https://shanianaca.github.io after a minute or two.

## Edit your content

On GitHub, open `data.js`, click the pencil icon, edit, then **Commit changes**. The live site updates within a minute.

- Replace every line marked **EXAMPLE** with your own details, or delete it.
- **Publications:** copy one `{ ... },` block per paper. `status` can be `published`, `review`, `accepted` or `preprint`. `areas` tags it with research areas, which drive the colours and filters.
- **Links:** paste URLs for Scholar, ORCID and so on. Empty `""` hides that button.
- **Citations chart:** fill `citations` with `{ year: 2025, count: 4 }` entries. While it is empty, the MoS₂ lattice shows instead.
- Lists set to `[]` (teaching, awards and so on) hide their whole section.
- If the page goes blank after an edit, a comma or quote is usually missing near the line you changed.
