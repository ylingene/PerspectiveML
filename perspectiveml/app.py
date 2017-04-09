from flask import Flask, render_template
import config
import api
import controllers

# Initialize Flask app with the template folder address
app = Flask(__name__, template_folder='templates')

# Register the api
app.register_blueprint(api.api_class_img)
app.register_blueprint(controllers.main)
app.register_blueprint(controllers.controllers_class_img)

# Listen on external IPs
# For us, listen to port 3000 so you can just run 'python app.py' to start the server
if __name__ == '__main__':
    # listen on external IPs
    app.run(host=config.env['host'], port=config.env['port'], debug=True)
