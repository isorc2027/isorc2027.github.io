---
layout: default
title: Home
description: Official home page for ISORC 2027 at IIT Ropar, India.
---

<section class="hero" aria-labelledby="hero-title">
  <img class="hero__image" src="{{ '/assets/img/iit-ropar-campus-placeholder.jpg' | relative_url }}" alt="Placeholder campus view of IIT Ropar for ISORC 2027">
  <div class="hero__overlay" aria-hidden="true"></div>
  <div class="container hero__content">
 
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
        <li>CFP PDF: <a href="{{ site.conference.cfp_pdf | relative_url }}" target="_blank">Download PDF</a></li>
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

    <div class="slideshow" aria-label="Campus gallery slideshow">
      <div class="slideshow__track">
        <div class="slide active">
          <img src="{{ '/assets/img/MAIN.jpg' | relative_url }}" alt="IIT Ropar main building">
        </div>
        <div class="slide">
          <img src="{{ '/assets/img/AERIEL.jpg' | relative_url }}" alt="Aerial view of IIT Ropar">
        </div>
        <div class="slide">
          <img src="{{ '/assets/img/iitropar-pic-2.jpg' | relative_url }}" alt="IIT Ropar campus">
        </div>
        <div class="slide">
          <img src="{{ '/assets/img/rainy.jpg' | relative_url }}" alt="IIT Ropar campus in rain">
        </div>
        <div class="slide">
          <img src="{{ '/assets/img/indus.jpg' | relative_url }}" alt="Indus river near IIT Ropar">
        </div>
        <div class="slide">
          <img src="{{ '/assets/img/sab.jpg' | relative_url }}" alt="IIT Ropar SAB building">
        </div>
        <div class="slide">
          <img src="{{ '/assets/img/CSE.jpg' | relative_url }}" alt="CSE building">
        </div>
        <div class="slide">
          <img src="{{ '/assets/img/1.jpg' | relative_url }}" alt="Conference venue">
        </div>
        <div class="slide">
          <img src="{{ '/assets/img/2.jpg' | relative_url }}" alt="Campus pathways">
        </div>
        <div class="slide">
          <img src="{{ '/assets/img/3.jpg' | relative_url }}" alt="Academic facilities">
        </div>
        <div class="slide">
          <video autoplay muted loop playsinline>
            <source src="{{ '/assets/img/iitrpr_campus_video.mp4' | relative_url }}" type="video/mp4">
          </video>
        </div>
      </div>
      <button class="slideshow__btn slideshow__btn--prev" aria-label="Previous slide">&#8592;</button>
      <button class="slideshow__btn slideshow__btn--next" aria-label="Next slide">&#8594;</button>
      <div class="slideshow__dots" aria-hidden="true"></div>
    </div>
  </div>
</section>




