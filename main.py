from flask import Flask, render_template, request, redirect, url_for, flash
from datetime import datetime
import os

app = Flask(__name__)
app.secret_key = 'your-sfg6d786g907ag880hdfh79a786d70asg70dsyhgnj4qlahtv3-t=4-=ta=v-=-=-a=be-=0e-t8aegdaejvr9385a7w9g8fsa;akjewrv;jaetgejkg;jkldjgesasyecret-key-here'  # Change this in production

# In-memory storage (use a database in production)
posts = []

@app.route('/')
def index():
    return render_template('index.html', posts=posts)

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        title = request.form.get('title', '').strip()
        content = request.form.get('content', '').strip()
        author = request.form.get('author', 'Anonymous').strip()
        
        if not title or not content:
            flash('Title and content are required!', 'error')
            return render_template('submit.html')
        
        # Basic content filtering
        forbidden_words = ['password', 'ssn', 'social security', 'credit card']
        content_lower = content.lower()
        
        if any(word in content_lower for word in forbidden_words):
            flash('Content contains prohibited information!', 'error')
            return render_template('submit.html')
        
        post = {
            'id': len(posts) + 1,
            'title': title,
            'content': content,
            'author': author,
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
        
        posts.append(post)
        flash('Post submitted successfully!', 'success')
        return redirect(url_for('index'))
    
    return render_template('submit.html')

@app.route('/view/<int:post_id>')
def view_post(post_id):
    post = next((p for p in posts if p['id'] == post_id), None)
    if not post:
        flash('Post not found!', 'error')
        return redirect(url_for('index'))
    return render_template('view.html', post=post)

@app.route('/delete/<int:post_id>')
def delete_post(post_id):
    global posts
    posts = [p for p in posts if p['id'] != post_id]
    flash('Post deleted successfully!', 'success')
    return redirect(url_for('index'))

# Template files (create these in a 'templates' directory)
HTML_TEMPLATES = {
    'base.html': '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}Information Board{% endblock %}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f4f4f4; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 5px; }
        .header { text-align: center; margin-bottom: 30px; }
        .nav { margin-bottom: 20px; }
        .nav a { margin-right: 15px; text-decoration: none; color: #333; }
        .nav a:hover { color: #007bff; }
        .flash { padding: 10px; margin: 10px 0; border-radius: 3px; }
        .flash.success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .flash.error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .post { border: 1px solid #ddd; margin: 10px 0; padding: 15px; border-radius: 3px; }
        .post-title { font-weight: bold; margin-bottom: 10px; }
        .post-meta { color: #666; font-size: 0.9em; margin-bottom: 10px; }
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; margin-bottom: 5px; font-weight: bold; }
        .form-group input, .form-group textarea { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 3px; }
        .btn { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer; }
        .btn:hover { background: #0056b3; }
        .btn-danger { background: #dc3545; }
        .btn-danger:hover { background: #c82333; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Information Board</h1>
            <p>Share public information responsibly</p>
        </div>
        
        <div class="nav">
            <a href="{{ url_for('index') }}">Home</a>
            <a href="{{ url_for('submit') }}">Submit Post</a>
        </div>
        
        {% with messages = get_flashed_messages(with_categories=true) %}
            {% if messages %}
                {% for category, message in messages %}
                    <div class="flash {{ category }}">{{ message }}</div>
                {% endfor %}
            {% endif %}
        {% endwith %}
        
        {% block content %}{% endblock %}
    </div>
</body>
</html>
    ''',
    
    'index.html': '''
{% extends "base.html" %}

{% block content %}
    <h2>Recent Posts</h2>
    
    {% if posts %}
        {% for post in posts %}
            <div class="post">
                <div class="post-title">{{ post.title }}</div>
                <div class="post-meta">
                    By {{ post.author }} on {{ post.timestamp }}
                </div>
                <div class="post-content">
                    {{ post.content[:200] }}{% if post.content|length > 200 %}...{% endif %}
                </div>
                <div style="margin-top: 10px;">
                    <a href="{{ url_for('view_post', post_id=post.id) }}">View Full Post</a>
                    <a href="{{ url_for('delete_post', post_id=post.id) }}" 
                       onclick="return confirm('Are you sure you want to delete this post?')"
                       style="color: red; margin-left: 15px;">Delete</a>
                </div>
            </div>
        {% endfor %}
    {% else %}
        <p>No posts yet. <a href="{{ url_for('submit') }}">Submit the first one!</a></p>
    {% endif %}
{% endblock %}
    ''',
    
    'submit.html': '''
{% extends "base.html" %}

{% block content %}
    <h2>Submit a Post</h2>
    
    <form method="POST">
        <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
        </div>
        
        <div class="form-group">
            <label for="author">Author (optional):</label>
            <input type="text" id="author" name="author" placeholder="Anonymous">
        </div>
        
        <div class="form-group">
            <label for="content">Content:</label>
            <textarea id="content" name="content" rows="10" required 
                      placeholder="Share public information responsibly. No private/sensitive data."></textarea>
        </div>
        
        <button type="submit" class="btn">Submit Post</button>
    </form>
    
    <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 3px;">
        <strong>Guidelines:</strong>
        <ul>
            <li>Only post public information</li>
            <li>No private or sensitive data</li>
            <li>Be respectful and responsible</li>
            <li>Follow all applicable laws</li>
        </ul>
    </div>
{% endblock %}
    ''',
    
    'view.html': '''
{% extends "base.html" %}

{% block content %}
    <h2>{{ post.title }}</h2>
    
    <div class="post-meta">
        By {{ post.author }} on {{ post.timestamp }}
    </div>
    
    <div style="margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 3px;">
        {{ post.content|replace('\n', '<br>')|safe }}
    </div>
    
    <div>
        <a href="{{ url_for('index') }}">← Back to Home</a>
        <a href="{{ url_for('delete_post', post_id=post.id) }}" 
           onclick="return confirm('Are you sure you want to delete this post?')"
           style="color: red; margin-left: 15px;">Delete Post</a>
    </div>
{% endblock %}
    '''
}

def setup_templates():
    """Create template files if they don't exist"""
    if not os.path.exists('templates'):
        os.makedirs('templates')
    
    for filename, content in HTML_TEMPLATES.items():
        filepath = os.path.join('templates', filename)
        with open(filepath, 'w') as f:
            f.write(content)

if __name__ == '__main__':
    setup_templates()
    print("Starting Information Board...")
    print("This is a legitimate information sharing platform.")
    print("Visit: http://localhost:5000")
    app.run(debug=True, host='0.0.0.0', port=5000)
