import $ from 'jquery';
import React from "react";

import Header from "./Header";

function ajaxCall() {
  console.log($("#fileIn").val().split('\\').slice(-1).join(''));
  var files  = document.getElementById('fileIn')
  formData = new FormData();

  // Loop through each of the selected files.
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Check the file type. Checks if it's an image
    if (!file.type.match('image.*')) {
      continue;
    }

    // Add the file to the request.
    // formData.append(name, file, filename);
    formData.append('image', file, '');
  }

  // console.log($("input[name='focal']:checked").val());
  $.ajax({
    type: "POST",
    // contentType: "application/json; charset=UTF-8",
    url: "http://0.0.0.0:3000/api/v1/class_img",
    data:
    {
      // name: $("#fileIn").val().split('\\').slice(-1).join(''),
      // focal: $("input[name='focal']:checked").val()
      formData
    },
    dataType: 'json',
    success: function(data) {
      console.log("Success!");
      focal_length = data.focal_length
      return false;
    },
    error: function(xhr) {
      printErrorsJSON(JSON.parse(xhr.responseText)["errors"]);
    }
  });
}

export default class Second extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form action="http://0.0.0.0:3000/class_img" method="post" encType="multipart/form-data">
          <input type="file" name="file" id="fileIn"/>
          {/* <div>
            <input type="radio" name="focal" value="35"/> 35
            <input type="radio" name="focal" value="50"/> 50
            <input type="radio" name="focal" value="85"/> 85
          </div> */}
          <button type="submit" /*onClick={ ajaxCall }*/>Submit</button>
        </form>
      </div>
    );
  }
}
