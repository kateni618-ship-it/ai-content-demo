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
  return `Earn ${product.commission.split("-").pop()}`;
}

function earnPerOrderLabel(product) {
  return `Earn ${product.earn} per order`;
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

const contentStatusTabs = [
  { id: "all", label: "All" },
  { id: "ready", label: "Ready to Post" },
  { id: "making", label: "Making" },
  { id: "posted", label: "Posted" },
  { id: "failed", label: "Failed" },
  { id: "discarded", label: "Discarded" }
];

const contentTypeTabs = [
  { id: "image", label: "Image Post" },
  { id: "video", label: "Video" }
];

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

let myContentItems = [
  {
    id: "content-1",
    title: "Fringe dress summer launch carousel",
    status: "ready",
    type: "image",
    contentTypeLabel: "Image Post",
    createdAt: "2026-07-03",
    media: ["./assets/product-2.jpg", "./assets/product-3.jpeg", "./assets/product-4.jpg", "./assets/product-2.jpg"],
    products: [
      { title: "Fringe Detail Halter Maxi Dress", image: "./assets/product-1.jpg" },
      { title: "Summer Strap Sandals", image: "./assets/product-6.jpg" }
    ],
    postedLinks: {}
  },
  {
    id: "content-2",
    title: "Strapless sculpt mini dress story set",
    status: "ready",
    type: "image",
    contentTypeLabel: "Image Post",
    createdAt: "2026-06-30",
    media: ["./assets/product-5.jpg", "./assets/product-6.jpg", "./assets/product-5.jpg"],
    products: [{ title: "Strapless Sculpt Mini Dress", image: "./assets/product-5.jpg" }],
    postedLinks: {}
  },
  {
    id: "content-3",
    title: "Fringe dress shoppable short video",
    status: "ready",
    type: "video",
    contentTypeLabel: "Video",
    videoType: "Shoppable Video",
    createdAt: "2026-07-01",
    media: ["./assets/product-4.jpg"],
    products: [{ title: "Fringe Detail Halter Maxi Dress", image: "./assets/product-2.jpg" }],
    postedLinks: {}
  },
  {
    id: "content-4",
    title: "Soft summer styling image post",
    status: "making",
    type: "image",
    contentTypeLabel: "Image Post",
    createdAt: "2026-07-05",
    media: [],
    products: [{ title: "Soft Summer Styling Set", image: "./assets/product-3.jpeg" }],
    postedLinks: {}
  },
  {
    id: "content-5",
    title: "Vacation picks Pinterest post",
    status: "making",
    type: "image",
    contentTypeLabel: "Image Post",
    createdAt: "2026-07-04",
    media: [],
    products: [{ title: "Low Rise Resort Maxi Skirt", image: "./assets/product-8.jpg" }],
    postedLinks: {}
  },
  {
    id: "content-6",
    title: "Ivory resort outfit posted set",
    status: "posted",
    type: "image",
    contentTypeLabel: "Image Post",
    createdAt: "2026-06-23",
    media: ["./assets/product-3.jpeg", "./assets/product-4.jpg"],
    products: [{ title: "Fringe Detail Halter Maxi Dress", image: "./assets/product-1.jpg" }],
    postedLinks: { instagram: "https://instagram.com/p/demo" }
  },
  {
    id: "content-7",
    title: "Weekend edit image post",
    status: "failed",
    type: "image",
    contentTypeLabel: "Image Post",
    createdAt: "2026-06-22",
    media: ["./assets/product-6.jpg"],
    products: [{ title: "Minimal Leather Loafers", image: "./assets/product-7.jpg" }],
    postedLinks: {}
  }
];

let addedProductAssetIds = new Set();
let myContentProductQuery = "";
let myContentSelectedProductTitles = [];
let myContentAppliedProductTitles = [];
let myContentFocusedId = "";

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
let productAssetFilter = "video";
let productAssetPanelOpen = false;
let productAssetExpandedInput = "";
let productAssetSelectedTemplate = "tryon-clip";
let productAssetSelectedAvatar = "mine";
let productAssetSelectedProductImage = "";
let productAssetPreview = null;
let productAssetPreviewPhotoIndex = 0;
let contentDownloadPlatforms = [];
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
    { id: "generated-2", title: "Studio product stills", kind: "Image", source: "Generated", duration: "", image: "./assets/product-7.jpg", photos: ["./assets/product-7.jpg", "./assets/product-1.jpg", "./assets/product-4.jpg"], createdAt: 650 },
    { id: "filmed-1", title: "Full body try-on set", kind: "Image", source: "Filmed", duration: "", image: "./assets/product-2.jpg", photos: ["./assets/product-2.jpg", "./assets/product-1.jpg", "./assets/product-3.jpeg"], createdAt: 500 },
    { id: "filmed-2", title: "Fringe movement", kind: "Video", source: "Filmed", duration: "06s", image: "./assets/product-3.jpeg", createdAt: 400 },
    { id: "filmed-3", title: "Texture detail pack", kind: "Image", source: "Filmed", duration: "", image: "./assets/product-4.jpg", photos: ["./assets/product-4.jpg", "./assets/product-3.jpeg", "./assets/product-2.jpg"], createdAt: 250 }
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
  } else if (page === "content-download") {
    document.body.dataset.page = "content-download";
    renderContentDownloadPage(id, step);
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
    renderMyContent(id || "all", step || "all");
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
  const tab = ["product", "content-download", "creator-breakdown", "structure-setup", "content-kit", "muse-brief", "muse-next", "my-content", "create"].includes(page) ? "select" : page;
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
          <span>${earnPerOrderLabel(product)}</span>
        </div>

        <section class="commission-card" aria-label="Commission options">
          <div class="commission-card-header">
            <span>Commission</span>
          </div>
          <div class="commission-options">
            <article class="commission-option is-direct" role="button" tabindex="0">
              <span class="commission-name">Direct Promote</span>
              <strong>${product.commission.split("-")[0]}</strong>
              <span class="commission-note">Earn $6.59 commission</span>
            </article>
            <span class="commission-vs" aria-hidden="true">VS</span>
            <article class="commission-option is-create is-active" role="button" tabindex="0">
              <span class="recommend-tag">Recommended</span>
              <span class="commission-name">Make Content For Me</span>
              <span class="commission-rate">
                <strong>${product.commission.split("-").pop()}</strong>
                <button class="extra-bonus" type="button" data-extra-create-toggle aria-label="Create content for me">Create →</button>
              </span>
              <span class="commission-note">${earnPerOrderLabel(product)}</span>
              <span class="commission-extra-note">+5% with ready-to-post content</span>
            </article>
          </div>
        </section>

        <section class="option-block variant-options" aria-label="Product variants">
          <div class="option-row">
            <div class="option-title">Color</div>
            <div class="swatches">
              <button class="swatch is-active" type="button" aria-label="Ivory"></button>
              <button class="swatch dark" type="button" aria-label="Black"></button>
              <button class="swatch warm" type="button" aria-label="Taupe"></button>
            </div>
          </div>
          <div class="option-row">
            <div class="option-title">Size</div>
            <div class="sizes">
              <button type="button">XS</button>
              <button class="is-active" type="button">S</button>
              <button type="button">M</button>
              <button type="button">L</button>
              <button type="button">XL</button>
            </div>
          </div>
          <div class="option-row">
            <div class="option-title">Brand</div>
            <p>${product.brand || "MuseSelect"}</p>
          </div>
          <div class="option-row">
            <div class="option-title">Material</div>
            <p>${product.material || "Lightweight woven blend"}</p>
          </div>
          <div class="option-row shipping-row">
            <div class="option-title">Shipping</div>
            <p>Local ship eligible</p>
          </div>
        </section>

        ${renderProductAssets(product)}

        <section class="accordion">
          <details open>
            <summary>Product Details</summary>
            <p>Halter neckline, fringe trim, maxi length, lightweight woven feel, and event-ready styling.</p>
          </details>
          <details>
            <summary>Size Guide</summary>
            <p>Available sizes: XS, S, M, L, XL. Choose your regular size for a close fit.</p>
          </details>
        </section>
      </section>
    </section>

    <div class="sticky-actions" aria-label="Product actions">
      <button class="secondary" type="button">Pick</button>
      <button class="primary" type="button" data-promote-open>Promote</button>
    </div>

  `;

  bindProductInteractions();
}

function getProductAssets(product) {
  const existing = productAssetsByProduct[product.id];
  if (existing) return existing;
  return [
    { id: `${product.id}-generated-1`, title: "Generated try-on", kind: "Video", source: "Generated", duration: "05s", image: product.images[1] || product.image, createdAt: 700 },
    { id: `${product.id}-filmed-1`, title: "Product detail pack", kind: "Image", source: "Filmed", duration: "", image: product.images[0], photos: product.images.slice(0, 3), createdAt: 520 },
    { id: `${product.id}-filmed-2`, title: "Fit check", kind: "Video", source: "Filmed", duration: "06s", image: product.images[2] || product.image, createdAt: 380 }
  ];
}

function renderProductAssets(product) {
  const assets = getProductAssets(product)
    .filter((asset) => !productAssetFilter || asset.kind.toLowerCase() === productAssetFilter)
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  return `
    <section class="creator-insight product-assets" aria-label="Content ready to post">
      <div class="product-assets-head">
        <div>
          <h2>Content ready to post</h2>
          <p>Post & Earn +5% Commission per Order</p>
          <div class="asset-type-tabs" aria-label="Asset filters">
            <button type="button" data-asset-filter="video" aria-pressed="${productAssetFilter === "video"}">Video</button>
            <button type="button" data-asset-filter="image" aria-pressed="${productAssetFilter === "image"}">Image</button>
          </div>
        </div>
      </div>
      <div class="asset-scroll product-asset-row">
        ${assets.map(renderProductAssetCard).join("")}
        ${renderAiGenerateCard(productAssetFilter || "video")}
      </div>
      ${productAssetPanelOpen ? renderProductAssetPanel(product) : ""}
    </section>
  `;
}

function renderProductAssetCard(asset) {
  const isLoading = asset.status === "loading";
  const isFailed = asset.status === "failed";
  const product = currentProductFromRoute();
  const photos = getAssetPhotos(asset, product);
  const infoLabel = asset.kind === "Video" ? formatAssetDuration(asset.duration) : `${photos.length} photos`;
  return `
    <article class="product-asset-card ${isLoading ? "is-loading" : ""}" ${!isLoading && !isFailed ? `role="button" tabindex="0" data-open-product-asset="${product.id}:${asset.id}"` : ""}>
      <div class="product-asset-thumb">
        ${isLoading ? `<span class="asset-spinner"></span>` : asset.kind === "Image" ? renderAssetPhotoStack(asset, photos) : `<img src="${asset.image}" alt="">`}
        ${asset.kind === "Video" && !isLoading ? `<span class="asset-play">▶</span>` : ""}
        ${!isLoading && !isFailed && asset.kind !== "Image" ? `<span class="asset-info">${infoLabel}</span>` : ""}
      </div>
      <div class="product-asset-meta">
        <strong>${asset.title}</strong>
        ${isLoading || isFailed ? `<div>${renderProductAssetAction(asset, product, false)}</div>` : ""}
      </div>
    </article>
  `;
}

function renderAssetPhotoStack(asset, photos) {
  return `
    <div class="asset-photo-stack" aria-label="${asset.title} image pack">
      ${photos.slice(0, 3).map((photo, index) => `
        <img class="asset-photo-layer-${index}" src="${photo}" alt="${index === 0 ? asset.title : ""}">
      `).join("")}
      <span>${photos.length} photos</span>
    </div>
  `;
}

function formatAssetDuration(duration) {
  return String(duration || "6s").replace(/^0/, "");
}

function getAssetPhotos(asset, product) {
  if (asset.photos?.length) return asset.photos;
  return asset.kind === "Image" ? [asset.image, ...product.images.filter((image) => image !== asset.image)].slice(0, 3) : [asset.image];
}

function getProductAssetById(productId, assetId) {
  const product = products.find((item) => item.id === productId) || currentProductFromRoute();
  const asset = getProductAssets(product).find((item) => item.id === assetId);
  return { product, asset };
}

function renderProductAssetAction(asset, product, isAdded) {
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
  return "";
}

function renderAiGenerateCard(kind = "video") {
  const isImage = kind === "image";
  return `
    <article class="product-asset-card ai-generate-card ${isImage ? "is-image" : "is-video"}" role="button" tabindex="0" data-open-asset-generator>
      <div class="ai-generate-inner">
        <div class="ai-generate-preview">
          <i></i>
          <b>+</b>
        </div>
        <strong>${isImage ? "Make ready-to-post images for me" : "Make ready-to-post video for me"}</strong>
        <p>Tell us what content you want. Muse can create it for this product.</p>
        <em>${isImage ? "Custom images" : "Custom video"}</em>
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

  app.querySelector("[data-promote-open]")?.addEventListener("click", () => {
    openPromoteSheet(currentProductFromRoute());
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
        openCreateContentSheet(currentProductFromRoute());
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
    openCreateContentSheet(currentProductFromRoute());
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

  app.querySelectorAll("[data-asset-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      productAssetFilter = button.dataset.assetFilter;
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
      photos: template.output.startsWith("Video") ? undefined : [template.image, product.images[0], product.images[1] || product.image],
      status: "loading",
      templateId: template.id,
      createdAt: Date.now()
    });
    productAssetPanelOpen = false;
    productAssetFilter = template.output.startsWith("Video") ? "video" : "image";
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

  app.querySelectorAll("[data-open-product-asset]").forEach((card) => {
    const open = () => {
      const [productId, assetId] = card.dataset.openProductAsset.split(":");
      openProductAssetPreview(productId, assetId);
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      open();
    });
  });

  bindCreateFab();
}

function openProductAssetPreview(productId, assetId) {
  const { product, asset } = getProductAssetById(productId, assetId);
  if (!asset) return;
  productAssetPreview = { productId: product.id, assetId: asset.id };
  productAssetPreviewPhotoIndex = 0;
  renderProductAssetPreview(product, asset);
}

function renderProductAssetPreview(product, asset) {
  document.querySelector("[data-asset-preview-layer]")?.remove();
  const photos = getAssetPhotos(asset, product);
  const currentPhoto = photos[productAssetPreviewPhotoIndex] || photos[0] || asset.image;
  const isVideo = asset.kind === "Video";
  const layer = document.createElement("div");
  layer.className = "asset-preview-layer";
  layer.dataset.assetPreviewLayer = "";
  layer.innerHTML = `
    <section class="asset-preview-screen" aria-label="Content preview">
      <button class="asset-preview-close" type="button" data-close-asset-preview aria-label="Close">×</button>
      <div class="asset-preview-stage ${isVideo ? "is-video" : "is-image"}">
        ${isVideo ? `
          <img src="${currentPhoto}" alt="">
          <span class="asset-preview-play">▶</span>
          <span class="asset-preview-duration">${formatAssetDuration(asset.duration)}</span>
        ` : `
          <div class="asset-stacked-gallery" data-preview-stack>
            ${photos.map((photo, index) => {
              const stackIndex = (index - productAssetPreviewPhotoIndex + photos.length) % photos.length;
              return `
                <figure class="asset-stack-card stack-${Math.min(stackIndex, 3)}" aria-hidden="${stackIndex !== 0}">
                  <img draggable="false" src="${photo}" alt="${asset.title} image ${index + 1}">
                  ${stackIndex === 0 ? `<figcaption>${productAssetPreviewPhotoIndex + 1} / ${photos.length}</figcaption>` : ""}
                </figure>
              `;
            }).join("")}
            <span class="asset-swipe-hint">Swipe</span>
          </div>
          <div class="asset-gallery-dots" aria-label="Image ${productAssetPreviewPhotoIndex + 1} of ${photos.length}">
            ${photos.map((photo, index) => `
              <button type="button" class="${index === productAssetPreviewPhotoIndex ? "active" : ""}" data-preview-dot="${index}" aria-label="View image ${index + 1}"></button>
            `).join("")}
          </div>
        `}
      </div>
      <footer class="asset-preview-footer">
        <strong>${asset.title}</strong>
        <button type="button" data-want-product-asset>I want this content</button>
      </footer>
    </section>
  `;
  document.body.appendChild(layer);

  const close = () => {
    productAssetPreview = null;
    layer.remove();
  };
  layer.querySelector("[data-close-asset-preview]")?.addEventListener("click", close);
  layer.querySelector("[data-preview-prev]")?.addEventListener("click", () => {
    productAssetPreviewPhotoIndex = (productAssetPreviewPhotoIndex - 1 + photos.length) % photos.length;
    renderProductAssetPreview(product, asset);
  });
  layer.querySelector("[data-preview-next]")?.addEventListener("click", () => {
    productAssetPreviewPhotoIndex = (productAssetPreviewPhotoIndex + 1) % photos.length;
    renderProductAssetPreview(product, asset);
  });
  layer.querySelector("[data-preview-stack]")?.addEventListener("pointerdown", (event) => {
    event.currentTarget.dataset.startX = String(event.clientX);
  });
  layer.querySelector("[data-preview-stack]")?.addEventListener("pointerup", (event) => {
    const startX = Number(event.currentTarget.dataset.startX || event.clientX);
    const delta = event.clientX - startX;
    if (Math.abs(delta) < 45 || photos.length < 2) return;
    productAssetPreviewPhotoIndex = (productAssetPreviewPhotoIndex + (delta < 0 ? 1 : -1) + photos.length) % photos.length;
    renderProductAssetPreview(product, asset);
  });
  layer.querySelector("[data-preview-stack]")?.addEventListener("pointercancel", (event) => {
    event.currentTarget.dataset.startX = "";
  });
  layer.querySelectorAll("[data-preview-dot]").forEach((button) => {
    button.addEventListener("click", () => {
      productAssetPreviewPhotoIndex = Number(button.dataset.previewDot) || 0;
      renderProductAssetPreview(product, asset);
    });
  });
  layer.querySelector("[data-want-product-asset]")?.addEventListener("click", () => {
    layer.remove();
    contentDownloadPlatforms = [];
    window.location.hash = `#/content-download/${product.id}/${asset.id}`;
  });
}

function openPromoteSheet(product) {
  const existingSheet = document.querySelector("[data-promote-sheet-layer]");
  existingSheet?.remove();

  const link = `https://museselect.com/product/${product.id}?affiliate=demo`;
  const layer = document.createElement("div");
  layer.className = "promote-sheet-layer";
  layer.dataset.promoteSheetLayer = "";
  layer.innerHTML = `
    <section class="promote-sheet" role="dialog" aria-modal="true" aria-label="Promote product">
      <div class="promote-sheet-handle"></div>
      <div class="promote-sheet-head">
        <strong>Promote</strong>
        <button type="button" aria-label="Close promote sheet" data-promote-close>×</button>
      </div>

      <article class="promote-product-summary">
        <img src="${product.image}" alt="">
        <div>
          <span>${product.category}</span>
          <h2>${product.title}</h2>
          <p>${product.price} · Commission ${product.commission}</p>
        </div>
      </article>

      <section class="promote-link-block">
        <div class="promote-row-title">
          <strong>Affiliate Link</strong>
          <span>Earn 15%</span>
        </div>
        <div class="promote-link-copy">
          <code>${link}</code>
          <button class="promote-action-button is-primary" type="button" data-promote-copy>COPY LINK</button>
        </div>
      </section>

      <section class="promote-create-block">
        <div class="promote-row-title">
          <strong>Make Content For Me</strong>
          <span>Earn 20%</span>
        </div>
        <div class="promote-create-action">
          <p>No sample waiting, Earn extra 5% per order</p>
          <button class="promote-action-button is-secondary" type="button" data-promote-create>Make Content For Me</button>
        </div>
      </section>
    </section>
  `;

  document.body.appendChild(layer);

  const close = () => layer.remove();
  layer.addEventListener("click", (event) => {
    if (event.target === layer) close();
  });
  layer.querySelector("[data-promote-close]")?.addEventListener("click", close);
  layer.querySelector("[data-promote-copy]")?.addEventListener("click", async (event) => {
    try {
      await navigator.clipboard?.writeText(link);
      event.currentTarget.textContent = "COPIED";
      window.setTimeout(() => {
        if (document.body.contains(layer)) event.currentTarget.textContent = "COPY LINK";
      }, 1200);
    } catch {
      event.currentTarget.textContent = "COPY FAILED";
    }
  });
  layer.querySelector("[data-promote-create]")?.addEventListener("click", () => {
    close();
    openCreateContentSheet(product);
  });
}

function openCreateContentSheet(product) {
  const existingSheet = document.querySelector("[data-create-content-sheet-layer]");
  existingSheet?.remove();

  const layer = document.createElement("div");
  layer.className = "promote-sheet-layer create-content-sheet-layer";
  layer.dataset.createContentSheetLayer = "";
  layer.innerHTML = `
    <section class="promote-sheet create-content-sheet" role="dialog" aria-modal="true" aria-label="Make Content For Me">
      <div class="promote-sheet-handle"></div>
      <div class="promote-sheet-head">
        <strong>Make Content For Me</strong>
        <button type="button" aria-label="Close create content sheet" data-create-content-close>×</button>
      </div>

      <button class="content-choice-card is-recommended" type="button" data-make-shoppable-video>
        <span class="content-choice-tag">Recommended</span>
        <strong>Make Shoppable Video For Me</strong>
        <div class="content-platforms">
          <span>TK</span>
          <span>IG REELS</span>
          <span>YOUTUBE SHOTS</span>
        </div>
        <p>No sample waiting. Muse creates a short selling video for you.</p>
        <em>Start Now</em>
      </button>

      <button class="content-choice-card" type="button" data-make-image-post>
        <strong>Make Image Post For Me</strong>
        <div class="content-platforms">
          <span>IG STORY</span>
          <span>IG POST</span>
          <span>PINTEREST</span>
          <span>TK</span>
        </div>
        <p>Create image-ready content for social promotion.</p>
        <em>Start Now</em>
      </button>
    </section>
  `;

  document.body.appendChild(layer);

  const close = () => layer.remove();
  layer.addEventListener("click", (event) => {
    if (event.target === layer) close();
  });
  layer.querySelector("[data-create-content-close]")?.addEventListener("click", close);
  layer.querySelector("[data-make-shoppable-video]")?.addEventListener("click", () => {
    close();
    window.location.hash = `#/muse-brief/${product.id}/1`;
  });
}

function currentProductFromRoute() {
  const [, page, id] = (window.location.hash || "").split("/");
  if (page === "product") return products.find((product) => product.id === id) || products[0];
  return products[0];
}

function renderContentDownloadPage(productId, assetId) {
  const { product, asset } = getProductAssetById(productId, assetId);
  if (!asset) {
    renderProduct(productId || products[0].id);
    return;
  }
  const photos = getAssetPhotos(asset, product);
  const selectedPreview = photos[0] || asset.image;
  const selectedPlatforms = new Set(contentDownloadPlatforms);
  app.innerHTML = `
    <header class="mobile-header">
      <button type="button" aria-label="Back" data-back-product-content>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>
      </button>
      <span>Download Content</span>
      <button type="button" aria-label="Close" data-back-product-content>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18M18 6L6 18"/></svg>
      </button>
    </header>

    <section class="content-download-page" aria-label="Download content">
      <section class="download-confirm-intro">
        <h1>Download Content</h1>
        <p>Review your selected content and choose where you will post.</p>
        <div class="download-limit-note">
          <span aria-hidden="true">i</span>
          <p>One ready-to-post download per product. Mark it as posted to download new content.</p>
        </div>
      </section>

      <section class="download-confirm-block">
        <h2>1. Selected content</h2>
        <article class="download-selected-material">
          <button type="button" class="download-material-thumb" data-preview-selected-content aria-label="Preview selected content">
            <img src="${selectedPreview}" alt="${asset.title}">
            ${asset.kind === "Video" ? `<span class="download-material-play">▶</span>` : `<span class="download-material-count">1/${photos.length}</span>`}
          </button>
          <div>
            <strong>${asset.title}</strong>
            <span>${product.title}</span>
            <small>${asset.kind === "Video" ? `${formatAssetDuration(asset.duration)} · Video content` : `${photos.length} photos · Image content`}</small>
          </div>
          <span class="download-selected-check">✓</span>
        </article>
        ${asset.kind === "Image" && photos.length > 1 ? `
          <div class="download-material-dots" aria-label="${photos.length} selected images">
            ${photos.map((photo, index) => `<i class="${index === 0 ? "active" : ""}"></i>`).join("")}
          </div>
        ` : ""}
      </section>

      <section class="download-confirm-block">
        <h2>2. Which platform you will post</h2>
        <div class="platform-choice-grid" aria-label="Post platforms">
          ${["TikTok", "Instagram", "YouTube"].map((platform) => `
            <button class="${selectedPlatforms.has(platform) ? "is-selected" : ""}" type="button" data-toggle-download-platform="${platform}" aria-pressed="${selectedPlatforms.has(platform)}">
              ${platform}
            </button>
          `).join("")}
        </div>
        <div class="download-earn-hint">
          <span aria-hidden="true">%</span>
          <p>Earn +5% per order after posting this content.</p>
        </div>
      </section>

      <section class="download-submit-panel" aria-label="Download action">
        <p>Download the selected content, then post it on your selected platform.</p>
        <button type="button" data-download-to-post ${contentDownloadPlatforms.length ? "" : "disabled"}>
          <span>Download to Post</span>
        </button>
      </section>
    </section>
  `;

  app.querySelectorAll("[data-back-product-content]").forEach((button) => {
    button.addEventListener("click", () => {
      contentDownloadPlatforms = [];
      window.location.hash = `#/product/${product.id}`;
    });
  });
  app.querySelectorAll("[data-toggle-download-platform]").forEach((button) => {
    button.addEventListener("click", () => {
      const platform = button.dataset.toggleDownloadPlatform;
      contentDownloadPlatforms = contentDownloadPlatforms.includes(platform)
        ? contentDownloadPlatforms.filter((item) => item !== platform)
        : [...contentDownloadPlatforms, platform];
      renderContentDownloadPage(product.id, asset.id);
    });
  });
  app.querySelector("[data-preview-selected-content]")?.addEventListener("click", () => {
    openProductAssetPreview(product.id, asset.id);
  });
  app.querySelector("[data-download-to-post]")?.addEventListener("click", (event) => {
    if (!contentDownloadPlatforms.length) return;
    const button = event.currentTarget;
    button.disabled = true;
    button.classList.add("is-loading");
    button.querySelector("span").textContent = "Downloading...";
    const contentId = addProductAssetToMyContent(product.id, asset.id);
    window.setTimeout(() => {
      button.classList.remove("is-loading");
      button.classList.add("is-done");
      button.querySelector("span").textContent = "Downloaded";
      showDownloadCompleteModal(product, asset, contentId);
    }, 1000);
  });
}

function showDownloadCompleteModal(product, asset, contentId) {
  document.querySelector("[data-download-complete-layer]")?.remove();
  const layer = document.createElement("div");
  layer.className = "download-complete-layer";
  layer.dataset.downloadCompleteLayer = "";
  layer.innerHTML = `
    <section class="download-complete-modal" role="dialog" aria-modal="true" aria-label="Download complete">
      <div class="download-complete-title">
        <span class="download-complete-icon">✓</span>
        <h2>Downloaded to album</h2>
      </div>
      <p>You can post it now and earn +5% commission per order.</p>
      <article class="download-complete-content">
        <img src="${asset.image}" alt="">
        <div>
          <strong>${asset.title}</strong>
          <span>${product.title}</span>
        </div>
      </article>
      <footer>
        <button class="secondary" type="button" data-complete-view-content>View My Content</button>
        <button class="primary" type="button" data-complete-back-product>Back to Product Details</button>
      </footer>
    </section>
  `;
  document.body.appendChild(layer);

  layer.querySelector("[data-complete-back-product]")?.addEventListener("click", () => {
    layer.remove();
    contentDownloadPlatforms = [];
    window.location.hash = `#/product/${product.id}`;
  });
  layer.querySelector("[data-complete-view-content]")?.addEventListener("click", () => {
    layer.remove();
    myContentFocusedId = contentId || getContentAssetId(product, asset);
    myContentProductQuery = "";
    myContentSelectedProductTitles = [product.title];
    myContentAppliedProductTitles = [product.title];
    window.location.hash = `#/my-content/ready/${getContentTypeForAsset(asset)}`;
  });
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

function getContentAssetId(product, asset) {
  return `asset-${product.id}-${asset.id}`;
}

function getContentTypeForAsset(asset) {
  return asset.kind === "Video" ? "video" : "image";
}

function getContentTypeLabelForAsset(asset) {
  return asset.kind === "Video" ? "Video" : "Image Post";
}

function normalizeContentItemType(item) {
  if (item.type === "asset") return item.assetKind === "Video" ? "video" : "image";
  return item.type;
}

function toggleProductAssetInMyContent(productId, assetId) {
  const product = products.find((item) => item.id === productId) || currentProductFromRoute();
  const asset = getProductAssets(product).find((item) => item.id === assetId);
  if (!asset) return false;
  const contentId = getContentAssetId(product, asset);
  if (addedProductAssetIds.has(contentId) || myContentItems.some((item) => item.id === contentId)) {
    addedProductAssetIds.delete(contentId);
    myContentItems = myContentItems.filter((item) => item.id !== contentId);
    return false;
  }
  addedProductAssetIds.add(contentId);
  myContentItems.unshift({
    id: contentId,
    title: asset.title,
    status: "ready",
    type: getContentTypeForAsset(asset),
    contentTypeLabel: getContentTypeLabelForAsset(asset),
    assetKind: asset.kind,
    createdAt: new Date().toISOString().slice(0, 10),
    media: asset.kind === "Image" ? getAssetPhotos(asset, product) : [asset.image],
    products: [{ title: product.title, image: product.image }],
    postedLinks: {}
  });
  return true;
}

function addProductAssetToMyContent(productId, assetId) {
  const product = products.find((item) => item.id === productId) || currentProductFromRoute();
  const asset = getProductAssets(product).find((item) => item.id === assetId);
  if (!asset) return "";
  const contentId = getContentAssetId(product, asset);
  if (addedProductAssetIds.has(contentId) || myContentItems.some((item) => item.id === contentId)) return contentId;
  addedProductAssetIds.add(contentId);
  myContentItems.unshift({
    id: contentId,
    title: asset.title,
    status: "ready",
    type: getContentTypeForAsset(asset),
    contentTypeLabel: getContentTypeLabelForAsset(asset),
    assetKind: asset.kind,
    createdAt: new Date().toISOString().slice(0, 10),
    media: asset.kind === "Image" ? getAssetPhotos(asset, product) : [asset.image],
    products: [{ title: product.title, image: product.image }],
    postedLinks: {}
  });
  return contentId;
}

function showToast(message) {
  document.querySelector("[data-toast]")?.remove();
  const toast = document.createElement("div");
  toast.className = "app-toast";
  toast.dataset.toast = "";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => {
    toast.classList.add("is-hiding");
    window.setTimeout(() => toast.remove(), 220);
  }, 1800);
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
    if (!moved) {
      openCreateContentSheet(currentProductFromRoute());
    }
  });

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
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
    const rect = globalCreateTrigger.getBoundingClientRect();
    globalCreateMenu.style.setProperty("--create-menu-left", `${rect.left + rect.width / 2}px`);
    globalCreateMenu.style.setProperty("--create-menu-top", `${rect.bottom + 8}px`);
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
    event.preventDefault();
    event.stopPropagation();
    if (document.body.dataset.view !== "web") {
      closeMenu();
      openCreateContentSheet(currentProductFromRoute());
      return;
    }
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
    window.location.hash = "#/my-content/making/all";
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
          <button type="button" data-open-my-content>My Content <span>${getContentCount("all")}</span></button>
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
    window.location.hash = "#/my-content/all/all";
  });
}

function normalizeContentFilter(value, tabs, fallback = tabs[0].id) {
  return tabs.some((tab) => tab.id === value) ? value : fallback;
}

function getContentCount(status, type = "all") {
  return myContentItems.filter((item) => {
    const statusMatch = status === "all" || item.status === status;
    const typeMatch = type === "all" || normalizeContentItemType(item) === type;
    return statusMatch && typeMatch;
  }).length;
}

function renderMyContent(statusName = "all", typeName = "all") {
  const activeStatus = normalizeContentFilter(statusName, contentStatusTabs);
  const activeType = normalizeContentFilter(typeName, contentTypeTabs, typeName === "all" ? "image" : contentTypeTabs[0].id);
  const selectedProductSet = new Set(myContentSelectedProductTitles);
  const appliedProductSet = new Set(myContentAppliedProductTitles);
  const filteredItems = myContentItems.filter((item) => {
    const statusMatch = activeStatus === "all" || item.status === activeStatus;
    const typeMatch = activeType === "all" || normalizeContentItemType(item) === activeType;
    const focusMatch = !myContentFocusedId || item.id === myContentFocusedId;
    const productMatch =
      appliedProductSet.size === 0 ||
      item.products.some((product) => appliedProductSet.has(product.title));
    return statusMatch && typeMatch && productMatch && focusMatch;
  });
  const productResults = getMyContentProductResults();

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

      <section class="my-content-product-search" aria-label="Search content by product">
        <label>
          <span>Search products</span>
          <div class="content-search-control">
            <input type="search" value="${escapeHtml(myContentProductQuery)}" placeholder="Search by product name" data-content-product-search>
            <button type="button" data-run-content-product-search ${myContentSelectedProductTitles.length ? "" : "disabled"}>Search</button>
          </div>
        </label>
        ${myContentSelectedProductTitles.length ? `
          <div class="content-selected-products" aria-label="Selected products">
            ${myContentSelectedProductTitles.map((title) => {
              const product = getContentSearchProducts().find((item) => item.title === title);
              return `
                <button type="button" data-remove-content-product="${escapeAttribute(title)}">
                  <img src="${product?.image || "./assets/product-1.jpg"}" alt="">
                  <span>${title}</span>
                  <b aria-hidden="true">×</b>
                </button>
              `;
            }).join("")}
          </div>
        ` : ""}
        ${myContentProductQuery ? `
          <div class="content-product-results">
            ${productResults.length ? productResults.map((product) => `
              <button class="${selectedProductSet.has(product.title) ? "is-selected" : ""}" type="button" data-toggle-content-product="${escapeAttribute(product.title)}">
                <img src="${product.image}" alt="">
                <span>${product.title}</span>
              </button>
            `).join("") : `<p>No products found</p>`}
          </div>
        ` : ""}
      </section>

      <div class="my-content-filterbar">
        <nav class="my-content-tabs my-content-status-tabs" aria-label="Content status">
          ${contentStatusTabs.map((tab) => `
            <button class="${tab.id === activeStatus ? "is-active" : ""}" type="button" data-content-status="${tab.id}">
              ${tab.label}<span>${getContentCount(tab.id)}</span>
            </button>
          `).join("")}
        </nav>

        <nav class="my-content-tabs my-content-type-tabs" aria-label="Content type">
          ${contentTypeTabs.map((tab) => `
            <button class="${tab.id === activeType ? "is-active" : ""}" type="button" data-content-type="${tab.id}">
              ${tab.label}<span>${getContentCount("all", tab.id)}</span>
            </button>
          `).join("")}
        </nav>
      </div>

      <section class="my-content-grid" aria-label="Content list">
        ${filteredItems.map(renderMyContentCard).join("")}
        ${filteredItems.length === 0 ? `<p class="my-content-empty">${myContentAppliedProductTitles.length ? "No content for selected products." : "No content yet."}</p>` : ""}
      </section>
    </section>
  `;

  app.querySelector("[data-back-mine]")?.addEventListener("click", () => {
    window.location.hash = "#/mine";
  });

  app.querySelectorAll("[data-content-status]").forEach((button) => {
    button.addEventListener("click", () => {
      myContentFocusedId = "";
      window.location.hash = `#/my-content/${button.dataset.contentStatus}/${activeType}`;
    });
  });

  app.querySelectorAll("[data-content-type]").forEach((button) => {
    button.addEventListener("click", () => {
      myContentFocusedId = "";
      window.location.hash = `#/my-content/${activeStatus}/${button.dataset.contentType}`;
    });
  });

  app.querySelector("[data-content-product-search]")?.addEventListener("input", (event) => {
    myContentFocusedId = "";
    myContentProductQuery = event.target.value;
    renderMyContent(activeStatus, activeType);
    window.setTimeout(() => {
      const input = app.querySelector("[data-content-product-search]");
      input?.focus();
      input?.setSelectionRange(input.value.length, input.value.length);
    }, 0);
  });

  app.querySelectorAll("[data-toggle-content-product]").forEach((button) => {
    button.addEventListener("click", () => {
      myContentFocusedId = "";
      toggleMyContentProduct(button.dataset.toggleContentProduct);
      renderMyContent(activeStatus, activeType);
    });
  });

  app.querySelector("[data-run-content-product-search]")?.addEventListener("click", () => {
    if (!myContentSelectedProductTitles.length) return;
    myContentFocusedId = "";
    myContentAppliedProductTitles = [...myContentSelectedProductTitles];
    myContentProductQuery = "";
    renderMyContent(activeStatus, activeType);
  });

  app.querySelectorAll("[data-remove-content-product]").forEach((button) => {
    button.addEventListener("click", () => {
      myContentFocusedId = "";
      myContentSelectedProductTitles = myContentSelectedProductTitles.filter((title) => title !== button.dataset.removeContentProduct);
      myContentAppliedProductTitles = myContentAppliedProductTitles.filter((title) => title !== button.dataset.removeContentProduct);
      renderMyContent(activeStatus, activeType);
    });
  });

  app.querySelectorAll("[data-download-content]").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Downloaded";
      window.setTimeout(() => {
        button.textContent = "Download";
      }, 1200);
    });
  });

  app.querySelectorAll("[data-mark-posted]").forEach((button) => {
    button.addEventListener("click", () => {
      openMarkPostedModal(button.dataset.markPosted, activeStatus, activeType);
    });
  });

  app.querySelectorAll("[data-toggle-making-contact]").forEach((button) => {
    button.addEventListener("click", () => openMakingContactSheet());
  });

  app.querySelectorAll("[data-discard-content]").forEach((button) => {
    button.addEventListener("click", () => {
      openDiscardContentModal(button.dataset.discardContent, activeStatus, activeType);
    });
  });

  app.querySelectorAll("[data-restore-content]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = myContentItems.find((content) => content.id === button.dataset.restoreContent);
      if (!item) return;
      item.status = "ready";
      showToast("Restored to Ready to Post");
      renderMyContent(activeStatus, activeType);
    });
  });

  bindContentMediaPagination();
}

function getContentSearchProducts() {
  const byTitle = new Map();
  products.forEach((product) => byTitle.set(product.title, { title: product.title, image: product.image }));
  myContentItems.forEach((item) => {
    item.products.forEach((product) => {
      if (!byTitle.has(product.title)) byTitle.set(product.title, product);
    });
  });
  return Array.from(byTitle.values());
}

function getMyContentProductResults() {
  const query = myContentProductQuery.trim().toLowerCase();
  if (!query) return [];
  return getContentSearchProducts().filter((product) => product.title.toLowerCase().includes(query)).slice(0, 8);
}

function toggleMyContentProduct(title) {
  if (myContentSelectedProductTitles.includes(title)) {
    myContentSelectedProductTitles = myContentSelectedProductTitles.filter((item) => item !== title);
    return;
  }
  myContentSelectedProductTitles = [...myContentSelectedProductTitles, title];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

function renderMyContentCard(item) {
  const statusLabel = getContentStatusLabel(item.status);
  const canDownload = item.status === "ready" || item.status === "posted";
  const canMarkPosted = item.status === "ready" || item.status === "posted";
  const displayType = normalizeContentItemType(item);
  const isMaking = item.status === "making";
  const isFailed = item.status === "failed";
  const isDiscarded = item.status === "discarded";
  return `
    <article class="my-content-card">
      <div class="content-media-wrap">
        ${isMaking ? `
          <div class="content-making-placeholder">
            <span>Making</span>
            <strong>Creating your content</strong>
            <p>Video content may take 1-3 business days for better selling performance. We will notify you by email when it is ready.</p>
            <div class="making-accelerate">
              <b>Don’t want to wait too long?</b>
              <small>Contact us to speed up production.</small>
              <button type="button" data-toggle-making-contact="${item.id}">Contact Us</button>
            </div>
          </div>
        ` : isFailed ? `
          <div class="content-failed-placeholder">
            <span>Failed</span>
            <strong>Content generation failed</strong>
            <p>The source assets did not pass generation quality checks. Please re-make this content request.</p>
          </div>
        ` : `
          <div class="content-media-scroll" aria-label="${item.title} media" data-media-scroll>
            ${item.media.map((src) => `
              <div class="content-media-frame">
                <img src="${src}" alt="">
                ${displayType === "video" ? `<span class="content-play" aria-hidden="true">▶</span>` : ""}
              </div>
            `).join("")}
          </div>
          ${item.media.length > 1 ? `
            <button class="content-media-nav is-prev" type="button" data-media-prev aria-label="Previous image">‹</button>
            <button class="content-media-nav is-next" type="button" data-media-next aria-label="Next image">›</button>
          ` : ""}
          ${item.media.length > 1 ? `<span class="content-count" data-content-count>1/${item.media.length}</span>` : ""}
          ${displayType === "video" ? `<span class="content-video-badge">Video</span>` : ""}
        `}
      </div>

      <h2>${item.title}</h2>

      <div class="content-meta-stack">
        <span class="content-status is-${item.status}">${statusLabel}</span>
        <span>${displayType === "video" ? "Video" : item.contentTypeLabel || "Image Post"}</span>
        <span>Created ${formatContentShortDate(item.createdAt)}</span>
      </div>

      <div class="content-products" aria-label="Products">
        ${item.products.map((product) => `
          <article>
            <img src="${product.image}" alt="">
            <span>${product.title}</span>
          </article>
        `).join("")}
      </div>

      <div class="content-card-actions">
        ${isDiscarded ? `
          <button class="content-mark-posted" type="button" data-restore-content="${item.id}">Restore</button>
        ` : `
          ${isFailed ? "" : `<button class="content-download" type="button" data-download-content="${item.id}" ${canDownload ? "" : "disabled"}>Download</button>`}
          <button class="content-mark-posted ${item.status === "failed" ? "is-remake" : ""}" type="button" data-mark-posted="${item.id}" ${canMarkPosted ? "" : "disabled"}>
            ${item.status === "failed" ? "Re-make" : item.status === "posted" ? "Add Post" : "Mark as Posted"}
          </button>
        `}
      </div>
    </article>
  `;
}

function bindContentMediaPagination() {
  app.querySelectorAll("[data-media-scroll]").forEach((scroller) => {
    const counter = scroller.parentElement?.querySelector("[data-content-count]");
    if (!counter) return;
    const total = scroller.children.length;
    const update = () => {
      const width = scroller.clientWidth || 1;
      const index = Math.min(total, Math.max(1, Math.round(scroller.scrollLeft / width) + 1));
      counter.textContent = `${index}/${total}`;
    };
    scroller.addEventListener("scroll", update, { passive: true });
    const parent = scroller.parentElement;
    parent?.querySelector("[data-media-prev]")?.addEventListener("click", () => {
      scroller.scrollBy({ left: -scroller.clientWidth, behavior: "smooth" });
    });
    parent?.querySelector("[data-media-next]")?.addEventListener("click", () => {
      scroller.scrollBy({ left: scroller.clientWidth, behavior: "smooth" });
    });
    update();
  });
}

function getContentStatusLabel(status) {
  const labels = {
    ready: "Ready to Post",
    making: "Making",
    posted: "Posted",
    failed: "Failed",
    discarded: "Discarded"
  };
  return labels[status] || "Ready to Post";
}

function formatContentShortDate(value) {
  const date = new Date(value);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function openMakingContactSheet() {
  document.querySelector("[data-making-contact-sheet-layer]")?.remove();

  const email = "creator@museselect.com";
  const layer = document.createElement("div");
  layer.className = "making-contact-sheet-layer";
  layer.dataset.makingContactSheetLayer = "";
  layer.innerHTML = `
    <section class="making-contact-sheet" role="dialog" aria-modal="true" aria-label="Contact us">
      <div class="contact-sheet-handle"></div>
      <header>
        <div>
          <strong>Contact Us</strong>
          <p>Need it faster? Contact us to speed up production.</p>
        </div>
        <button type="button" data-close-making-contact aria-label="Close">×</button>
      </header>
      <a class="contact-sheet-whatsapp" href="https://wa.me/message/W5RFPY5BSTM5O1" target="_blank" rel="noopener">WhatsApp</a>
      <div class="contact-sheet-email">
        <div>
          <span>Email</span>
          <strong>${email}</strong>
        </div>
        <button type="button" data-copy-contact-email="${email}">Copy</button>
      </div>
    </section>
  `;

  layer.addEventListener("click", (event) => {
    if (event.target === layer || event.target.closest("[data-close-making-contact]")) {
      layer.remove();
    }
  });

  layer.querySelector("[data-copy-contact-email]")?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard?.writeText(button.dataset.copyContactEmail);
    } catch (error) {
      // Clipboard permissions vary in local demos; keep the UI response consistent.
    }
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = "Copy";
    }, 1200);
  });

  document.body.appendChild(layer);
}

function openMarkPostedModal(contentId, activeStatus, activeType) {
  const item = myContentItems.find((content) => content.id === contentId);
  if (!item) return;
  document.querySelector("[data-mark-posted-layer]")?.remove();

  const layer = document.createElement("div");
  layer.className = "mark-posted-layer";
  layer.dataset.markPostedLayer = "";
  layer.innerHTML = `
    <section class="mark-posted-modal" role="dialog" aria-modal="true" aria-label="Mark as Posted">
      <header>
        <div>
          <span>Mark as Posted</span>
          <h2>Add your posted links</h2>
        </div>
        <button type="button" aria-label="Close" data-close-mark-posted>×</button>
      </header>
      <p class="mark-posted-earn">Earn +5% commission per order.</p>
      <label>
        Instagram
        <input type="url" data-posted-link="instagram" placeholder="Paste Instagram post, reel, or story link" value="${item.postedLinks.instagram || ""}">
      </label>
      <label>
        TikTok
        <input type="url" data-posted-link="tiktok" placeholder="Paste TikTok video link" value="${item.postedLinks.tiktok || ""}">
      </label>
      <label>
        YouTube
        <input type="url" data-posted-link="youtube" placeholder="Paste YouTube Shorts link" value="${item.postedLinks.youtube || ""}">
      </label>
      <footer>
        <button type="button" data-close-mark-posted>Cancel</button>
        <button type="button" data-save-mark-posted>Save</button>
      </footer>
    </section>
  `;
  document.body.appendChild(layer);

  const close = () => layer.remove();
  layer.addEventListener("click", (event) => {
    if (event.target === layer) close();
  });
  layer.querySelectorAll("[data-close-mark-posted]").forEach((button) => {
    button.addEventListener("click", close);
  });
  layer.querySelector("[data-save-mark-posted]")?.addEventListener("click", () => {
    const links = {};
    layer.querySelectorAll("[data-posted-link]").forEach((input) => {
      links[input.dataset.postedLink] = input.value.trim();
    });
    item.postedLinks = links;
    item.status = "posted";
    close();
    renderMyContent(activeStatus, activeType);
  });
}

function openDiscardContentModal(contentId, activeStatus, activeType) {
  const item = myContentItems.find((content) => content.id === contentId);
  if (!item) return;
  document.querySelector("[data-discard-content-layer]")?.remove();

  const layer = document.createElement("div");
  layer.className = "mark-posted-layer";
  layer.dataset.discardContentLayer = "";
  layer.innerHTML = `
    <section class="mark-posted-modal discard-content-modal" role="dialog" aria-modal="true" aria-label="Discard content">
      <header>
        <div>
          <h2>Move this content to Discarded?</h2>
        </div>
        <button type="button" aria-label="Close" data-close-discard-content>×</button>
      </header>
      <p>This content will move to Discarded. You can restore it later.</p>
      ${item.type === "video" ? `<p class="discard-video-note">Thank you for your feedback, we will contact you soon!</p>` : ""}
      <section class="discard-reasons" aria-label="Discard reasons">
        <strong>Why discard this content?</strong>
        <div>
          <button type="button" data-discard-reason="low_quality" aria-pressed="false">Low quality</button>
          <button type="button" data-discard-reason="not_my_style" aria-pressed="false">Not my style</button>
          <button type="button" data-discard-reason="wrong_product" aria-pressed="false">Wrong product</button>
          <button type="button" data-discard-reason="bad_media" aria-pressed="false">Bad image/video</button>
          <button type="button" data-discard-reason="duplicate" aria-pressed="false">Duplicate</button>
          <button type="button" data-discard-reason="other" aria-pressed="false">Other</button>
        </div>
      </section>
      <footer>
        <button type="button" data-close-discard-content>Cancel</button>
        <button type="button" data-confirm-discard-content><span aria-hidden="true">👎</span> Discard</button>
      </footer>
    </section>
  `;
  document.body.appendChild(layer);

  const close = () => layer.remove();
  layer.addEventListener("click", (event) => {
    if (event.target === layer) close();
  });
  layer.querySelectorAll("[data-close-discard-content]").forEach((button) => {
    button.addEventListener("click", close);
  });
  layer.querySelectorAll("[data-discard-reason]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.classList.toggle("is-selected");
      button.setAttribute("aria-pressed", String(selected));
    });
  });
  layer.querySelector("[data-confirm-discard-content]")?.addEventListener("click", () => {
    item.discardReasons = Array.from(layer.querySelectorAll("[data-discard-reason].is-selected")).map((button) => button.dataset.discardReason);
    item.status = "discarded";
    close();
    showToast("Moved to Discarded");
    renderMyContent(activeStatus, activeType);
  });
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
