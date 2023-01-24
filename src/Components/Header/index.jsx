import React, { useState } from "react";
import { Link } from "react-router-dom";
//
import FontAwesome from "../FontAwesome";
import Navigation from "./components/Navigation";
import SearchModal from "./components/SearchModal";

export default function Header({ className }) {
  const [searchShow, setSearchShow] = useState(false);

  return (
    <>
      <div className={`menu4 ${className ? className : ''}`}>
        <div className="container">
          <div className="main-menu">
            <div className="main-nav clearfix is-ts-sticky">
              <div className="row justify-content-between align-items-center">
                <Navigation/>
                <div className="col-lg-1 text-right h-100 d-flex align-items-center justify-content-end p-0">
                  <div
                    className="search4"
                    onClick={() => setSearchShow(!searchShow)}
                  >
                    <FontAwesome name="search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchShow ? (
        <SearchModal setSearchShow={setSearchShow} searchShow={searchShow} />
      ) : null}
    </>
  );
}
