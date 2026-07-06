const app = document.querySelector("#app");
const viewButtons = document.querySelectorAll("[data-view-target]");
const tabButtons = document.querySelectorAll(".tabbar button");
const globalCreateTrigger = document.querySelector("[data-global-create-toggle]");
const globalCreateMenu = document.querySelector("[data-global-create-menu]");

const products = [
  {
    id: "fringe-dress",
    title: "Fringe Detail Halter Maxi Dress",
    price: "$43.9",
    commission: "15%-20%",
    earn: "$8.78",
    color: "Ivory",
    image: "./assets/product-1.jpg",
    images: ["./assets/product-1.jpg", "./assets/product-2.jpg", "./assets/product-3.jpeg", "./assets/product-4.jpg"]
  },
  {
    id: "strapless-mini",
    title: "Strapless Sculpt Mini Dress",
    price: "$36.8",
    commission: "12%-18%",
    earn: "$6.62",
    color: "Black",
    image: "./assets/product-5.jpg",
    images: ["./assets/product-5.jpg", "./assets/product-1.jpg", "./assets/product-2.jpg", "./assets/product-3.jpeg"]
  },
  {
    id: "summer-set",
    title: "Soft Summer Knit Matching Set",
    price: "$49.5",
    commission: "15%-20%",
    earn: "$9.90",
    color: "Cream",
    image: "./assets/product-6.jpg",
    images: ["./assets/product-6.jpg", "./assets/product-2.jpg", "./assets/product-3.jpeg", "./assets/product-4.jpg"]
  },
  {
    id: "linen-shirt",
    title: "Relaxed Linen Oversized Shirt",
    price: "$31.2",
    commission: "10%-15%",
    earn: "$4.68",
    color: "White",
    image: "./assets/product-7.jpg",
    images: ["./assets/product-7.jpg", "./assets/product-1.jpg", "./assets/product-3.jpeg", "./assets/product-4.jpg"]
  },
  {
    id: "resort-skirt",
    title: "Low Rise Resort Maxi Skirt",
    price: "$39.9",
    commission: "14%-18%",
    earn: "$7.18",
    color: "Taupe",
    image: "./assets/product-8.jpg",
    images: ["./assets/product-8.jpg", "./assets/product-2.jpg", "./assets/product-3.jpeg", "./assets/product-4.jpg"]
  }
];

const bannerSlots = [
  { title: "Bestseller", image: "./assets/product-1.jpg", featured: true },
  { title: "New In", image: "./assets/new-in.png" },
  { title: "Trending", image: "./assets/trending.png" },
  { title: "Curator's Pick", image: "./assets/product-2.jpg" },
  { title: "Local Ship", image: "./assets/local-ship.png" }
];

function maxEarnLabel(product) {
  return `Earn up to ${product.commission.split("-").pop()}`;
}

const creatorExamples = [
  {
    id: "mia",
    creator: "@mia.style",
    platform: "TikTok",
    image: "./assets/product-2.jpg",
    angle: "Vacation dinner fit",
    views: "18.4K",
    ctr: "6.8%",
    orders: "126",
    gmv: "$2.6K",
    breakdown: [
      ["Hook", "POV: you need one dress for vacation dinner."],
      ["Product proof", "Shows fringe movement, neckline, and full-body fit."],
      ["Styling moment", "Pairs it with sandals and gold jewelry."],
      ["Social proof", "Calls out comments asking for the link."],
      ["CTA", "Tap the product tag before it sells out."]
    ]
  },
  {
    id: "lena",
    creator: "@lena.edits",
    platform: "IG Reels",
    image: "./assets/product-3.jpeg",
    angle: "One dress, three plans",
    views: "9.2K saves",
    ctr: "4.9%",
    orders: "82",
    gmv: "$1.8K",
    breakdown: [
      ["Hook", "The dress I packed for dinner, beach drinks, and date night."],
      ["Product proof", "Uses close-ups to show texture and shape."],
      ["Styling moment", "Transitions between three accessory choices."],
      ["Social proof", "Mentions it is easy to style from carry-on basics."],
      ["CTA", "Save this outfit and shop the tag."]
    ]
  },
  {
    id: "nora",
    creator: "@nora.daily",
    platform: "YouTube Shorts",
    image: "./assets/product-4.jpg",
    angle: "Minimal chic try-on",
    views: "12.7K",
    ctr: "5.4%",
    orders: "97",
    gmv: "$2.1K",
    breakdown: [
      ["Hook", "If your audience loves minimal outfits, start here."],
      ["Product proof", "Shows front, side, walking, and seated fit."],
      ["Styling moment", "Adds a jacket to make it city-ready."],
      ["Social proof", "Frames it as a repeat outfit formula."],
      ["CTA", "The link is on the product card."]
    ]
  }
];

const museConcepts = [
  { id: "showcase", title: "Outfit Showcase", note: "Show fit, movement, and styling details.", image: "./assets/product-2.jpg" },
  { id: "transition", title: "Transition Edit", note: "Quick changes, beat cuts, and before-after energy.", image: "./assets/product-3.jpeg" },
  { id: "daily", title: "Daily Outfit", note: "Natural try-on footage with casual creator pacing.", image: "./assets/product-4.jpg" },
  { id: "scene", title: "Scene Styling", note: "A themed setting with clear mood and shopping context.", image: "./assets/product-5.jpg" }
];

const musePhotoSlots = [
  { id: "full", title: "Full Body", note: "Full frame, good light" },
  { id: "half", title: "Half Body", note: "Waist up, clear face" },
  { id: "side", title: "Side Face", note: "Clear side profile" }
];

const musePieces = [
  { id: "shoe-1", category: "Shoes", title: "Summer Strap Sandals", price: "$21", image: "./assets/product-6.jpg" },
  { id: "shoe-2", category: "Shoes", title: "Minimal Leather Loafers", price: "$45", image: "./assets/product-7.jpg" },
  { id: "bag-1", category: "Bag", title: "Resort Shoulder Bag", price: "$28", image: "./assets/product-8.jpg" },
  { id: "top-1", category: "Top", title: "Relaxed Linen Shirt", price: "$31.2", image: "./assets/product-7.jpg" },
  { id: "bottom-1", category: "Bottom", title: "Low Rise Resort Maxi Skirt", price: "$39.9", image: "./assets/product-8.jpg" }
];

const contentTabs = ["All", "Posts", "Videos", "Requests"];

const postBatches = [
  {
    id: "post-batch-1",
    date: "2026-07-03 15:19:36",
    productImage: "./assets/product-1.jpg",
    productTitle: "Fringe Detail Halter Maxi Dress",
    price: "$43.90",
    previews: ["./assets/product-2.jpg", "./assets/product-3.jpeg", "./assets/product-4.jpg", "./assets/product-2.jpg"]
  },
  {
    id: "post-batch-2",
    date: "2026-06-23 12:45:57",
    productImage: "./assets/product-5.jpg",
    productTitle: "Strapless Sculpt Mini Dress",
    price: "$36.80",
    previews: ["./assets/product-5.jpg", "./assets/product-5.jpg", "./assets/product-6.jpg", "./assets/product-5.jpg"]
  },
  {
    id: "post-batch-3",
    date: "2026-06-22 20:12:20",
    productImage: "./assets/product-3.jpeg",
    productTitle: "Soft Summer Styling Set",
    price: "$49.50",
    previews: ["./assets/product-7.jpg", "./assets/product-8.jpg", "./assets/product-6.jpg"]
  }
];

const videoBatches = [
  {
    id: "video-batch-1",
    date: "2026-07-01 10:22:11",
    productImage: "./assets/product-2.jpg",
    productTitle: "Fringe Detail Halter Maxi Dress",
    price: "$43.90",
    previews: ["./assets/product-4.jpg", "./assets/product-6.jpg"]
  }
];

const defaultSettings = {
  tone: "Friendly",
  platform: "TikTok",
  length: "30s",
  format: "Try-on",
  cta: "Medium",
  onCamera: "No",
  avatar: "None"
};

let contentSettings = { ...defaultSettings };
let museBriefState = {
  styledPieces: [],
  concept: "",
  notes: "",
  reference: "",
  photos: {},
  photoEnabled: false
};
let museRequests = [];
let productAssetFilter = "";
let productAssetPanelOpen = false;
let productAssetExpandedInput = "";
let productAssetSelectedTemplate = "tryon-clip";
let productAssetSelectedAvatar = "mine";
let productAssetSelectedProductImage = "";
const productAssetAvatars = [
  { id: "mine", label: "My Avatar", type: "user", image: "./assets/default-avatar.svg" },
  { id: "official-1", label: "Official 1", type: "official", image: "./assets/product-4.jpg" },
  { id: "official-2", label: "Official 2", type: "official", image: "./assets/product-5.jpg" },
  { id: "official-3", label: "Official 3", type: "official", image: "./assets/product-6.jpg" }
];
const productAssetTemplates = [
  { id: "tryon-clip", title: "Avatar try-on", output: "Video · 5s", image: "./assets/product-2.jpg" },
  { id: "detail-motion", title: "Detail motion", output: "Video · 5s", image: "./assets/product-3.jpeg" },
  { id: "studio-still", title: "Studio still", output: "Image", image: "./assets/product-7.jpg" },
  { id: "hanger-still", title: "Hanger still", output: "Image", image: "./assets/product-8.jpg" }
];
const productAssetsByProduct = {
  "fringe-dress": [
    { id: "generated-1", title: "Avatar try-on clip", kind: "Video", source: "Generated", duration: "05s", image: "./assets/product-5.jpg", createdAt: 800 },
    { id: "generated-2", title: "Studio product still", kind: "Image", source: "Generated", duration: "", image: "./assets/product-7.jpg", createdAt: 650 },
    { id: "filmed-1", title: "Full body try-on", kind: "Image", source: "Filmed", duration: "", image: "./assets/product-2.jpg", createdAt: 500 },
    { id: "filmed-2", title: "Fringe movement", kind: "Video", source: "Filmed", duration: "06s", image: "./assets/product-3.jpeg", createdAt: 400 },
    { id: "filmed-3", title: "Texture detail", kind: "Image", source: "Filmed", duration: "", image: "./assets/product-4.jpg", createdAt: 250 }
  ]
};

function syncViewButtons() {
  const currentView = document.body.dataset.view || "mobile";
  document.body.dataset.view = currentView;
  viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewTarget === currentView);
  });
}

syncViewButtons();

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.dataset.view = button.dataset.viewTarget;
    syncViewButtons();
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.globalCreateToggle !== undefined) return;
    const route = button.dataset.route;
    if (route) window.location.hash = route;
  });
});

bindGlobalCreateMenu();

function route() {
  const hash = window.location.hash || "#/select";
  const [, page, id, step] = hash.split("/");

  if (!window.location.hash) {
    window.location.hash = "#/select";
    return;
  }

  if (page === "product") {
    document.body.dataset.page = "product";
    renderProduct(id);
  } else if (page === "creator-breakdown") {
    document.body.dataset.page = "creator-breakdown";
    renderCreatorBreakdown(id);
  } else if (page === "structure-setup") {
    document.body.dataset.page = "structure-setup";
    renderStructureSetup(id);
  } else if (page === "content-kit") {
    document.body.dataset.page = "content-kit";
    renderContentKit(id);
  } else if (page === "muse-brief") {
    document.body.dataset.page = "muse-brief";
    renderMuseBrief(id, Number(step) || 1);
  } else if (page === "muse-next") {
    document.body.dataset.page = "muse-next";
    renderMuseNext(id);
  } else if (page === "my-content") {
    document.body.dataset.page = "my-content";
    renderMyContent(id || "All");
  } else if (page === "mine") {
    document.body.dataset.page = "mine";
    renderMine();
  } else if (page === "museland" || page === "pick") {
    document.body.dataset.page = page;
    renderPlaceholder(page);
  } else {
    document.body.dataset.page = "select";
    renderSelect();
  }

  setActiveTab(page || "select");
}

function setActiveTab(page) {
  const tab = ["product", "creator-breakdown", "structure-setup", "content-kit", "muse-brief", "muse-next", "my-content", "create"].includes(page) ? "select" : page;
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tab);
  });
}

function renderSelect() {
  app.innerHTML = `
    <header class="select-header">
      <div>
        <span>MuseSelect</span>
        <h1>Select</h1>
      </div>
      <button class="round-icon" type="button" aria-label="Search">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.8 18.2A7.4 7.4 0 1 0 10.8 3.4A7.4 7.4 0 0 0 10.8 18.2ZM16.2 16.2L21 21"/></svg>
      </button>
    </header>

    <section class="select-banner" aria-label="Featured resources">
      ${bannerSlots.map((slot) => `
        <article class="banner-card ${slot.featured ? "is-featured" : ""}">
          <img src="${slot.image}" alt="">
          <span>${slot.title}</span>
        </article>
      `).join("")}
    </section>

    <section class="filter-panel" aria-label="Product filters">
      <div class="filter-summary">
        <button class="filter-trigger" type="button" data-open-filters>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7H20M7 12H17M10 17H14"/></svg>
          <span>Filter</span>
        </button>
        <div class="desktop-filters" aria-label="Product filters">
          <div class="inline-filter">
            <span>Category</span>
            <div class="filter-options" data-filter-group="category">
              <button class="is-active" type="button">All</button>
              <button type="button">Dresses</button>
              <button type="button">Tops</button>
              <button type="button">Sets</button>
              <button type="button">Bottoms</button>
            </div>
          </div>
          <div class="inline-filter">
            <span>Style</span>
            <div class="filter-options" data-filter-group="style">
              <button class="is-active" type="button">All</button>
              <button type="button">Minimal</button>
              <button type="button">Vacation</button>
              <button type="button">Chic</button>
              <button type="button">Street</button>
            </div>
          </div>
          <div class="inline-filter">
            <span>Price</span>
            <div class="filter-options" data-filter-group="price">
              <button class="is-active" type="button">All</button>
              <button type="button">$0-$30</button>
              <button type="button">$30-$50</button>
              <button type="button">$50+</button>
            </div>
          </div>
        </div>
        <label class="sort-control">
          <span>Sort</span>
          <select data-sort-select>
            <option>Recommend</option>
            <option>Bestseller</option>
            <option>Newest</option>
            <option>Price</option>
          </select>
        </label>
      </div>

      <div class="filter-drawer" hidden>
        <button class="drawer-backdrop" type="button" aria-label="Close filters" data-close-filters></button>
        <div class="drawer-panel" role="dialog" aria-modal="true" aria-label="Filter products">
          <div class="drawer-head">
            <h2>Filters</h2>
            <button type="button" aria-label="Close filters" data-close-filters>×</button>
          </div>
          <div class="filter-row">
            <span>Category</span>
            <div class="filter-options" data-mobile-filter-group="category">
              <button class="is-active" type="button">All</button>
              <button type="button">Dresses</button>
              <button type="button">Tops</button>
              <button type="button">Sets</button>
              <button type="button">Bottoms</button>
            </div>
          </div>
          <div class="filter-row">
            <span>Style</span>
            <div class="filter-options" data-mobile-filter-group="style">
              <button class="is-active" type="button">All</button>
              <button type="button">Minimal</button>
              <button type="button">Vacation</button>
              <button type="button">Chic</button>
              <button type="button">Street</button>
            </div>
          </div>
          <div class="filter-row">
            <span>Price</span>
            <div class="filter-options" data-mobile-filter-group="price">
              <button class="is-active" type="button">All</button>
              <button type="button">$0-$30</button>
              <button type="button">$30-$50</button>
              <button type="button">$50+</button>
            </div>
          </div>
          <div class="drawer-actions">
            <button class="secondary-filter" type="button" data-reset-filters>Reset</button>
            <button class="primary-filter" type="button" data-close-filters>Apply</button>
          </div>
        </div>
      </div>
    </section>

    <section class="product-feed" aria-label="Product feed">
      ${products.map((product) => `
        <article class="product-card" data-product-id="${product.id}" tabindex="0">
          <img src="${product.image}" alt="${product.title}">
          <div class="product-card-body">
            <h2>${product.title}</h2>
            <div class="card-price">
              <strong>${product.price}</strong>
              <span>${maxEarnLabel(product)}</span>
            </div>
            <p>Extra Earn +${product.commission.split("-").pop()}</p>
          </div>
        </article>
      `).join("")}
    </section>
  `;

  app.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      window.location.hash = `#/product/${card.dataset.productId}`;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") window.location.hash = `#/product/${card.dataset.productId}`;
    });
  });

  bindFilterInteractions();
}

function bindFilterInteractions() {
  const drawer = app.querySelector(".filter-drawer");

  app.querySelectorAll("[data-open-filters]").forEach((button) => {
    button.addEventListener("click", () => {
      drawer.hidden = false;
    });
  });

  app.querySelectorAll("[data-close-filters]").forEach((button) => {
    button.addEventListener("click", () => {
      drawer.hidden = true;
    });
  });

  app.querySelectorAll("[data-filter-group] button, [data-mobile-filter-group] button").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.parentElement;
      group.querySelectorAll("button").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });

      const groupName = group.dataset.filterGroup || group.dataset.mobileFilterGroup;
      syncFilterGroup(groupName, button.textContent);
    });
  });

  app.querySelector("[data-reset-filters]")?.addEventListener("click", () => {
    app.querySelectorAll("[data-filter-group], [data-mobile-filter-group]").forEach((group) => {
      const first = group.querySelector("button");
      group.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === first));
    });
  });
}

function syncFilterGroup(groupName, label) {
  app.querySelectorAll(`[data-filter-group="${groupName}"], [data-mobile-filter-group="${groupName}"]`).forEach((group) => {
    group.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("is-active", item.textContent === label);
    });
  });
}

function renderProduct(id) {
  const product = products.find((item) => item.id === id) || products[0];

  app.innerHTML = `
    <header class="mobile-header">
      <button type="button" aria-label="Back" data-back-select>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>
      </button>
      <span>Product Details</span>
      <button type="button" aria-label="Share">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12.5L16 17M16 7L8 11.5M18 8.5A3 3 0 1 0 18 2.5A3 3 0 0 0 18 8.5ZM6 15A3 3 0 1 0 6 9A3 3 0 0 0 6 15ZM18 21.5A3 3 0 1 0 18 15.5A3 3 0 0 0 18 21.5Z"/></svg>
      </button>
    </header>

    <section class="product-layout" aria-label="Product details">
      <aside class="gallery" aria-label="Product gallery">
        <div class="thumbs">
          ${product.images.map((image, index) => `
            <button class="thumb ${index === 0 ? "is-active" : ""}" type="button" data-image="${image}" aria-label="View image ${index + 1}">
              <img src="${image}" alt="">
            </button>
          `).join("")}
        </div>

        <div class="hero">
          <img class="product-image" src="${product.images[0]}" alt="${product.title}">
          <button class="try-on" type="button">TRY ON</button>
          <span class="image-count">1 / ${product.images.length}</span>
        </div>
      </aside>

      <section class="details-panel">
        <h1>${product.title}</h1>

        <div class="price-row">
          <strong>${product.price}</strong>
          <span>${maxEarnLabel(product)}</span>
        </div>

        <section class="commission-card" aria-label="Commission options">
          <div class="commission-card-header">
            <span>Commission</span>
            <strong>Earn more with MUSE content</strong>
          </div>
          <div class="commission-options">
            <article class="commission-option" role="button" tabindex="0">
              <span class="commission-name">Direct Promote</span>
              <strong>${product.commission.split("-")[0]}</strong>
              <span class="commission-note">Earn standard commission</span>
            </article>
            <article class="commission-option is-active" role="button" tabindex="0">
              <span class="recommend-tag">Recommended</span>
              <span class="commission-name">Create Content</span>
              <span class="commission-rate">
                <strong>${product.commission.split("-").pop()}</strong>
                <button class="extra-bonus" type="button" data-extra-create-toggle>EXTRA 5%</button>
              </span>
              <span class="commission-note">Earn ${product.earn} commission</span>
            </article>
          </div>
        </section>

        ${renderProductAssets(product)}

        <section class="option-block variant-options" aria-label="Product variants">
          <div class="option-title">Color <span>${product.color}</span></div>
          <div class="swatches">
            <button class="swatch is-active" type="button" aria-label="Ivory"></button>
            <button class="swatch dark" type="button" aria-label="Black"></button>
            <button class="swatch warm" type="button" aria-label="Taupe"></button>
          </div>
          <div class="option-title size-title">Size <span>S</span></div>
          <div class="sizes">
            <button type="button">XS</button>
            <button class="is-active" type="button">S</button>
            <button type="button">M</button>
            <button type="button">L</button>
            <button type="button">XL</button>
          </div>
        </section>

        <section class="accordion">
          <details open>
            <summary>Product Details</summary>
            <p>Halter neckline, fringe trim, maxi length, lightweight woven feel, and event-ready styling.</p>
          </details>
          <details>
            <summary>Size Guide</summary>
            <p>Available sizes: XS, S, M, L, XL. Choose your regular size for a close fit.</p>
          </details>
          <details>
            <summary>Shipping</summary>
            <p>Local ship eligible. Delivery timing varies by destination and stock status.</p>
          </details>
        </section>
      </section>
    </section>

    <div class="sticky-actions" aria-label="Product actions">
      <button class="secondary" type="button">Pick</button>
      <button class="primary" type="button">Promote</button>
    </div>

    <div class="create-fab" data-create-fab style="--fab-x: calc(100vw - 112px); --fab-y: 52vh;">
      <button class="create-main" type="button" aria-expanded="false" data-create-toggle>+Create</button>
      <span class="create-bonus">Earn +5%</span>
      <div class="create-fan" aria-label="Create actions">
        <button type="button" data-create-action="Shoppable Video">Shoppable Video</button>
        <button type="button" data-create-action="Tryon Post">Tryon Post</button>
      </div>
    </div>
  `;

  bindProductInteractions();
}

function getProductAssets(product) {
  const existing = productAssetsByProduct[product.id];
  if (existing) return existing;
  return [
    { id: `${product.id}-generated-1`, title: "Generated try-on", kind: "Video", source: "Generated", duration: "05s", image: product.images[1] || product.image, createdAt: 700 },
    { id: `${product.id}-filmed-1`, title: "Product detail", kind: "Image", source: "Filmed", duration: "", image: product.images[0], createdAt: 520 },
    { id: `${product.id}-filmed-2`, title: "Fit check", kind: "Video", source: "Filmed", duration: "06s", image: product.images[2] || product.image, createdAt: 380 }
  ];
}

function renderProductAssets(product) {
  const assets = getProductAssets(product)
    .filter((asset) => !productAssetFilter || asset.source.toLowerCase() === productAssetFilter)
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  const showGenerate = productAssetFilter !== "filmed";
  return `
    <section class="creator-insight product-assets" aria-label="Product Assets">
      <div class="product-assets-head">
        <div>
          <h2>Product Assets</h2>
          <div class="asset-type-tabs" aria-label="Asset filters">
            <button type="button" data-asset-filter="filmed" aria-pressed="${productAssetFilter === "filmed"}">Filmed</button>
            <button type="button" data-asset-filter="generated" aria-pressed="${productAssetFilter === "generated"}">Generated</button>
          </div>
        </div>
        <button class="download-all-assets" type="button" data-download-all-assets>Download all</button>
      </div>
      <div class="asset-scroll product-asset-row">
        ${assets.map(renderProductAssetCard).join("")}
        ${showGenerate ? renderAiGenerateCard() : ""}
      </div>
      ${productAssetPanelOpen ? renderProductAssetPanel(product) : ""}
    </section>
  `;
}

function renderProductAssetCard(asset) {
  const isLoading = asset.status === "loading";
  const isFailed = asset.status === "failed";
  return `
    <article class="product-asset-card ${isLoading ? "is-loading" : ""}">
      <div class="product-asset-thumb">
        ${isLoading ? `<span class="asset-spinner"></span>` : `<img src="${asset.image}" alt="">`}
        <span class="asset-kind">${isLoading ? "Generating" : isFailed ? "Failed" : asset.kind}</span>
        ${asset.kind === "Video" && !isLoading ? `<span class="asset-play">▶</span>` : ""}
      </div>
      <div class="product-asset-meta">
        <strong>${asset.title}</strong>
        <div>
          <span>${asset.source}</span>
          ${asset.duration ? `<span>${asset.duration}</span>` : ""}
        </div>
        ${renderProductAssetAction(asset)}
      </div>
    </article>
  `;
}

function renderProductAssetAction(asset) {
  if (asset.status === "loading") {
    return `
      <button type="button" data-complete-asset="${asset.id}">Complete</button>
      <button type="button" data-fail-asset="${asset.id}">Fail</button>
    `;
  }
  if (asset.status === "failed") {
    return `
      <button type="button" data-retry-asset="${asset.id}">Retry</button>
      <button type="button" data-remove-asset="${asset.id}">Remove</button>
    `;
  }
  return `<button type="button" data-download-asset>Download</button>`;
}

function renderAiGenerateCard() {
  return `
    <article class="product-asset-card ai-generate-card" role="button" tabindex="0" data-open-asset-generator>
      <div class="ai-generate-inner">
        <span>+</span>
        <strong>AI generate</strong>
      </div>
    </article>
  `;
}

function renderProductAssetPanel(product) {
  if (!productAssetSelectedProductImage) productAssetSelectedProductImage = product.images[0];
  const selectedAvatar = productAssetAvatars.find((avatar) => avatar.id === productAssetSelectedAvatar) || productAssetAvatars[0];
  const selectedProductImage = productAssetSelectedProductImage || product.images[0];
  const selectedTemplate = productAssetTemplates.find((template) => template.id === productAssetSelectedTemplate) || productAssetTemplates[0];
  const isMobile = document.body.dataset.view === "mobile";
  return `
    <div class="asset-generator-backdrop" data-close-asset-generator></div>
    <section class="asset-generator-panel ${isMobile ? "is-drawer" : "is-modal"}" role="dialog" aria-modal="true" aria-label="Generate new asset">
      <div class="asset-generator-head">
        <h3>Generate new asset</h3>
        <button type="button" data-close-asset-generator aria-label="Close">×</button>
      </div>
      <div class="asset-input-row">
        ${renderAssetInputSummary("avatar", "Avatar", selectedAvatar.label, selectedAvatar.image)}
        ${renderAssetInputSummary("product", "Product", "Current product", selectedProductImage)}
      </div>
      <section class="template-picker">
        <h4>Template</h4>
        <div class="template-grid">
          ${productAssetTemplates.map((template) => `
            <button class="template-tile" type="button" data-template="${template.id}" aria-pressed="${productAssetSelectedTemplate === template.id}">
              <img src="${template.image}" alt="">
              <strong>${template.title}</strong>
              <span>${template.output}</span>
            </button>
          `).join("")}
        </div>
      </section>
      <div class="asset-generator-actions">
        <span>${selectedTemplate.title} · ${selectedAvatar.label}</span>
        <button type="button" data-generate-asset>Generate</button>
      </div>
    </section>
  `;
}

function renderAssetInputSummary(kind, label, value, image) {
  const expanded = productAssetExpandedInput === kind;
  const options = kind === "avatar"
    ? productAssetAvatars
    : (products.find((item) => item.images.includes(image))?.images || products[0].images).map((src, index) => ({ id: src, label: `Product ${index + 1}`, image: src }));
  return `
    <section class="asset-input-summary ${expanded ? "is-expanded" : ""}">
      <button class="asset-input-trigger" type="button" data-expand-asset-input="${kind}" aria-expanded="${expanded}">
        <img src="${image}" alt="">
        <span><strong>${label}</strong><small>${value}</small></span>
        <em>${expanded ? "Collapse" : "Edit"}</em>
      </button>
      ${expanded ? `
        <div class="asset-input-options">
          ${options.map((option) => `
            <button type="button" ${kind === "avatar" ? `data-avatar="${option.id}"` : `data-product-image="${option.image}"`} aria-pressed="${kind === "avatar" ? productAssetSelectedAvatar === option.id : productAssetSelectedProductImage === option.image}">
              <img src="${option.image}" alt="">
              <span>${option.label}</span>
            </button>
          `).join("")}
        </div>
      ` : ""}
    </section>
  `;
}

function bindProductInteractions() {
  app.querySelector("[data-back-select]")?.addEventListener("click", () => {
    window.location.hash = "#/select";
  });

  const thumbs = app.querySelectorAll(".thumb");
  const productImage = app.querySelector(".product-image");
  const imageCount = app.querySelector(".image-count");

  thumbs.forEach((button, index) => {
    button.addEventListener("click", () => {
      productImage.src = button.dataset.image;
      imageCount.textContent = `${index + 1} / ${thumbs.length}`;
      thumbs.forEach((thumb) => thumb.classList.toggle("is-active", thumb === button));
    });
  });

  app.querySelectorAll(".sizes button, .swatches button, .commission-option").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.parentElement;
      group.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === button));
      group.querySelectorAll(".commission-option").forEach((item) => item.classList.toggle("is-active", item === button));
      if (button.classList.contains("commission-option") && button.querySelector("[data-extra-create-toggle]")) {
        openCreateFab();
      }
    });
    button.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      button.click();
    });
  });

  const extraCreateToggle = app.querySelector("[data-extra-create-toggle]");
  extraCreateToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const commissionOption = extraCreateToggle.closest(".commission-option");
    commissionOption?.parentElement.querySelectorAll(".commission-option").forEach((item) => {
      item.classList.toggle("is-active", item === commissionOption);
    });
    openCreateFab();
  });

  app.querySelector("[data-view-creator-more]")?.addEventListener("click", (event) => {
    window.location.hash = `#/creator-breakdown/${event.currentTarget.dataset.viewCreatorMore}`;
  });

  app.querySelectorAll("[data-breakdown]").forEach((card) => {
    card.addEventListener("click", () => {
      window.location.hash = `#/creator-breakdown/${card.dataset.breakdown}`;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") window.location.hash = `#/creator-breakdown/${card.dataset.breakdown}`;
    });
  });

  app.querySelectorAll("[data-download-asset]").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Downloaded";
      button.classList.add("is-done");
    });
  });

  app.querySelector("[data-download-all-assets]")?.addEventListener("click", (event) => {
    event.currentTarget.textContent = "Downloaded";
    event.currentTarget.classList.add("is-done");
  });

  app.querySelectorAll("[data-asset-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      productAssetFilter = productAssetFilter === button.dataset.assetFilter ? "" : button.dataset.assetFilter;
      rerenderCurrentProduct();
    });
  });

  app.querySelectorAll("[data-open-asset-generator]").forEach((card) => {
    const open = () => {
      const product = currentProductFromRoute();
      productAssetSelectedProductImage = product.images[0];
      productAssetExpandedInput = "";
      productAssetPanelOpen = true;
      rerenderCurrentProduct();
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      open();
    });
  });

  app.querySelectorAll("[data-close-asset-generator]").forEach((button) => {
    button.addEventListener("click", () => {
      productAssetPanelOpen = false;
      productAssetExpandedInput = "";
      rerenderCurrentProduct();
    });
  });

  app.querySelectorAll("[data-expand-asset-input]").forEach((button) => {
    button.addEventListener("click", () => {
      productAssetExpandedInput = productAssetExpandedInput === button.dataset.expandAssetInput ? "" : button.dataset.expandAssetInput;
      rerenderCurrentProduct();
    });
  });

  app.querySelectorAll("[data-template]").forEach((button) => {
    button.addEventListener("click", () => {
      productAssetSelectedTemplate = button.dataset.template;
      rerenderCurrentProduct();
    });
  });

  app.querySelectorAll("[data-avatar]").forEach((button) => {
    button.addEventListener("click", () => {
      productAssetSelectedAvatar = button.dataset.avatar;
      rerenderCurrentProduct();
    });
  });

  app.querySelectorAll("[data-product-image]").forEach((button) => {
    button.addEventListener("click", () => {
      productAssetSelectedProductImage = button.dataset.productImage;
      rerenderCurrentProduct();
    });
  });

  app.querySelector("[data-generate-asset]")?.addEventListener("click", () => {
    const product = currentProductFromRoute();
    const template = productAssetTemplates.find((item) => item.id === productAssetSelectedTemplate) || productAssetTemplates[0];
    if (!productAssetsByProduct[product.id]) productAssetsByProduct[product.id] = getProductAssets(product);
    productAssetsByProduct[product.id].unshift({
      id: `loading-${Date.now()}`,
      title: template.title,
      kind: template.output.startsWith("Video") ? "Video" : "Image",
      source: "Generated",
      duration: template.output.includes("5s") ? "05s" : "",
      image: template.image,
      status: "loading",
      templateId: template.id,
      createdAt: Date.now()
    });
    productAssetPanelOpen = false;
    productAssetFilter = "";
    rerenderCurrentProduct();
  });

  app.querySelectorAll("[data-complete-asset]").forEach((button) => {
    button.addEventListener("click", () => {
      updateProductAssetStatus(button.dataset.completeAsset, "ready");
      rerenderCurrentProduct();
    });
  });

  app.querySelectorAll("[data-fail-asset]").forEach((button) => {
    button.addEventListener("click", () => {
      updateProductAssetStatus(button.dataset.failAsset, "failed");
      rerenderCurrentProduct();
    });
  });

  app.querySelectorAll("[data-retry-asset]").forEach((button) => {
    button.addEventListener("click", () => {
      updateProductAssetStatus(button.dataset.retryAsset, "loading");
      rerenderCurrentProduct();
    });
  });

  app.querySelectorAll("[data-remove-asset]").forEach((button) => {
    button.addEventListener("click", () => {
      removeProductAsset(button.dataset.removeAsset);
      rerenderCurrentProduct();
    });
  });

  bindCreateFab();
}

function currentProductFromRoute() {
  const [, page, id] = (window.location.hash || "").split("/");
  if (page === "product") return products.find((product) => product.id === id) || products[0];
  return products[0];
}

function rerenderCurrentProduct() {
  renderProduct(currentProductFromRoute().id);
}

function updateProductAssetStatus(assetId, status) {
  const product = currentProductFromRoute();
  const asset = (productAssetsByProduct[product.id] || []).find((item) => item.id === assetId);
  if (asset) asset.status = status === "ready" ? undefined : status;
}

function removeProductAsset(assetId) {
  const product = currentProductFromRoute();
  const assets = productAssetsByProduct[product.id] || [];
  productAssetsByProduct[product.id] = assets.filter((asset) => asset.id !== assetId);
}

function bindCreateFab() {
  const fab = app.querySelector("[data-create-fab]");
  const toggle = app.querySelector("[data-create-toggle]");
  if (!fab || !toggle) return;

  let dragging = false;
  let moved = false;
  let startX = 0;
  let startY = 0;
  let offsetX = 0;
  let offsetY = 0;

  function setPosition(x, y) {
    const shell = document.body.dataset.view === "mobile" ? document.querySelector(".app-shell") : document.documentElement;
    const rect = shell.getBoundingClientRect();
    const width = fab.offsetWidth;
    const height = fab.offsetHeight;
    const minX = rect.left + 12;
    const maxX = rect.right - width - 12;
    const minY = rect.top + 72;
    const maxY = rect.bottom - height - 110;
    const nextX = Math.min(Math.max(x, minX), maxX);
    const nextY = Math.min(Math.max(y, minY), maxY);
    fab.style.setProperty("--fab-x", `${nextX}px`);
    fab.style.setProperty("--fab-y", `${nextY}px`);
  }

  toggle.addEventListener("pointerdown", (event) => {
    dragging = true;
    moved = false;
    startX = event.clientX;
    startY = event.clientY;
    const rect = fab.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
    toggle.setPointerCapture(event.pointerId);
  });

  toggle.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const distance = Math.hypot(event.clientX - startX, event.clientY - startY);
    if (distance > 4) moved = true;
    if (moved) setPosition(event.clientX - offsetX, event.clientY - offsetY);
  });

  toggle.addEventListener("pointerup", (event) => {
    dragging = false;
    toggle.releasePointerCapture(event.pointerId);
    if (!moved && document.body.dataset.view === "mobile") {
      const isOpen = fab.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        window.setTimeout(() => {
          document.addEventListener("click", closeCreateFabOnOutside, { once: true });
        }, 0);
      }
    }
  });

  toggle.addEventListener("click", (event) => {
    if (document.body.dataset.view !== "mobile") event.preventDefault();
  });

  app.querySelectorAll("[data-create-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (button.dataset.createAction === "Shoppable Video") {
        const [, page, id] = (window.location.hash || "").split("/");
        window.location.hash = `#/muse-brief/${page === "product" && id ? id : "fringe-dress"}/1`;
        return;
      }
      button.classList.add("is-selected");
      window.setTimeout(() => button.classList.remove("is-selected"), 700);
    });
  });
}

function openCreateFab() {
  const fab = app.querySelector("[data-create-fab]");
  const toggle = app.querySelector("[data-create-toggle]");
  if (fab && toggle) {
    fab.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    return;
  }

  if (!globalCreateMenu) return;
  globalCreateMenu.hidden = false;
  globalCreateTrigger?.classList.add("is-active");
  globalCreateTrigger?.setAttribute("aria-expanded", "true");
}

function closeCreateFabOnOutside(event) {
  const fab = app.querySelector("[data-create-fab]");
  if (!fab) return;
  if (!fab.contains(event.target)) {
    fab.classList.remove("is-open");
    app.querySelector("[data-create-toggle]")?.setAttribute("aria-expanded", "false");
  }
}

function bindGlobalCreateMenu() {
  if (!globalCreateTrigger || !globalCreateMenu) return;

  let lockedOpen = false;

  function openMenu(lock = false) {
    lockedOpen = lock || lockedOpen;
    globalCreateMenu.hidden = false;
    globalCreateTrigger.classList.add("is-active");
    globalCreateTrigger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    lockedOpen = false;
    globalCreateMenu.hidden = true;
    globalCreateTrigger.classList.remove("is-active");
    globalCreateTrigger.setAttribute("aria-expanded", "false");
  }

  globalCreateTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!globalCreateMenu.hidden && lockedOpen) {
      closeMenu();
      return;
    }
    openMenu(true);
  });

  globalCreateTrigger.addEventListener("mouseenter", () => {
    if (document.body.dataset.view === "web") openMenu(false);
  });

  globalCreateTrigger.addEventListener("mouseleave", () => {
    if (document.body.dataset.view !== "web" || lockedOpen) return;
    window.setTimeout(() => {
      if (!globalCreateMenu.matches(":hover") && !globalCreateTrigger.matches(":hover")) closeMenu();
    }, 120);
  });

  globalCreateMenu.addEventListener("mouseenter", () => {
    if (document.body.dataset.view === "web") openMenu(false);
  });

  globalCreateMenu.addEventListener("mouseleave", () => {
    if (document.body.dataset.view === "web" && !lockedOpen) closeMenu();
  });

  document.querySelector("[data-close-global-create]")?.addEventListener("click", closeMenu);

  document.addEventListener("click", (event) => {
    if (globalCreateMenu.hidden) return;
    if (globalCreateMenu.contains(event.target) || globalCreateTrigger.contains(event.target)) return;
    closeMenu();
  });

  document.querySelectorAll("[data-global-create-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (button.dataset.globalCreateAction === "Shoppable Video") {
        closeMenu();
        const [, page, id] = (window.location.hash || "").split("/");
        window.location.hash = `#/muse-brief/${page === "product" && id ? id : "fringe-dress"}/1`;
        return;
      }
      button.classList.add("is-selected");
      window.setTimeout(() => button.classList.remove("is-selected"), 700);
    });
  });
}

function renderMuseBrief(id, requestedStep = 1) {
  const product = products.find((item) => item.id === id) || products[0];
  const step = Math.min(Math.max(requestedStep, 1), 3);
  const selectedPieceIds = new Set(museBriefState.styledPieces);
  const selectedPieces = musePieces.filter((piece) => selectedPieceIds.has(piece.id));
  const photoCount = Object.keys(museBriefState.photos).length;
  const canContinue = step === 2 ? Boolean(museBriefState.concept) : true;
  const canSubmit = !museBriefState.photoEnabled || photoCount === musePhotoSlots.length;

  app.innerHTML = `
    <section class="muse-brief-page">
      <header class="workflow-header muse-brief-header">
        <button type="button" aria-label="Back" data-muse-back>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>
        </button>
        <div>
          <span>MUSE FOR ME</span>
          <h1>Brief Your Muse</h1>
          <p>Tell us the vision. We'll make the video for you.</p>
        </div>
      </header>

      <nav class="muse-brief-steps" aria-label="Brief progress">
        ${[
          ["1", "Product & Look"],
          ["2", "Video Direction"],
          ["3", "Your Photos"]
        ].map(([index, label]) => `
          <button type="button" class="${Number(index) === step ? "is-active" : Number(index) < step ? "is-done" : ""}" data-muse-step="${index}">
            <i>${index}</i>
            <span>${label}</span>
          </button>
        `).join("")}
      </nav>

      ${step === 1 ? renderMuseLookStep(product, selectedPieceIds, selectedPieces) : ""}
      ${step === 2 ? renderMuseDirectionStep(product, selectedPieces) : ""}
      ${step === 3 ? renderMusePhotoStep(product) : ""}

      <footer class="workflow-actions muse-brief-actions ${step === 1 ? "two-up" : ""}">
        ${step === 1 ? `<button class="secondary-filter" type="button" data-muse-save>Save Draft</button>` : ""}
        <button class="primary-filter" type="button" data-muse-next ${step === 2 && !canContinue ? "disabled" : ""} ${step === 3 && !canSubmit ? "disabled" : ""}>
          ${step < 3 ? "Next" : "Brief Your Muse"}
        </button>
      </footer>
    </section>
  `;

  bindMuseBriefInteractions(product.id, step);
}

function renderMuseLookStep(product, selectedPieceIds, selectedPieces) {
  return `
    <section class="setup-card muse-product-card">
      <div class="muse-section-head">
        <h2>Your Product</h2>
        <p>Style it into a look, or leave as-is.</p>
      </div>
      <div class="muse-selected-product">
        <img src="${product.image}" alt="${product.title}">
        <div>
          <strong>${product.title}</strong>
          <span>${product.price} · ${maxEarnLabel(product)}</span>
        </div>
      </div>
    </section>

    <section class="setup-card muse-look-builder">
      <div class="muse-section-head">
        <h2>Complete the Look</h2>
        <p>Optional pieces help the team create a stronger shoppable video.</p>
      </div>
      <div class="muse-look-slots">
        <article class="muse-look-slot is-featured">
          <img src="${product.image}" alt="">
          <span>Featured</span>
        </article>
        ${selectedPieces.map((piece) => `
          <button class="muse-look-slot is-filled" type="button" data-toggle-piece="${piece.id}">
            <img src="${piece.image}" alt="">
            <span>${piece.category}</span>
          </button>
        `).join("")}
        ${selectedPieces.length < 3 ? `<button class="muse-look-slot" type="button" data-open-pieces><b>+</b><span>Add Piece</span></button>` : ""}
      </div>
      <div class="muse-piece-grid" ${selectedPieces.length ? "hidden" : ""}>
        ${musePieces.map((piece) => `
          <button class="${selectedPieceIds.has(piece.id) ? "is-selected" : ""}" type="button" data-toggle-piece="${piece.id}">
            <img src="${piece.image}" alt="">
            <span>${piece.category}</span>
            <strong>${piece.title}</strong>
            <small>${piece.price}</small>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMuseDirectionStep(product, selectedPieces) {
  return `
    <section class="setup-card muse-look-summary">
      <h2>Your Look</h2>
      <div class="muse-summary-track">
        <article>
          <img src="${product.image}" alt="">
          <span>Featured</span>
        </article>
        ${selectedPieces.map((piece) => `
          <article>
            <img src="${piece.image}" alt="">
            <span>${piece.category}</span>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="setup-card muse-direction-card">
      <div class="muse-section-head">
        <h2>Video Direction</h2>
        <p>Choose the style the content team should follow.</p>
      </div>
      <div class="muse-concept-grid">
        ${museConcepts.map((concept) => `
          <button class="${museBriefState.concept === concept.title ? "is-active" : ""}" type="button" data-muse-concept="${concept.title}">
            <img src="${concept.image}" alt="">
            <strong>${concept.title}</strong>
            <span>${concept.note}</span>
          </button>
        `).join("")}
      </div>
      <label class="muse-text-field">
        <span>Notes for the team</span>
        <textarea data-muse-notes rows="4" placeholder="e.g. 2 looks, summer resort vibe, upbeat music, hook in first 2s">${museBriefState.notes}</textarea>
      </label>
      <label class="muse-text-field">
        <span>Reference video link</span>
        <input data-muse-reference value="${museBriefState.reference}" placeholder="Paste TikTok / Instagram / YouTube link">
      </label>
    </section>
  `;
}

function renderMusePhotoStep() {
  return `
    <section class="setup-card muse-photo-card">
      <div class="muse-section-head">
        <div>
          <h2>Your Body & Face</h2>
          <p>Upload three private references for a more accurate result.</p>
        </div>
        <button type="button" class="muse-photo-toggle ${museBriefState.photoEnabled ? "is-on" : ""}" data-toggle-photos aria-pressed="${museBriefState.photoEnabled}">
          <span></span>
        </button>
      </div>
      ${museBriefState.photoEnabled ? `
      <div class="muse-photo-list">
        ${musePhotoSlots.map((slot, index) => {
          const photo = museBriefState.photos[slot.id];
          return `
            <article class="${photo ? "is-uploaded" : ""}">
              <div>
                <strong>${slot.title}</strong>
                <span>${slot.note}</span>
              </div>
              ${photo ? `
                <img src="${photo}" alt="">
                <button type="button" data-upload-photo="${slot.id}">Replace</button>
              ` : `
                <button class="muse-upload-tile" type="button" data-upload-photo="${slot.id}">
                  <b>+</b>
                  <span>Upload</span>
                </button>
              `}
            </article>
          `;
        }).join("")}
      </div>
      ` : ""}
    </section>

    ${museBriefState.photoEnabled ? `
    <section class="setup-card muse-example-card">
      <h2>Examples</h2>
      <div class="muse-example-track">
        ${musePhotoSlots.map((slot, index) => `
          <article>
            <img src="${products[index + 1]?.image || products[0].image}" alt="">
            <span>${slot.title}</span>
          </article>
        `).join("")}
      </div>
    </section>
    ` : ""}
  `;
}

function bindMuseBriefInteractions(productId, step) {
  app.querySelector("[data-muse-back]")?.addEventListener("click", () => {
    if (step > 1) {
      window.location.hash = `#/muse-brief/${productId}/${step - 1}`;
      return;
    }
    window.location.hash = `#/product/${productId}`;
  });

  app.querySelectorAll("[data-muse-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetStep = Number(button.dataset.museStep);
      if (targetStep > step + 1) return;
      window.location.hash = `#/muse-brief/${productId}/${targetStep}`;
    });
  });

  app.querySelector("[data-open-pieces]")?.addEventListener("click", () => {
    app.querySelector(".muse-piece-grid")?.removeAttribute("hidden");
  });

  app.querySelectorAll("[data-toggle-piece]").forEach((button) => {
    button.addEventListener("click", () => {
      const pieceId = button.dataset.togglePiece;
      const exists = museBriefState.styledPieces.includes(pieceId);
      museBriefState.styledPieces = exists
        ? museBriefState.styledPieces.filter((item) => item !== pieceId)
        : [...museBriefState.styledPieces, pieceId].slice(0, 3);
      renderMuseBrief(productId, step);
    });
  });

  app.querySelectorAll("[data-muse-concept]").forEach((button) => {
    button.addEventListener("click", () => {
      museBriefState.concept = button.dataset.museConcept;
      renderMuseBrief(productId, step);
    });
  });

  app.querySelector("[data-muse-notes]")?.addEventListener("input", (event) => {
    museBriefState.notes = event.target.value;
  });

  app.querySelector("[data-muse-reference]")?.addEventListener("input", (event) => {
    museBriefState.reference = event.target.value;
  });

  app.querySelectorAll("[data-upload-photo]").forEach((button, index) => {
    button.addEventListener("click", () => {
      const slotId = button.dataset.uploadPhoto;
      museBriefState.photos[slotId] = products[(index + 1) % products.length].image;
      renderMuseBrief(productId, step);
    });
  });

  app.querySelector("[data-toggle-photos]")?.addEventListener("click", () => {
    museBriefState.photoEnabled = !museBriefState.photoEnabled;
    renderMuseBrief(productId, step);
  });

  app.querySelector("[data-muse-save]")?.addEventListener("click", (event) => {
    event.currentTarget.textContent = "Draft Saved";
  });

  app.querySelector("[data-muse-next]")?.addEventListener("click", () => {
    if (step === 2 && !museBriefState.concept) return;
    if (step === 3 && museBriefState.photoEnabled && Object.keys(museBriefState.photos).length < musePhotoSlots.length) return;
    if (step < 3) {
      window.location.hash = `#/muse-brief/${productId}/${step + 1}`;
      return;
    }
    upsertMuseRequest(productId);
    window.location.hash = `#/muse-next/${productId}`;
  });
}

function upsertMuseRequest(productId) {
  const product = products.find((item) => item.id === productId) || products[0];
  const request = {
    id: `muse-${product.id}`,
    status: "in_production",
    updatedAt: Date.now(),
    productImage: product.image,
    productTitle: product.title,
    price: product.price,
    concept: museBriefState.concept || "Outfit Showcase",
    notes: museBriefState.notes,
    previewImage: Object.values(museBriefState.photos)[0] || product.image
  };
  museRequests = [request, ...museRequests.filter((item) => item.id !== request.id)];
  return request;
}

function renderMuseNext(id) {
  const product = products.find((item) => item.id === id) || products[0];
  const selectedPieces = musePieces.filter((piece) => museBriefState.styledPieces.includes(piece.id));

  app.innerHTML = `
    <section class="workflow-page muse-next-page">
      <header class="workflow-header">
        <button type="button" aria-label="Back" data-back-brief>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>
        </button>
        <div>
          <span>Submitted</span>
          <h1>Your Muse brief is queued</h1>
        </div>
      </header>

      <section class="setup-card muse-next-summary">
        <img src="${product.image}" alt="${product.title}">
        <div>
          <strong>${product.title}</strong>
          <span>${museBriefState.concept || "Video direction"} · ${selectedPieces.length + 1} item look</span>
          <p>The content team has enough context to create a shoppable video draft.</p>
        </div>
      </section>

      <section class="setup-card muse-next-status">
        <h2>Next</h2>
        <article><b>1</b><span>Brief review</span><small>Queued now</small></article>
        <article><b>2</b><span>Video production</span><small>Team prepares the draft</small></article>
        <article><b>3</b><span>Ready to post</span><small>Find it in Mine</small></article>
      </section>

      <div class="workflow-actions two-up">
        <button class="secondary-filter" type="button" data-new-brief>New Brief</button>
        <button class="primary-filter" type="button" data-go-mine>View in Mine</button>
      </div>
    </section>
  `;

  app.querySelector("[data-back-brief]")?.addEventListener("click", () => {
    window.location.hash = `#/muse-brief/${product.id}/3`;
  });
  app.querySelector("[data-new-brief]")?.addEventListener("click", () => {
    museBriefState = { styledPieces: [], concept: "", notes: "", reference: "", photos: {}, photoEnabled: false };
    window.location.hash = `#/muse-brief/${product.id}/1`;
  });
  app.querySelector("[data-go-mine]")?.addEventListener("click", () => {
    window.location.hash = "#/my-content/Requests";
  });
}

function renderCreatorBreakdown(id) {
  const example = creatorExamples.find((item) => item.id === id) || creatorExamples[0];
  const product = products[0];

  app.innerHTML = `
    <section class="workflow-page">
      <header class="workflow-header">
        <button type="button" aria-label="Back" data-back-product>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>
        </button>
        <div>
          <span>Creator Video</span>
          <h1>Breakdown</h1>
        </div>
      </header>

      <article class="video-proof-large">
        <div class="breakdown-video-frame">
          <img src="${example.image}" alt="">
          <span>▶</span>
        </div>
        <div>
          <strong>${example.creator}</strong>
          <span>${example.platform} · ${example.angle}</span>
          <dl>
            <div><dt>Views</dt><dd>${example.views}</dd></div>
            <div><dt>CTR</dt><dd>${example.ctr}</dd></div>
            <div><dt>Orders</dt><dd>${example.orders}</dd></div>
            <div><dt>GMV</dt><dd>${example.gmv}</dd></div>
          </dl>
        </div>
      </article>

      <section class="breakdown-product-card">
        <img src="${product.image}" alt="${product.title}">
        <div>
          <strong>${product.title}</strong>
          <span>${product.price} · ${maxEarnLabel(product)}</span>
        </div>
        <button type="button" aria-label="Pick product" data-pick-product>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15.8 11.7C17.1 10.5 18.3 9 18.3 7.1A4.6 4.6 0 0 0 13.8 2.5C12.3 2.5 11.3 2.9 10 4.2C8.8 2.9 7.7 2.5 6.3 2.5A4.6 4.6 0 0 0 1.7 7.1C1.7 9 2.9 10.5 4.2 11.7L10 17.5L15.8 11.7Z"/></svg>
        </button>
      </section>

      <section class="breakdown-list">
        <h2>Video structure</h2>
        ${example.breakdown.map(([title, body], index) => `
          <article>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <div><strong>${title}</strong><p>${body}</p></div>
          </article>
        `).join("")}
      </section>

      <div class="workflow-actions">
        <button class="primary-filter" type="button" data-use-structure="${example.id}">Use Structure</button>
      </div>
    </section>
  `;

  app.querySelector("[data-back-product]")?.addEventListener("click", () => {
    window.location.hash = "#/product/fringe-dress";
  });

  app.querySelector("[data-use-structure]")?.addEventListener("click", (event) => {
    window.location.hash = `#/structure-setup/${event.currentTarget.dataset.useStructure}`;
  });

  app.querySelector("[data-pick-product]")?.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("is-picked");
  });
}

function renderStructureSetup(id) {
  const example = creatorExamples.find((item) => item.id === id) || creatorExamples[0];
  contentSettings = { ...defaultSettings };

  app.innerHTML = `
    <section class="workflow-page">
      <header class="workflow-header">
        <button type="button" aria-label="Back" data-back-breakdown>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>
        </button>
        <div>
          <span>Use Structure</span>
          <h1>Customize</h1>
        </div>
      </header>

      <section class="setup-card">
        <h2>Creator tone</h2>
        <div class="setup-options" data-setting="tone">
          ${["Friendly", "Expert", "Luxury", "Playful", "Direct"].map((item, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button">${item}</button>`).join("")}
        </div>
      </section>

      <section class="setup-card">
        <h2>Content settings</h2>
        <label>Platform<select data-setting-select="platform"><option>TikTok</option><option>IG Reels</option><option>YouTube Shorts</option></select></label>
        <label>Video length<select data-setting-select="length"><option>30s</option><option>15s</option><option>45s</option></select></label>
        <label>Content format<select data-setting-select="format"><option>Try-on</option><option>Styling tips</option><option>Haul</option><option>GRWM</option></select></label>
        <label>CTA strength<select data-setting-select="cta"><option>Medium</option><option>Soft</option><option>Strong</option></select></label>
      </section>

      <section class="setup-card">
        <h2>On-camera</h2>
        <div class="setup-options" data-setting="onCamera">
          <button class="is-active" type="button">No</button>
          <button type="button">Yes</button>
        </div>
        <div class="avatar-panel" hidden>
          <button type="button" data-avatar-choice="Uploaded creator image">Upload image</button>
          <button type="button" data-avatar-choice="Saved avatar">Choose saved avatar</button>
          <p data-avatar-status>No avatar selected</p>
        </div>
      </section>

      <div class="workflow-actions">
        <button class="primary-filter" type="button" data-generate-kit="${example.id}">Generate</button>
      </div>
    </section>
  `;

  bindSetupInteractions(example.id);
}

function bindSetupInteractions(id) {
  app.querySelector("[data-back-breakdown]")?.addEventListener("click", () => {
    window.location.hash = `#/creator-breakdown/${id}`;
  });

  app.querySelectorAll("[data-setting] button").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.parentElement;
      group.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === button));
      contentSettings[group.dataset.setting] = button.textContent;
      if (group.dataset.setting === "onCamera") {
        app.querySelector(".avatar-panel").hidden = button.textContent !== "Yes";
      }
    });
  });

  app.querySelectorAll("[data-setting-select]").forEach((select) => {
    select.addEventListener("change", () => {
      contentSettings[select.dataset.settingSelect] = select.value;
    });
  });

  app.querySelectorAll("[data-avatar-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      contentSettings.avatar = button.dataset.avatarChoice;
      app.querySelector("[data-avatar-status]").textContent = button.dataset.avatarChoice;
    });
  });

  app.querySelector("[data-generate-kit]")?.addEventListener("click", () => {
    window.location.hash = "#/content-kit/fringe-dress";
  });
}

function renderContentKit(id) {
  const product = products.find((item) => item.id === id) || products[0];
  const kitText = [
    "Content Kit",
    `Hook: Need one ${product.title.toLowerCase()} that works for vacation dinner and weekend plans?`,
    `Caption: This piece gives movement on camera, a clean neckline, and an easy styled look without overthinking it.`,
    `Talking points: fringe movement, halter shape, lightweight feel, easy accessories, ${maxEarnLabel(product).toLowerCase()}.`,
    `CTA: Tap the product tag and save this outfit idea for your next trip.`,
    "",
    "Shot List",
    "1. Full-body mirror shot",
    "2. Close-up of fringe movement",
    "3. Side profile fit check",
    "4. Styling detail with accessories",
    "5. Product tag CTA"
  ].join("\n");

  app.innerHTML = `
    <section class="workflow-page content-kit-page">
      <header class="workflow-header">
        <button type="button" aria-label="Back" data-back-setup>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>
        </button>
        <div>
          <span>Generated</span>
          <h1>Content Kit</h1>
        </div>
      </header>

      <section class="kit-context">
        <img src="${product.image}" alt="">
        <div>
          <strong>${product.title}</strong>
          <span>${product.price} · ${maxEarnLabel(product)}</span>
          <p>${contentSettings.platform} · ${contentSettings.length} · ${contentSettings.format} · ${contentSettings.cta} CTA</p>
          <p>Creator image: ${contentSettings.onCamera === "Yes" ? contentSettings.avatar : "No on-camera avatar"}</p>
        </div>
      </section>

      <section class="typing-card">
        <div class="typing-card-head">
          <h2>Generated Script</h2>
          <button type="button" data-copy-kit>COPY</button>
        </div>
        <pre data-typewriter></pre>
      </section>

      <div class="workflow-actions two-up">
        <button class="primary-filter" type="button" data-generate-video>Generate shoppable video</button>
        <button class="secondary-filter" type="button" data-save-kit>Save Content Kit</button>
      </div>
    </section>
  `;

  typeContentKit(kitText);

  app.querySelector("[data-back-setup]")?.addEventListener("click", () => {
    window.location.hash = "#/structure-setup/mia";
  });

  app.querySelector("[data-copy-kit]")?.addEventListener("click", async (event) => {
    if (navigator.clipboard) await navigator.clipboard.writeText(kitText);
    event.currentTarget.textContent = "Copied";
  });

  app.querySelector("[data-generate-video]")?.addEventListener("click", (event) => {
    event.currentTarget.textContent = "Generating...";
    window.setTimeout(() => {
      event.currentTarget.textContent = "Video queued";
    }, 900);
  });

  app.querySelector("[data-save-kit]")?.addEventListener("click", (event) => {
    event.currentTarget.textContent = "Saved";
  });
}

function typeContentKit(text) {
  const target = app.querySelector("[data-typewriter]");
  let index = 0;
  const timer = window.setInterval(() => {
    target.textContent = text.slice(0, index);
    index += 3;
    if (index > text.length) {
      target.textContent = text;
      window.clearInterval(timer);
    }
  }, 18);
}

function renderMine() {
  app.innerHTML = `
    <section class="mine-page" aria-label="Mine">
      <header class="mine-header">
        <div class="creator-profile">
          <img src="./assets/default-avatar.svg" alt="">
          <div>
            <h1>Mia Creator</h1>
            <p>mia.creator@email.com</p>
            <span>Muse Creator</span>
          </div>
        </div>
      </header>

      <div class="mine-body">
        <section class="commission-overview">
          <h2>Commission Overview</h2>
          <div class="commission-stats">
            <article><span>Est. Earning</span><strong>$1,284.50</strong></article>
            <article><span>Total Orders</span><strong>326</strong></article>
            <article><span>Settled</span><strong>$864.20</strong></article>
            <article><span>Pending</span><strong>$420.30</strong></article>
          </div>
        </section>

        <section class="mine-menu-group">
          <h2>Promote</h2>
          <button type="button">My Picks <span>82</span></button>
          <button type="button" data-open-my-content>My Content <span>${15 + museRequests.length}</span></button>
        </section>

        <section class="mine-menu-group">
          <h2>Museland</h2>
          <button type="button">My Product</button>
          <button type="button">My Design</button>
        </section>

        <section class="mine-menu-group">
          <h2>Setting</h2>
          <button type="button">Setting</button>
        </section>
      </div>
    </section>
  `;

  app.querySelector("[data-open-my-content]")?.addEventListener("click", () => {
    window.location.hash = "#/my-content/All";
  });
}

function normalizeContentTab(tab) {
  const match = contentTabs.find((item) => item.toLowerCase() === String(tab || "").toLowerCase());
  return match || "All";
}

function renderMyContent(tabName = "All") {
  const activeTab = normalizeContentTab(tabName);
  const postsToShow = activeTab === "All" || activeTab === "Posts" ? postBatches : [];
  const videosToShow = activeTab === "All" || activeTab === "Videos" ? videoBatches : [];
  const requestsToShow = activeTab === "All" || activeTab === "Requests" ? museRequests : [];
  const hasContent = postsToShow.length || videosToShow.length || requestsToShow.length;

  app.innerHTML = `
    <section class="my-content-page" aria-label="My Content">
      <header class="my-content-header">
        <button type="button" aria-label="Back to Mine" data-back-mine>
          <span aria-hidden="true">‹</span>
          <b>Back to Mine</b>
        </button>
        <div>
          <h1>My Content</h1>
          <p>All your shoppable content in one place.</p>
        </div>
      </header>

      <nav class="my-content-tabs" aria-label="Content type">
        ${contentTabs.map((tab) => `
          <button class="${tab === activeTab ? "is-active" : ""}" type="button" data-content-tab="${tab}">${tab}</button>
        `).join("")}
      </nav>

      <section class="my-content-list" aria-label="Content list">
        ${postsToShow.map(renderPostBatch).join("")}
        ${videosToShow.map(renderVideoBatch).join("")}
        ${requestsToShow.map(renderRequestBatch).join("")}
        ${activeTab === "Requests" ? renderNewRequestCard() : ""}
        ${!hasContent && activeTab !== "Requests" ? `<p class="my-content-empty">No content yet.</p>` : ""}
      </section>
    </section>
  `;

  app.querySelector("[data-back-mine]")?.addEventListener("click", () => {
    window.location.hash = "#/mine";
  });

  app.querySelectorAll("[data-content-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.hash = `#/my-content/${button.dataset.contentTab}`;
    });
  });

  app.querySelectorAll("[data-publish-content]").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Published";
      button.classList.add("is-done");
    });
  });

  app.querySelector("[data-new-muse-request]")?.addEventListener("click", () => {
    window.location.hash = "#/muse-brief/fringe-dress/1";
  });

  app.querySelectorAll("[data-open-request]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.hash = "#/muse-next/fringe-dress";
    });
  });
}

function renderPostBatch(batch) {
  return `
    <section class="my-content-batch">
      <div class="my-content-labels">
        <h2>Promote Product(s)</h2>
        <h2>Posts <span>${batch.date}</span></h2>
      </div>
      <div class="my-content-row">
        ${renderContentProduct(batch)}
        <div class="my-content-gallery">
          ${batch.previews.map((image) => `<img src="${image}" alt="">`).join("")}
        </div>
        ${renderPublishButton()}
      </div>
    </section>
  `;
}

function renderVideoBatch(batch) {
  return `
    <section class="my-content-batch">
      <div class="my-content-labels">
        <h2>Promote Product(s)</h2>
        <h2>Videos <span>${batch.date}</span></h2>
      </div>
      <div class="my-content-row">
        ${renderContentProduct(batch)}
        <div class="my-content-gallery">
          ${batch.previews.map((image) => `
            <div class="my-content-video-thumb">
              <img src="${image}" alt="">
              <span aria-hidden="true">▶</span>
            </div>
          `).join("")}
        </div>
        ${renderPublishButton()}
      </div>
    </section>
  `;
}

function renderRequestBatch(request) {
  return `
    <section class="my-content-batch my-content-request-batch">
      <div class="my-content-labels">
        <h2>Promote Product(s)</h2>
        <h2>Requests <span>${formatContentDate(request.updatedAt)}</span></h2>
      </div>
      <div class="my-content-row">
        ${renderContentProduct({
          productImage: request.productImage,
          productTitle: request.productTitle,
          price: request.price
        })}
        <div class="my-content-gallery my-content-request-gallery">
          <div class="my-content-loading-preview">
            <span>In Production</span>
            <i aria-hidden="true"></i>
            <strong>Generating</strong>
            <p>We are assigning a specialist to produce your request. This usually takes 1-3 business days.</p>
          </div>
        </div>
        <div class="my-content-request-action">
          <span>In Production</span>
          <button type="button" data-open-request="${request.id}">View Brief</button>
        </div>
      </div>
    </section>
  `;
}

function renderNewRequestCard() {
  return `
    <button type="button" class="my-content-new-request" data-new-muse-request>
      <span aria-hidden="true">+</span>
      <strong>New Muse for Me</strong>
      <p>Submit another custom content request.</p>
    </button>
  `;
}

function renderContentProduct(batch) {
  return `
    <article class="my-content-product">
      ${batch.productImage ? `<img src="${batch.productImage}" alt="">` : `<div class="my-content-product-placeholder"></div>`}
      ${batch.productTitle ? `
        <div>
          <strong>${batch.productTitle}</strong>
          <span>${batch.price}</span>
        </div>
      ` : ""}
    </article>
  `;
}

function renderPublishButton() {
  return `
    <div class="my-content-publish">
      <span>Extra 5% with AI Look</span>
      <button type="button" data-publish-content>Publish</button>
    </div>
  `;
}

function formatContentDate(value) {
  const date = value ? new Date(value) : new Date();
  const pad = (num) => String(num).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function renderPlaceholder(page) {
  app.innerHTML = `
    <section class="placeholder-page">
      <span>${page}</span>
      <h1>${page[0].toUpperCase() + page.slice(1)}</h1>
      <p>This menu is reserved and disabled in this demo.</p>
    </section>
  `;
}

window.addEventListener("hashchange", route);
route();
