import React from "react";

export default function NotificationOverlay() {
  return (
    <div id="notification-overlay" className="overlay overlay-inactive">
      <h2>Notifications</h2>
      <div id="notifications-overlay-follow-request">
        <div id="nofq-info">
          <p>Follow requests</p>
          <p>jimmy_john + 1 other</p>
        </div>
      </div>
      -------------------
      <h4>This Month</h4>
      {/* Turn this into a component */}
      <div className="notification-bubble">
        <span style={{ fontWeight: "bold" }}>fran_fran24</span> mentioned you in
        a comment: lorem ipsum dolor et ...
      </div>
    </div>
  );
}
