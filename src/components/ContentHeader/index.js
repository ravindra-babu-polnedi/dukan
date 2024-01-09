import React from "react";
import "./index.css";
import { MdTextsms } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const ContentHeader = () => {
  return (
    <div className="content-header">
      <div className="payments-container">
        <div>Payments</div>
        <div className="how-container">
          <div className="question-icon">
            <GoQuestion style={{ fontSize: "1em" }} />
          </div>
          <div className="how-text">How it works</div>
        </div>
      </div>
      <div className="search-container">
        <div className="search-icon">
          <IoSearchOutline />
        </div>
        <input
          type="search"
          placeholder="Search features,tutorials,etc.."
          className="search-bar"
        />
      </div>
      <div className="icon-container">
        <div className="icon-1">
          <MdTextsms style={{ fontSize: "1em" }} />
        </div>
        <div className="icon-2">
          <IoMdArrowDropdown
            style={{ fontSize: "1.5em", fontWeight: "bold" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
