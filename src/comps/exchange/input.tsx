import React from "react";

const Input = () => {
  return (
    <div>
      <small>Cantidad</small>
      <input type="number" />
      <select name="typeCurrency1" id="typeCurrency1">
        <option value="cop">COP</option>
      </select>
    </div>
  );
};

export default Input;
