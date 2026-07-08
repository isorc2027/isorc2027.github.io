---
layout: default
title: Call for Papers
description: Call for Papers for ISORC 2027 — 30th IEEE International Symposium on Real-Time Distributed Computing, IIT Ropar, India.
permalink: /call-for-papers/
---

<section class="page-hero" aria-labelledby="page-title">
  <div class="container page-hero__content">
    <p class="eyebrow">Call for Papers</p>
    <h1 id="page-title">ISORC 2027 Call for Papers</h1>
    <p>We invite high-quality submissions on real-time distributed computing — from foundational methods and architectures to evaluated systems, applications, and industrial experience reports.</p>
    <div class="page-hero__actions">
      {% if site.conference.cfp_available %}
        <a class="button button--primary" href="{{ site.conference.cfp_pdf | relative_url }}" target="_blank" rel="noopener">Download CFP (PDF)</a>
      {% else %}
        <button class="button button--primary" type="button" disabled>Download CFP (PDF) — Coming Soon</button>
      {% endif %}
      <a class="button button--secondary" href="{{ '/submission/' | relative_url }}">Submission Guidelines</a>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="tracks-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Tracks</p>
      <h2 id="tracks-title">Conference Tracks</h2>
      <p>Final track names, page limits, and deadlines are subject to approval by the ISORC 2027 organizing committee.</p>
    </div>

    <div class="card-grid card-grid--three">
      {% for track in site.data.tracks %}
      <article class="track-card">
        <h3>{{ track.title }}</h3>
        <p>{{ track.description }}</p>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="track-types-title">
  <div class="container section__grid">
    <article class="prose">
      <p class="eyebrow">Track Details</p>
      <h2 id="track-types-title">Submission tracks</h2>
      <p>ISORC 2027 will include the following submission tracks, each with dedicated review and presentation formats.</p>
      <ul class="topic-list">
        <li><strong>Research Track:</strong> Full papers reporting novel contributions, system design, evaluation, or theory in real-time distributed computing.</li>
        <li><strong>Poster Track:</strong> Work-in-progress reports, emerging ideas, demos, and early-stage research discussions.</li>
        <li><strong>Doctoral Symposium & Dissertation Digests:</strong> PhD research summaries, dissertation digests, and early-career investigator presentations.</li>
      </ul>
    </article>

    <aside class="notice-card" aria-labelledby="camera-ready-title">
      <h2 id="camera-ready-title">Camera Ready Instructions</h2>
      <p>Accepted papers will receive camera-ready formatting instructions that include the IEEE template, copyright forms, and final submission deadlines.</p>
      <p class="status-pill status-pill--muted">Instructions will be added once the review process is complete.</p>
    </aside>
  </div>
</section>

<section class="section section--soft" aria-labelledby="topics-title">
  <div class="container section__grid">
    <article class="prose">
      <p class="eyebrow">Topics of Interest</p>
      <h2 id="topics-title">Research Scope</h2>
      <p>Topics include, but are not limited to, the following areas:</p>
      <ul class="topic-list">
        {% for topic in site.data.topics %}
        <li>{{ topic }}</li>
        {% endfor %}
      </ul>
    </article>

    <aside class="notice-card" aria-labelledby="cfp-status-title">
      <h2 id="cfp-status-title">CFP Status</h2>
      <p>The official ISORC 2027 CFP PDF and submission portal will be published after approval by the organizing committee.</p>
      {% if site.conference.cfp_available %}
        <a class="button button--ghost" href="{{ site.conference.cfp_pdf | relative_url }}" target="_blank" rel="noopener">Download CFP PDF</a>
      {% else %}
        <p class="status-pill status-pill--muted">To be announced</p>
      {% endif %}
    </aside>
  </div>
</section>
