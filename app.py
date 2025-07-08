import json
import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__, template_folder="../templates", static_folder="../static")

def load_config():
    config_file = '../config.json'
    if os.path.exists(config_file):
        with open(config_file, 'r') as f:
            return json.load(f)
    else:
        default_config = {
            "profile": {
                "name": "",
                "title": "",
                "bio": "",
                "avatar": "",
                "status": "",
                "music_file": "your-music-file.mp3",
                "music_title": ""
            },
            "stats": {
                "followers": "",
                "following": "",
                "projects": ""
            },
            "social_links": {
                "twitter": "",
                "github": "",
                "linkedin": "",
                "discord": ""
            },
            "theme": {
                "primary_color": "#ffffff",
                "secondary_color": "#ffffff",
                "background_gradient": "linear-gradient(135deg, #000000 0%, #000000 100%)",
                "intro_gradient": "linear-gradient(135deg, #000000 0%, #000000 100%)",
                "glass_opacity": "0",
                "border_opacity": "0"
            },
            "animations": {
                "enable_particles": False,
                "enable_custom_cursor": False,
                "enable_avatar_tracking": False,
                "particle_count": 0,
                "animation_speed": "0s"
            },
            "intro": {
                "title": "",
                "subtitle": "",
                "enable_pulse_circle": False
            }
        }
        with open(config_file, 'w') as f:
            json.dump(default_config, f, indent=4)
        print("Created default config.json - customize it")
        return default_config

@app.route('/')
def index():
    config = load_config()
    with open('static/style.css', 'r') as css_file:
        css_content = css_file.read().format(**config['theme'], **config['animations'])
    with open('static/script.js', 'r') as js_file:
        js_content = js_file.read().format(**config['theme'], **config['animations'])
    return render_template('index.html', config=config, css_content=css_content, js_content=js_content)

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('../static', filename)

if __name__ == '__main__':
    app.run(debug=True)
