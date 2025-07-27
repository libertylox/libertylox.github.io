let posts = [
    {
        id: 1,
        title: "welcome to skids.wiki",
        content: "this is the official website for discord.gg/superskid scroll through or explore more options or other things within our site.",
        type: "text",
        date: "2025-07-08",
        views: "https://skids.wiki"
    },
    {
        id: 2,
        title: "<b>Summer 2022",
        content: "This is the <b>Summer 2022</b> project of gorilla tag, ported to unity so you can mess around or create a game with it! We used <b>unity 2019</b> for this project as thats what it requires us to use when Asset Ripping the project.",
        type: "file",
        date: "2025-07-10",
        views: "https://www.mediafire.com/file/9qw9ub88tenk6c8/Summer_2022_-_VALORY_MADE_THIS_YOU_SKIDDERS.zip/file"
    },
    {
        id: 3,
        title: "<b>Summer 2022",
        content: "This is the <b>Summer 2022</b> project of gorilla tag, ported to unity so you can mess around or create a game with it! We used <b>unity 2019</b> for this project as thats what it requires us to use when Asset Ripping the project.",
        type: "file",
        date: "2025-07-10",
        views: "https://www.mediafire.com/file/9qw9ub88tenk6c8/Summer_2022_-_VALORY_MADE_THIS_YOU_SKIDDERS.zip/file"
    },
];

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "S"))
        e.preventDefault();
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return 'today';
    if (days === 1) return '1 day ago';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
}
document.getElementById('lastUpdate').innerHTML = formatDate('2025-07-10');

function renderPosts() {
    const container = document.getElementById('postsContainer');
    container.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-item';
        const typeClass = post.type === 'file' ? 'file-type' : post.type === 'link' ? 'link-type' : 'text-type';
        postElement.innerHTML = `
                        <div class="post-header">
                            <div class="post-title">${post.title}</div>
                            <div class="post-date">${formatDate(post.date)}</div>
                        </div>
                        <div class="post-content">${post.content}</div>
                        <div class="post-meta">
                            <span class="post-type ${typeClass}">${post.type}</span>
                            <a class="post-link" href="${post.views}">Link</a>
                        </div>
                    `;
        container.appendChild(postElement);
    });
}

function init() {
    renderPosts();
}
document.addEventListener('DOMContentLoaded', init);

(function () {
    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('keydown', e => {
        if (e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.key === 's') ||
            (e.metaKey && e.altKey && e.key === 'i')) {
            e.preventDefault();
            window.location.href = "/404";
        }
    });

    if (window.top !== window.self) {
        document.body.innerHTML = '<h1 style="color:red">Embedding not allowed</h1>';
    }

    document.onselectstart = () => false;
})();

if (navigator.userAgent.includes('curl') ||
    navigator.userAgent.includes('Wget') ||
    navigator.userAgent.includes('Python-urllib')) {
    document.body.innerHTML = '<h1>Access denied</h1>';
    window.stop();
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(renderProducts, 100);
});