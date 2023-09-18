import React from "react";
import { BiSearch } from "react-icons/bi";
import "./style.css";

export default function InputSearch({ onChange }) {
  return (
    <div className="container_search">
      <BiSearch />
      <input
        type="text"
        placeholder="Pesquise uma categoria"
        onChange={onChange}
        className="search"
      />
    </div>
  );
}
