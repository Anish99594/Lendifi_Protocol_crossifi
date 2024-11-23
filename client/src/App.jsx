import { useState } from "react";
import "./App.css";
import "./Tanker_Complete/Fonts/WEB/css/tanker.css";
import Wallet from "./wallet/Wallet";
import Dashboard from "./component/Dashboard";
import Deposit from "./component/Deposit";
import Withdraw from "./component/Withdraw";
import Borrow from "./component/Borrow";
import RepayLoan from "./component/RepayLoan";

function App({children}) {
  const [activeTab, setActiveTab] = useState("deposit");

  return (
    <div className="relative  ">
     
      <div className=" app-container    ">
        <header className=" text-white pb-2 bg-gradient-to-r from-[#902923] to-[#ce7472]    ">
          <h1 className=" uppercase pt-3 pb-2 text-4xl font-bold ">LendFi Protocol</h1>
          <nav className=" flex flex-row gap-6 navbar flex-wrap  justify-center  pb-2 ">
         
            <button
              className="bg-[#B9BAA3] "
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
            {/* <Wallet /> */}
            {/* connect button */}
            {children}
          </nav>
         
        </header>
        <div >
          <div className="flex flex-col gap-7 mt-6">
            <main className="main-content  ">
              {activeTab === "deposit" && <Deposit />}
              {activeTab === "withdraw" && <Withdraw />}
              {activeTab === "borrow" && <Borrow />}
              {activeTab === "repay" && <RepayLoan />}
            </main>
            <div className="   hidden rounded  sm:block  ">
              <Dashboard />
            </div>

            {/* visible on mobile */}
            <div className=" block sm:hidden rounded   mb-24  ">
              <Dashboard />
            </div>
          </div>
        </div>
        <footer className="footer  bg-gradient-to-r from-[#902923] to-[#ce7472]  ">
          <p className="py-3">
          &copy; Empowering decentralized finance through secure lending and
            borrowing
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
