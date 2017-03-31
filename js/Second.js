import $ from 'jquery';
import React from "react";

import Header from "./Header";

// function ajaxCall() {
//   console.log($("#fileIn").val().split('\\').slice(-1).join(''));
//   console.log($("input[name='focal']:checked").val());
//   $.ajax({
//     type: "POST",
//     url: "http://0.0.0.0:3000/api/v1/class_img",
//     data:
//     {
//       name: $("#fileIn").val().split('\\').slice(-1).join(''),
//       // focal: $("input[name='focal']:checked").val()
//     },
//     success: function() {
//       console.log("Success!");
//       return false;
//     },
//     dataType: 'json'
//   });
// }

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
