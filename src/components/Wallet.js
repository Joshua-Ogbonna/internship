import { Button } from "@material-ui/core";
import React from "react";
import "../styles/style.css";

function Wallet() {
  return (
    <div className="container">
      <div className="row wallet__section">
        <div className="col-sm-6 col-md-6 col-lg-6 afya">
          <div className="span__container">
            <span className="afya__span">AFYA</span>
          </div>
          <p>143.00</p>

          <span>Balance</span>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 zar">
          <div className="span__container">
            <span className="zar__span">ZAR</span>
          </div>
          <p>R21.00</p>

          <span>Equivalent</span>
        </div>
      </div>

      {/* Dropdown for currency */}
      <div className="currency__section">
        <h3>Select Currency</h3>
        <div class="input-group mb-3">
          <input list="test" placeholder="select desired currency" />
          <datalist className="data__list" id="test">
            <option value="AFYA" />
            <option value="ZAR" />
          </datalist>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
            placeholder="Enter Amount"
          />
        </div>

        <Button>Send </Button>
        <Button>Receive </Button>
      </div>
    </div>
  );
}

export default Wallet;
