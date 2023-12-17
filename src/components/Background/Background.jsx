// Importing the necessary dependencies
import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./particles"; // Importing the particle configuration from a separate file

// Defining the Background component
function Background() {
  return (
    // Rendering a <div> to contain the particle animation
    <div>
      {/* Rendering the Particles component with the specified particle configuration */}
      <Particles params={particleConfig} />
    </div>
  );
}

// Exporting the Background component as the default export
export default Background;
