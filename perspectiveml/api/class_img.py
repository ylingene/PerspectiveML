from flask import *
from model.classify_image import run_inference_on_image

api_class_img = Blueprint('api_class_img', __name__, template_folder='templates')
ALLOWED_EXTENSIONS = set(['jpg']) # test if 'png' images work with tensorflow.
    # if added to allowed extensions, update the error message for ALLOWED_EXTENSIONS

def get_image_class(imgpath):
    prediction = run_inference_on_image(imgpath)
    return prediction

def api_class_img_post(file):
    if file:
        filename = file.filename
        filename = filename.rsplit('.', 1)[0].lower()
        file_format = filename.rsplit('.', 1)[1].lower()
        hash_name = filename #hash later

        if file_format not in ALLOWED_EXTENSIONS:
            errormessages = [{"message": "Image format not supported at this time. Please upload a '.jpg' image."}]
            return jsonify(errors=errormessages), 404

        # save file
        if not os.path.isfile(os.path.join('static/images/', '{}.{}'.format(hash_name, file_format))):
            file.save(os.path.join('static/images/', '{}.{}'.format(hash_name, file_format)))
        predicted_focal = get_image_class('static/images/' + hash_name + '.' + file_format)
        return jsonify(focal_length=predicted_focal)

    else:
        errormessages = [{"message": "No file uploaded. Please try uploading a file."}]
        return jsonify(errors=errormessages), 404

@api_class_img.route('/api/v1/class_img', methods=['POST'])
def api_class_img_route():
    options = {}
    if request.method == 'POST':
        if 'file' not in request.files:
            print 'No file part'
        else:
            print request.files["file"].filename
        # file = request.files["file"] # get the file data field from the JSON object
        # return api_class_img_post(file)
        return jsonify(focal_length = "50mm"), 200
    return jsonify(""), 404
