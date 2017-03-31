from flask import *
from model.classify_image import run_inference_on_image

api_class_img = Blueprint('api_class_img', __name__, template_folder='templates')

def get_image_class(imgpath):
    prediction = run_inference_on_image(imgpath)
    return prediction

@api_class_img.route('/api/v1/class_img', methods=['POST'])
def api_class_img_route():
    options = {
    }
    return render_template("index.html", **options)
    if request.method == 'POST':
        print "KappaPost"
        file = request.files["file"] # get the file data field from the JSON object
        if file:
            filename = file.filename
            file_format = filename.rsplit('.', 1)[1].lower()
            hash_name = filename
            if not os.path.isfile(os.path.join('../images/', '{}.{}'.format(hash_name, file_format))):
                file.save(os.path.join('../images/', '{}.{}'.format(hash_name, file_format)))
        return get_image_class('..images/' + hash_name + '.' + file_format)
    return render_template("index.html", **options)
