# www.fugerit.org

Source code for the official **Fugerit Coding Org** website, deployed at [www.fugerit.org](https://www.fugerit.org).

Built with [Astro 4](https://astro.build) and hosted on GitHub Pages.

## 🛠️ Tech Stack

- **Framework**: Astro 4 (static site generator)
- **Styling**: Vanilla CSS with custom dark design system
- **Deployment**: GitHub Actions → GitHub Pages
- **Domain**: Custom domain via CNAME (`www.fugerit.org`)

## 📁 Project Structure

```
www-fugerit-org/
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD: builds and deploys on push to main
├── public/
│   ├── fugerit-logo.svg     # Site logo
│   └── CNAME                # Custom domain configuration
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── blog/            # Markdown blog posts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── projects.astro   # Projects listing
│   │   ├── tools.astro      # Tools listing
│   │   ├── about.astro      # About page
│   │   └── blog/
│   │       ├── index.astro  # Blog index
│   │       └── [slug].astro # Individual blog post
│   └── styles/
│       └── global.css       # Global design system
└── astro.config.mjs
```

## 🚀 Local Development

```bash
npm install
npm run dev
# Open http://localhost:4321
```

## 📦 Build

```bash
npm run build
# Output in ./dist/
```

## ✍️ Adding a Blog Post

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "My Post Title"
description: "Short description of the post."
pubDate: 2026-01-01
author: "Fugerit Coding Org"
tags: ["java", "release"]
---

Content goes here...
```

The filename (without `.md`) becomes the URL slug: `src/content/blog/my-post.md` → `/blog/my-post/`

## 🌐 DNS Configuration

For `www.fugerit.org` to resolve to GitHub Pages, configure these DNS records:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | fugerit-org.github.io  |

Then in the GitHub repository settings → Pages → Custom domain → enter `www.fugerit.org`.

## 📄 License

Apache-2.0 © Fugerit Coding Org
