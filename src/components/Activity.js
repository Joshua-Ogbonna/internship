import React from "react";
import "../styles/style.css";
import FavoriteBorderavatar from "@material-ui/icons/FavoriteBorder";
import Hearingavatar from "@material-ui/icons/Hearing";
import PanToolavatar from "@material-ui/icons/PanTool";

const activities = [
  {
    avatar: FavoriteBorderavatar,
    description: "HIV Blood Draw Test",
    price: "A100",
  },
  {
    avatar: Hearingavatar,
    description: "TB  Radiology XRay",
    price: "A30",
  },
  {
    avatar: PanToolavatar,
    description: "Blood Pressure Test",
    price: "A10",
  },
];

function Activity() {
  return (
    <div className="container activity">
      <h3>Recent Activity</h3>
      <div className="card">
        <div className="list-group list-group-flush">
          <div className="list-group-item">
            <div className="list-group list-group-flush">
              {activities.map((activity) => (
                <div className="list-group-item list__item">
                  <div className="icon">
                    <activity.avatar className="list__icon" />
                  </div>
                  <div className="description">
                    <p> {activity.description} </p>
                  </div>
                  <div className="price">
                    <span> {activity.price} </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
