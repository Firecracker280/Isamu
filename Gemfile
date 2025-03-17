# Gemfile
# This file specifies the Ruby gems that your Jekyll site depends on
# It ensures that anyone who wants to work on your site has the same dependencies installed
# To install these dependencies, run: bundle install

source "https://rubygems.org"

# Jekyll version - adjust as needed
gem "jekyll", "~> 4.2.0"

# This is the default theme for new Jekyll sites
# You can replace this with a different theme or remove it if using custom styling
# gem "minima", "~> 2.5"

# If you want to use GitHub Pages, uncomment the line below
gem "github-pages", group: :jekyll_plugins

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"       # Generates an Atom feed of your posts
  gem "jekyll-seo-tag", "~> 2.7"     # Adds SEO tags to your site
  gem "jekyll-sitemap", "~> 1.4"     # Generates a sitemap for your site
  # Add other plugins as needed
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
