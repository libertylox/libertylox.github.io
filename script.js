document.addEventListener('DOMContentLoaded', () => {
    fetch('config.json')
        .then(response => response.json())
        .then(config => {
            document.querySelector('title').textContent = config.profile.name || '';
            document.querySelector('.intro-title').textContent = config.intro.title || '';
            document.querySelector('.intro-subtitle').textContent = config.intro.subtitle || '';
            if (config.intro.enable_pulse_circle) document.querySelector('.pulse-circle').style.display = 'block';
            if (config.animations.enable_particles) document.querySelector('.particles').style.display = 'block';
            document.querySelector('.avatar').src = config.profile.avatar || '';
            document.querySelector('.profile-name').textContent = config.profile.name || '';
            document.querySelector('.profile-title').textContent = config.profile.title || '';
            document.querySelector('.status-text').textContent = config.profile.status || '';
            document.querySelectorAll('.stat-number')[0].textContent = config.stats.followers || '';
            document.querySelectorAll('.stat-number')[1].textContent = config.stats.following || '';
            document.querySelector amely('.stat-number')[2].textContent = config.stats.projects || '';
            document.querySelector('.profile-bio p').textContent = config.profile.bio || '';
            document.querySelector('#backgroundMusic source').src = config.profile.music_file || '';
            document.querySelector('.music-title').textContent = config.profile.music_title || '';
            const socialLinks = document.querySelector('.social-links');
            const platforms = {
                twitter: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
                github: 'M12.2 0C5.5 0 .2 5.3.2 11.8c0 5.2 3.4 9.6 8.1 11.1.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2 1-.3 2.1-.4 3.1-.4s2.1.1 3.1.4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.7-1.5 8.1-5.9 8.1-11.1C24.2 5.3 18.9.1 12.2.1z',
                linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                discord: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z'
            };
            for (let platform in config.social_links) {
                if (config.social_links[platform]) {
                    const link = document.createElement('a');
                    link.href = config.social_links[platform];
                    link.className = 'social-link';
                    link.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="${platforms[platform]}"/></svg>`;
                    socialLinks.appendChild(link);
                }
            }

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
                        document.body.style.cursor = config.animations.enable_custom_cursor ? 'none' : 'default';
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

            if (config.animations.enable_custom_cursor) {
                const cursor = document.createElement('div');
                cursor.style.cssText = `position: fixed; width: 20px; height: 20px; background: radial-gradient(circle, ${config.theme.primary_color}cc, ${config.theme.secondary_color}66); border-radius: 50%; pointer-events: none; z-index: 9999; transition: transform 0.1s ease; mix-blend-mode: difference;`;
                document.body.appendChild(cursor);
                document.addEventListener('mousemove', e => {
                    cursor.style.left = e.clientX - 10 + 'px';
                    cursor.style.top = e.clientY - 10 + 'px';
                });
                document.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.8)');
                document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');
            }

            if (config.animations.enable_particles) {
                const container = document.querySelector('.main-content');
                for (let i = 0; i < config.animations.particle_count; i++) {
                    const particle = document.createElement('div');
                    particle.style.cssText = `position: absolute; width: ${Math.random() * 4 + 1}px; height: ${Math.random() * 4 + 1}px; background: ${Math.random() > 0.5 ? config.theme.primary_color : config.theme.secondary_color}; border-radius: 50%; opacity: 0.5; left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation: float ${Math.random() * 10 + 5}s linear infinite;`;
                    container.appendChild(particle);
                    particle.animate([
                        { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: 0.5 },
                        { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: 0 }
                    ], { duration: (Math.random() * 10 + 5) * 1000, iterations: Infinity, delay: Math.random() * 5000 });
                }
            }

            if (config.animations.enable_avatar_tracking) {
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
            }

            document.querySelectorAll('.social-link').forEach(link => {
                link.addEventListener('mouseenter', () => link.style.transform = 'translateY(-3px) scale(1.1)');
                link.addEventListener('mouseleave', () => link.style.transform = 'translateY(0) scale(1)');
            });
        })
        .catch(e => console.log('Failed to load config.json:', e));
});
