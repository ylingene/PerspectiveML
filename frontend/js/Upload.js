import $ from 'jquery';
import React from "react";

import Header from "./Header";

export default class Upload extends React.Component {
  // ajaxCall() {
  //   var files  = $('#uploadFile');
  //   // console.log(files);
  //   var formData = new FormData();
  //   formData.append('image', files[0]);
  //   console.log(formData);
  //
  //   // Loop through each of the selected files.
  //   // for (var i = 0; i < files.length; i++) {
  //   //   var file = files[i];
  //   //
  //   //   // Check the file type. Checks if it's an image
  //   //   if (!file.type.match('image.*')) {
  //   //     continue;
  //   //   }
  //
  //   // Add the file to the request.
  //   // formData.append(name, file, filename);
  //   // }
  //
  //   // console.log($("input[name='focal']:checked").val());
  //   $.ajax({
  //     type: "POST",
  //     // contentType: "application/json; charset=UTF-8",
  //     url: "http://0.0.0.0:3000/api/v1/class_img",
  //     data: formData,
  //     processData: false,
  //     contentType: false,
  //     success: function(data) {
  //       var focal_length = data.focal_length;
  //       console.log(focal_length);
  //       return false;
  //     },
  //     error: function(xhr) {
  //       () => JSON.parse(xhr.responseText)["errors"];
  //     }
  //   });
  // }
  //
  // makeReq() {
  //   var postReq = {
  //     method: 'POST',
  //     data: new FormData($("#uploadFile")[0]),
  //     processData: false,
  //     contentType: false
  //   };
  //
  //   console.log(new FormData($("#uploadFile")[0]))
  //
  //   fetch("http://0.0.0.0:3000/api/v1/class_img", postReq).then((data) => {
  //     console.log(data.focal_length);
  //   })
  // }

  render() {
    return (
      <div>
        <Header />
        <form action="http://0.0.0.0:3000/class_img" method="post" encType="multipart/form-data">
          {/* <form id="uploadFile" method="post" encType="multipart/form-data"> */}
          <input type="file" name="file" id="fileIn"/>
          <button type="submit" /*onClick={ this.makeReq }*/>Submit</button>
        </form>
      </div>
    );
  }
}
