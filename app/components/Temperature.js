import React from "react";
import Card from "./Card";

export default function Temperature() {
  return (
    <Card>
      <h6 class="feature-name">Current Temperature</h6>
      <div class="feature-main">
        <img
          class="max-w-20"
          src="./assets/icons/icon_tempareture.png"
          alt="rain icon"
        />
        <h3 class="feature-title">246.43°C</h3>

        <span class="feature-name">Feels Like 244°C</span>
      </div>
    </Card>
  );
}
