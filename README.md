# Johannesburg SPCA website project

A responsive, seven-page educational website project about animal welfare, adoption, services and ways to contact the Johannesburg SPCA. It is a static front-end demonstration, not an official SPCA website or an animal availability feed.

## Features

- Seven linked pages: Home, About, Services, Adoption, Gallery, Enquiry and Contact.
- Responsive navigation, a FAQ accordion, adoption search and category filters, and an accessible gallery lightbox.
- Browser-side form validation with an honest notice: the forms are not connected to a service and do not send or save messages.
- Contact telephone and email links, plus a Google Maps embed.
- A full-viewport homepage hero with a locally stored running-dog video, static poster fallback, and reduced-motion support.
- Sample adoption profiles are demonstrations only; they are not current or verified SPCA listings.

## Technologies

- Semantic HTML5
- CSS (responsive layout and reduced-motion support)
- Vanilla JavaScript
- Locally stored animal photographs and an embedded Google Map

No package manager or build step is required.

## Folder structure

```text
SPCA-Part3/
├── .vscode/
│   └── launch.json
├── about.html
├── adoption.html
├── CHANGELOG.md
├── contact.html
├── css/
│   └── style.css
├── enquiry.html
├── gallery.html
├── images/
│   ├── cat-portrait.jpg
│   ├── cat-sitting.jpg
│   ├── dog-care.jpg
│   ├── dog-happy.jpg
│   ├── dog-portrait.jpg
│   ├── dogs-outdoors.jpg
│   ├── golden-retriever.jpg
│   ├── rabbit.jpg
│   └── veterinary-care.jpg
├── index.html
├── README.md
├── robots.txt
├── script.js
├── services.html
├── style.css
├── sitemap.xml
└── videos/
    └── kinako-running-in-snow.mp4
```

The shared stylesheet is in `css/style.css`; the small root-level `style.css` remains as a compatibility import. JavaScript is in the project root, animal photographs are stored in `images/`, and the credited running-dog MP4 is stored in `videos/`.

## Run locally

1. Open this folder in VS Code or a terminal.
2. Start a local static server from the project root:

   ```powershell
   py -m http.server 8080
   ```

   If `py` is not available, use `python -m http.server 8080`.
3. Visit `http://localhost:8080/` in a browser.
4. Stop the server with `Ctrl+C` when finished.

The `.vscode/launch.json` configuration expects a server at port 8080; it does not start the server itself. An internet connection is needed for the map.

## Forms and configuration

The Enquiry and Contact forms validate required fields in the browser. Submitting a valid form only displays a demonstration notice; no data is sent, stored, or delivered to the SPCA.

To receive real messages, choose and configure a form provider such as Formspree, or implement a server-side endpoint. Create the provider account/form, configure its destination and spam controls, connect the resulting endpoint to both forms, and review its privacy/retention terms before collecting personal information. No provider or endpoint is configured in this project.

The homepage uses a local, muted and looping MP4 of a dog running. The clip is 320×240, so it may look soft on large high-resolution screens. Its static poster remains visible if the source cannot load or motion is reduced.

No usable public deployment URL or video file path was provided. Until the actual public URL is known, `sitemap.xml` has no page entries and `robots.txt` omits its `Sitemap:` directive. Populate both after deployment.

## Testing

This project has no automated test framework. Check it manually in a browser after starting the local server:

- Visit all seven pages and follow the navigation links.
- On a narrow viewport, open and close the navigation using the button and keyboard.
- On About, open and close each FAQ item.
- On Adoption, search for a sample name, change the type filter, and follow an enquiry link.
- On Gallery, open an image, use the previous/next controls and arrow keys, close with Escape, and confirm keyboard focus returns to the selected thumbnail.
- On both forms, try empty/invalid values and a valid demonstration submission. Confirm the page states that nothing was sent or saved.
- On Contact, check the `tel:`/`mailto:` links and the embedded map.
- Check the homepage with reduced motion enabled and at desktop/mobile sizes.

During the latest update, JavaScript syntax, sitemap XML and local HTML file references were checked. Browser checks covered all seven pages, page titles/headings and shared assets, the FAQ, adoption search and type filter, gallery navigation/keyboard behavior, both forms' validation and notices, reduced-motion behavior, and narrow-screen layout (no horizontal overflow or page errors were found). The homepage MP4 was verified to load, decode and play with sound muted; it also pauses when reduced motion is enabled. The Google Maps frame navigated in the preview; map data and image permissions still require review.

## References and media notes

- Animal photographs were downloaded from the Unsplash image URLs already in the project; three unavailable image URLs were replaced with available local photos. Confirm image reuse rights before publishing. See [Unsplash](https://unsplash.com/) and review the current license terms before use.
- Homepage video: “Kinako the Dog running in the snow,” [Internet Archive item](https://archive.org/details/kinakosnow022105), uploaded by alexander.lozupone; licensed [CC BY-NC-SA 2.5](https://creativecommons.org/licenses/by-nc-sa/2.5/). This license is non-commercial and requires attribution and share-alike for adaptations. The video is presented as a background crop; keep the project non-commercial if you use it.
- The location map is embedded from Google Maps and requires an internet connection.
