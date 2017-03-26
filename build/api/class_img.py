from flask import *
from model import run_inference_on_image

api_class_img = Blueprint('api_class_img', __name__)

def get_image_class(imgpath):
    prediction = run_inference_on_image(imgpath)
    return prediction

@api_class_img.route('/api/v1/class_img', methods=['POST'])
def api_class_img_route():
    if request.method == 'POST':
        file = request.files["file"] # get the file data field from the JSON object
        if file:
            filename = file.filename
            file_format = filename.rsplit('.', 1)[1].lower()
            hash_name = filename
            if not os.path.isfile(os.path.join('../images/', '{}.{}'.format(hash_name, file_format))):
                file.save(os.path.join('../images/', '{}.{}'.format(hash_name, file_format)))
        return get_image_class('..images/' + hash_name + '.' + file_format)
    return jsonify(""), 404