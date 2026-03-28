---
name: tech-blog-pipeline
description: >-
  Autonomous pipeline that turns a technical question into a draft blog post on
  the user's portfolio. Generates a staff-engineer-level deep dive, creates a
  hero image, and saves as a draft MDX post. Use when the user says "blog this",
  "write a blog", "publish this", "add to portfolio", or asks a technical
  question and wants it turned into a blog post.
---

# Tech Blog Pipeline

Autonomous system that converts a technical question into a polished draft blog post on the user's portfolio at `/Users/harrykp/Documents/portfolio/`.

## Pipeline Steps

When triggered, execute ALL steps in order. Do not ask for confirmation between steps.

### Step 1: Generate the Deep Dive

Read the skill at `~/.cursor/skills/staff-engineer-deep-dive/SKILL.md` and follow its framework EXACTLY to produce the technical answer. Do not soften, summarize, or simplify. The blog IS the deep dive. This is not a tutorial blog — it's a technical reference written by a staff engineer for staff engineers.

### Step 2: Adapt for Blog Format

Transform the deep-dive output into MDX. The content stays at maximum depth — only the formatting changes.

1. **Title**: Convert the question into a definitive technical title. Not clickbait — authority.
   - Question: "what is erasure coding" → Title: "Erasure Coding — Reed-Solomon over GF(2^8), Repair Bandwidth, and Why Facebook Ditched Replication"
   - Question: "how does S3 presigned URL work" → Title: "S3 Presigned URLs — HMAC-SHA256 Signature Chains, Clock Skew, and the Complete Threat Model"
   - The title should signal to a staff engineer: "this post has the details I actually need."

2. **Summary**: One sentence that names the specific technical concepts covered. Not a marketing hook — a technical abstract.
   - Good: "Galois Field arithmetic, Vandermonde vs Cauchy matrices, ISA-L SIMD encoding at 40 GB/s, tail latency amplification, and the repair bandwidth problem that led to Local Reconstruction Codes."
   - Bad: "A deep dive into erasure coding for distributed storage."

3. **Tags**: Pick 2-5 relevant tags. Use existing tag conventions from the portfolio:
   - `"Distributed Systems"`, `"Database Transactions"`, `"Networking"`, `"Redis"`, `"System Design"`
   - Add specific tech tags: `"AWS"`, `"Kafka"`, `"gRPC"`, `"Linux Internals"`, etc.

4. **Body requirements — NON-NEGOTIABLE**:
   - The blog body IS the staff-engineer deep dive. Do not water it down for "readability."
   - Use markdown headers (`##`, `###`) for sections.
   - Code blocks with language hints (```c, ```python, ```sql, ```bash, etc.) for EVERY code/protocol/config snippet.
   - Tables for EVERY comparison between alternatives — quantified, not qualitative.
   - ASCII sequence diagrams for multi-party protocol flows.
   - Use `<details><summary>` for tangential deep dives that support the main argument but would break flow (matches existing blog style).
   - Cite papers, RFCs, source code paths. If you reference how Linux handles fsync, cite the kernel path. If you reference a Google paper, cite the section number.
   - **NO FILLER**: No "Let's explore...", no "In this post, we'll...", no "As we all know...". Start the body with the first technical fact. End with the last insight. Zero ceremony.

### Step 3: Generate Hero Image

Use the `GenerateImage` tool to create a hero image:

- **Style**: Dark background (near-black, like #0a0a0a), minimal, technical aesthetic
- **Content**: Abstract visualization of the core concept — NOT text-heavy. Think: nodes and connections for distributed systems, lock icons for locking, data flow arrows for streaming, etc.
- **Size**: Landscape orientation, suitable for blog hero (will be displayed at ~1200x630)
- **Filename**: Match the slug, e.g., `erasure-coding.png`
- **Save to**: `/Users/harrykp/Documents/portfolio/public/{slug}.png`

### Step 4: Write the MDX File

Create the file at `/Users/harrykp/Documents/portfolio/content/{slug}.mdx`.

**Slug rules**: lowercase, hyphens, no special characters. Derived from title.
- "Erasure Coding — How Distributed Systems Survive Disk Failures" → `erasure-coding`

**Frontmatter template**:

```yaml
---
title: "{title}"
summary: "{summary}"
publishedAt: "{today's date in YYYY-MM-DD}"
image: "/{slug}.png"
tags: [{tags}]
badge: "draft"
---
```

**CRITICAL**: Always include `badge: "draft"`. This prevents the post from showing on the live site until the user reviews and removes the badge.

### Step 5: Confirm & Provide Review Instructions

After creating the file, tell the user:

1. The file path created
2. The image path created  
3. How to preview: `cd /Users/harrykp/Documents/portfolio && npm run dev` then visit `http://localhost:3000/blog/{slug}`
4. Note: The post won't appear in the blog listing because it's in draft. To view it directly, navigate to the URL.
5. To publish: Remove the `badge: "draft"` line from the frontmatter.

## Important Rules

- NEVER publish without draft badge. Always `badge: "draft"`.
- Match the existing blog style — look at recent posts in `/Users/harrykp/Documents/portfolio/content/` for frontmatter conventions.
- Use today's actual date for `publishedAt`.
- If the user just asks a technical question without explicitly saying "blog this", use the `staff-engineer-deep-dive` skill instead. Only trigger this pipeline when the user explicitly wants a blog post.

## Quality Bar — The Blog MUST:

- Contain at least one code block showing wire format, data structure layout, or algorithm pseudocode.
- Contain at least one comparison table with quantified metrics (not qualitative "fast/slow").
- Cite at least 2 specific papers, RFCs, or source code paths.
- Include concrete latency/throughput numbers (not "fast" — "~200ns", "~10ms", "3,500 ops/s").
- Name every algorithm by its real name (AES-256-GCM, not "encryption"; ECDHE over Curve25519, not "key exchange").
- Cover the failure mode that causes the most production incidents for this technology.
- NOT contain the phrases: "Let's dive in", "In this blog post", "As we all know", "In simple terms", "To put it simply", "Under the hood" (ironic given the skill name — find better transitions or use none).

If the output doesn't meet this bar, rewrite until it does.
