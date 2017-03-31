from flask import *
import os
from model.classify_image import run_inference_on_image

controllers_class_img = Blueprint('controllers_class_img', __name__, template_folder='templates')

def get_image_class(imgpath):
    prediction = run_inference_on_image(imgpath)
    return prediction

@controllers_class_img.route('/class_img', methods=['POST'])
def controllers_class_img_route():
    options = {
    }
    if request.method == 'POST':
        file = request.files["file"] # get the file data field from the JSON object
        if file:
            filename = file.filename
            file_format = filename.rsplit('.', 1)[1].lower()
            filename = filename.rsplit('.', 1)[0].lower()
            hash_name = filename #hash later
            if not os.path.isfile(os.path.join('static/images/', '{}.{}'.format(hash_name, file_format))):
                file.save(os.path.join('static/images/', '{}.{}'.format(hash_name, file_format)))
        # return get_image_class('..images/' + hash_name + '.' + file_format)
        predicted_focal = get_image_class('static/images/' + hash_name + '.' + file_format)
        return redirect("{}{}{}".format(url_for("main.main_route"),"#/second/",predicted_focal))
    # return render_template("index.html", **options)
    return redirect(url_for("main.main_route"))
