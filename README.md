Johannesburg SPCA Website

1. Project Overview

The Johannesburg SPCA Website is a responsive, multi-page website developed as part of the WEDE5020 Web Development Part 3 project at Rosebank College.

The purpose of the website is to provide visitors with an accessible and informative platform where they can learn about the Johannesburg Society for the Prevention of Cruelty to Animals (SPCA), explore its services, view example animals available for adoption, browse an image gallery and contact the organisation.

The website focuses on creating a welcoming, professional and user-friendly experience while promoting animal welfare, responsible pet ownership and animal adoption.

Project name: Johannesburg SPCA Website
Module: WEDE5020 – Web Development
Project stage: Part 3
Project type: Responsive multi-page website
Developer: Promedi Ilunga
Institution: Rosebank College
Year: 2026

---

2. Project Objectives

The main objectives of this project are to:

- Develop a professional and user-friendly animal welfare website.
- Provide visitors with information about the Johannesburg SPCA.
- Present the organisation's services in a clear and accessible way.
- Allow visitors to browse example animal adoption profiles.
- Implement interactive search and category filtering.
- Create an image gallery with an interactive lightbox.
- Provide enquiry and contact forms with validation.
- Include an interactive map to help visitors locate the organisation.
- Apply responsive web design principles.
- Improve search engine optimisation (SEO).
- Practise HTML, CSS and JavaScript development.
- Maintain proper project documentation and version control using GitHub.

---

3. Website Pages and Features

The website consists of seven main pages.

3.1 Home Page – index.html

The homepage introduces visitors to the Johannesburg SPCA and provides an overview of the website.

Features include:

- Welcoming hero section.
- Introduction to the organisation.
- Clear navigation to other website sections.
- Links to important services and adoption information.
- Responsive page layout.

3.2 About Page – about.html

The About page provides information about the organisation and its animal welfare purpose.

Features include:

- Organisation introduction.
- Information about animal welfare.
- Structured content sections.
- Interactive FAQ accordion.

3.3 Services Page – services.html

The Services page presents information about the services featured on the website.

Features include:

- Service information displayed in organised cards.
- Clear descriptions of the services.
- Consistent visual presentation.
- Navigation to relevant website pages.

3.4 Adoption Page – adoption.html

The Adoption page allows visitors to explore example animal profiles.

Features include:

- Dynamically displayed animal profiles.
- Search functionality.
- Category filters for dogs, cats and other animals.
- Display of matching animal results.
- No-results message when no matching animals are found.
- Links to the enquiry page with the selected animal's name pre-filled.

Important: Animal profiles used for demonstration purposes should not be interpreted as confirmation of current adoption availability. Visitors should contact the Johannesburg SPCA to confirm available animals.

3.5 Gallery Page – gallery.html

The Gallery page displays animal photographs in a visual gallery layout.

Features include:

- Image gallery.
- Interactive lightbox.
- Previous and next image controls.
- Keyboard navigation.
- Escape key support to close the lightbox.
- Background-click functionality to close the lightbox.

3.6 Enquiry Page – enquiry.html

The Enquiry page provides visitors with a form for submitting questions or enquiries.

Features include:

- Name field.
- Email address field.
- Phone number field.
- Enquiry category selection.
- Message field.
- Required-field validation.
- Email validation.
- Success and error feedback.
- Automatic pre-filling of the selected animal when visitors arrive from an adoption profile.

3.7 Contact Page – contact.html

The Contact page provides contact information and a way for visitors to make contact.

Features include:

- Organisation address.
- Telephone contact link.
- Email contact link.
- Operating hours.
- Embedded Google Maps location.
- Contact form.
- Form validation.
- Submission feedback.

---

4. Technologies Used

The project uses the following web technologies:

Technology| Purpose
HTML5| Website structure and content
CSS3| Styling, layouts and responsive design
JavaScript| Interactive functionality and dynamic content
Git| Version control
GitHub| Source code hosting and project management
Google Maps| Location display
JSONPlaceholder| Demonstration form submission endpoint

HTML5

HTML5 is used to structure the website and organise its content using appropriate elements.

CSS3

CSS3 is used to style the website, create layouts and provide a consistent visual identity across the pages.

JavaScript

JavaScript provides interactive features, including the adoption search, category filters, FAQ accordion, gallery lightbox and form validation.

---

5. Project Folder Structure

The project is organised into the following structure:

SPCA-Part3/
│
├── index.html
├── about.html
├── services.html
├── adoption.html
├── gallery.html
├── enquiry.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│
├── robots.txt
├── sitemap.xml
├── README.md
└── CHANGELOG.md

Folder and File Descriptions

- index.html: Homepage.
- about.html: Organisation information.
- services.html: Services information.
- adoption.html: Animal adoption listings and filters.
- gallery.html: Animal image gallery.
- enquiry.html: Enquiry form.
- contact.html: Contact information, map and contact form.
- css/style.css: Website styling and responsive layouts.
- js/script.js: JavaScript functionality.
- images/: Folder for locally stored website images.
- robots.txt: Instructions for search engine crawlers.
- sitemap.xml: Lists the website pages for search engine discovery.
- README.md: Project documentation.
- CHANGELOG.md: Record of project updates.

---

6. Interactive Functionality

The website includes several interactive features designed to improve the visitor experience.

Adoption Search and Filtering

Visitors can search for animals by name and filter listings according to animal category.

FAQ Accordion

Visitors can expand and collapse frequently asked questions to access information more easily.

Gallery Lightbox

Visitors can select an image to view it in a larger display and navigate between images.

Form Validation

The enquiry and contact forms include validation to help ensure that visitors provide the required information.

Map Integration

An embedded Google Maps view helps visitors identify the organisation's location.

---

7. Form Processing and Limitations

The current project uses JSONPlaceholder as a demonstration endpoint for AJAX form submissions.

This allows the website to demonstrate the submission process and display feedback to visitors.

However, JSONPlaceholder is a testing service. It does not provide a real enquiry management system, send emails to the Johannesburg SPCA or permanently store visitor enquiries.

A real production website would require a properly configured backend or form-processing service.

The forms must therefore be treated as demonstration functionality until a real submission service has been configured and tested.

---

8. Responsive Web Design

The website is designed to support different screen sizes, including:

- Desktop computers.
- Laptops.
- Tablets.
- Smartphones.

The layout and styling aim to provide a consistent browsing experience across devices.

Responsive design is important because visitors may access the website using different devices and screen sizes.

---

9. Search Engine Optimisation (SEO)

SEO practices included or planned for the website include:

- Descriptive page titles.
- Meta descriptions.
- Meta keywords for assignment requirements.
- Appropriate heading structure.
- Descriptive image alternative text.
- Search engine crawler instructions through robots.txt.
- XML sitemap through sitemap.xml.
- Meaningful internal navigation links.

The sitemap contains the seven main website pages.

The final sitemap and robots.txt URLs must be updated to use the published website address after deployment.

---

10. Accessibility Considerations

The website aims to improve accessibility through:

- Descriptive alternative text for meaningful images.
- Clearly labelled form fields.
- Readable text and suitable colour contrast.
- Semantic HTML structure.
- Keyboard controls for the gallery lightbox.
- Clear navigation and interactive controls.
- Responsive layouts.

Accessibility should be checked during final testing to ensure that all interactive features are usable.

---

11. Installation and Setup

The project is a front-end website using HTML, CSS and JavaScript.

No package installation or build process is required for the current implementation.

Requirements

- A computer.
- Visual Studio Code or another code editor.
- A modern web browser.
- Internet connection for externally hosted resources such as Google Maps and any externally loaded images.

Steps to Run the Website

1. Download or clone the project repository from GitHub.
2. Extract the project if it was downloaded as a ZIP file.
3. Open Visual Studio Code.
4. Select File → Open Folder.
5. Choose the "SPCA-Part3" project folder.
6. Open "index.html".
7. Run the page using a browser or the VS Code Live Server extension.
8. Navigate through the website using the navigation menu.

---

12. Testing

The following areas should be tested before final submission:

Test area| Expected result
Homepage| Loads correctly
Navigation| All seven pages open
FAQ accordion| Questions expand and collapse
Adoption search| Displays matching results
Adoption filters| Filters the correct animal categories
Adoption enquiry links| Open the enquiry page with the animal name
Gallery| Images open in the lightbox
Gallery controls| Previous and next controls work
Gallery keyboard controls| Keyboard navigation works
Enquiry form| Required fields are validated
Contact form| Required fields are validated
Map| Location displays correctly
Telephone link| Opens the phone dialler on supported devices
Email link| Opens the default email application
Responsive design| Layout adapts to different screen sizes
SEO| Page titles and metadata are present
GitHub| Updated project files are committed and pushed

Testing results should only be recorded as completed after the relevant functionality has actually been tested.

---

13. Version Control and GitHub

GitHub is used to host the project's source code and track development progress.

Meaningful commits should be made throughout the development process to document changes.

Examples of commit messages include:

- "Initialise SPCA website project"
- "Create homepage layout"
- "Add about and services pages"
- "Implement adoption search and filters"
- "Add gallery lightbox functionality"
- "Implement enquiry form validation"
- "Create contact page and map"
- "Add SEO metadata and sitemap"
- "Update project documentation"
- "Improve responsive website styling"

The final GitHub repository should contain the complete and updated project.

GitHub repository: [Insert your repository URL here]

Live website: [Insert your published website URL here]

---

14. References and Resources

The following resources are relevant to the project.

Organisation Information

Johannesburg SPCA official website:

https://jhbspca.co.za/

Web Development Documentation

- MDN Web Docs – HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- MDN Web Docs – CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- MDN Web Docs – JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- W3C – Web Standards: https://www.w3.org/

Maps

Google Maps: https://www.google.com/maps/

Images and Media

List the actual sources and licences for all photographs and video footage used in the final website.

For each externally sourced image or video, record:

- Creator or photographer, where available.
- Website or platform.
- Direct source URL.
- Licence or permission information.

Do not include resources that were not actually used.

---

15. Future Improvements

Possible improvements for a future version of the website include:

- Connecting enquiry forms to a real backend.
- Adding email notifications for submitted enquiries.
- Connecting adoption listings to a live animal database.
- Adding an administrator dashboard for managing animal profiles.
- Improving image optimisation and loading performance.
- Adding more accessibility improvements.
- Expanding the gallery and animal welfare information.

---

16. Project Disclaimer

This website was developed as an academic web development project.

It is an educational demonstration and should not be mistaken for the official Johannesburg SPCA website.

The website is not an official adoption management platform, and demonstration animal profiles do not confirm actual animal availability.

For official information, enquiries and services, visitors should contact the Johannesburg SPCA directly through its official communication channels.

---

17. Conclusion

The Johannesburg SPCA Website demonstrates the application of front-end web development principles through a multi-page website containing structured content, responsive layouts and interactive JavaScript functionality.

The project provides practical experience in website planning, design, implementation, testing, SEO, documentation and version control.

It also demonstrates how web technologies can be used to create an informative and accessible digital platform that supports awareness of animal welfare and responsible animal care.
