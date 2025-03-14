# Portfolio Website

## Overview
This is a personal portfolio website built with Jekyll and designed to be hosted on GitHub Pages. The website showcases my work, writings, projects, and provides information about me and how to get in contact.

## Structure
The website follows a standard Jekyll structure with the following sections:
- **About**: Information about me and my background
- **Projects**: A collection of my work and projects
- **Writings**: Articles and essays I've written
- **Journal**: Blog posts and updates
- **Contact**: How to get in touch with me

## Features
- Responsive design that works on desktop and mobile devices
- Clean, minimalist aesthetic inspired by jonathandacosta.com
- Collection-based content management for projects and writings
- Markdown support for easy content creation
- Image support for project thumbnails and banners

## Local Development
To run this site locally:

1. Install Ruby and Jekyll (if not already installed)
2. Clone this repository
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start the local server
5. Visit `http://localhost:4000` in your browser

## Adding Content
- To add a new project, create a markdown file in the `_projects` directory
- To add a new writing, create a markdown file in the `_writings` directory
- To add a new journal post, create a markdown file in the `_posts` directory
- Follow the front matter format in the sample files

## Deployment
This site is designed to be deployed to GitHub Pages. Simply push to your GitHub repository, and enable GitHub Pages in the repository settings.

## Customization
- Edit `_config.yml` to change site-wide settings
- Modify files in `_sass` directory to change styling
- Update templates in `_layouts` and `_includes` to change structure

## License
This project is open source and available under the [MIT License](LICENSE).
