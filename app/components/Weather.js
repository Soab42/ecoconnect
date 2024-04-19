import React from "react";
import Card from "./Card";

export default function Weather() {
  return (
    <Card>
      <h6 class="feature-name">Current Weather</h6>
      <div class="feature-main">
        <img
          class="max-w-20"
          src="/assets/icons/icon_rain.png"
          alt="rain icon"
        />
        <h3 class="feature-title">Rain</h3>
        <span class="feature-name">Moderate Rain</span>
      </div>
    </Card>
  );
}
