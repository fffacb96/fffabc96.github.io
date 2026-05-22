// Global state
let currentCarouselIndex = 0;
let currentPainting = null;

// Initialize the page when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    renderContent();
    setupEventListeners();
    handleHashChange();
});

// Handle hash changes (URL routing)
window.addEventListener('hashchange', handleHashChange);

function handleHashChange() {
    const hash = window.location.hash.substring(1);
    
    if (hash) {
        const painting = window.paintingsData.find(p => p.key === hash);
        if (painting) {
            openCarousel(painting);
        }
    } else {
        closeImageDialog();
    }
}

// Render main page content
function renderContent() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    mainContent.innerHTML = generatePageHTML();
}

function generatePageHTML() {
    const paintings = window.paintingsData;
    
    return `
        <div class="mud-container mt-16">
            <div class="mud-stack">
                <!-- Welcome Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <h2 class="text-center">Copper, Tin, Wood and Canvas Art</h2>
                        <button class="gallery-button" onclick="openCarouselByIndex(0)">
                            <img loading="lazy" src="1.webp" style="max-height: 60%; max-width: 40%; margin: auto; display: block;" alt="Welcome" />
                        </button>
                        <h1>Welcome</h1>
                        <p class="mud-typography-body1">
                            This site is dedicated to my lovely mother who had an artistic flare, she passed away in 2018.
                            There's much to see here. Her love for art. So, take your time, look around, all there is to know about her
                            passion. I hope you enjoy the site and take a moment to drop me a line.
                        </p>
                        <p class="mud-typography-body2">
                            Lydia Kokline
                        </p>
                        <p class="mud-typography-body2">
                            <a class="btn-link" href="mailto:lkokline@gmail.com">lkokline@gmail.com</a>
                        </p>
                        <p class="mud-typography-body2">
                            613-323-2941
                        </p>
                    </div>
                </div>

                <!-- About the Artist Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <h1>About the Artist</h1>
                        <button class="gallery-button" onclick="openCarouselByIndex(1)">
                            <div class="row-flex">
                                <img loading="lazy" width="500" style="max-width: 50%; margin: auto;" src="2.1.webp" alt="Her Background" />
                                <div class="stack-column">
                                    <h2>Her Background</h2>
                                    <p class="mud-typography-body1">
                                        Having studied at Brussels "Academie Royale des Beaux Arts" three years under Master G.
                                        de Vlamyneck, she won a first prize, awarded her by the Burgomaster of the City of
                                        Brussels in 1949.
                                    </p>
                                </div>
                            </div>
                        </button>
                        <button class="gallery-button" onclick="openCarouselByIndex(2)">
                            <div class="row-flex">
                                <img loading="lazy" width="500" style="width: 500px; max-width: 50%; margin: auto;" src="2.2.webp" alt="Her Medium" />
                                <div class="stack-column">
                                    <h2>Her Medium</h2>
                                    <p class="mud-typography-body1">
                                        She used many different mediums, such as poker-works, wood-sculpturing, oils, copper,
                                        tin acrylics on canvas and water colors. She believes that working in a single medium was
                                        restrictive to her artistic process.
                                    </p>
                                </div>
                            </div>
                        </button>
                        <button class="gallery-button" onclick="openCarouselByIndex(3)">
                            <div class="row-flex">
                                <img loading="lazy" width="500" style="max-width: 50%; margin: auto;" src="2.3.webp" alt="Her Inspiration" />
                                <div class="stack-column">
                                    <h2>Her Inspiration</h2>
                                    <p class="mud-typography-body1">
                                        She enjoyed her art. Some of her inspiration came from visions in frosted windows,
                                        trees, flowers and her beliefs, which she would replicate them into paintings.
                                    </p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Background Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <h1>Background</h1>
                        <button class="gallery-button" onclick="openCarouselByIndex(4)">
                            <img loading="lazy" src="3.webp" style="max-height: 60%; max-width: 40%; margin: auto; display: block;" alt="Self portrait" />
                        </button>
                        <h2>Self portrait when she was 25 years old - water colours</h2>
                        <p class="mud-typography-body1">
                            Mrs. Elena Kokline has exhibited at the following places:
                            <ul>
                                <li>Palais Montcalm - Québec city - December 1971</li>
                                <li>West Africa - Sénégal - January 1974</li>
                                <li>Glebe centre - Ottawa - March 1976</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <!-- History Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <button class="gallery-button" onclick="openCarouselByIndex(5)">
                            <img loading="lazy" src="4.webp" style="max-width: 50%; margin: auto; display: block;" alt="Graduation day" />
                        </button>
                        <p class="mud-typography-subtitle1">Graduation day</p>
                        <h2>History</h2>
                        <p class="mud-typography-body1">
                            <ul>
                                <li>Born in Lithuanie - Kaunas - 1923</li>
                                <li>Spoke 7 languages</li>
                                <li>February 1949, she got married to a Doctor who majored in chemistry/physics and graduated from the Catholic University of Louvain</li>
                                <li>Together they immigrated to Canada in 1951</li>
                                <li>They had 5 children. All girls have inherited the artistic flare</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <!-- Portfolio Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <h1>Portfolio - History</h1>
                        <button class="gallery-button" onclick="openCarouselByIndex(6)">
                            <img loading="lazy" src="5.webp" style="max-width: 66%; margin: auto; display: block;" alt="Portfolio" />
                        </button>
                        <p class="mud-typography-body2">
                            "Mme Elèna Kokline et sa dernière toile qui symbolise ses amours et ses impression du Sénégal: le
                            baobab, le soleil l'antilope et la biche sculptée. En observan bien les branches du baobab vous
                            decouvriez les tête d'antilopes et de biches qu'une main parfois étreint. Cette main est cell de
                            l'artiste." — <b>News paper clipping, 1974</b>
                        </p>
                    </div>
                </div>

                <!-- Diploma Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <button class="gallery-button" onclick="openCarouselByIndex(7)">
                            <img loading="lazy" src="6.webp" style="max-width: 50%; margin: auto; display: block;" alt="Diploma" />
                        </button>
                        <p class="mud-typography-body1">
                            Diploma - Ville de Brusxelles. Academie royale des beaux-arts et école des arts décoratifs. Was
                            awarded to her by the Burgomaster of the City of Brussels in 1949.
                        </p>
                    </div>
                </div>

                <!-- Article Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <button class="gallery-button" onclick="openCarouselByIndex(8)">
                            <img loading="lazy" src="7.webp" style="max-width: 50%; margin: auto; display: block;" alt="Article" />
                        </button>
                        <p class="mud-typography-body2">
                            "The works of a Neo-Canadian artist - Article read as: Mrs. Elena Kokline a Neo-Canadian artist who
                            only recently exhibited her latest works at the Palais Montcalm. Having studied at Brusels "Academie
                            Royal des beaux Arts". She has been residing in Quebec since 1951, and thus, has had her stylish and
                            decorative works - most symbolic - before the public for some 20 years. She excels in poker-works,
                            wood-sculpturing, oils, copper tin and water-colors." — <b>News paper clipping, 1971</b>
                        </p>
                    </div>
                </div>

                <!-- Paintings Sections -->
                ${paintings.map((painting, idx) => generatePaintingSection(painting, idx + 9)).join('')}

                <!-- Tools Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <h1>Tools</h1>
                        <button class="gallery-button" onclick="openCarouselByIndex(${paintings.length + 9})">
                            <div class="row-flex">
                                <img loading="lazy" width="500" style="max-width: 50%; margin: auto;" src="34.1.webp" alt="X-acto knifes" />
                                <div class="stack-column">
                                    <h2>X-acto knifes and tools</h2>
                                    <p class="mud-typography-body1">
                                        The tools used by my mom when she was creating her artwork. Many hours spent using those
                                        tools and no injuries ... well none that I knew of.
                                    </p>
                                </div>
                            </div>
                        </button>
                        <button class="gallery-button" onclick="openCarouselByIndex(${paintings.length + 10})">
                            <div class="row-flex">
                                <img loading="lazy" width="500" style="width: 500px; max-width: 50%; margin: auto;" src="34.2.webp" alt="Price list" />
                                <div class="stack-column">
                                    <h2>Price list in 1956</h2>
                                    <p class="mud-typography-body1">
                                        Back in the good old days! That's what you call prices. Today the prices start at $4.00
                                        and up for one x-acto knife.
                                    </p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Instructions Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <button class="gallery-button" onclick="openCarouselByIndex(${paintings.length + 11})">
                            <img loading="lazy" src="35.webp" style="max-width: 50%; margin: auto; display: block;" alt="Instructions" />
                        </button>
                        <p class="mud-typography-body1">
                            Instruction sheet, cropped to size.
                        </p>
                        <p class="mud-typography-body1">
                            Things to do with your x-acto knives and tools.
                        </p>
                        <p class="mud-typography-body1">
                            Original wooden box of x-acto knifes. Survived all those years and more to go.
                        </p>
                    </div>
                </div>

                <!-- Carving Knifes Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <h1>Carving knifes</h1>
                        <p class="mud-typography-body1">
                            Some additional tools that she used. Metal files, poker-knife and even a sharp screwdriver.
                        </p>
                        <div class="row-flex">
                            <button class="gallery-button" onclick="openCarouselByIndex(${paintings.length + 12})">
                                <img loading="lazy" width="800" style="max-width: 50%; margin: auto;" src="36.1.webp" alt="Carving knifes 1" />
                            </button>
                            <button class="gallery-button" onclick="openCarouselByIndex(${paintings.length + 13})">
                                <img loading="lazy" width="800" style="max-width: 50%; margin: auto;" src="36.2.webp" alt="Carving knifes 2" />
                            </button>
                        </div>
                        <p class="mud-typography-body1">
                            Carving Knifes still as good as new and very sharp. Used on all the woodwork she did.
                        </p>
                    </div>
                </div>

                <!-- Embossed Tools Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <h1>Embossed tools</h1>
                        <button class="gallery-button" onclick="openCarouselByIndex(${paintings.length + 14})">
                            <img loading="lazy" style="max-width: 50%; margin: auto; display: block;" src="37.webp" alt="Embossed tools" />
                        </button>
                        <p class="mud-typography-body1">
                            These are the tools that she used, when she used the push-back method on copper and tin.
                        </p>
                        <p class="mud-typography-body1">
                            I say push-back because it took a lot of energy pushing the copper or tin on a semi-soft surface for
                            every detail and definition to protrude without going through the copper or tin.
                        </p>
                    </div>
                </div>

                <!-- No Longer Available Section -->
                <div class="mud-paper pa-16 ma-2">
                    <div class="mud-stack">
                        <h2>No longer available</h2>
                        <button class="gallery-button" onclick="openCarouselByIndex(${paintings.length + 15})">
                            <img loading="lazy" src="38.1.webp" style="max-width: 50%; margin: auto; display: block;" alt="Querelle" />
                        </button>
                        <button class="gallery-button" onclick="openCarouselByIndex(${paintings.length + 16})">
                            <img loading="lazy" src="38.2.webp" style="max-width: 50%; margin: auto; display: block;" alt="Querelle" />
                        </button>
                        <p class="mud-typography-subtitle1 text-center">Querelle / Quarrel</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generatePaintingSection(painting, idx) {
    return `
        <div class="mud-paper pa-16 ma-2">
            <div class="mud-stack">
                <button id="${painting.key}" class="gallery-button" onclick="openCarousel(window.paintingsData.find(p => p.key === '${painting.key}'))">
                    <img loading="lazy" src="${painting.file}" style="max-width: 50%; margin: auto; display: block;" alt="${painting.name}" />
                </button>
                <p class="mud-typography-subtitle1">${painting.size}</p>
                <h2>${painting.name}</h2>
                <p class="mud-typography-body1">${painting.description}</p>
            </div>
        </div>
    `;
}

// Setup event listeners for carousel
function setupEventListeners() {
    document.addEventListener('keydown', function(event) {
        const dialog = document.getElementById('image-dialog');
        if (dialog && dialog.open) {
            if (event.key === 'ArrowLeft') {
                carouselPrev();
            } else if (event.key === 'ArrowRight') {
                carouselNext();
            } else if (event.key === 'Escape') {
                closeImageDialog();
            }
        }
    });
}

// Open carousel by painting object
function openCarousel(painting) {
    currentPainting = painting;
    const idx = window.paintingsData.findIndex(p => p.key === painting.key) + 9; // +9 to account for static images before paintings
    openCarouselByIndex(idx);
}

// Open carousel by index
function openCarouselByIndex(idx) {
    const allImages = getAllImagesList();
    if (idx >= 0 && idx < allImages.length) {
        currentCarouselIndex = idx;
        populateCarousel(allImages);
        const dialog = document.getElementById('image-dialog');
        dialog.showModal();
        
        // Update URL
        const painting = window.paintingsData.find(p => p.key === allImages[idx].key);
        if (painting) {
            window.history.pushState(null, '', '#' + painting.key);
            currentPainting = painting;
        }
    }
}

// Get all images list (paintings + static images)
function getAllImagesList() {
    const images = [];
    
    // Welcome image
    images.push({ key: 'welcome', file: '1.webp', name: 'Welcome', size: '' });
    
    // About artist
    images.push({ key: 'background-1', file: '2.1.webp', name: 'Her Background', size: '' });
    images.push({ key: 'background-2', file: '2.2.webp', name: 'Her Medium', size: '' });
    images.push({ key: 'background-3', file: '2.3.webp', name: 'Her Inspiration', size: '' });
    
    // Self portrait and history
    images.push({ key: 'self-portrait', file: '3.webp', name: 'Self portrait', size: '' });
    images.push({ key: 'graduation', file: '4.webp', name: 'Graduation day', size: '' });
    images.push({ key: 'portfolio', file: '5.webp', name: 'Portfolio', size: '' });
    images.push({ key: 'diploma', file: '6.webp', name: 'Diploma', size: '' });
    images.push({ key: 'article', file: '7.webp', name: 'Article', size: '' });
    
    // Paintings
    window.paintingsData.forEach(p => {
        images.push(p);
    });
    
    // Tools
    images.push({ key: 'tools-1', file: '34.1.webp', name: 'X-acto knifes and tools', size: '' });
    images.push({ key: 'tools-2', file: '34.2.webp', name: 'Price list in 1956', size: '' });
    images.push({ key: 'instructions', file: '35.webp', name: 'Instructions', size: '' });
    images.push({ key: 'carving-1', file: '36.1.webp', name: 'Carving knifes', size: '' });
    images.push({ key: 'carving-2', file: '36.2.webp', name: 'Carving knifes', size: '' });
    images.push({ key: 'embossed', file: '37.webp', name: 'Embossed tools', size: '' });
    images.push({ key: 'no-longer-1', file: '38.1.webp', name: 'Querelle', size: '' });
    images.push({ key: 'no-longer-2', file: '38.2.webp', name: 'Querelle', size: '' });
    
    return images;
}

// Populate carousel with all images
function populateCarousel(allImages) {
    const slidesContainer = document.getElementById('carousel-slides');
    slidesContainer.innerHTML = '';
    
    allImages.forEach((img, idx) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide' + (idx === currentCarouselIndex ? ' active' : '');
        slide.innerHTML = `<img src="${img.file}" alt="${img.name}" style="max-width: 100vw; max-height: 76vh; object-fit: contain; margin: auto; display: block;" />`;
        slidesContainer.appendChild(slide);
    });
    
    updateCarouselInfo(allImages[currentCarouselIndex]);
    updateInquireButton(allImages[currentCarouselIndex]);
}

// Update carousel info display
function updateCarouselInfo(image) {
    const info = document.getElementById('carousel-info');
    if (image.name) {
        info.innerHTML = `<h2>${image.name}</h2>`;
    } else {
        info.innerHTML = '';
    }
}

// Update inquire button visibility and handler
function updateInquireButton(image) {
    const btn = document.getElementById('inquire-button');
    const painting = window.paintingsData.find(p => p.key === image.key);
    
    if (painting && painting.available) {
        btn.style.display = 'block';
        btn.onclick = () => openContactDialog(painting);
    } else {
        btn.style.display = 'none';
    }
}

// Carousel navigation
function carouselNext() {
    const allImages = getAllImagesList();
    currentCarouselIndex = (currentCarouselIndex + 1) % allImages.length;
    updateCarouselDisplay(allImages);
}

function carouselPrev() {
    const allImages = getAllImagesList();
    currentCarouselIndex = (currentCarouselIndex - 1 + allImages.length) % allImages.length;
    updateCarouselDisplay(allImages);
}

function updateCarouselDisplay(allImages) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentCarouselIndex);
    });
    
    const image = allImages[currentCarouselIndex];
    updateCarouselInfo(image);
    updateInquireButton(image);
    
    // Update URL
    const painting = window.paintingsData.find(p => p.key === image.key);
    if (painting) {
        window.history.replaceState(null, '', '#' + painting.key);
    }
}

// Close image dialog
function closeImageDialog() {
    const dialog = document.getElementById('image-dialog');
    dialog.close();
    window.history.replaceState(null, '', '/');
}

// Contact form dialog
function openContactDialog(painting) {
    const dialog = document.getElementById('contact-dialog');
    const form = document.getElementById('contact-form');
    
    // Pre-fill form
    document.getElementById('subject').value = 'Art Inquiry';
    document.getElementById('body').value = `Hello Lydia, \n\nI wish to inquire about painting(s): "${painting.name}"... \n\nIn the Elena Kokline collection.`;
    
    dialog.showModal();
}

function closeContactDialog() {
    const dialog = document.getElementById('contact-dialog');
    dialog.close();
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const body = document.getElementById('body').value;
    
    // Create mailto link
    const mailtoLink = `mailto:lkokline@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open in default mail client
    window.location.href = mailtoLink;
    
    // Close dialog
    closeContactDialog();
}
