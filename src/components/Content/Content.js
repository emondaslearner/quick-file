import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faPen,
  faQuestion,
  faPlus,
  faGear,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

function Content() {
  return (
    <div className="contentRight">
      <div className="body">
        <div className="head">
          <div className="left">
            <h2>
              <FontAwesomeIcon icon={faCircleArrowLeft} /> <span>Invoice</span>{" "}
              - New Invoice{" "}
              <a href="">
                <FontAwesomeIcon icon={faPen} />
              </a>
            </h2>
          </div>
          <div className="right">
            <p>
              <FontAwesomeIcon className="question" icon={faQuestion} /> Help
            </p>
          </div>
        </div>
        <div className="clientInformation">
          <div className="left">
            <h4>
              Client Name <a href="">(Modify)</a>
            </h4>
            <p>jane deo</p>
            <h4>
              Client Address <a href="">(Modify)</a>
            </h4>
          </div>
          <div className="right">
            <div>
              <label htmlFor="">Invoice Number</label>
              <input value="000006" type="text" />
            </div>
            <div>
              <label htmlFor="">Purchase Reference</label>
              <input value="" type="text" />
            </div>
            <div>
              <label htmlFor="">Payable within</label>
              <input value="07/01/2018" type="text" />
            </div>
            <div>
              <label htmlFor="">Payable within</label>
              <input value="14" type="number" />
              <label htmlFor="">days</label>
            </div>
          </div>
        </div>
        <div className="newLine">
          <div className="left">
            <button>
              <FontAwesomeIcon className="plus" icon={faPlus} /> New Line
            </button>
            <div className="discount">
              <label htmlFor="">Discount</label>
              <input value="0" type="number" />
              <label htmlFor="">%</label>
            </div>
          </div>
          <div className="right">
            <button>English</button>
          </div>
        </div>
        <div className="line">
          <table>
            <tr>
              <th>Takes</th>
              <th>Notes</th>
              <th>Rate</th>
              <th>Hours</th>
              <th>Net Total</th>
            </tr>
            <tr>
              <td>
                <input placeholder="--" type="text" />
              </td>
              <td>
                <input type="text" />
                <FontAwesomeIcon className="setting" icon={faGear} />
              </td>
              <td>
                <input placeholder="0" type="text" />
              </td>
              <td>
                <input placeholder="1" type="text" />
              </td>
              <td>
                <input value="0" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder="--" type="text" />
              </td>
              <td>
                <input type="text" />
                <FontAwesomeIcon className="setting" icon={faGear} />
              </td>
              <td>
                <input placeholder="0" type="text" />
              </td>
              <td>
                <input placeholder="1" type="text" />
              </td>
              <td>
                <input value="0" type="text" />
              </td>
            </tr>
          </table>
          <button>DRAFT</button>
        </div>
        <div className="totalCount">
          <p>
            Sub Total{" "}
            <span>
              <FontAwesomeIcon className="rupe" icon={faIndianRupeeSign} />
              0.00
            </span>
          </p>
          <p>
            Invoice Total{" "}
            <span>
              <FontAwesomeIcon className="rupe" icon={faIndianRupeeSign} />
              0.00
            </span>
          </p>
          <p>
            Paid to Date{" "}
            <span>
              <FontAwesomeIcon className="rupe" icon={faIndianRupeeSign} />
              0.00
            </span>
          </p>
          <p className="total">
            Balance(MBR){" "}
            <span>
              <FontAwesomeIcon className="rupe" icon={faIndianRupeeSign} />
              0.00
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
