# Emek Services Limited Website

A responsive business website built with plain HTML, CSS and JavaScript.

## Included
- Home, About, Services, Gallery, Management Team, Order and Contact sections.
- Mobile navigation.
- Click-to-call phone numbers.
- WhatsApp order/enquiry form.
- Image gallery and two HTML5 video slots.
- Google Maps search link for the flyer address.

## Business details used
- Business: Emek Services Limited
- Address: No. 4 Portland Street Junction, Elebele Road, Yenagoa, Bayelsa State.
- Phone / WhatsApp: 0812 963 5552 (primary), 0814 953 7192 (secondary).
- Services: Home Car Wash; Logistics and Pick-up; CAC Registration; SMEDAN; Perfume Diffuser Supplies; Bolt Services.

## Preview locally
Open `index.html` in a browser. For best results, use a local development server such as the VS Code Live Server extension.

## Replace gallery photos
Add your own images to `assets/gallery/` using these exact filenames:
- `car-wash.jpg`
- `logistics.jpg`
- `perfumes.jpg`
- `business-services.jpg`
Optional video poster images:
- `video-poster-1.jpg`
- `video-poster-2.jpg`

The flyer is included as `assets/emek-flyer.jpg` and is currently used in the homepage hero.

## Add videos
Place MP4 videos in `assets/videos/` with these filenames, or update the `<source>` paths in `index.html`:
- `service-showcase.mp4`
- `business-introduction.mp4`

## Update management team
Add team photographs to `assets/management/` using:
- `managing-director.jpg`
- `operations-manager.jpg`
- `customer-relations.jpg`

Then edit the three team cards in `index.html` to replace “Management profile” and the sample roles with the actual names, titles and short biographies. The roles shown are placeholders, not verified staff details.

## WhatsApp routing
The order form currently sends requests to the primary number on the flyer, `0812 963 5552`, formatted as Nigeria country code `2348129635552`.
To change the receiving number, edit the `wa.me/2348129635552` destination in `script.js` and the WhatsApp links in `index.html`.
The form opens WhatsApp with a pre-filled message; the customer must tap Send. No order is silently submitted.

## Before publishing
- Confirm the spelling and exact service descriptions.
- Add real gallery photos, videos and management details.
- Test both phone numbers and the WhatsApp order flow.
- Publish the folder to your hosting provider (for example, GitHub Pages, Netlify or your web host).
