# ryanxwy.github.io

Single-page portfolio site built with plain HTML/CSS/JS.

## Project Structure

- `index.html`: entrypoint and page content.
- `styles.css`: responsive layout and visual styling.
- `script.js`: small interaction (section reveal on scroll).
- `assets/resume.pdf`: downloadable resume.

No build step is required.

## GitHub Pages Behavior for User Site Repo

If the repository name is exactly `ryanxwy.github.io`, GitHub Pages serves the root of `main` automatically.

## Local Preview

Open `index.html` in a browser.

## Deploy Steps

1. Create the repo in GitHub web UI: `https://github.com/ryanxwy/ryanxwy.github.io`.
2. Initialize and push from this folder:
   - `git init`
   - `git branch -M main`
   - `git remote add origin git@github.com:ryanxwy/ryanxwy.github.io.git`
   - `git add .`
   - `git commit -m "Initial portfolio site"`
   - `git push -u origin main`
3. Verify deployment at `https://ryanxwy.github.io/`.

## Updating Resume Content

1. Replace `assets/resume.pdf` when you update your resume.
2. Edit `index.html` sections (Hero, About, Experience, Projects, Skills, Education, Certificates, Contact).
3. Keep public contact details masked on the page.
4. Commit and push to `main`.
