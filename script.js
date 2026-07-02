const viewButtons = document.querySelectorAll("[data-view-target]");
document.body.dataset.view = "mobile";
viewButtons.forEach((item) => item.classList.toggle("is-active", item.dataset.viewTarget === "mobile"));

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.dataset.view = button.dataset.viewTarget;
    viewButtons.forEach((item) => item.classList.toggle("is-active", item === button));
  });
});

document.querySelectorAll(".thumb").forEach((button) => {
  button.addEventListener("click", () => {
    const preview = button.closest("section");
    const image = preview.querySelector(".product-image");
    image.src = button.dataset.image;

    preview.querySelectorAll(".thumb").forEach((thumb) => {
      thumb.classList.toggle("is-active", thumb === button);
    });
  });
});

document.querySelectorAll(".sizes button, .swatches button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.parentElement;
    group.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
  });
});

document.querySelectorAll("[data-qty]").forEach((button) => {
  button.addEventListener("click", () => {
    const output = button.parentElement.querySelector("output");
    const current = Number(output.value || output.textContent);
    const next = button.dataset.qty === "plus" ? current + 1 : Math.max(1, current - 1);
    output.value = String(next);
    output.textContent = String(next);
  });
});

document.querySelectorAll(".copy-link-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const original = button.textContent;
    button.textContent = "Copied";
    button.classList.add("is-copied");

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText("https://museselect.com/product/7455546858039965328?affiliate=demo");
      } catch (error) {
        // Visual feedback is enough for this static demo.
      }
    }

    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove("is-copied");
    }, 1200);
  });
});

const promoteSheet = document.querySelector(".promote-sheet");

document.querySelector("[data-open-promote]")?.addEventListener("click", () => {
  promoteSheet.hidden = false;
});

document.querySelectorAll("[data-close-promote]").forEach((button) => {
  button.addEventListener("click", () => {
    promoteSheet.hidden = true;
  });
});

document.querySelector(".copy-affiliate-action")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const label = button.querySelector("span");
  const original = label.textContent;
  label.textContent = "Copied";
  button.classList.add("is-done");

  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText("https://museselect.com/product/7455546858039965328?affiliate=demo");
    } catch (error) {
      // Visual feedback is enough for this static demo.
    }
  }

  window.setTimeout(() => {
    label.textContent = original;
    button.classList.remove("is-done");
  }, 1200);
});

const museCreatePage = document.querySelector(".muse-create-page");
const museProductCreatePage = document.querySelector(".muse-product-create-page");
const minePage = document.querySelector(".mine-page");
const contentKitPage = document.querySelector(".content-kit-page");
const contentDetailPage = document.querySelector(".content-detail-page");
const markPostedSheet = document.querySelector(".mark-posted-sheet");
const phoneScreen = document.querySelector(".phone-screen");
let activePostedCard = null;

function openMuseCreate() {
  if (promoteSheet) promoteSheet.hidden = true;
  museProductCreatePage.hidden = true;
  minePage.hidden = true;
  contentKitPage.hidden = true;
  contentDetailPage.hidden = true;
  museCreatePage.hidden = false;
  phoneScreen.classList.add("is-muse-create");
  document.querySelectorAll("[data-mobile-tab]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.mobileTab === "musecreate");
  });
}

function openMuseProductCreate() {
  if (promoteSheet) promoteSheet.hidden = true;
  museCreatePage.hidden = true;
  minePage.hidden = true;
  contentKitPage.hidden = true;
  contentDetailPage.hidden = true;
  museProductCreatePage.hidden = false;
  phoneScreen.classList.remove("is-muse-create");
}

function openMine() {
  museCreatePage.hidden = true;
  museProductCreatePage.hidden = true;
  contentKitPage.hidden = true;
  contentDetailPage.hidden = true;
  minePage.hidden = false;
  phoneScreen.classList.add("is-muse-create");
  document.querySelectorAll("[data-mobile-tab]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.mobileTab === "mine");
  });
}

function openContentKit() {
  museCreatePage.hidden = true;
  museProductCreatePage.hidden = true;
  minePage.hidden = true;
  contentDetailPage.hidden = true;
  contentKitPage.hidden = false;
  phoneScreen.classList.add("is-muse-create");
}

document.querySelector(".muse-action")?.addEventListener("click", openMuseProductCreate);
document.querySelector(".muse-now-btn")?.addEventListener("click", openMuseProductCreate);
document.querySelectorAll("[data-open-muse-create]").forEach((button) => {
  button.addEventListener("click", openMuseCreate);
});

document.querySelector("[data-close-muse-create]")?.addEventListener("click", () => {
  museCreatePage.hidden = true;
  phoneScreen.classList.remove("is-muse-create");
  document.querySelectorAll("[data-mobile-tab]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.mobileTab === "select");
  });
});

document.querySelector("[data-close-product-create]")?.addEventListener("click", () => {
  museProductCreatePage.hidden = true;
});

document.querySelectorAll("[data-mobile-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-mobile-tab]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    if (button.dataset.mobileTab !== "musecreate") {
      museCreatePage.hidden = true;
      museProductCreatePage.hidden = true;
      contentKitPage.hidden = true;
      contentDetailPage.hidden = true;
      phoneScreen.classList.remove("is-muse-create");
    }
    if (button.dataset.mobileTab === "mine") {
      openMine();
    } else if (button.dataset.mobileTab !== "musecreate") {
      minePage.hidden = true;
    }
  });
});

document.querySelector("[data-open-content-kit]")?.addEventListener("click", openContentKit);

document.querySelector("[data-close-content-kit]")?.addEventListener("click", () => {
  contentKitPage.hidden = true;
  openMine();
});

document.querySelectorAll("[data-kit-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.kitFilter;
    document.querySelectorAll("[data-kit-filter]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    document.querySelectorAll(".kit-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.kitType !== filter && card.dataset.kitStatus !== filter;
    });
  });
});

document.querySelectorAll("[data-open-content-detail]").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    contentKitPage.hidden = true;
    contentDetailPage.hidden = false;
  });
});

document.querySelector("[data-close-content-detail]")?.addEventListener("click", () => {
  contentDetailPage.hidden = true;
  contentKitPage.hidden = false;
});

document.querySelectorAll(".mark-posted-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    activePostedCard = event.target.closest(".kit-card");
    markPostedSheet.hidden = false;
  });
});

document.querySelectorAll("[data-close-mark-posted]").forEach((button) => {
  button.addEventListener("click", () => {
    markPostedSheet.hidden = true;
  });
});

document.querySelector(".save-post-links-btn")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const original = button.textContent;
  button.textContent = "Saved";
  button.classList.add("is-done");
  window.setTimeout(() => {
    button.textContent = original;
    button.classList.remove("is-done");
    if (activePostedCard) {
      activePostedCard.dataset.kitStatus = "posted";
      const status = activePostedCard.querySelector(".kit-meta em");
      if (status) status.textContent = "Posted";
    }
    markPostedSheet.hidden = true;
  }, 900);
});

document.querySelectorAll(".inline-copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const section = button.closest("section");
    const text = Array.from(section.querySelectorAll("p")).map((item) => item.textContent).join("\n");
    const original = button.textContent;
    button.textContent = "Copied";
    button.classList.add("is-copied");
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        // Visual feedback is enough for this static demo.
      }
    }
    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove("is-copied");
    }, 1200);
  });
});

document.querySelector("[data-open-creator]")?.addEventListener("click", () => {
  document.querySelector(".creator-page").hidden = false;
});

document.querySelector("[data-close-creator]")?.addEventListener("click", () => {
  document.querySelector(".creator-page").hidden = true;
});

document.querySelectorAll(".creator-filters button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".creator-filters button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    document.querySelectorAll(".creator-grid-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.kind !== filter;
    });
  });
});

document.querySelectorAll(".make-mine-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const original = button.textContent;
    button.textContent = "Added";
    button.classList.add("is-added");
    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove("is-added");
    }, 1200);
  });
});

document.querySelectorAll(".hero-tryon-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const original = button.textContent;
    button.textContent = "ADDED";
    button.classList.add("is-added");
    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove("is-added");
    }, 1200);
  });
});

document.querySelectorAll("[data-open-image-editor]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".creator-page").hidden = true;
    document.querySelector(".image-editor-page").hidden = false;
  });
});

document.querySelector("[data-close-image-editor]")?.addEventListener("click", () => {
  document.querySelector(".image-editor-page").hidden = true;
});

document.querySelector("[data-open-image-setting]")?.addEventListener("click", () => {
  document.querySelector(".image-setting-sheet").hidden = false;
});

document.querySelectorAll("[data-close-image-setting]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".image-setting-sheet").hidden = true;
  });
});

document.querySelectorAll(".muse-content-option:not([data-open-image-editor]):not([data-open-video-templates]):not([data-open-video-creator])").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-selected");
    window.setTimeout(() => {
      button.classList.remove("is-selected");
    }, 1200);
  });
});

document.querySelectorAll("[data-open-video-templates]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".video-template-page").hidden = false;
  });
});

document.querySelector("[data-close-video-templates]")?.addEventListener("click", () => {
  document.querySelector(".video-template-page").hidden = true;
});

document.querySelectorAll(".video-make-mine-btn").forEach((button) => {
  button.addEventListener("click", () => {
    setVideoCreatorTemplateMode("default");
    document.querySelector(".video-creator-page").hidden = false;
  });
});

function setVideoCreatorTemplateMode(mode) {
  const defaultCard = document.querySelector("[data-default-template-card]");
  const appliedBriefCard = document.querySelector("[data-applied-brief-card]");
  const guideCard = document.querySelector("[data-template-guide-card]");
  if (!defaultCard || !appliedBriefCard || !guideCard) return;
  const isBriefMode = mode === "brief";
  const isGuideMode = mode === "guide";
  defaultCard.hidden = isBriefMode || isGuideMode;
  appliedBriefCard.hidden = !isBriefMode;
  guideCard.hidden = !isGuideMode;
}

document.querySelectorAll("[data-open-video-creator]").forEach((button) => {
  button.addEventListener("click", () => {
    const templateMode = button.hasAttribute("data-brief-generate") ? "brief" : button.hasAttribute("data-open-video-guide") ? "guide" : "default";
    setVideoCreatorTemplateMode(templateMode);
    document.querySelector(".creator-page").hidden = true;
    document.querySelector(".video-template-page").hidden = true;
    document.querySelector(".video-creator-page").hidden = false;
  });
});

document.querySelectorAll("[data-brief-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const briefId = button.dataset.briefTab;
    document.querySelectorAll("[data-brief-tab]").forEach((tab) => {
      tab.classList.toggle("is-active", tab === button);
    });
    document.querySelectorAll("[data-brief-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.briefPanel !== briefId;
      panel.classList.toggle("is-active", panel.dataset.briefPanel === briefId);
    });
  });
});

document.querySelector("[data-close-video-creator]")?.addEventListener("click", () => {
  document.querySelector(".video-creator-page").hidden = true;
});

document.querySelector("[data-open-applied-brief]")?.addEventListener("click", () => {
  document.querySelector(".applied-brief-sheet").hidden = false;
});

document.querySelectorAll("[data-close-applied-brief]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".applied-brief-sheet").hidden = true;
  });
});

document.querySelector("[data-avatar-upload]")?.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const preview = document.querySelector(".avatar-preview");
  preview.src = URL.createObjectURL(file);
  preview.hidden = false;
});

document.querySelector("[data-open-video-setting]")?.addEventListener("click", () => {
  document.querySelector(".video-setting-sheet").hidden = false;
});

document.querySelectorAll("[data-close-video-setting]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".video-setting-sheet").hidden = true;
  });
});

document.querySelector(".apply-video-setting-btn")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const summary = document.querySelector(".setting-summary-card span");
  const groups = document.querySelectorAll(".video-setting-sheet .setting-group");
  const selected = Array.from(groups).map((group) => {
    return group.querySelector(".setting-chips button.is-active")?.textContent.trim();
  }).filter(Boolean);
  summary.textContent = selected.join(" · ");

  const original = button.textContent;
  button.textContent = "Applied";
  button.classList.add("is-done");
  window.setTimeout(() => {
    button.textContent = original;
    button.classList.remove("is-done");
    document.querySelector(".video-setting-sheet").hidden = true;
  }, 900);
});

document.querySelectorAll(".choice-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.parentElement;
    group.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
  });
});

document.querySelector(".create-video-btn")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const original = button.textContent;
  button.textContent = "Creating";
  button.classList.add("is-done");
  window.setTimeout(() => {
    button.textContent = original;
    button.classList.remove("is-done");
    document.querySelector(".video-creator-page").hidden = true;
    openContentKit();
  }, 1200);
});

document.querySelectorAll("[data-winning-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.winningFilter;
    document.querySelectorAll("[data-winning-filter]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    document.querySelectorAll(".winning-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.winningType !== filter;
    });
  });
});

document.querySelectorAll("[data-video-template-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.videoTemplateFilter;
    document.querySelectorAll("[data-video-template-filter]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    document.querySelectorAll(".video-template-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.videoTemplateType !== filter;
    });
  });
});

document.querySelector(".create-look-btn")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const original = button.textContent;
  button.textContent = "Creating";
  button.classList.add("is-done");
  window.setTimeout(() => {
    button.textContent = original;
    button.classList.remove("is-done");
    document.querySelector(".image-editor-page").hidden = true;
    openContentKit();
  }, 1200);
});

document.querySelector(".apply-setting-btn")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const original = button.textContent;
  button.textContent = "Applied";
  button.classList.add("is-done");
  window.setTimeout(() => {
    button.textContent = original;
    button.classList.remove("is-done");
    document.querySelector(".image-setting-sheet").hidden = true;
  }, 900);
});

document.querySelectorAll(".setting-chips button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.parentElement;
    group.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
  });
});

document.querySelector(".download-all-btn")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const original = button.textContent;
  button.textContent = "Downloaded";
  button.classList.add("is-done");
  window.setTimeout(() => {
    button.textContent = original;
    button.classList.remove("is-done");
  }, 1200);
});

document.querySelectorAll(".clip-download-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const original = button.textContent;
    button.textContent = "Saved";
    button.classList.add("is-done");
    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove("is-done");
    }, 1200);
  });
});

document.querySelectorAll("[data-platform-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const platform = button.dataset.platformFilter;
    document.querySelectorAll("[data-platform-filter]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    document.querySelectorAll(".template-card").forEach((card) => {
      card.hidden = card.dataset.platform !== platform;
    });
  });
});

document.querySelectorAll(".breakdown-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const original = button.textContent;
    button.textContent = "Viewed";
    button.classList.add("is-viewed");
    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove("is-viewed");
    }, 1200);
  });
});
