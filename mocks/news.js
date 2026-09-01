const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30));

document.getElementById('nlForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('input');
    const btn = this.querySelector('button');
    btn.textContent = 'Subscribed ✓';
    input.value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; }, 2500);
});

// ===== Mock news feed data (newest first) =====
const LOGO = "news_svg_4.svg";

const posts = [
    {
        pinned: true,
        time: "2 hours ago",
        body: "📌 Registration for our Edinburgh Insight Night (24 Sept) is now open! Spaces are limited to keep the speed-networking rounds meaningful, so register sooner rather than later — link in the Events section.",
        image: null,
        likes: 34,
        comments: [
            { name: "Priya M.", text: "So excited for this one 🙌" },
            { name: "Callum R.", text: "Will there be a hybrid/online option for anyone not in Edinburgh?" }
        ]
    },
    {
        pinned: false,
        time: "1 day ago",
        body: "That's a wrap on our Glasgow Summer Meet-Up! 60+ apprentices, one very competitive quiz, and a lot of new WhatsApp connections made. Photos are up in the Gallery now 📸",
        image: "https://picsum.photos/seed/thistle-event-a/900/560",
        likes: 58,
        comments: [
            { name: "Aisha K.", text: "Best night out in ages, thank you Thistle team!" },
            { name: "Duncan F.", text: "The quiz round was brutal 😂 already looking forward to the next one" },
            { name: "Emma S.", text: "Loved meeting other apprentices outside my own sector" }
        ]
    },
    {
        pinned: false,
        time: "5 days ago",
        body: "Huge thanks to EY for hosting our Apprenticeship Insight Day in Edinburgh — mock interviews, a Q&A panel, and honest advice from current apprentices on switching sectors mid-programme. If you registered but couldn't make it, we'll be sharing a recap resource soon.",
        image: "https://picsum.photos/seed/thistle-event-g/900/560",
        likes: 41,
        comments: [
            { name: "Ryan B.", text: "The mock interview feedback was so useful, thank you!" }
        ]
    },
    {
        pinned: false,
        time: "1 week ago",
        body: "New partnership announcement 🎉 We're teaming up with Black Professionals UK to connect Thistle Network members with Black Apprentices Scotland — more joint events landing later this year.",
        image: null,
        likes: 72,
        comments: [
            { name: "Nadia O.", text: "This is brilliant news, been hoping for something like this" },
            { name: "Josh T.", text: "Great to see the network growing" }
        ]
    },
    {
        pinned: false,
        time: "2 weeks ago",
        body: "Our Financial Literacy Workshop covered budgeting, saving, and the basics of long-term investing for anyone who's just started earning. Slides and a summary sheet are available on request — email us and we'll send them over.",
        image: "https://picsum.photos/seed/thistle-event-k/900/560",
        likes: 29,
        comments: []
    },
    {
        pinned: false,
        time: "3 weeks ago",
        body: "Reminder: WhatsApp group access is only granted after your registration is approved. If you registered more than 5 working days ago and haven't heard back, check your spam folder or drop us an email — sometimes our reply lands there!",
        image: null,
        likes: 15,
        comments: [
            { name: "Sophie L.", text: "Ah this happened to me, found it in spam. Thanks for the heads up!" }
        ]
    }
];

const feedList = document.getElementById('feedList');

function initials(name) {
    return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function renderComment(c) {
    return `<div class="comment">
      <div class="comment-avatar">${initials(c.name)}</div>
      <div class="comment-bubble"><b>${c.name}</b>${c.text}</div>
    </div>`;
}

posts.forEach((post, i) => {
    const el = document.createElement('article');
    el.className = 'post reveal in';
    el.innerHTML = `
      <div class="post-head">
        <div class="post-avatar"><img src="${LOGO}" alt="Thistle Network admin"></div>
        <div>
          <div class="post-author">The Thistle's Network</div>
          <div class="post-time">${post.time}</div>
        </div>
        ${post.pinned ? '<span class="post-pin">Pinned</span>' : ''}
      </div>
      <div class="post-body">${post.body}</div>
      ${post.image ? `<img class="post-img" src="${post.image}" alt="Post image">` : ''}
      <div class="post-actions">
        <div class="post-action like-btn" data-count="${post.likes}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
          <span class="like-count">${post.likes}</span>
        </div>
        <div class="post-action comment-toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.9-.9L3 20l1-5.4a8.38 8.38 0 0 1 17-3.1Z"/></svg>
          <span>${post.comments.length} comment${post.comments.length === 1 ? '' : 's'}</span>
        </div>
      </div>
      <div class="post-comments" data-idx="${i}">
        <div class="comment-list">${post.comments.map(renderComment).join('')}</div>
        <form class="comment-form">
          <input type="text" placeholder="Write a comment..." required>
          <button type="submit" aria-label="Send comment">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 20 18-8L3 4v6l12 2-12 2v6Z"/></svg>
          </button>
        </form>
      </div>
    `;
    feedList.appendChild(el);

    // like toggle
    const likeBtn = el.querySelector('.like-btn');
    const likeCount = el.querySelector('.like-count');
    let liked = false;
    likeBtn.addEventListener('click', () => {
        liked = !liked;
        likeBtn.classList.toggle('liked', liked);
        likeCount.textContent = post.likes + (liked ? 1 : 0);
    });

    // comment toggle
    const commentsPanel = el.querySelector('.post-comments');
    el.querySelector('.comment-toggle').addEventListener('click', () => {
        commentsPanel.classList.toggle('open');
    });

    // add comment
    const form = el.querySelector('.comment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        const text = input.value.trim();
        if (!text) return;
        const list = el.querySelector('.comment-list');
        const wrap = document.createElement('div');
        wrap.innerHTML = renderComment({ name: 'You', text: text });
        list.appendChild(wrap.firstElementChild);
        input.value = '';
        commentsPanel.classList.add('open');
        const countSpan = el.querySelector('.comment-toggle span');
        const n = list.children.length;
        countSpan.textContent = n + ' comment' + (n === 1 ? '' : 's');
    });
});