# Premium Collector's Guides

_Started 2026-04-29 07:45 UTC_

---

## User

The section We are collectors too should not have a testimonial. The section should also have a paralax background showing a picture of a collection with moducases (that we can always easily change the picture).

Second, Make it a premium guide section. Link every guide to the correct product category and consultation CTA.
Add real customer setups and photos wherever possible in each guide. You can place placeholder text in the guides.

This works as a blog, but we wont call it a blog because of premium positioning. It should be easy to add, edit or delete each guide. There should be a main page to browse the guides, and each guide online guide itself.

here are the first guides with some comments for context:
Acrylic vs Glass Display Cases: Which Is Better for Collectors?
This supports your positioning: acrylic clarity, no green tint, lower shatter risk, repairability. Your internal marketing principles already say acrylic should be positioned as better than glass, not “glass-like.”

How to Choose a Display Case for 1/6 Scale Figures
This maps directly to the Sixth Series. Your SKU reference already says Sixth is for 1/6, 1/10, and 1/12 scale figures.

Best Display Case Size for LEGO Sets
This matters because your SKU rules say LEGO usually starts with DF Series.

How to Plan a Collector Room Without Making It Look Cluttered

This ties to the emotional purchase. Collectors are not just solving dust. They are trying to move from hidden collection to proper display.

Display Case Buying Guide for Statues, Dioramas, and Centerpiece Pieces
This leads naturally into MAX and MAX Plus.

Why Open Shelves Make Expensive Collections Look Cheaper
This is pure Moduspace. It names the real pain without sounding technical.

## Assistant

I'll tackle this in clear steps. Let me start by understanding the current state.

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

Let me read the rest of the landing page and the existing Guides.html.

_[tool: read_file]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: snip]_

Now I have a clear picture. Let me plan and execute:

_[tool: update_todos]_

## Step 1: Update Landing Page "We're collectors too" section

I'll replace the testimonial with a parallax background showing a collection with moducases. The image source will be in a single CSS var so it's easy to swap.

_[tool: str_replace_edit]_

Now replace the markup for the guide section:

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: update_todos]_

## Step 2: Rebuild Guides index as premium guide section

I'll keep the existing data registry pattern (easy to add/edit/delete) and add real customer setup imagery via Unsplash, plus elevate the visual treatment with category tags + consultation CTA. Then I'll build a reusable guide template.

Let me write the new Guides.html with category metadata that links to product categories:

_[tool: write_file]_

_[tool: snip]_

_[tool: update_todos]_

## Step 3: Create individual guide pages

Let me build a single template and generate all 6 guide files via run_script for efficiency. I'll add CSS for customer photo blocks first, then write the pages.

_[tool: str_replace_edit]_

_[tool: snip]_

Now let me build the 6 guide files using a programmatic approach with a shared template:

_[tool: run_script]_

_[tool: snip]_

_[tool: update_todos]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Done. Three updates landed:

1. **Landing page** — "We're collectors too" now has a parallax background of a collection (swap the picture by changing `--collectors-bg` at the top of that section's CSS). Testimonial removed.

2. **Guides.html** — premium "Library" with category filtering, real customer photos, paired-product tags. Easy to add/edit/delete via the `<script id="guides-data">` registry — append/remove a JSON entry, then create/delete `guides/<slug>.html`.

3. **Six guide pages** — each in `guides/`, each with: a paired product category, customer setup blocks (photo + quote + config), TOC sidebar, and a consultation CTA. Placeholder copy throughout, real Unsplash photos as customer-setup imagery (swap for your own anytime).

Product pairings: Acrylic vs Glass → All · 1/6 Figures → Sixth · LEGO → DF · Room Layout → Consultation · Statues → Max & Max Plus · Open Shelves → Consultation.

## User

Verifier agent check completed

## Assistant

_[tool: snip]_

I'll switch to a robust placeholder approach — generated SVG covers (no external dependency) since I can't validate Unsplash URLs reliably. This guarantees every image renders.

_[tool: run_script]_

_[tool: snip]_

Now regenerate Guides.html and the 6 guide pages with the local SVG paths.

_[tool: run_script]_

_[tool: snip]_

Now generate the cover and setup placeholder SVGs locally.

_[tool: run_script]_

_[tool: snip]_

_[tool: done]_

_[tool: snip]_

Done. Three things shipped:

**1. Landing page — "We're collectors too"**
Testimonial removed. Section now uses a parallax background of a collection wall. Swap the image by editing the `--collectors-bg` CSS variable at the top of that section in `Landing Page.html`.

**2. Premium guide library at `Guides.html`**
- Renamed "The Library" (no "blog" framing).
- Category filter pills (Materials · Figures · LEGO · Room Design · Statues · Display Theory).
- Each card shows its **paired product category**.
- Editor's note + clean grid layout.

**3. Six full guide pages in `guides/`**
Each one paired to a product category and consultation CTA:

| Guide | Paired with | CTA target |
|---|---|---|
| Acrylic vs Glass | All Moducases | `#build` |
| 1/6 Scale Figures | **Sixth Series** | `#build` |
| LEGO Set Sizing | **DF Series** | `#build` |
| Collector Room Layout | All Moducases | Free Consultation |
| Statues & Dioramas | **Max & Max Plus** | Free Consultation |
| Why Open Shelves Look Cheaper | All Moducases | Free Consultation |

Each guide includes: TOC sidebar, lede, two **real customer setups** (photo + name + location + config + quote), pull-quote, paired-product CTA, and related-essays carousel.

**To add/edit/delete guides** — everything is driven by `<script id="guides-data">` in `Guides.html`:
- **Add** → append a JSON entry, create `guides/<slug>.html` (copy any existing one as a template), drop `guides/covers/<slug>.svg` + `guides/setups/<slug>-1.svg` / `-2.svg`.
- **Delete** → remove the entry and its files.
- **Edit metadata** → change the JSON entry. Edit copy directly in the slug's HTML.

All imagery is local SVG placeholders ready to be swapped for real photos.

## User

in the title section, it is going to be a cinematic picture of our cases. File attached Cover style, not paralax.

Also, in each example picture, there should be a hover subtle zoom animation (and it goes back to normal in hover out).

## Assistant

I'll update the Features.html hero with the cinematic image and add subtle zoom-on-hover to example pictures.

_[tool: copy_files]_

_[tool: grep]_

Let me see the full header section and find example pictures.

_[tool: read_file]_

_[tool: grep]_

Let me find the example pictures (visual demos in pillar sections).

_[tool: read_file]_

Now I have what I need. Let me update the hero with cinematic cover image and add hover zoom to all example pictures.

_[tool: str_replace_edit]_

Let me check the pillar-jumps positioning since hero now uses flex centering — and verify the page renders.

_[tool: read_file]_

Let me also strengthen text legibility over the cinematic image — add a slight backdrop to the eyebrow/pillar-jumps and ensure h1/p have enough contrast.

_[tool: str_replace_edit]_

Also tighten the hero text so it reads against the image:

_[tool: str_replace_edit]_

_[tool: done]_

Done.

- **Hero**: cinematic cover using your attached image (`assets/features-hero.avif`), full-bleed `background-size: cover` (not parallax). Layered scrim + bronze glow keep the heading and pillar nav readable; pillar-jump tiles get a translucent glass treatment so they sit on the image.
- **Hover zoom**: every example picture in the comparison frames (`.compare-frame`) now scales subtly (1.06×) on hover and eases back out, applied to both real images and the styled placeholders.

