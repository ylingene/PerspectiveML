from flask import Flask, render_template
import config
import api

# Initialize Flask app with the template folder address
app = Flask(__name__, template_folder='templates')

# Register the api
app.register_blueprint(api.api_class_img)
# app.register_blueprint(api.api_login, url_prefix='/epx1dnii/p3')
# app.register_blueprint(api.api_pic, url_prefix='/epx1dnii/p3')
# app.register_blueprint(api.api_user, url_prefix='/epx1dnii/p3')

# Listen on external IPs
# For us, listen to port 3000 so you can just run 'python app.py' to start the server
if __name__ == '__main__':
    # listen on external IPs
    app.run(host=config.env['host'], port=config.env['port'], debug=True)
