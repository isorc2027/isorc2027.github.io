---
layout: default
title: Important Dates
description: Important dates and deadlines for ISORC 2027 at IIT Ropar, India.
permalink: /important-dates/
---

<section class="page-hero" aria-labelledby="page-title">
  <div class="container page-hero__content">
    <p class="eyebrow">Important Dates</p>
    <h1 id="page-title">ISORC 2027 Important Dates</h1>
    <p>All deadlines are Anywhere on Earth (AoE, UTC−12) unless stated otherwise. Dates will be confirmed after organizing committee approval.</p>
  </div>
</section>

<section class="section" aria-labelledby="dates-title">
  <div class="container">
    <div class="dates-summary" role="note" aria-label="Conference dates">
      <span class="dates-summary__label">Conference Dates</span>
      <strong>{{ site.conference.dates }}</strong>
      <span>{{ site.conference.venue_short }}</span>
    </div>

    <div class="table-wrap" aria-labelledby="dates-title">
      <h2 id="dates-title" class="sr-only">Deadline table</h2>
      <table class="dates-table">
        <caption>ISORC 2027 deadlines</caption>
        <thead>
          <tr>
            <th scope="col">Milestone</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {% for item in site.data.dates.milestones %}
          <tr>
            <th scope="row">{{ item.label }}</th>
            <td>{{ item.date }}</td>
            <td>
              {% if item.status == "confirmed" %}
                <span class="status-pill">Confirmed</span>
              {% elsif item.status == "tentative" %}
                <span class="status-pill">Tentative</span>
              {% else %}
                <span class="status-pill status-pill--muted">Pending</span>
              {% endif %}
            </td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  </div>
</section>
