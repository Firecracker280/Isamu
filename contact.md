---
layout: default
title: Contact
permalink: /contact/
---

<!--
contact.md
This is the contact page of the portfolio website.
It provides ways for visitors to get in touch with you.

This file controls:
1. The content of the Contact page
2. The layout and structure of the page (using the page layout)
3. The contact form and other contact methods

To modify this page:
- Update the front matter (title, permalink)
- Edit the content to reflect your preferred contact methods
- Customize the contact form fields as needed
-->

<div class="contact">
  <div class="contact-content">
    <!-- 
    Contact information section.
    This section provides various ways to get in touch with you.
    -->
    <div class="contact-info">
      <h2>Get In Touch</h2>
      <p>I'm always interested in hearing about new projects, opportunities, or just connecting with fellow creatives. Feel free to reach out through any of the methods below.</p>
      
      <div class="contact-methods">
        <div class="contact-method">
          <h3>Email</h3>
          <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
        </div>
        
        <div class="contact-method">
          <h3>Location</h3>
          <p>City, Country</p>
        </div>
        
        <div class="contact-method">
          <h3>Social</h3>
          <ul class="social-links">
            {% if site.github_username %}
            <li>
              <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">GitHub</a>
            </li>
            {% endif %}
            
            {% if site.twitter_username %}
            <li>
              <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener">Twitter</a>
            </li>
            {% endif %}
            
            {% if site.linkedin_username %}
            <li>
              <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener">LinkedIn</a>
            </li>
            {% endif %}
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 
    Contact form section.
    This section provides a form for visitors to send you a message directly.
    Note: This form needs a backend service to process submissions.
    Options include:
    - Formspree.io (easy setup, free tier available)
    - Netlify Forms (if hosting on Netlify)
    - Custom backend with AWS Lambda or similar
    -->
    <div class="contact-form">
      <form action="https://formspree.io/f/your-form-id" method="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="_replyto" required>
        </div>
        
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject" required>
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        
        <!-- This prevents spam submissions -->
        <input type="text" name="_gotcha" style="display:none">
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
  
  <!-- 
  Additional information section.
  This section can include availability, response times, or other relevant information.
  -->
  <div class="additional-info">
    <h3>Working Hours</h3>
    <p>I'm typically available Monday through Friday, 9am to 6pm (UTC). I aim to respond to all inquiries within 24-48 hours.</p>
    
    <h3>Project Inquiries</h3>
    <p>For project inquiries, please include details about your project scope, timeline, and budget to help me provide a more accurate response.</p>
  </div>
</div>

<!--
Note: To make the contact form functional, you'll need to:
1. Replace "your-form-id" in the form action with your actual Formspree form ID
2. Or replace the entire form action with your preferred form handling service
3. Test the form submission to ensure it works correctly
-->
