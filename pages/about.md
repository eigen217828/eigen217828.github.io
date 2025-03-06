---
layout: page
menu: false
date: '2025-03-06 00:00:00'
title: Who am I? 
description: I study and adapt AI algorithms particularly in spatial domain. I wish someday I could create special one for artificial general intelligence(AGI) and whose embodied AI. I believe the 3D Gaussian Splatting(3DGS) is the key of spatial perception and pay attention to its application within AI area. I majored Electrical and Electronic Engineering(EEE) at Yonsei university, Republic of South Korea. From there, I learned broad knowledge about mathematics, physics, AI and their applications such as computer vision(CV), natural language processing(NLP), electronic engineering, mechanical engineering. I was a research intern at Seoul National University(SNU) for biomedical AI and Yonsei University for human-computer interaction(HCI), respectively.   
permalink: /about/
---

<img class="img-rounded" src="/assets/img/photo.png" alt="Me" width="200">

<article class="post">
    <h1 class="post-title">{{ page.title }}</h1>
    
    {% if page.description %}
    <div class="post-description">
        {{ page.description }}
    </div>
    {% endif %}
    
    {{ content }}
</article>