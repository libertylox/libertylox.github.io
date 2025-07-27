const staff = [
    {
        id: 1,
        username: "vaalory",
        displayname: "valory",
        role: "Founder & Developer",
        linkmessage: "skids.wiki/valory",
        link: "/valory"
    }
];

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

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "S"))
        e.preventDefault();
});

function renderStaff() {
    const container = document.getElementById('staffContainer');
    container.innerHTML = '';
    staff.forEach(member => {
        const staffElement = document.createElement('div');
        staffElement.className = 'staff-item';
        staffElement.innerHTML = `
                    <div class="staff-header">
                        <div class="staff-displayname">${member.displayname}</div>
                        <div class="staff-username">@${member.username}</div>
                    </div>
                    <div class="staff-role">${member.role}</div>
                    <a href="${member.link}" class="staff-link">${member.linkmessage}</a>
                `;
        container.appendChild(staffElement);
    });
}

function init() {
    createParticles();
    renderStaff();
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