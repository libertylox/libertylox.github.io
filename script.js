document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "S"))
        e.preventDefault();
});

const CONFIG_URL = 'config.json';
const MUSIC_VOLUME = 0.3;

let config = {};
let audio = null;

async function loadConfig() {
    try {
        const response = await fetch(CONFIG_URL);
        config = await response.json();
    } catch (error) {
        console.log('Config file not found, using defaults');
        config = {
            "name": "#",
            "bio": "#",
            "avatar": "#",
            "music": {
                "title": "#",
                "artist": "#",
                "file": "#"
            },
            "links": [
                { "label": "#", "value": "#", "url": "#" },
                { "label": "#", "value": "#", "url": "#" },
                { "label": "#", "value": "#", "url": "#" },
                { "label": "#", "value": "#", "url": "#" }
            ]
        };
    }
}

function initializeProfile() {
    document.getElementById('profileName').textContent = config.name;
    document.getElementById('profileBio').textContent = config.bio;
    document.getElementById('profileAvatar').src = config.avatar;

    if (config.music) {
        document.getElementById('musicTitle').textContent = config.music.title;
        document.getElementById('musicArtist').textContent = config.music.artist;
        audio = document.getElementById('backgroundMusic');
        audio.src = config.music.file;
        audio.volume = MUSIC_VOLUME;
    }

    const linksContainer = document.getElementById('profileLinks');
    linksContainer.innerHTML = '';

    config.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.className = 'profile-link';
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.innerHTML = `
                    <span class="link-label">${link.label}</span>
                    <span class="link-value">${link.value}</span>
                `;
        linksContainer.appendChild(linkElement);
    });
}

function createParticles() {
    const container = document.getElementById('particles');

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        container.appendChild(particle);
    }
}

function keepMusicPlaying() {
    if (audio) {
        audio.addEventListener('ended', () => {
            audio.currentTime = 0;
            audio.play().catch(e => console.log('Audio restart blocked'));
        });

        audio.addEventListener('pause', () => {
            setTimeout(() => {
                audio.play().catch(e => console.log('Audio resume blocked'));
            }, 100);
        });
    }
}

function enterProfile() {
    const intro = document.getElementById('introContainer');
    const main = document.getElementById('mainContainer');

    intro.classList.add('hidden');
    main.classList.add('visible');

    if (audio) {
        audio.play().catch(e => console.log('Audio blocked'));
        keepMusicPlaying();
    }
}

async function init() {
    await loadConfig();
    initializeProfile();
    createParticles();

    document.getElementById('introContainer').addEventListener('click', enterProfile);
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