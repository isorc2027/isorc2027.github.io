---
layout: default
title: Organization
description: Organizing committee for ISORC 2027 at IIT Ropar, India.
permalink: /organization/
---

<section class="page-hero" aria-labelledby="page-title">
  <div class="container page-hero__content">
    <p class="eyebrow">Organization</p>
    <h1 id="page-title">ISORC 2027 Organizing Committee</h1>
    <p>The committee structure below will be updated as confirmations are received. Contact <a href="mailto:{{ site.conference.contact_email }}" style="color:inherit">{{ site.conference.contact_email }}</a> for inquiries.</p>
  </div>
</section>

<section class="section" aria-labelledby="committee-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Committees</p>
      <h2 id="committee-title">Organizing Committee</h2>
    </div>

    <div class="committee-grid">
      {% for role in site.data.committee.roles %}
      <article class="committee-card">
        <h3>{{ role.title }}</h3>
        <ul class="person-list">
          {% for person in role.members %}
          <li>
            <strong>{{ person.name }}</strong>
            <span>{{ person.affiliation }}</span>
          </li>
          {% endfor %}
        </ul>
      </article>
      {% endfor %}

      <article class="committee-card committee-card--wide">
        <h3>Host Institution</h3>
        <p>{{ site.data.committee.host.department }}, {{ site.data.committee.host.institution }}, {{ site.data.committee.host.location }}.</p>
      </article>
    </div>
  </div>
</section>
