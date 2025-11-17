---
layout: page
title: Quiz
nav_order: 8
permalink: /HTTP_Evo_Project/quiz.html
---

# HTTP Evolution — Self-Assessment Quiz

This quiz helps you check your understanding of how HTTP evolved from 0.9 to HTTP/3 after reading the other pages on this site.

> **Instructions:** Answer all questions, then click **Submit Quiz** to see your score, pass/fail status, and detailed feedback for each question. Use **Reset / Retake** to clear everything and try again.

<style>
.quiz-card {
  border: 1px solid #ddd;
  border-radius: 0.75rem;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  background: #f8f9fb;
}
.quiz-card h2 {
  margin-top: 0;
}
.quiz-form fieldset {
  border: 1px solid #ddd;
  border-radius: 0.75rem;
  padding: 1rem 1.25rem 1.25rem;
  margin-bottom: 1rem;
}
.quiz-form legend {
  padding: 0 0.25rem;
  font-weight: 600;
}
.quiz-label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.quiz-input {
  width: 100%;
  max-width: 480px;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
}
.quiz-input:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
.quiz-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.quiz-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  border: 1px solid #0056b3;
  background: linear-gradient(180deg, #3d8bfd, #0d6efd);
  color: white;
  font-weight: 600;
  cursor: pointer;
}
.quiz-btn[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
.quiz-btn-secondary {
  border-color: #adb5bd;
  background: #f1f3f5;
  color: #212529;
}
.quiz-small {
  font-size: 0.85rem;
  color: #555;
}
.quiz-results {
  display: none;
  margin-top: 1.5rem;
}
.quiz-results.show {
  display: block;
}
.quiz-overall {
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
  background: #f8f9fb;
  border: 1px solid #dde2e8;
}
.quiz-badge {
  display: inline-block;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}
.quiz-badge-pass {
  background: #d1f4e2;
  color: #116636;
  border: 1px solid #6cd9a0;
}
.quiz-badge-fail {
  background: #ffe0e0;
  color: #8a1c1c;
  border: 1px solid #ff9b9b;
}
.quiz-kv {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.quiz-kv > div {
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background: #ffffff;
  border: 1px solid #dde2e8;
}
.quiz-feedback {
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  background: #ffffff;
  border: 1px solid #dde2e8;
}
.quiz-feedback-correct {
  border-left: 4px solid #198754;
  background: #e9f7ef;
}
.quiz-feedback-incorrect {
  border-left: 4px solid #dc3545;
  background: #fcebec;
}
.quiz-answer-key {
  color: #0d6efd;
  font-weight: 500;
}
.quiz-question-id {
  font-weight: 700;
}
</style>

<div class="quiz-card">

<form id="quiz-form" class="quiz-form" aria-describedby="quiz-desc">
  <p id="quiz-desc" class="quiz-small">
    The quiz contains one fill-in-the-blank question, three single-choice questions, and one multi-select question.
  </p>

  <fieldset>
    <legend>Q1 — Fill in the blank (20 pts)</legend>
    <label class="quiz-label" for="q1">
      HTTP/2 introduced a feature that lets multiple independent streams share a single TCP connection at the same time. This is called <em>HTTP/2 __________</em>.
    </label>
    <input id="q1" name="q1" class="quiz-input" placeholder="Type the missing term…" autocomplete="off" required>
    <p class="quiz-small">Hint: It helps avoid head-of-line blocking at the application layer.</p>
  </fieldset>

  <fieldset>
    <legend>Q2 — Single choice (20 pts)</legend>
    <span class="quiz-label">In early HTTP/0.9, how was a typical response structured?</span>
    <label><input type="radio" name="q2" value="a"> HTML plus JSON for metadata</label><br>
    <label><input type="radio" name="q2" value="b"> Binary frames with headers</label><br>
    <label><input type="radio" name="q2" value="c"> A single line of HTML with no headers</label>
  </fieldset>

  <fieldset>
    <legend>Q3 — Single choice (20 pts)</legend>
    <span class="quiz-label">Which improvement was a major reason HTTP/1.1 performed better than HTTP/1.0?</span>
    <label><input type="radio" name="q3" value="a"> Mandatory encryption for every site</label><br>
    <label><input type="radio" name="q3" value="b"> Persistent connections and keep-alive</label><br>
    <label><input type="radio" name="q3" value="c"> QUIC-based transport</label>
  </fieldset>

  <fieldset>
    <legend>Q4 — Single choice (20 pts)</legend>
    <span class="quiz-label">Which pairing is correct for HTTP/3?</span>
    <label><input type="radio" name="q4" value="a"> HTTP/3 runs directly on TCP with HPACK</label><br>
    <label><input type="radio" name="q4" value="b"> HTTP/3 runs over UDP using QUIC</label><br>
    <label><input type="radio" name="q4" value="c"> HTTP/3 is just another name for HTTP/2</label>
  </fieldset>

  <fieldset>
    <legend>Q5 — Multi-select (20 pts)</legend>
    <span class="quiz-label">Select ALL statements that are true about QUIC and HTTP/3:</span>
    <label><input type="checkbox" name="q5" value="a"> QUIC integrates TLS 1.3 into the transport layer.</label><br>
    <label><input type="checkbox" name="q5" value="b"> QUIC allows connection migration when your IP changes (for example, Wi-Fi to mobile data).</label><br>
    <label><input type="checkbox" name="q5" value="c"> HTTP/3 over QUIC still suffers from TCP head-of-line blocking between streams.</label><br>
    <label><input type="checkbox" name="q5" value="d"> QUIC is designed to reduce latency, especially on lossy or mobile networks.</label>
    <p class="quiz-small">Tip: One or more answers may be correct.</p>
  </fieldset>

  <div class="quiz-buttons">
    <button id="quiz-submit" type="submit" class="quiz-btn">Submit Quiz</button>
    <button id="quiz-reset" type="button" class="quiz-btn quiz-btn-secondary">Reset / Retake</button>
  </div>
  <p class="quiz-small">You’ll see your total score, pass/fail, and detailed feedback for each question below.</p>
</form>

<div id="quiz-results" class="quiz-results" aria-live="polite">
  <div id="quiz-overall" class="quiz-overall"></div>
  <div id="quiz-per-question"></div>
</div>

</div>

<script>
(function() {
  const form = document.getElementById('quiz-form');
  if (!form) return;

  const KEY = {
    q1: { type: 'text', correct: 'multiplexing' },
    q2: { type: 'single', correct: 'c' },
    q3: { type: 'single', correct: 'b' },
    q4: { type: 'single', correct: 'b' },
    q5: { type: 'multi', correct: ['a','b','d'] }
  };

  const pointsPerQuestion = 20; // 5 questions * 20 = 100
  const passMark = 70;

  function normalizeText(s) {
    return (s || '').trim().toLowerCase().replace(/\\s+/g, ' ');
  }

  function grade() {
    let total = 0;
    const detail = [];

    // Q1 text
    const q1Input = document.getElementById('q1');
    const a1 = normalizeText(q1Input.value);
    const ok1 = a1 === normalizeText(KEY.q1.correct);
    if (ok1) total += pointsPerQuestion;
    detail.push({
      id: 'q1',
      correct: ok1,
      your: q1Input.value,
      answer: KEY.q1.correct
    });

    // Q2–Q4 single choice
    ['q2','q3','q4'].forEach(id => {
      const choice = form.querySelector('input[name="' + id + '"]:checked');
      const val = choice ? choice.value : null;
      const ok = val === KEY[id].correct;
      if (ok) total += pointsPerQuestion;
      detail.push({
        id,
        correct: ok,
        your: val,
        answer: KEY[id].correct
      });
    });

    // Q5 multi
    const chosen = Array.from(form.querySelectorAll('input[name="q5"]:checked'))
      .map(i => i.value)
      .sort();
    const target = [...KEY.q5.correct].sort();
    const ok5 = chosen.length === target.length && chosen.every((v, i) => v === target[i]);
    if (ok5) total += pointsPerQuestion;
    detail.push({
      id: 'q5',
      correct: ok5,
      your: chosen,
      answer: target
    });

    const pass = total >= passMark;
    showResults({ total, pass, detail });
  }

  function showResults({ total, pass, detail }) {
    const overall = document.getElementById('quiz-overall');
    const perQuestion = document.getElementById('quiz-per-question');
    const resultsWrapper = document.getElementById('quiz-results');

    overall.innerHTML = ''
      + '<div class="quiz-kv">'
      +   '<div><strong>Status:</strong> '
      +     '<span class="quiz-badge ' + (pass ? 'quiz-badge-pass">PASS' : 'quiz-badge-fail">FAIL') + '</span>'
      +   '</div>'
      +   '<div><strong>Total Score:</strong> ' + total + '/100</div>'
      +   '<div><strong>Pass mark:</strong> ' + passMark + '</div>'
      + '</div>'
      + '<p class="quiz-small">Correct answers are highlighted in blue. Use the Reset button to clear everything and retake the quiz.</p>';

    perQuestion.innerHTML = '';

    detail.forEach(d => {
      const block = document.createElement('div');
      block.className = 'quiz-feedback ' + (d.correct ? 'quiz-feedback-correct' : 'quiz-feedback-incorrect');
      const yourPretty = Array.isArray(d.your)
        ? (d.your.length ? d.your.join(', ') : '—')
        : (d.your || '—');
      const ansPretty = Array.isArray(d.answer)
        ? d.answer.join(', ')
        : d.answer;

      block.innerHTML = ''
        + '<div class="quiz-kv">'
        +   '<div class="quiz-question-id">' + d.id.toUpperCase() + '</div>'
        +   '<div>Score: ' + (d.correct ? pointsPerQuestion : 0) + '</div>'
        +   '<div>Result: '
        +     '<span class="quiz-badge ' + (d.correct ? 'quiz-badge-pass">Correct' : 'quiz-badge-fail">Incorrect') + '</span>'
        +   '</div>'
        + '</div>'
        + '<p><strong>Your answer:</strong> ' + yourPretty + '</p>'
        + '<p><strong>Correct answer:</strong> <span class="quiz-answer-key">' + ansPretty + '</span></p>';

      perQuestion.appendChild(block);
    });

    resultsWrapper.classList.add('show');
    document.getElementById('quiz-submit').disabled = true;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    grade();
  });

  document.getElementById('quiz-reset').addEventListener('click', function () {
    form.reset();
    const resultsWrapper = document.getElementById('quiz-results');
    const perQuestion = document.getElementById('quiz-per-question');
    const overall = document.getElementById('quiz-overall');
    resultsWrapper.classList.remove('show');
    perQuestion.innerHTML = '';
    overall.innerHTML = '';
    document.getElementById('quiz-submit').disabled = false;
    document.getElementById('q1').focus();
  });
})();
</script>
