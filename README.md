# Satyaveer Raj — Portfolio

A clean, modern, responsive portfolio website built with **HTML, CSS, and vanilla JavaScript**. The files are intentionally separate and beginner-friendly.

## Files

- `index.html` — page content and sections
- `style.css` — colors, layout, responsive styling, and animations
- `script.js` — theme switcher, mobile menu, reveal effects, and certificate prompts
- `profile.jpg` — your profile photo used in the About section

## Run locally

### Option 1: VS Code on a computer
1. Extract the ZIP.
2. Open the `satyaveer-portfolio` folder in VS Code.
3. Open `index.html`.
4. Use the **Live Server** extension and choose **Open with Live Server**. You can also open `index.html` directly in a browser.

### Option 2: On an Android phone
1. Download and extract the ZIP using your file manager.
2. Open the extracted folder in a code editor that supports HTML preview, or upload the files to GitHub.
3. For a public website, push the files to a GitHub repository and import that repository into Vercel. Use the project root as the root directory; no build command is needed for this static website.

## Personalize before publishing

Open `index.html` and update these placeholders:
- `your.email@example.com` → your real email address
- `https://www.linkedin.com/` → your LinkedIn profile URL
- `https://github.com/` → your GitHub profile URL
- Update your intro, project descriptions, skills, and certificate details to reflect your real experience.

## Certificates

The certificate section is a showcase area only. It does **not** include fake or official-looking completion certificates. Once you have real certificates:
1. Create a `certificates` folder beside `index.html`.
2. Add your PDF files there.
3. Replace the relevant certificate button/placeholder in `index.html` with a link such as `<a href="certificates/web-development.pdf" target="_blank" rel="noreferrer">View certificate ↗</a>`.

## Projects

The project cards currently describe portfolio, to-do list, and marks-calculator showcases/concepts. Replace the links with your actual GitHub repository or live demo URLs when available.

## Customization notes

- The theme button toggles dark/light mode and remembers the preference in the browser.
- Skill percentages are editable estimates, not test results.
- Google Fonts are loaded from the web; system fonts will be used if you are offline.
- No build tools or package installation are required.
