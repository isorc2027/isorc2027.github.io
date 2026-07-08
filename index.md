---
layout: default
title: Home
description: Official home page for ISORC 2027 at IIT Ropar, India.
---

<section class="hero" aria-labelledby="hero-title">
  <img class="hero__image" src="{{ '/assets/img/iit-ropar-campus-placeholder.jpg' | relative_url }}" alt="Placeholder campus view of IIT Ropar for ISORC 2027">
  <div class="hero__overlay" aria-hidden="true"></div>
  <div class="container hero__content">
    <p class="eyebrow">{{ site.conference.edition }} IEEE International Symposium</p>
    <h1 id="hero-title">{{ site.tagline }}</h1>
    <p class="hero__lead">{{ site.conference.short_name }} brings together researchers, practitioners, and system builders advancing the theory and practice of real-time distributed computing.</p>
    <dl class="hero__facts" aria-label="Conference details">
      <div>
        <dt>Dates</dt>
        <dd>{{ site.conference.dates }}</dd>
      </div>
      <div>
        <dt>Venue</dt>
        <dd>{{ site.conference.venue_short }}</dd>
      </div>
      <div>
        <dt>Format</dt>
        <dd>In person</dd>
      </div>
    </dl>
    <div class="hero__actions" aria-label="Primary actions">
      <a class="button button--primary" href="{{ '/call-for-papers/' | relative_url }}">View Call for Papers</a>
      <a class="button button--secondary" href="{{ '/venue/' | relative_url }}">Explore Venue</a>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="about-title">
  <div class="container section__grid section__grid--balanced">
    <article class="prose">
      <p class="eyebrow">About ISORC</p>
      <h2 id="about-title">A leading forum for real-time distributed computing</h2>
      <p>The IEEE International Symposium on Real-Time Distributed Computing focuses on the design, analysis, implementation, evaluation, and deployment of time-sensitive distributed systems. ISORC 2027 will emphasize rigorous research and practical systems that integrate predictable timing, dependability, scalability, security, and intelligent operation across modern computing environments.</p>
      <p>The symposium welcomes work spanning real-time systems, distributed and edge computing, cyber-physical systems, IoT, time-sensitive networking, cloud-edge-fog infrastructures, embedded platforms, autonomous systems, and data-intensive real-time analytics.</p>
    </article>

    <aside class="info-panel" aria-labelledby="quick-info-title">
      <h2 id="quick-info-title">Conference Snapshot</h2>
      <ul class="check-list">
        <li>Hosted by {{ site.conference.venue_short }}</li>
        <li>Conference dates: {{ site.conference.dates }}</li>
        <li>Submission portal: coming soon</li>
        <li>CFP PDF: coming soon</li>
      </ul>
    </aside>
  </div>
</section>

<section class="section section--soft" aria-labelledby="gallery-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Campus Gallery</p>
      <h2 id="gallery-title">Venue snapshots</h2>
      <p>Explore conference facilities, the IIT Ropar campus, and the CSE building in preparation for ISORC 2027.</p>
    </div>

    <div class="gallery-grid">
      <figure class="gallery-card">
        <img src="{{ '/assets/img/iit-ropar-campus-placeholder.jpg' | relative_url }}" alt="IIT Ropar campus view">
        <figcaption>IIT Ropar campus</figcaption>
      </figure>
      <figure class="gallery-card">
        <img src="{{ '/assets/img/CSE.jpg' | relative_url }}" alt="IIT Ropar Computer Science and Engineering building">
        <figcaption>CSE building</figcaption>
      </figure>
      <figure class="gallery-card">
        <img src="{{ '/assets/img/1.jpg' | relative_url }}" alt="Conference venue at IIT Ropar">
        <figcaption>Conference venue</figcaption>
      </figure>
      <figure class="gallery-card">
        <img src="{{ '/assets/img/2.jpg' | relative_url }}" alt="IIT Ropar campus pathways">
        <figcaption>Campus pathways</figcaption>
      </figure>
      <figure class="gallery-card">
        <img src="{{ '/assets/img/3.jpg' | relative_url }}" alt="IIT Ropar academic facilities">
        <figcaption>Academic facilities</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="section section--soft" aria-labelledby="themes-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Technical Scope</p>
      <h2 id="themes-title">Research themes</h2>
      <p>ISORC 2027 will provide a high-quality venue for systems research with strong theoretical foundations, validated prototypes, industrial case studies, and reproducible evaluation.</p>
    </div>

    <div class="card-grid card-grid--four">
      <article class="theme-card">
        <span class="theme-card__icon" aria-hidden="true">01</span>
        <h3>Real-Time Systems</h3>
        <p>Scheduling, timing analysis, deterministic execution, real-time kernels, middleware, and verification.</p>
      </article>
      <article class="theme-card">
        <span class="theme-card__icon" aria-hidden="true">02</span>
        <h3>Distributed Computing</h3>
        <p>Reliable, scalable, and dependable architectures for networked and service-oriented systems.</p>
      </article>
      <article class="theme-card">
        <span class="theme-card__icon" aria-hidden="true">03</span>
        <h3>IoT, Edge, and CPS</h3>
        <p>Cyber-physical platforms, sensor networks, edge AI, robotics, smart infrastructure, and industrial systems.</p>
      </article>
      <article class="theme-card">
        <span class="theme-card__icon" aria-hidden="true">04</span>
        <h3>Dependability & Security</h3>
        <p>Fault tolerance, resilience, safety, security, observability, and assurance for critical distributed systems.</p>
      </article>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="dates-preview-title">
  <div class="container callout">
    <div>
      <p class="eyebrow">Important Dates</p>
      <h2 id="dates-preview-title">Mark the conference dates</h2>
      <p>Paper submission, notification, and camera-ready deadlines will be announced after the final organizing committee approval.</p>
    </div>
    <a class="button button--primary" href="{{ '/important-dates/' | relative_url }}">View Important Dates</a>
  </div>
</section>
