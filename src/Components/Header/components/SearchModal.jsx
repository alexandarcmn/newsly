import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { openInNewTab } from "../../../Utils/helpers";

const SearchModal = ({ searchShow, setSearchShow }) => {
  const [search, setSearch] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    openInNewTab(`https://inpressearch.com/search?cid=1004&q=${search}`, false);
    setSearch("");
  };

  return (
    <div className="searching active">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 text-center m-auto">
            <div className="v1search_form">
              <form onSubmit={submitHandler} method="GET">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="Search Web Here..."
                />
                <button type="submit" className="cbtn1">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="close_btn" onClick={() => setSearchShow(false)}>
        <GrClose />
      </div>
    </div>
  );
};

export default SearchModal;
