// ============================================================
// contributor.js — "Become a Contributor" (Feature 4) UI & Interactivity
//
// Social platform UI for oral heritage & cultural traditions.
// Supports profile creation, feed filtering, post creation with
// mandatory heritage verification pledge, likes, and comments.
// ============================================================

(function () {
  // ---- DOM Refs ----
  const modal = document.getElementById("contributor-modal");
  const backdrop = document.getElementById("contributor-backdrop");
  const closeBtn = document.getElementById("contributor-close");

  const profileBar = document.getElementById("contrib-profile-bar");
  const profileNameEl = document.getElementById("contrib-profile-name");
  const profileHandleEl = document.getElementById("contrib-profile-handle");
  const profileBadgeEl = document.getElementById("contrib-profile-badge");
  const editProfileBtn = document.getElementById("contrib-edit-profile-btn");
  const createPostBtn = document.getElementById("contrib-create-post-btn");

  const profileDrawer = document.getElementById("contrib-profile-drawer");
  const profileForm = document.getElementById("contrib-profile-form");
  const profileNameInput = document.getElementById("contrib-input-name");
  const profileUsernameInput = document.getElementById("contrib-input-username");
  const profileStateInput = document.getElementById("contrib-input-state");
  const profileRoleInput = document.getElementById("contrib-input-role");
  const profileBioInput = document.getElementById("contrib-input-bio");
  const profileCancelBtn = document.getElementById("contrib-profile-cancel");

  const postDrawer = document.getElementById("contrib-post-drawer");
  const postForm = document.getElementById("contrib-post-form");
  const postTitleInput = document.getElementById("contrib-post-title");
  const postCategorySelect = document.getElementById("contrib-post-category");
  const postStateSelect = document.getElementById("contrib-post-state");
  const postFileInput = document.getElementById("contrib-post-file");
  const postFileBtn = document.getElementById("contrib-post-file-btn");
  const postFilePreview = document.getElementById("contrib-post-file-preview");
  const postNarrativeInput = document.getElementById("contrib-post-narrative");
  const postTeachCheck = document.getElementById("contrib-post-teach");
  const postHeritagePledgeCheck = document.getElementById("contrib-post-pledge");
  const postCancelBtn = document.getElementById("contrib-post-cancel");
  const postSubmitError = document.getElementById("contrib-post-error");

  const feedContainer = document.getElementById("contrib-feed-list");
  const filterTabsContainer = document.getElementById("contrib-filter-tabs");

  if (!modal) return;

  let activeFilter = "all";
  let uploadedMediaBase64 = "images/tradition_dance.jpg";

  // ============ MODAL OPEN/CLOSE ============

  function openContributor() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    updateProfileBar();
    renderFeed();
    document.addEventListener("keydown", onEscape);
  }

  function closeContributor() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", onEscape);
    closeProfileDrawer();
    closePostDrawer();
  }

  function onEscape(e) {
    if (e.key === "Escape") closeContributor();
  }

  closeBtn && closeBtn.addEventListener("click", closeContributor);
  backdrop && backdrop.addEventListener("click", closeContributor);

  // ============ PROFILE SETUP & DISPLAY ============

  function updateProfileBar() {
    const profile = CONTRIBUTOR_STORAGE.getProfile();
    if (!profile) {
      profileNameEl.textContent = "Guest Contributor";
      profileHandleEl.textContent = "Set up your ID to post";
      profileBadgeEl.textContent = "?";
      createPostBtn.disabled = false;
      return;
    }

    profileNameEl.textContent = profile.name;
    profileHandleEl.textContent = "@" + profile.username + " \u00b7 " + profile.state;
    profileBadgeEl.textContent = profile.badge;
    createPostBtn.disabled = false;
  }

  editProfileBtn && editProfileBtn.addEventListener("click", openProfileDrawer);
  profileCancelBtn && profileCancelBtn.addEventListener("click", closeProfileDrawer);

  function openProfileDrawer() {
    const profile = CONTRIBUTOR_STORAGE.getProfile() || {};
    profileNameInput.value = profile.name || "";
    profileUsernameInput.value = profile.username || "";
    profileStateInput.value = profile.state || "Rajasthan";
    profileRoleInput.value = profile.role || "Folk Heritage Singer";
    profileBioInput.value = profile.bio || "";

    profileDrawer.hidden = false;
  }

  function closeProfileDrawer() {
    if (profileDrawer) profileDrawer.hidden = true;
  }

  profileForm &&
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = profileNameInput.value.trim();
      const username = profileUsernameInput.value.trim();

      if (!name || !username) {
        alert("Please enter a Display Name and Username.");
        return;
      }

      CONTRIBUTOR_STORAGE.saveProfile({
        name,
        username,
        state: profileStateInput.value,
        role: profileRoleInput.value,
        bio: profileBioInput.value
      });

      updateProfileBar();
      closeProfileDrawer();
      renderFeed();
    });

  // ============ POST CREATION ============

  createPostBtn &&
    createPostBtn.addEventListener("click", () => {
      const profile = CONTRIBUTOR_STORAGE.getProfile();
      if (!profile) {
        openProfileDrawer();
        return;
      }
      openPostDrawer();
    });

  postCancelBtn && postCancelBtn.addEventListener("click", closePostDrawer);

  function openPostDrawer() {
    postTitleInput.value = "";
    postNarrativeInput.value = "";
    postTeachCheck.checked = false;
    postHeritagePledgeCheck.checked = false;
    postSubmitError.textContent = "";
    postSubmitError.hidden = true;
    uploadedMediaBase64 = "images/tradition_dance.jpg";
    postFilePreview.src = uploadedMediaBase64;

    postDrawer.hidden = false;
  }

  function closePostDrawer() {
    if (postDrawer) postDrawer.hidden = true;
  }

  postFileBtn &&
    postFileBtn.addEventListener("click", () => {
      if (postFileInput) postFileInput.click();
    });

  postFileInput &&
    postFileInput.addEventListener("change", () => {
      const file = postFileInput.files && postFileInput.files[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        uploadedMediaBase64 = reader.result;
        postFilePreview.src = uploadedMediaBase64;
      };
      reader.readAsDataURL(file);
    });

  postForm &&
    postForm.addEventListener("submit", (e) => {
      e.preventDefault();
      postSubmitError.hidden = true;

      const title = postTitleInput.value.trim();
      const narrative = postNarrativeInput.value.trim();
      const heritagePledge = postHeritagePledgeCheck.checked;

      if (!title || !narrative) {
        postSubmitError.textContent = "Please provide a Title and Cultural Narrative.";
        postSubmitError.hidden = false;
        return;
      }

      if (!heritagePledge) {
        postSubmitError.textContent = "You must check the Heritage Verification Pledge to confirm authentic heritage content.";
        postSubmitError.hidden = false;
        return;
      }

      try {
        CONTRIBUTOR_STORAGE.createPost({
          title,
          category: postCategorySelect.value,
          state: postStateSelect.value,
          narrative,
          mediaUrl: uploadedMediaBase64,
          isTeachingPost: postTeachCheck.checked,
          heritagePledge
        });

        closePostDrawer();
        renderFeed();
      } catch (err) {
        postSubmitError.textContent = err.message || "Failed to publish post.";
        postSubmitError.hidden = false;
      }
    });

  // ============ FEED FILTERING & RENDERING ============

  const FILTERS = [
    { id: "all", label: "All Heritage Posts" },
    { id: "stories", label: "Oral Stories & Ballads" },
    { id: "singing", label: "Folk Singing" },
    { id: "instruments", label: "Folk Instruments" },
    { id: "teach", label: "Tutorials (Teach Others)" }
  ];

  function renderFilterTabs() {
    if (!filterTabsContainer) return;
    filterTabsContainer.innerHTML = "";

    FILTERS.forEach((f) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "song-tab-btn" + (activeFilter === f.id ? " active" : "");
      btn.textContent = f.label;
      btn.addEventListener("click", () => {
        activeFilter = f.id;
        renderFilterTabs();
        renderFeed();
      });
      filterTabsContainer.appendChild(btn);
    });
  }

  function renderFeed() {
    renderFilterTabs();
    if (!feedContainer) return;
    feedContainer.innerHTML = "";

    let posts = CONTRIBUTOR_STORAGE.getPosts();

    // Apply Filter
    if (activeFilter === "stories") {
      posts = posts.filter((p) => p.category.includes("Stories") || p.category.includes("Ballads"));
    } else if (activeFilter === "singing") {
      posts = posts.filter((p) => p.category.includes("Singing") || p.category.includes("Chants") || p.category.includes("Maand"));
    } else if (activeFilter === "instruments") {
      posts = posts.filter((p) => p.category.includes("Instruments") || p.category.includes("Flute"));
    } else if (activeFilter === "teach") {
      posts = posts.filter((p) => p.isTeachingPost);
    }

    if (!posts.length) {
      const empty = document.createElement("div");
      empty.className = "contrib-empty-feed";
      empty.innerHTML = "<p>No heritage posts match this filter yet. Be the first to publish a post!</p>";
      feedContainer.appendChild(empty);
      return;
    }

    posts.forEach((post) => {
      const card = createPostCard(post);
      feedContainer.appendChild(card);
    });
  }

  function createPostCard(post) {
    const card = document.createElement("article");
    card.className = "contrib-post-card";

    const timeString = formatTimeAgo(post.timestamp);

    const profile = CONTRIBUTOR_STORAGE.getProfile();
    const canDelete = post.id.startsWith("post-user-") || (profile && profile.username === post.username);

    card.innerHTML = `
      <div class="contrib-post-header">
        <div class="contrib-post-avatar">${post.authorAvatar || "H"}</div>
        <div class="contrib-post-author-info">
          <div class="contrib-post-author-name">${escapeHtml(post.authorName)} <span class="contrib-verified-badge">\u2713 Verified Heritage</span></div>
          <div class="contrib-post-meta">@${escapeHtml(post.username)} \u00b7 ${escapeHtml(post.authorState)} \u00b7 ${timeString}</div>
        </div>
        ${post.isTeachingPost ? '<span class="contrib-teach-badge">Masterclass</span>' : ""}
        ${canDelete ? `
          <button type="button" class="contrib-delete-btn" data-id="${post.id}" title="Delete post">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            <span>Delete</span>
          </button>
        ` : ""}
      </div>

      <div class="contrib-post-media-wrap">
        <img src="${escapeHtml(post.mediaUrl)}" alt="${escapeHtml(post.title)}" class="contrib-post-img" />
      </div>

      <div class="contrib-post-body">
        <span class="contrib-category-tag">${escapeHtml(post.category)}</span>
        <h3 class="contrib-post-title">${escapeHtml(post.title)}</h3>
        <p class="contrib-post-narrative">${escapeHtml(post.narrative)}</p>
      </div>

      <div class="contrib-action-bar">
        <button type="button" class="contrib-action-btn contrib-like-btn ${post.isLiked ? "liked" : ""}" data-id="${post.id}">
          <svg class="heart-icon" width="18" height="18" viewBox="0 0 24 24" fill="${post.isLiked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span class="like-count">${post.likesCount} Likes</span>
        </button>

        <span class="contrib-action-info">${post.comments.length} Comments</span>
      </div>

      <!-- Comments Section -->
      <div class="contrib-comments-section">
        <div class="contrib-comments-list">
          ${post.comments.map((c) => `
            <div class="contrib-comment-item">
              <span class="contrib-comment-author">${escapeHtml(c.author)}:</span>
              <span class="contrib-comment-text">${escapeHtml(c.text)}</span>
            </div>
          `).join("")}
        </div>

        <form class="contrib-comment-form" data-id="${post.id}">
          <input type="text" class="contrib-comment-input" placeholder="Add a cultural comment..." required />
          <button type="submit" class="contrib-comment-submit">Post</button>
        </form>
      </div>
    `;

    // Event handlers for like button, delete button and comment submission
    const likeBtn = card.querySelector(".contrib-like-btn");
    likeBtn &&
      likeBtn.addEventListener("click", () => {
        const updated = CONTRIBUTOR_STORAGE.toggleLike(post.id);
        if (updated) {
          likeBtn.classList.toggle("liked", updated.isLiked);
          const heartSvg = likeBtn.querySelector(".heart-icon");
          if (heartSvg) heartSvg.setAttribute("fill", updated.isLiked ? "currentColor" : "none");
          const countSpan = likeBtn.querySelector(".like-count");
          if (countSpan) countSpan.textContent = updated.likesCount + " Likes";
        }
      });

    const deleteBtn = card.querySelector(".contrib-delete-btn");
    deleteBtn &&
      deleteBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this heritage post?")) {
          CONTRIBUTOR_STORAGE.deletePost(post.id);
          renderFeed();
        }
      });

    const commentForm = card.querySelector(".contrib-comment-form");
    commentForm &&
      commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = commentForm.querySelector(".contrib-comment-input");
        const text = input.value.trim();
        if (!text) return;

        const newComment = CONTRIBUTOR_STORAGE.addComment(post.id, text);
        input.value = "";
        renderFeed();
      });

    return card;
  }

  function formatTimeAgo(ts) {
    if (!ts) return "Recently";
    const diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return Math.floor(diff / 60) + "m ago";
    if (diff < 86400) return Math.floor(diff / 3600) + "h ago";
    return Math.floor(diff / 86400) + "d ago";
  }

  function escapeHtml(str) {
    return (str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  window.openContributor = openContributor;
})();
