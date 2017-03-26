import $ from 'jquery';
import React from "react";

import Header from "./Header";

function ajaxCall() {
  console.log(document.getElementById("fileIn").value);
  $.ajax({
    type: "POST",
    url: url,
    data: document.getElementById("fileIn").value,
    success: function() {
      console.log("Success!");
      return false;
    },
    dataType: json
  });
}

export default class Second extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form action="" method="post" enctype="multipart/form-data">
          <input type="file" name="image" id="fileIn"/>
          <button type="button" onClick={ ajaxCall }>Submit</button>
        </form>
      </div>
    );
  }
}
