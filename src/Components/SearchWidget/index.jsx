import React, { useState } from "react";
//
import { openInNewTab } from "../../Utils/helpers";
import FontAwesome from "../FontAwesome";
//
import "./style.scss";

export default function SearchWidget({ customClass }) {
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    openInNewTab(
      `https://inpressearch.com/search?cid=1004&q=${search}`,
      false
    );
    setSearch("");
  };

  return (
    <div className={`search-widget ${customClass ? customClass : ""}`}>
      <form onSubmit={submitHandler} method="GET">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search Web Here..."
        />
        <button type="submit" className="cbtn1">
          <FontAwesome name="search" />
        </button>
      </form>
    </div>
  );
}
