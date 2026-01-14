# Harshit Chaudhary - Portfolio

My personal portfolio website built with Next.js 15, featuring a blog, dark/light mode, and animated backgrounds.

🔗 **Live**: [harrykp.tech](https://harrykp.tech)

## Features

- ⚡ **Next.js 15** with App Router and React 19
- 🌓 **Dark/Light Mode** with system preference detection
- ✨ **Animated Background** with floating particles
- 📝 **Blog** with MDX support and syntax highlighting
- 🔗 **Open Source Contributions** fetched from GitHub API
- 📱 **Fully Responsive** design
- 🎨 **Framer Motion** animations
- 📊 **Reading Time** estimates for blog posts

## Tech Stack

- **Framework**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Blog**: MDX with gray-matter, react-markdown
- **Icons**: Lucide React

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Harry-kp/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── content/           # MDX blog posts
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   │   ├── blog/      # Blog-specific components
│   │   ├── sections/  # Page sections (Hero, Projects, etc.)
│   │   └── ui/        # Reusable UI components
│   ├── data/          # Portfolio data (resume.ts)
│   └── lib/           # Utilities (mdx parser, github API)
```

## Configuration

Edit `src/data/resume.ts` to update:
- Personal information
- Work experience
- Education
- Projects
- Skills

## Adding Blog Posts

Create a new `.mdx` file in the `content/` directory:

```yaml
---
title: "Your Post Title"
summary: "A brief description"
publishedAt: "2025-01-15"
image: "/your-image.jpg"
tags: ["tag1", "tag2"]
---

Your markdown content here...
```

## License

MIT License - Feel free to use this as inspiration for your own portfolio!

---

Built with ☕ by [Harshit Chaudhary](https://github.com/Harry-kp)
