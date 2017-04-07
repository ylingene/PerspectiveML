from flask import *

main = Blueprint('main', __name__, template_folder='templates')



def main_func():
    options = {
    }
    return render_template("index.html", **options)

@main.route('/')
def main_route():
    return main_func()

