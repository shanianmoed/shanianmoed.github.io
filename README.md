# Md Shanian Moed — research website

A single-page research portfolio. Everything (design, text, the interactive MoS₂ lattice) lives in `index.html`.

## Put it online with GitHub Pages

1. Sign in to GitHub and create a new **public** repository.
   - Name it `YOUR-USERNAME.github.io` to get the address `https://YOUR-USERNAME.github.io`.
   - Any other name (e.g. `research`) gives `https://YOUR-USERNAME.github.io/research`.
2. In the new repo, click **Add file → Upload files**, drag in `index.html` (plus `cv.pdf` and `photo.jpg` if you have them), then **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. Wait 1–2 minutes and open the address shown at the top of the Pages settings.

## Fill in your details

Open `index.html` (on GitHub, click the file, then the pencil icon) and search for `EDIT`. Each marked spot tells you what to change:

- Department and university under your name
- CV link (upload `cv.pdf` to the repo)
- Profile photo (upload `photo.jpg`, then swap the "SM" initials for the `<img>` line in the comment)
- About paragraphs
- Tools list: keep only what you actually use
- Publications: copy one `<li>…</li>` block per paper
- Email and profile links (Google Scholar, ORCID, ResearchGate, GitHub, LinkedIn)

Every commit to `main` updates the live site automatically.
