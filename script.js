// ======================================
// JOHANNESBURG SPCA WEBSITE
// Main JavaScript file
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION

    const menuToggle = document.getElementById("menuToggle");
    const mainNavigation = document.getElementById("mainNavigation");

    if (menuToggle && mainNavigation) {

        function setNavigationOpen(isOpen) {
            mainNavigation.classList.toggle("open", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
            menuToggle.textContent = isOpen ? "✕" : "☰";
        }

        menuToggle.addEventListener("click", function () {
            setNavigationOpen(
                !mainNavigation.classList.contains("open")
            );
        });

        mainNavigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                setNavigationOpen(false);
            });
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && mainNavigation.classList.contains("open")) {
                setNavigationOpen(false);
                menuToggle.focus();
            }
        });

    }


    // INTERACTIVE ACCORDION

    const accordionButtons = document.querySelectorAll(
        ".accordion-button"
    );

    accordionButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const icon = button.querySelector(".accordion-icon");
            const content = document.getElementById(
                button.getAttribute("aria-controls")
            );

            const isExpanded =
                button.getAttribute("aria-expanded") === "true";

            // Close all accordion sections first

            accordionButtons.forEach(function (otherButton) {

                otherButton.setAttribute("aria-expanded", "false");

                document.getElementById(
                    otherButton.getAttribute("aria-controls")
                ).hidden = true;

                otherButton.querySelector(
                    ".accordion-icon"
                ).textContent = "+";

            });

            // Open the selected section if it was closed

            if (!isExpanded) {

                button.setAttribute("aria-expanded", "true");

                content.hidden = false;

                icon.textContent = "−";

            }

        });

    });

    // HOMEPAGE HERO VIDEO

    const heroVideo = document.getElementById("heroVideo");
    const motionPreference = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
    );

    if (!heroVideo || motionPreference.matches) {
        return;
    }

    const videoSource = heroVideo.dataset.videoSrc.trim();

    if (!videoSource) {
        return;
    }

    const source = document.createElement("source");
    source.src = videoSource;
    source.type = "video/mp4";

    heroVideo.appendChild(source);
    heroVideo.addEventListener("canplay", function () {
        if (!motionPreference.matches) {
            heroVideo.classList.add("is-ready");
        }
    }, { once: true });
    heroVideo.addEventListener("error", function () {
        heroVideo.classList.remove("is-ready");
    });
    heroVideo.load();

    function syncVideoMotion() {
        if (motionPreference.matches) {
            heroVideo.pause();
            heroVideo.classList.remove("is-ready");
            return;
        }

        const playRequest = heroVideo.play();

        if (playRequest && typeof playRequest.catch === "function") {
            playRequest.catch(function () {
                heroVideo.classList.remove("is-ready");
            });
        }
    }

    syncVideoMotion();

    if (typeof motionPreference.addEventListener === "function") {
        motionPreference.addEventListener("change", syncVideoMotion);
    } else if (typeof motionPreference.addListener === "function") {
        motionPreference.addListener(syncVideoMotion);
    }

});
// ======================================
// ANIMAL ADOPTION SEARCH AND FILTER
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // Sample animal information for the project

    const animals = [

        {
            name: "Buddy",
            type: "Dog",
            age: "2 years old",
            description: "A friendly dog who loves playing outdoors.",
            image: "images/golden-retriever.jpg"
        },

        {
            name: "Luna",
            type: "Cat",
            age: "1 year old",
            description: "A gentle cat who enjoys peaceful surroundings.",
            image: "images/cat-sitting.jpg"
        },

        {
            name: "Max",
            type: "Dog",
            age: "3 years old",
            description: "An energetic companion who enjoys walks.",
            image: "images/dog-happy.jpg"
        },

        {
            name: "Milo",
            type: "Cat",
            age: "8 months old",
            description: "A curious kitten with a playful personality.",
            image: "images/cat-portrait.jpg"
        },

        {
            name: "Coco",
            type: "Other",
            age: "2 years old",
            description: "A sweet rabbit who deserves a caring home.",
            image: "images/rabbit.jpg"
        },

        {
            name: "Charlie",
            type: "Dog",
            age: "4 years old",
            description: "A loving dog who enjoys human company.",
            image: "images/dog-portrait.jpg"
        }

    ];

    // Get the HTML elements

    const animalGrid = document.getElementById("animalGrid");
    const animalSearch = document.getElementById("animalSearch");
    const animalFilter = document.getElementById("animalFilter");
    const animalCount = document.getElementById("animalCount");
    const noAnimals = document.getElementById("noAnimals");

    // Stop if this is not the adoption page

    if (
        !animalGrid ||
        !animalSearch ||
        !animalFilter ||
        !animalCount ||
        !noAnimals
    ) {
        return;
    }

    // Display animal cards

    function displayAnimals(animalList) {

        animalGrid.innerHTML = "";

        animalList.forEach(function (animal) {

            const animalCard = document.createElement("article");

            animalCard.className = "animal-card";

            animalCard.innerHTML = `
                <img
                    src="${animal.image}"
                    alt="${animal.name}, a ${animal.type.toLowerCase()}"
                    loading="lazy"
                    decoding="async"
                >

                <div class="animal-details">

                    <span class="animal-type">
                        ${animal.type}
                    </span>

                    <h3>${animal.name}</h3>

                    <p><strong>Age:</strong> ${animal.age}</p>

                    <p>${animal.description}</p>

                    <a
                        href="enquiry.html?animal=${encodeURIComponent(animal.name)}"
                        class="btn btn-primary"
                    >
                        Enquire About ${animal.name}
                    </a>

                </div>
            `;

            animalGrid.appendChild(animalCard);

        });

        // Update the number of matching animals

        animalCount.textContent =
            animalList.length + " animal(s) found";

        // Show or hide the no-results message

        noAnimals.hidden = animalList.length !== 0;

    }

    // Search and filter animals

    function filterAnimals() {

        const searchText = animalSearch.value.toLowerCase().trim();

        const selectedType = animalFilter.value;

        const filteredAnimals = animals.filter(function (animal) {

            const matchesName =
                animal.name.toLowerCase().includes(searchText);

            const matchesType =
                selectedType === "all" ||
                animal.type === selectedType;

            return matchesName && matchesType;

        });

        displayAnimals(filteredAnimals);

    }

    // Listen for search input

    animalSearch.addEventListener("input", filterAnimals);

    // Listen for category selection

    animalFilter.addEventListener("change", filterAnimals);

    // Display all animals when the page opens

    displayAnimals(animals);

});
// ======================================
// INTERACTIVE IMAGE GALLERY LIGHTBOX
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // Select the gallery elements

    const galleryItems = document.querySelectorAll(".gallery-item");

    const lightbox = document.getElementById("lightbox");

    const lightboxImage = document.getElementById("lightboxImage");

    const lightboxCaption = document.getElementById("lightboxCaption");

    const closeButton = document.getElementById("lightboxClose");

    const previousButton = document.getElementById("lightboxPrev");

    const nextButton = document.getElementById("lightboxNext");

    // Stop if the gallery is not on the current page

    if (
        galleryItems.length === 0 ||
        !lightbox ||
        !lightboxImage ||
        !lightboxCaption ||
        !closeButton ||
        !previousButton ||
        !nextButton
    ) {
        return;
    }

    // Store the current image number

    let currentImageIndex = 0;

    let previousFocus = null;

    // Open the selected image

    function openLightbox(index) {

        currentImageIndex = index;

        previousFocus = document.activeElement;

        showImage();

        lightbox.hidden = false;

        document.body.style.overflow = "hidden";

        closeButton.focus();

    }

    // Display the selected image

    function showImage() {

        const selectedItem = galleryItems[currentImageIndex];

        const selectedImage = selectedItem.querySelector("img");

        const selectedCaption = selectedItem.querySelector(
            ".gallery-caption"
        );

        lightboxImage.src = selectedImage.src;

        lightboxImage.alt = selectedImage.alt;

        lightboxCaption.textContent = selectedCaption.textContent;

    }

    // Close the image viewer

    function closeLightbox() {

        lightbox.hidden = true;

        lightboxImage.src = "";

        document.body.style.overflow = "";

        if (previousFocus) {
            previousFocus.focus();
        }

    }

    // Show the previous image

    function showPreviousImage() {

        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = galleryItems.length - 1;
        }

        showImage();

    }

    // Show the next image

    function showNextImage() {

        currentImageIndex++;

        if (currentImageIndex >= galleryItems.length) {
            currentImageIndex = 0;
        }

        showImage();

    }

    // Add click events to gallery photographs

    galleryItems.forEach(function (item, index) {

        item.addEventListener("click", function () {

            openLightbox(index);

        });

    });

    // Close button

    closeButton.addEventListener("click", closeLightbox);

    // Previous button

    previousButton.addEventListener("click", showPreviousImage);

    // Next button

    nextButton.addEventListener("click", showNextImage);

    // Close when clicking the dark background

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    // Keyboard controls

    document.addEventListener("keydown", function (event) {

        if (lightbox.hidden) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        } else if (event.key === "ArrowLeft") {
            showPreviousImage();
        } else if (event.key === "ArrowRight") {
            showNextImage();
        } else if (event.key === "Tab") {
            const focusableButtons = Array.from(
                lightbox.querySelectorAll("button:not([disabled])")
            );
            const firstButton = focusableButtons[0];
            const lastButton = focusableButtons[focusableButtons.length - 1];

            if (event.shiftKey && document.activeElement === firstButton) {
                event.preventDefault();
                lastButton.focus();
            } else if (!event.shiftKey && document.activeElement === lastButton) {
                event.preventDefault();
                firstButton.focus();
            }
        }

    });

});
// ======================================
// ENQUIRY FORM VALIDATION
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiryForm");

    const enquiryStatus = document.getElementById("enquiryStatus");

    const submitButton = document.getElementById("submitEnquiry");

    // Only run this code on the enquiry page

    if (!enquiryForm || !enquiryStatus || !submitButton) {
        return;
    }

    // Read an animal name passed from the adoption page

    const urlParameters = new URLSearchParams(window.location.search);

    const selectedAnimal = urlParameters.get("animal");

    const enquiryType = document.getElementById("enquiryType");

    const messageField = document.getElementById("message");

    if (selectedAnimal) {
        enquiryType.value = "Adoption";

        messageField.value =
            "I would like to enquire about adopting " +
            selectedAnimal + ".";
    }

    // Handle form submission

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        enquiryStatus.textContent = "";

        enquiryStatus.className = "form-status";

        // Check that the form is valid

        if (!enquiryForm.checkValidity()) {

            enquiryForm.reportValidity();

            return;

        }

        // Collect the form information

        const formData = {

            name: document.getElementById("fullName").value.trim(),

            email: document.getElementById("email").value.trim(),

            phone: document.getElementById("phone").value.trim(),

            enquiryType: enquiryType.value,

            message: messageField.value.trim()

        };

        if (!formData.name || !formData.message || !formData.enquiryType) {

            enquiryStatus.textContent =
                "Please complete all required fields before continuing.";

            enquiryStatus.classList.add("error");

            return;

        }

        // Prevent an empty or incorrectly formatted email

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {

            enquiryStatus.textContent =
                "Please enter a valid email address.";

            enquiryStatus.classList.add("error");

            return;

        }

        enquiryStatus.textContent =
            "The form passed validation, but this demonstration website is not connected to a service. No message was sent or saved.";

        enquiryStatus.classList.add("info");

    });

});
// ======================================
// CONTACT FORM VALIDATION
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    const contactStatus = document.getElementById("contactStatus");

    const contactSubmit = document.getElementById("contactSubmit");

    // Only run on the contact page

    if (!contactForm || !contactStatus || !contactSubmit) {
        return;
    }

    // Listen for form submission

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        contactStatus.textContent = "";

        contactStatus.className = "form-status";

        // Validate all required fields

        if (!contactForm.checkValidity()) {

            contactForm.reportValidity();

            return;

        }

        // Collect the form information

        const contactData = {

            name: document.getElementById("contactName").value.trim(),

            email: document.getElementById("contactEmail").value.trim(),

            subject: document.getElementById("contactSubject").value.trim(),

            message: document.getElementById("contactMessage").value.trim()

        };

        if (
            !contactData.name ||
            !contactData.subject ||
            !contactData.message
        ) {

            contactStatus.textContent =
                "Please complete all required fields before continuing.";

            contactStatus.classList.add("error");

            return;

        }

        // Check email format

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(contactData.email)) {

            contactStatus.textContent =
                "Please enter a valid email address.";

            contactStatus.classList.add("error");

            return;

        }

        contactStatus.textContent =
            "The form passed validation, but this demonstration website is not connected to a service. No message was sent or saved.";

        contactStatus.classList.add("info");

    });

});