import logging
from flask import Flask, render_template, request, redirect

app = Flask(__name__, static_url_path='/static', static_folder='static')

allowed_names = ['Blaine', 'ENU', 'Simon']
signed_in = False  # Flag to track if the user has signed in

# Configure logging
logging.basicConfig(filename='user_actions.log', level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')

@app.route('/', methods=['GET', 'POST'])
def home():
    global signed_in
    if request.method == 'POST':
        user_name = request.form.get('name')
        if user_name and user_name in allowed_names:
            signed_in = True
            app.logger.info(f'{user_name} signed in.')
            return redirect('/index')
        else:
            app.logger.warning(f'Unauthorized access attempt with name: {user_name}.')
            return redirect('/unauthorized')
    return render_template('signin.html')

@app.route('/index')
def index():
    if signed_in:
        return render_template('index.html')
    else:
        return redirect('/')

@app.route('/unauthorized')
def unauthorized():
    return render_template('unauthorized.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)

