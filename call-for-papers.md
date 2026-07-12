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



<section class="section section--soft" aria-labelledby="topics-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Topics of Interest</p>
      <h2 id="topics-title">Topics</h2>
      <p>IEEE ISORC 2027 invites papers on all aspects of real-time distributed computing technology, including, but not limited to:</p>
    </div>

    <ul class="topic-list">
      {% for topic in site.data.topics %}
        {% if topic.title %}
        <li><strong>{{ topic.title }}:</strong> {{ topic.description }}</li>
        {% endif %}
      {% endfor %}
    </ul>

   <p class="notice-card" style="margin-top:2rem;">
  <strong>Note:</strong> Papers addressing AI/ML, IoT, or general distributed systems topics without an explicit real-time, timing, or embedded dimension are outside ISORC's scope.
</p>
  </div>
</section>

