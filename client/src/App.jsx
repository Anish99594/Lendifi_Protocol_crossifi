import React, { useState } from "react";
import "./App.css";
import "./Tanker_Complete/Fonts/WEB/css/tanker.css";
import Wallet from "./wallet/Wallet";

function App() {
  const [activeTab, setActiveTab] = useState("deposit");

  return (
    <div className="app-container">
      <header className="header">
        <Wallet />
        <h1>LendFi Protocol</h1>
        <nav className="nav-bar">
          <button
            onClick={(e) => {
              setActiveTab("dashboard");
              e.preventDefault();
            }}
          >
            Dashboard
          </button>
          <button
            onClick={(e) => {
              setActiveTab("deposit");
              e.preventDefault();
            }}
          >
            Deposit
          </button>
          <button
            onClick={(e) => {
              setActiveTab("withdraw");
              e.preventDefault();
            }}
          >
            Withdraw
          </button>
          <button
            onClick={(e) => {
              setActiveTab("borrow");
              e.preventDefault();
            }}
          >
            Borrow
          </button>
          <button
            onClick={(e) => {
              setActiveTab("repay");
              e.preventDefault();
            }}
          >
            Repay Loan
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "deposit" && <Deposit />}
        {activeTab === "withdraw" && <Withdraw />}
        {activeTab === "borrow" && <Borrow />}
        {activeTab === "repay" && <RepayLoan />}
      </main>

      <footer className="footer">
        <p>
          Empowering decentralized finance through secure lending and borrowing
        </p>
      </footer>
    </div>
  );
}

function Dashboard() {
  // Mock data to represent smart contract calls
  const depositedAmount = 500; // `getDonatedAmount`
  const earnedInterest = 25; // `getInterest`
  const loanAmount = 300; // `getTotalLoanAmount`
  const loanInterest = 15; //`getInterestForLoan`
  const collateralAmount = 120; // `getCollateralAmt`

  return (
    <div className="dashboard-container">
      <h2>Your Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-item">
          <h3>Total Deposited</h3>
          <p>${depositedAmount}</p>
        </div>
        <div className="dashboard-item">
          <h3>Earned Interest</h3>
          <p>${earnedInterest}</p>
        </div>
        <div className="dashboard-item">
          <h3>Total Loan</h3>
          <p>${loanAmount}</p>
        </div>
        <div className="dashboard-item">
          <h3>Loan Interest</h3>
          <p>${loanInterest}</p>
        </div>
        <div className="dashboard-item">
          <h3>Collateral</h3>
          <p>${collateralAmount}</p>
        </div>
      </div>
    </div>
  );
}

function Deposit() {
  return (
    <div className="form-container">
      <h2>Deposit Funds</h2>
      <form>
        <label>Amount to Deposit:</label>
        <input type="number" placeholder="Enter amount" />
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Deposit
        </button>
      </form>
    </div>
  );
}

function Withdraw() {
  return (
    <div className="form-container">
      <h2>Withdraw Funds</h2>
      <form>
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Withdraw
        </button>
      </form>
    </div>
  );
}

function Borrow() {
  return (
    <div className="form-container">
      <h2>Borrow Funds</h2>
      <form>
        <label>Amount to Borrow:</label>
        <input type="number" placeholder="Enter amount" />
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Borrow
        </button>
      </form>
    </div>
  );
}

function RepayLoan() {
  return (
    <div className="form-container">
      <h2>Repay Loan</h2>
      <form>
        <label>Repayment Amount:</label>
        <input type="number" placeholder="Enter repayment amount" />
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Repay Loan
        </button>
      </form>
    </div>
  );
}

export default App;
