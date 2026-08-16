// ============================================================
// contributorData.js   Storage & Data Engine for "Become a Contributor" (Feature 4)
//
// Social platform data model for Indian Oral Heritage & Culture.
// Manages real user profile registration, feed posts, likes, comments,
// and mandatory oral heritage verification filtering.
// ============================================================

const CONTRIB_PROFILE_KEY = "kathavrnta_user_profile_v2";
const CONTRIB_FEED_KEY = "kathavrnta_heritage_feed_v2";

// Starter authentic heritage posts to populate the feed initially
const STARTER_HERITAGE_POSTS = [
  {
    id: "post-starter-1",
    authorName: "Rukmini Devi",
    username: "rukmini_maand",
    authorState: "Rajasthan",
    authorRole: "Maand Heritage Singer",
    authorAvatar: "RJ",
    isVerifiedHeritage: true,
    isTeachingPost: true,
    title: "Understanding the Gliding Vowel Call in Kesariya Balam",
    category: "Folk Singing & Chants",
    state: "Rajasthan",
    mediaUrl: "images/tradition_dance.jpg",
    narrative: "In our Jaisalmer hereditary tradition, the opening Maand call is held across a full breath without mid-phrase breaks. Notice how the voice glides smoothly between the two notes. Practice keeping your throat relaxed!",
    likesCount: 142,
    isLiked: false,
    comments: [
      { id: "c1", author: "Aarav Sharma", text: "Fascinating explanation! The glide control really makes the difference.", timeAgo: "1 hour ago" },
      { id: "c2", author: "Priya Roy", text: "Can you share more about the breath holding technique?", timeAgo: "30 mins ago" }
    ],
    timestamp: Date.now() - 3600000 * 4
  },
  {
    id: "post-starter-2",
    authorName: "Subhash Baul",
    username: "subhash_ektara",
    authorState: "West Bengal",
    authorRole: "Baul Wandering Minstrel",
    authorAvatar: "WB",
    isVerifiedHeritage: true,
    isTeachingPost: false,
    title: "The River Echoes of Bhatiali   Oral Lore of Birbhum",
    category: "Oral Stories & Ballads",
    state: "West Bengal",
    mediaUrl: "images/tradition_saraswati.jpg",
    narrative: "Sung across river currents in Bengal, Bhatiali songs carry long open vowels meant to reach boatmen across water. The melody rises gently like the river tide.",
    likesCount: 98,
    isLiked: false,
    comments: [
      { id: "c3", author: "Ananya Sen", text: "Such a beautiful heritage tradition. Hearing this brings back memories of the Padma river.", timeAgo: "2 hours ago" }
    ],
    timestamp: Date.now() - 3600000 * 8
  },
  {
    id: "post-starter-3",
    authorName: "Pandit Govind Das",
    username: "govind_flute",
    authorState: "Uttar Pradesh",
    authorRole: "Bansuri & Kirtan Heritage Master",
    authorAvatar: "UP",
    isVerifiedHeritage: true,
    isTeachingPost: true,
    title: "Bansuri Microtone Ornamentation in Devotional Kirtan",
    category: "Folk Instruments",
    state: "Uttar Pradesh",
    mediaUrl: "images/tradition_krishna.jpg",
    narrative: "Demonstrating the Meend (microtonal slide) on a bamboo bansuri flute. Notice how fingers partially cover the hole to achieve the sacred glide.",
    likesCount: 215,
    isLiked: false,
    comments: [],
    timestamp: Date.now() - 3600000 * 12
  }
];

const CONTRIBUTOR_STORAGE = {
  // Get active user profile (returns null if not registered yet)
  getProfile() {
    try {
      return JSON.parse(localStorage.getItem(CONTRIB_PROFILE_KEY)) || null;
    } catch (e) {
      return null;
    }
  },

  // Save new or updated user profile
  saveProfile(profileData) {
    try {
      const profile = {
        name: profileData.name.trim(),
        username: profileData.username.trim().replace(/^@/, ""),
        state: profileData.state || "Rajasthan",
        role: profileData.role || "Folk Heritage Contributor",
        bio: profileData.bio || "Preserving oral traditions and folk lore.",
        avatarColor: profileData.avatarColor || "linear-gradient(135deg, #D4A340, #C7707A)",
        badge: (profileData.name || "U").substring(0, 2).toUpperCase(),
        createdAt: Date.now()
      };
      localStorage.setItem(CONTRIB_PROFILE_KEY, JSON.stringify(profile));
      return profile;
    } catch (e) {
      console.warn("Storage saveProfile error:", e);
      return null;
    }
  },

  // Get social feed posts
  getPosts() {
    try {
      const customPosts = JSON.parse(localStorage.getItem(CONTRIB_FEED_KEY)) || [];
      return [...customPosts, ...STARTER_HERITAGE_POSTS];
    } catch (e) {
      return STARTER_HERITAGE_POSTS;
    }
  },

  // Add new post created by real user
  createPost(postObj) {
    const profile = this.getProfile();
    if (!profile) throw new Error("Please set up your contributor profile first.");

    if (!postObj.heritagePledge) {
      throw new Error("You must confirm the Oral Heritage Pledge checkbox before posting.");
    }

    const newPost = {
      id: "post-user-" + Date.now(),
      authorName: profile.name,
      username: profile.username,
      authorState: profile.state,
      authorRole: profile.role,
      authorAvatar: profile.badge,
      isVerifiedHeritage: true,
      isTeachingPost: !!postObj.isTeachingPost,
      title: postObj.title.trim(),
      category: postObj.category || "Oral Stories & Ballads",
      state: postObj.state || profile.state,
      mediaUrl: postObj.mediaUrl || "images/tradition_dance.jpg",
      narrative: postObj.narrative.trim(),
      likesCount: 0,
      isLiked: false,
      comments: [],
      timestamp: Date.now()
    };

    try {
      const customPosts = JSON.parse(localStorage.getItem(CONTRIB_FEED_KEY)) || [];
      customPosts.unshift(newPost);
      localStorage.setItem(CONTRIB_FEED_KEY, JSON.stringify(customPosts));
    } catch (e) {
      console.warn("Storage createPost error:", e);
    }

    return newPost;
  },

  // Toggle like status for a post
  toggleLike(postId) {
    const posts = this.getPosts();
    const post = posts.find((p) => p.id === postId);
    if (!post) return null;

    post.isLiked = !post.isLiked;
    post.likesCount += post.isLiked ? 1 : -1;

    // If it's a custom post, persist update
    if (postId.startsWith("post-user-")) {
      try {
        const customPosts = JSON.parse(localStorage.getItem(CONTRIB_FEED_KEY)) || [];
        const idx = customPosts.findIndex((p) => p.id === postId);
        if (idx !== -1) {
          customPosts[idx] = post;
          localStorage.setItem(CONTRIB_FEED_KEY, JSON.stringify(customPosts));
        }
      } catch (e) {}
    }
    return post;
  },

  // Add comment to a post
  addComment(postId, commentText) {
    const profile = this.getProfile();
    const authorName = profile ? profile.name : "Heritage Enthusiast";

    const newComment = {
      id: "c-" + Date.now(),
      author: authorName,
      text: commentText.trim(),
      timeAgo: "Just now"
    };

    const posts = this.getPosts();
    const post = posts.find((p) => p.id === postId);
    if (post) {
      post.comments.push(newComment);
      if (postId.startsWith("post-user-")) {
        try {
          const customPosts = JSON.parse(localStorage.getItem(CONTRIB_FEED_KEY)) || [];
          const idx = customPosts.findIndex((p) => p.id === postId);
          if (idx !== -1) {
            customPosts[idx] = post;
            localStorage.setItem(CONTRIB_FEED_KEY, JSON.stringify(customPosts));
          }
        } catch (e) {}
      }
    }
    return newComment;
  },

  // Delete a post
  deletePost(postId) {
    try {
      let customPosts = JSON.parse(localStorage.getItem(CONTRIB_FEED_KEY)) || [];
      customPosts = customPosts.filter((p) => p.id !== postId);
      localStorage.setItem(CONTRIB_FEED_KEY, JSON.stringify(customPosts));
      return true;
    } catch (e) {
      console.warn("Storage deletePost error:", e);
      return false;
    }
  }
};
