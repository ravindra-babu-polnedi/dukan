import React from "react";
import "./index.css";
import { IoSearchOutline } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { FaSortDown } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const dataArray = [
  {
    OrderID: "#281209",
    OrderDate: "7 July, 2023",
    OrderAmount: "₹ 1278.23",
    TransactionFees: "₹ 22",
  },
  {
    OrderID: "#281209",
    OrderDate: "7 July, 2023",
    OrderAmount: "₹ 1278.23",
    TransactionFees: "₹ 22",
  },
  {
    OrderID: "#281209",
    OrderDate: "7 July, 2023",
    OrderAmount: "₹ 1278.23",
    TransactionFees: "₹ 22",
  },
  {
    OrderID: "#281209",
    OrderDate: "7 July, 2023",
    OrderAmount: "₹ 1278.23",
    TransactionFees: "₹ 22",
  },
  {
    OrderID: "#281209",
    OrderDate: "7 July, 2023",
    OrderAmount: "₹ 1278.23",
    TransactionFees: "₹ 22",
  },
  {
    OrderID: "#281209",
    OrderDate: "7 July, 2023",
    OrderAmount: "₹ 1278.23",
    TransactionFees: "₹ 22",
  },
  {
    OrderID: "#281209",
    OrderDate: "7 July, 2023",
    OrderAmount: "₹ 1278.23",
    TransactionFees: "₹ 22",
  },
  {
    OrderID: "#281209",
    OrderDate: "7 July, 2023",
    OrderAmount: "₹ 1278.23",
    TransactionFees: "₹ 22",
  },
];

const ContentBody = () => {
  return (
    <div className="body-container hideScroll">
      <div className="overview-container">
        <div className="sub-heading">Overview</div>
        <select className="sort-by-container">
          <option value="category">Last Month</option>
        </select>
      </div>
      <div className="second-container">
        <div className="order-container">
          <div className="text">Online orders</div>
          <div className="amount">231</div>
        </div>
        <div className="order-container">
          <div className="text">Amount recieved</div>
          <div className="amount">₹ 23,92,312.19</div>
        </div>
      </div>
      <div className="trans-container">
        <div className="sub-heading">Transactions | This Month</div>
      </div>
      <div className="shadow">
        <div className="search-sort-container">
          <div className="search-container-2">
            <div className="search-icon-2">
              <IoSearchOutline />
            </div>
            <input
              type="search"
              placeholder="Search by order ID.."
              className="search-bar-2"
            />
          </div>
          <div className="sort-container">
            <div className="inner-sort-container">
              <div> Sort </div>
              <div className="sort-icon">
                <TbArrowsSort />
              </div>
            </div>
            <div className="download-icon">
              <FiDownload />
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th className="order-date">
                <div>Order date</div>
                <div>
                  <FaSortDown />
                </div>
              </th>
              <th className="tar">Order amount</th>
              <th className="trans-fee">
                <div>Transaction fees</div>
                <div>
                  <IoMdInformationCircleOutline
                    style={{ marginTop: "4px", marginLeft: "2px" }}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataArray.map((item) => {
              return (
                <tr>
                  <td className="order-id">{item.OrderID}</td>
                  <td>{item.OrderDate}</td>
                  <td className="tar">{item.OrderAmount}</td>
                  <td className="tar">{item.TransactionFees}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination-container">
          <div className="previous-container">
            <div>
              <GrFormPrevious />
            </div>
            <div className="previous">Previous</div>
          </div>
          <div className="numbers-container">
            <div className="numbers">1</div>
            <div className="numbers">...</div>
            <div className="numbers selected-number">10</div>
            <div className="numbers">11</div>
            <div className="numbers">12</div>
            <div className="numbers">13</div>
            <div className="numbers">14</div>
            <div className="numbers">15</div>
            <div className="numbers">16</div>
            <div className="numbers">17</div>
            <div className="numbers">18</div>
          </div>
          <div className="next-container">
            <div className="next">Next</div>
            <div>
              <GrFormNext />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBody;
