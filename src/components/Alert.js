import React from "react";

function Alert(props) {
  return (
    <div>
      <div className="alert alert-info" role="alert">
        {props.alert.type} {props.alert.msg}
      </div>
    </div>
  );
}

export default Alert;
