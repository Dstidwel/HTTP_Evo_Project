# Milestone Finish Report — HTTP Evolution Project

**Student:** Derek J. Stidwell Jr.  
**Course:** IT 3203 – Intro to Web Development  
**Project:** HTTP Evolution (0.9 → HTTP/3) — Milestones

---

## Layout and Stucture
The website includes **nine pages** (`index.html`, `concepts.html`, `http0-1.html`, `http11.html`, `http2.html`, `http3.html`, `references.html`, `quiz.html`, and `about.html`) plus a single combined stylesheet (`style.css`) and a small JavaScript file (`script.js`).  
Every page follows a consistent layout using semantic HTML5 tags (`<header>`, `<main>`, `<footer>`) for accessibility and SEO compliance.

## Quiz Functionality

I added a complete quiz application (`quiz.html`) with:

- **1 fill-in-the-blank question**
- **3 single-choice questions**
- **1 multi-select question**
- JavaScript scoring (100 points total)
- Automatic **PASS / FAIL** calculation (70+ to pass)
- Per-question breakdown showing:
  - Correct/Incorrect badge
  - Points earned
  - What I answered
  - Correct answer
- Clear **Reset / Retake** support

All results appear **instantly on the same page** after submission.

---

## UI and Form Controls

The quiz uses:

- `<fieldset>` + `<legend>` for exam sections  
- `<input type="text">` for fill-in-the-blank  
- `<input type="radio">` groups for single-choice questions  
- `<input type="checkbox">` for multi-select  
- Styled buttons aligned with my site’s card/grid layout  
- Semantic headings and accessibility-friendly labels

---

## Styling Enhancements

I extended my Milestone 1 theme by adding quiz-specific styles:

- Rounded card container  
- Styled fieldsets  
- Accessible focus states  
- Green/Red feedback blocks  
- PASS/FAIL badges  
- Consistent spacing + typography  

Everything integrates smoothly with the existing theme.

---

## Deployment to GitHub Pages

The following files were added:

- `quiz.html`  
- Updated `style.css` with quiz styles  
- This report file

All files were uploaded to the repository root and automatically deployed via GitHub Pages.

Live URL examples:  
- **Home:** `https://<username>.github.io/<repo>/index.html`  
- **Quiz:** `https://<username>.github.io/<repo>/quiz.html`
---


## JavaScript Enhancement
- The lightweight script.js file adds the mobile menu toggle and complements the existing quiz logic from milestone 2
  it is linked in every html file using: """<script src="script.js" defer></script>"""

## Testing Report
- The HTTP Evolution website was thoroughly tested across multiple devices and screen resolutions to verify that all responsive design elements functioned correctly. On desktop displays such as a MacBook Pro (2560×1600 resolution) using Safari, the site displayed the full navigation menu horizontally, with all layout components centered and balanced. The hero section maintained high image quality, and no elements overlapped or extended beyond their containers.
  
- When tested on tablet screens like an iPad using Chrome (approximately 768 pixels wide), the website automatically adjusted its layout for medium-sized viewports. The navigation menu successfully collapsed into the new hamburger icon, allowing users to toggle the menu open or closed. Padding and text spacing decreased appropriately, creating a more compact but still readable design. The table and gallery elements restructured to fit the screen without any horizontal scrolling.
  
- On mobile devices such as an iPhone 13 (approximately 390 pixels wide), the responsive CSS and JavaScript enhancements worked seamlessly. The hamburger menu opened and closed smoothly with a tap, and buttons, links, and quiz controls adapted to full-width layouts for easier interaction. Text content remained legible without zooming, and no overflow or clipping occurred on any page. The quiz form operated normally, scoring answers correctly even on smaller screens. Across all devices and browsers, the website’s visual consistency, usability, and performance demonstrated successful implementation of responsive web design principles.
  
## Completion Statement

All requirements of Milestones were satisfied:

✔ Quiz functionality  
✔ Correct form controls  
✔ Instant feedback  
✔ Color-coded scoring  
✔ Reset function  
✔ Improved content/styling  
✔ GitHub Pages deployment  
✔ Report documentation
