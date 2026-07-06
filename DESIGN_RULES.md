# Product Details Design Rules

Scope: `product-details/` only. External files are references, not edit targets.

## Audience

- Primary users are North American fashion creators evaluating women's apparel for affiliate promotion.
- The page should help creators answer three questions quickly:
  - Will this product sell to my audience?
  - How are other creators selling it?
  - What content can I make next?

## UI Style

- Match the current HTML style: warm off-white background, restrained borders, compact cards, brown/gold accent, rounded radius at 8px or less except pill controls.
- Avoid marketing-style hero copy. Prioritize useful creator workflow information.
- Use concise labels and scannable content. No long paragraphs in mobile detail flow.

## Mobile Density

- Mobile first screen must stay product-led: image, title, price, earning, and primary action.
- Use progressive disclosure for complex creation flows.
- Keep sections compact:
  - Section title
  - One short supporting line only when needed
  - Horizontal cards or 2-column stat rows
- Avoid stacking too many full-width cards with large padding.

## Creator Workflow

- Product detail should shift from generic product description to selling guidance:
  - Why it sells
  - Audience fit
  - Proven creator angles
  - Reusable content structure
  - Quick-cut assets
- Creator examples need performance signals such as views, CTR, saves, orders, or GMV.
- "Use Structure" should lead to a guided setup, not a blank editor.

## Mobile Interaction Pattern

- Details page:
  - Bottom menu hidden.
  - Sticky Pick / Promote actions remain available.
- Creator proof:
  - Show a short preview on detail page.
  - Use `View more` to open a secondary page.
- Breakdown page:
  - Make video structure legible as steps.
  - Primary CTA: `Use Structure`.
- Generation flow:
  - Let creators set tone, platform, length, format, CTA strength.
  - If on-camera is selected, require avatar upload/choice UI before generating.
- Content Kit:
  - Show product, creator image if available, settings, then generated kit.
  - Support Copy and Save.

## Copy

- Use North American creator language:
  - "Hook"
  - "CTA"
  - "Try-on"
  - "GRWM"
  - "Save-worthy"
  - "Audience fit"
- Keep claims demo-like and clearly presented as performance examples.
