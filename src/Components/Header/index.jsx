import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { searchModalHandler } from "../../Redux/slices/layoutSlice";
//
import FontAwesome from "../FontAwesome";
import Navigation from "./components/Navigation";
import SearchModal from "./components/SearchModal";

export default function Header({ className }) {
  const dispatch = useDispatch();
  const {
    layout: { searchOpened },
  } = useSelector((state) => state);

  const handleSearchOpen = () => dispatch(searchModalHandler());

  return (
    <>
      <div className={`menu4 ${className ? className : ""}`}>
        <div className="container">
          <div className="main-menu">
            <div className="main-nav clearfix is-ts-sticky">
              <div className="row justify-content-between align-items-center">
                <Navigation />
                <div className="col-lg-3 text-right h-100 d-flex align-items-center justify-content-end p-0">
                  <div className="search4" onClick={() => handleSearchOpen()}>
                    <span>Search Web</span>
                    <FontAwesome name="search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchOpened ? (
        <SearchModal
          setSearchShow={() => handleSearchOpen()}
          searchShow={searchOpened}
        />
      ) : null}
    </>
  );
}
