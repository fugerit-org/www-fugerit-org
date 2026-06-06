# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-06-06

### Added

- New static website built with [Astro 6](https://astro.build) and deployed on GitHub Pages
  - Homepage with hero section, core libraries overview, quality badges, tools preview and credits
  - `/projects/` page with detailed descriptions of all core libraries (fj-bom, fj-lib, fj-doc, fj-daogen, fj-universe)
  - `/tools/` page with detailed descriptions of all developer tools (OpenAPI Doc Tool, Query Export Tool, GraalVM Native Helper, GitHub Issue Export, freemarker-native)
  - `/about/` page with organization info, mission statement and contacts
  - `/blog/` section with Markdown-based blog posts (index + individual post pages)
  - Dark teal design system built with Vanilla CSS, based on the Fugerit logo palette (`#00a896` / `#028090`)
  - Responsive layout with glassmorphism navbar and mobile hamburger menu
  - GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic CI/CD deployment on push to `main`
  - Custom domain support via `public/CNAME` (`www.fugerit.org`)
  - Full SEO meta tags, Open Graph and Twitter Card on every page

[Unreleased]: https://github.com/fugerit-org/www-fugerit-org/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/fugerit-org/www-fugerit-org/releases/tag/v1.0.0
