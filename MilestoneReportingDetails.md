# Milestone 2 Report — HTTP Evolution Project

**Student:** Derek J. Stidwell Jr.  
**Course:** IT 3203 – Intro to Web Development  
**Project:** HTTP Evolution (0.9 → HTTP/3) — Milestone 2

---

## 1. Quiz Functionality

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

## 2. UI and Form Controls

The quiz uses:

- `<fieldset>` + `<legend>` for exam sections  
- `<input type="text">` for fill-in-the-blank  
- `<input type="radio">` groups for single-choice questions  
- `<input type="checkbox">` for multi-select  
- Styled buttons aligned with my site’s card/grid layout  
- Semantic headings and accessibility-friendly labels

---

## 3. Styling Enhancements

I extended my Milestone 1 theme by adding quiz-specific styles:

- Rounded card container  
- Styled fieldsets  
- Accessible focus states  
- Green/Red feedback blocks  
- PASS/FAIL badges  
- Consistent spacing + typography  

Everything integrates smoothly with the existing theme.

---

## 4. Deployment to GitHub Pages

The following files were added:

- `quiz.html`  
- Updated `style.css` with quiz styles  
- This report file

All files were uploaded to the repository root and automatically deployed via GitHub Pages.

Live URL examples:  
- **Home:** `https://<username>.github.io/<repo>/index.html`  
- **Quiz:** `https://<username>.github.io/<repo>/quiz.html`

---

## 5. Screenshots (add after deployment)

- Quiz before submission  
- Quiz after submission  
- Per-question feedback  
- Reset state  

---

## 6. Completion Statement

All requirements of Milestone 2 were satisfied:

✔ Quiz functionality  
✔ Correct form controls  
✔ Instant feedback  
✔ Color-coded scoring  
✔ Reset function  
✔ Improved content/styling  
✔ GitHub Pages deployment  
✔ Report documentation
