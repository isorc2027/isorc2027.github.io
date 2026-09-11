---
layout: default
title: Submission
description: Submission instructions for ISORC 2027.
permalink: /submission/
---

<section class="page-hero" aria-labelledby="page-title">
  <div class="container page-hero__content">
    <p class="eyebrow">Submission</p>
    <h1 id="page-title">Submission Guidelines</h1>
    <p>ISORC 2027 submissions will follow IEEE conference formatting requirements. Final page limits and review policies will be announced with the official CFP.</p>
    <div class="page-hero__actions">
      <a class="button button--primary" href="https://submission.isorc-conference.org/" rel="noopener" target="_blank">Submit via HotCRP</a>
      <a class="button button--secondary" href="https://www.ieee.org/conferences/publishing/templates.html" rel="noopener" target="_blank">IEEE Templates</a>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="format-title">
  <div class="container section__grid">
    <article class="prose">
      <p class="eyebrow">Formatting</p>
      <h2 id="format-title">IEEE double-column format</h2>
      <p>Authors should prepare manuscripts using the standard IEEE conference proceedings template in double-column format. Submissions must be written in English and should present original work that has not been simultaneously submitted elsewhere.</p>
      <p>Figures, tables, algorithms, and references must remain readable after PDF generation. Authors should verify fonts, margins, embedded figures, hyperlinks, and accessibility of the generated PDF before submission.</p>

      <h3>Expected manuscript categories</h3>
      <ul class="topic-list">
        <li><strong>Regular Research Papers:</strong> full technical contributions with complete evaluation.</li>
        <li><strong>Industrial Papers and Practitioner Reports:</strong> applied systems, deployments, tools, and lessons learned.</li>
        <li><strong>Short Papers:</strong> focused contributions, early results, or emerging ideas with clear novelty.</li>
      </ul>
    </article>

    <aside class="notice-card" aria-labelledby="submission-status-title">
      <h2 id="submission-status-title">Submission Portal</h2>
      <p>The official HotCRP submission portal is now open for paper submissions.</p>
      <a class="button button--ghost" href="https://submission.isorc-conference.org/" rel="noopener" target="_blank">Open Submission Portal</a>
      <p class="notice-card__fine"><strong>Important: New account registration required.</strong> This is a newly deployed submission system — accounts from previous conferences or other HotCRP installations will not work here. If you have not registered on the ISORC 2027 portal before, select <strong>“Create an account”</strong> on the portal's sign-in page and complete registration before submitting.</p>
    </aside>
  </div>
</section>

<section class="section" aria-labelledby="ai-policy-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Policies</p>
      <h2 id="ai-policy-title">Use of AI tools</h2>
      <p>ISORC 2027 permits limited use of AI-assisted tools by authors, subject to disclosure, and prohibits the use of external AI systems by reviewers when handling manuscripts under review. Authors and reviewers should review the full policy before submission or review.</p>
    </div>
    <a class="button button--secondary" href="{{ '/policies/ai-tools/' | relative_url }}">Read AI Tools Policy</a>
  </div>
</section>

<section class="section" aria-labelledby="pc-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Program Committee</p>
      <h2 id="pc-title">Program Committee Chairs</h2>
    </div>
    <ul class="committee-list">
      {% for role in site.data.committee.roles %}
        {% if role.title == "Program Committee Chairs" %}
          {% for member in role.members %}
            <li class="committee-member">
              <strong>{{ member.name }}</strong> — {{ member.affiliation }}
            </li>
          {% endfor %}
        {% endif %}
      {% endfor %}
    </ul>
  </div>
</section>

<section class="section section--soft" aria-labelledby="review-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Review Process</p>
      <h2 id="review-title">Quality and integrity</h2>
      <p>Submissions will be reviewed for originality, significance, technical soundness, clarity, reproducibility, and relevance to the ISORC community. Specific review mode, anonymity policy, and conflict-of-interest rules will be published in the final CFP.</p>
    </div>
  </div>
</section>
