import React, { useState } from "react";
function calculator() {
  return (
    <div className="calculator">
      <h2>Calcutaor Created By Developer Sonia</h2>
      <div className="display"></div>
      <div className="buttons">
        {[1,2,3,4,5,6,7,8,9,0].map(num) =>
        <button key={num}}
        
      </div>
    </div>
  );
}
