import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">ShopList</h1>
      <input
        className="search"
        type="text"
        name="text"
        value=""
        placeholder="Adauga produs in lista"
      />
      <select className="select">
        <option>Cantitate</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <button className="btn" type="submit" onClick="Press()">
        Adauga
      </button>
    </div>
  );
}
