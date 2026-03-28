---
name: excalidraw-diagram
description: >-
  Create hand-drawn Excalidraw diagrams with the "Whiteboard Marker" theme,
  save as .excalidraw source files, and auto-export to SVG + PNG via Kroki.
  Use when the user asks for a diagram, flowchart, sequence diagram,
  architecture visual, or when another skill needs diagram generation.
---

# Excalidraw Diagram Generator

Fully automated pipeline: design diagram with Excalidraw MCP, save editable source, export to SVG + PNG. Zero manual steps.

## When to Use

- User asks for a diagram, flowchart, sequence diagram, or architecture visual
- Another skill (e.g., tech-blog-pipeline) needs diagram generation
- User says "draw", "diagram", "visualize", "flow", "sequence diagram"

## Step 1: Design with Excalidraw MCP

Use the `user-excalidraw` MCP server. Call `read_me` **once per conversation** to learn the element format, then `create_view` to build the diagram.

### Theme: "Whiteboard Marker"

The goal: diagrams that look like someone grabbed colored markers and sketched on a whiteboard during a design review. Confident strokes, rough edges, hatched fills, hand-written labels.

### Property Defaults

Shapes (rectangles, ellipses, diamonds):
```json
{"roughness": 2, "fillStyle": "hachure", "strokeWidth": 2, "strokeColor": "#1e1e1e", "fontFamily": 1}
```

Emphasis boxes (callouts, warnings):
```json
{"roughness": 2, "fillStyle": "cross-hatch", "strokeWidth": 2, "fontFamily": 1}
```

Arrows:
```json
{"roughness": 1, "strokeWidth": 2, "endArrowhead": "arrow", "fontFamily": 1}
```
Arrows use roughness 1 (not 2) — roughness 2 makes arrows too wobbly to follow.

Dashed lifelines:
```json
{"roughness": 0, "strokeWidth": 1, "strokeStyle": "dashed", "strokeColor": "#adb5bd"}
```

Text:
```json
{"fontFamily": 1, "fontSize": 18, "strokeColor": "#1e1e1e"}
```
fontFamily 1 = Virgil (Excalidraw's hand-written font). Minimum fontSize 14 for readability.

### Color Palette (Whiteboard Marker Set)

| Role | strokeColor | backgroundColor (hachure fill) | Use case |
|------|-------------|-------------------------------|----------|
| Client / User | `#1e1e1e` | `#a5d8ff` | Browser, mobile, user-facing |
| Backend / Server | `#1e1e1e` | `#d0bfff` | Your server, processing nodes |
| External Service | `#1e1e1e` | `#ffd8a8` | AWS, third-party APIs, databases |
| Annotation / Note | `#e67700` | `#fff3bf` | Callouts, processing steps |
| Success / Direct path | `#2b8a3e` | `#b2f2bb` | Direct connections, positive flows |
| Warning / Callout | `#c92a2a` | `#ffc9c9` | Warnings, important notes |
| Arrows (request) | `#1e1e1e` | — | Primary flow arrows |
| Arrows (response) | `#5c940d` | — | Return / response arrows |
| Arrows (internal) | `#6741d9` | — | Backend-to-service arrows |
| Lifelines | `#adb5bd` | — | Dashed vertical sequence lines |

Strokes are always dark (`#1e1e1e` or a deep color). Fills are light pastels rendered as hachure. This mimics marker coloring — dark outline, lighter cross-hatched interior.

### Layout Guidelines

- **Width**: Design diagrams to span at least 800px wide (x=0 to x=800+). The blog content area is `max-w-3xl` (768px) and images render at `w-full`. Diagrams narrower than the content area look awkwardly short. Spread actors out horizontally.
- Sequence diagrams: header boxes + dashed lifelines + labeled arrows between actors
- Keep font sizes >= 14 (minimum readable at blog display width)
- Use `cameraUpdate` elements to animate the drawing progressively
- `roundness: {"type": 3}` on rectangles for rounded corners

## Step 2: Save the `.excalidraw` Source File

After creating the diagram, save a **standard Excalidraw JSON file** as the editable source of truth.

- Source files: `/Users/harrykp/Documents/portfolio/content/diagrams/{name}.excalidraw`
- If a caller provides a different path, use that instead
- Can be re-opened in excalidraw.com via File → Open anytime for future edits
- Source files are NOT in `public/` — they are not served to the browser

### Excalidraw Format for Kroki Compatibility

The MCP's `label` property is an MCP abstraction. The `.excalidraw` file must use **standard Excalidraw container-bound text** for Kroki to render labels inside shapes. Every labeled shape needs:

1. `boundElements` array on the container: `"boundElements": [{"type": "text", "id": "mytext_id"}]`
2. A separate text element with `containerId` pointing back: `"containerId": "myshape_id"`
3. Every element must have `angle`, `seed`, `fontFamily` (1 = Virgil) fields

Example:
```json
{"type":"rectangle","id":"box1","x":50,"y":70,"width":140,"height":44,"backgroundColor":"#a5d8ff","fillStyle":"hachure","roughness":2,"roundness":{"type":3},"strokeColor":"#1e1e1e","strokeWidth":2,"angle":0,"seed":3,"boundElements":[{"type":"text","id":"box1_t"}]},
{"type":"text","id":"box1_t","x":82,"y":80,"width":76,"height":24,"text":"Browser","fontSize":18,"strokeColor":"#1e1e1e","fontFamily":1,"textAlign":"center","verticalAlign":"middle","containerId":"box1","angle":0,"seed":4}
```

File format:
```json
{"type":"excalidraw","version":2,"source":"https://excalidraw.com","elements":[...],"appState":{"viewBackgroundColor":"#ffffff"},"files":{}}
```

## Step 3: Auto-Export to SVG via Kroki

Use **Kroki.io** (free diagram rendering API) to convert the `.excalidraw` file to SVG. One curl command — fully automated, zero installs.

```bash
curl -s https://kroki.io/excalidraw/svg \
  -H "Content-Type: text/plain" \
  --data-binary '@content/diagrams/{name}.excalidraw' \
  -o public/diagrams/{name}.svg
```

Only generate PNG if explicitly requested (social sharing, README, etc.):
```bash
rsvg-convert -w 1200 --background-color white \
  public/diagrams/{name}.svg \
  -o {output_path}/{name}.png
```

### Directory Convention — Keep `public/diagrams/` Clean

| Directory | Contains | Served to browser? |
|-----------|----------|--------------------|
| `content/diagrams/` | `.excalidraw` source files (editable) | No |
| `public/diagrams/` | `.svg` display files ONLY | Yes |

`public/diagrams/` should contain ONLY `.svg` files that the blog directly embeds. No source files, no intermediate files, no fallbacks. One file per diagram.

## Step 4: Return Results

After generating all assets, report:
1. The `.excalidraw` source file path (in `content/diagrams/`)
2. The SVG file path (in `public/diagrams/`)
3. Embedding snippet: `![Description](/diagrams/{name}.svg)`

## Future Editing Workflow

1. Open `content/diagrams/{name}.excalidraw` in excalidraw.com (File → Open)
2. Edit the diagram, save the `.excalidraw` file back
3. Re-run the curl command to regenerate the SVG
