---
layout: post
title: "Title of Your Writing"
date: 2025-03-11
category: essay # Options: essay, research, critique, review, tutorial, etc.
featured_image: /assets/images/writing/image-name.jpg
author: Your Name
tags:
  - tag1
  - tag2
  - tag3
excerpt: "A compelling short summary of your writing piece that will appear in previews and listings. This should be attention-grabbing and convey the main idea."
---

{% assign words = content | number_of_words %}
{% assign reading_time = words | divided_by: 180 | plus: 1 %}
<div class="reading-time">
  <i class="fa fa-clock-o" aria-hidden="true"></i> {{ reading_time }} min read
</div>

## Abstract

*A more detailed summary of your writing piece, typically 150-250 words. This should provide readers with a clear understanding of what they'll gain from reading the full piece. Include your main argument, approach, and key takeaways.*

---

## Introduction

Begin your writing with a strong opening paragraph that hooks the reader. Introduce the topic, provide necessary context, and outline what you'll be discussing. Consider including a thesis statement if appropriate.

## Main Section 1

Develop your first main point or argument here. Support your ideas with evidence, examples, research, or personal experiences as appropriate. Use clear topic sentences and transitions between paragraphs.

### Subsection (if needed)

Further break down complex ideas into digestible parts. Use headers to create a logical structure that guides the reader through your thought process.

{% include image.html url="/assets/images/writing/section1-image.jpg" alt="Descriptive Alt Text" caption="Caption for this image" %}

## Main Section 2

Continue developing your ideas with a second main point. Consider using:

- Bullet points for lists
- *Italics* for emphasis
- **Bold** for strong emphasis
- > Blockquotes for referenced material

## Main Section 3

Provide your third main point or a different perspective on the topic. Consider including a visual element if it enhances understanding:

```js
// Code block example
function exampleCode() {
  return "This is a code example";
}
```

## Conclusion

Summarize your key points and restate your main argument or thesis. Provide closure while also suggesting broader implications or questions for further consideration. Avoid introducing entirely new ideas in the conclusion.

---

## References

1. Author, A. (Year). *Title of work*. Publisher. URL
2. Author, B. (Year). "Title of article." *Journal Name*, Volume(Issue), pages. DOI

---

<div class="tags">
  {% for tag in page.tags %}
    <span class="tag">{{ tag }}</span>
  {% endfor %}
</div>

{% if site.related_posts.size > 0 %}
<div class="related-posts">
  <h3>Related Writing</h3>
  <ul>
    {% for post in site.related_posts limit:3 %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <small>{{ post.date | date_to_string }}</small>
      </li>
    {% endfor %}
  </ul>
</div>
{% endif %}

<!-- Optional social sharing buttons -->
<div class="share-buttons">
  <h3>Share this writing</h3>
  <a href="https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{ page.url }}" target="_blank" rel="noopener noreferrer">Twitter</a>
  <a href="https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{ page.url }}&title={{ page.title }}&summary={{ page.excerpt }}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</div>
