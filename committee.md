---
layout: default
title: Committee
description: Organizing and program committee information for ISORC 2027.
permalink: /committee/
---

<section class="page-hero" aria-labelledby="page-title">
  <div class="container page-hero__content">
    <p class="eyebrow">Committee</p>
    <h1 id="page-title">Conference Committees</h1>
    <p>Meet the organizing and program committees guiding the technical direction of ISORC 2027.</p>
  </div>
</section>

<section class="section" aria-labelledby="organization-committee-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Organization Committee</p>
      <h2 id="organization-committee-title">Planning and local support</h2>
      <p>The organizing committee is responsible for conference logistics, venue coordination, publicity, and community outreach.</p>
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
    </div>
  </div>
</section>

<section class="section section--soft" aria-labelledby="program-committee-title">
  <div class="container">
    <div class="section__header">
      <p class="eyebrow">Program Committee</p>
      <h2 id="program-committee-title">Scientific review and program building</h2>
      <p>The program committee will evaluate submissions, shape the technical program, and ensure high-quality review outcomes.</p>
    </div>

    <div class="committee-grid">
      {% for member in site.data.committee.program_committee %}
      <article class="committee-card">
        <h3>{{ member.name }}</h3>
        <p>{{ member.affiliation }}</p>
      </article>
      {% endfor %}
    </div>
  </div>
</section>
