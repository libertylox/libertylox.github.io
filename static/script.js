document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    let isPlaying = false;
    let hasEnteredSite = false;

    introScreen.addEventListener('click', () => {
        if (!hasEnteredSite) {
            hasEnteredSite = true;
            introScreen.classList.add('hidden');
            setTimeout(() => {
                introScreen.style.display = 'none';
                mainContent.style.display = 'flex';
                document.body.style.cursor = '{enable_custom_cursor}' ? 'none' : 'default';
                backgroundMusic.play().then(() => {
                    isPlaying = true;
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                }).catch(e => console.log('Autoplay prevented:', e));
            }, 800);
        }
    });

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            isPlaying = false;
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        } else {
            backgroundMusic.play().then(() => {
                isPlaying = true;
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            }).catch(e => console.log('Play failed:', e));
        }
    });

    {enable_custom_cursor} && (() => {
        const cursor = document.createElement('div');
        cursor.style.cssText = `position: fixed; width: 20px; height: 20px; background: radial-gradient(circle, {primary_color}cc, {secondary_color}66); border-radius: 50%; pointer-events: none; z-index: 9999; transition: transform 0.1s ease; mix-blend-mode: difference;`;
        document.body.appendChild(cursor);
        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        document.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.8)');
        document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');
    })();

    {enable_particles} && (() => {
        const container = document.querySelector('.main-content');
        for (let i = 0; i < {particle_count}; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `position: absolute; width: ${Math.random() * 4 + 1}px; height: ${Math.random() * 4 + 1}px; background: ${Math.random() > 0.5 ? '{primary_color}' : '{secondary_color}'}; border-radius: 50%; opacity: 0.5; left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation: float ${Math.random() * 10 + 5}s linear infinite;`;
            container.appendChild(particle);
            particle.animate([
                { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: 0.5 },
                { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: 0 }
            ], { duration: (Math.random() * 10 + 5) * 1000, iterations: Infinity, delay: Math.random() * 5000 });
        }
    })();

    {enable_avatar_tracking} && (() => {
        const avatar = document.querySelector('.avatar');
        document.addEventListener('mousemove', e => {
            const rect = avatar.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            const angleX = y / 50;
            const angleY = x / 50;
            avatar.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
        });
        document.addEventListener('mouseleave', () => avatar.style.transform = 'scale(1.05)');
    })();

    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', () => link.style.transform = 'translateY(-3px) scale(1.1)');
        link.addEventListener('mouseleave', () => link.style.transform = 'translateY(0) scale(1)');
    });
});
