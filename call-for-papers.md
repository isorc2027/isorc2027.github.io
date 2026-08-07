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
    <p>The 30th IEEE International Symposium on Real-Time Distributed Computing — IIT Ropar, Punjab, India — April 7–9, 2027.</p>
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

<section class="section" aria-labelledby="about-title">
  <div class="container prose">
    <p class="eyebrow">About IEEE ISORC</p>
    <h2 id="about-title">About IEEE ISORC</h2>
    <p>IEEE ISORC was established in 1998 to advance research in real-time distributed computing. For nearly three decades, ISORC has served as the premier intimate forum where researchers and practitioners tackle the hardest timing, predictability, and dependability challenges facing modern computing systems.</p>
    <p>Today, real-time constraints are no longer confined to traditional embedded systems. They define the performance envelope of autonomous vehicles, edge AI, medical devices, industrial control systems, and next-generation communications infrastructure. ISORC's single-track format and collegial atmosphere make it the ideal venue to bridge foundational real-time theory with these emerging application domains.</p>
    <p>We invite high-quality papers that place real-time constraints, timing analysis, determinism, or embedded system concerns at the center of their contribution. Topics in AI/ML, IoT, and autonomous systems are welcome when grounded in these foundational concerns.</p>
    <p>ISORC 2027 marks the symposium's 30th anniversary and its debut in India, hosted by IIT Ropar. As always, the program preserves ISORC's single-track format, intimate scale, and dedicated time for cultural engagement with the host region.</p>
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

<section class="section" aria-labelledby="submission-categories-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Submission Categories</p>
      <h2 id="submission-categories-title">Submission Categories</h2>
    </div>
    <ul class="topic-list">
      <li><strong>Regular Research Papers:</strong> Original work, 10 pages maximum plus two extra purchased pages for appendix and references.</li>
      <li><strong>Industrial Papers and Practitioner Reports:</strong> Maximum of 10 pages (with option to purchase 2 extra pages). Papers describing experience using real-time/distributed technology in application or tool development.</li>
      <li><strong>Short Papers:</strong> Maximum 6 pages. Should contain enough information for the program committee to assess the novelty of the problem or approach.</li>
      <li><strong>Doctoral Symposium:</strong> Open to PhD students at any stage; a dedicated venue to present and get feedback on dissertation research.</li>
      <li><strong>Dissertation Digest:</strong> 2-page summaries of ongoing dissertation work, promoted directly to PhD advisors at target institutions.</li>
      <li><strong>Lightning Talks:</strong> 5-minute presentations for work-in-progress, tool demonstrations, and position papers.</li>
      <li><strong>Posters and Demos:</strong> Paired with a social hour — a high-value networking format for early results, tools, and demos.</li>
    </ul>
    <p style="margin-top:1rem;">All full-length papers should be formatted in the standard IEEE double-column format. Submission system shall be announced soon.</p>
  </div>
</section>

<section class="section section--soft" aria-labelledby="venue-format-title">
  <div class="container prose">
    <p class="eyebrow">Venue and Format</p>
    <h2 id="venue-format-title">Venue and Format</h2>
    <p>ISORC 2027 will be held at IIT Ropar, Punjab, India, the symposium's first visit to India and part of ISORC's Americas/Europe/Asia geographic rotation. Consistent with ISORC tradition, the technical program remains single-track so every participant can see every presentation, and the schedule reserves dedicated time for a cultural or excursion activity reflecting the host region.</p>
  </div>
</section>
