import React from "react";

export const Card = ({ header, body }) => {
  return (
    <div className="card">
      <div className="card-header">
        {header}
      </div>
      <div className="card-body">
        {body}
      </div>
    </div>
  );
};