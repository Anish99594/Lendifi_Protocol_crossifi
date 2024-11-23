function Dashboard() {
  // Mock data to represent smart contract calls
  const depositedAmount = "00"; // `getDonatedAmount`
  const earnedInterest = "00"; // `getInterest`
  const loanAmount = "00"; // `getTotalLoanAmount`
  const loanInterest = "00"; //`getInterestForLoan`
  const collateralAmount = "00"; // `getCollateralAmt`

  return ( 
    <div className=" main-content  bg-opacity-45 opacity-75">
      <h2 className=" text-xl pb-6 text-gray-500 underline  font-semibold ">Your Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-item flex  justify-between">
          <h3>Total Deposited</h3>
          <p>  :</p>
          <p>{depositedAmount}</p>
        </div>
        <div className="dashboard-item flex  justify-between">
          <h3>Earned Interest</h3>
          <p> :</p>
          <p>{earnedInterest}</p>
        </div>
        <div className="dashboard-item flex  justify-between">
          {" "}
          <h3>Total Loan</h3>
          <p> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; :</p>
          <p>{loanAmount} </p>
        </div>
        <div className="dashboard-item flex  justify-between">
          {" "}
          <h3>Loan Interest</h3>
          <p>&nbsp; &nbsp; :</p>
          <p>{loanInterest}</p>
        </div>
        <div className="dashboard-item flex  justify-between">
          {" "}
          <h3>Collateral</h3>
          <p>&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :</p>
          <p>{collateralAmount}</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
