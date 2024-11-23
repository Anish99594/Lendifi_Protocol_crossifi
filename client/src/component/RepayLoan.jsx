import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
  useReadContract,
} from "wagmi";
import { formatUnits, parseEther } from "ethers";
import { toast } from "react-hot-toast";

import { LENDINGANDBORROWING, LENDINGANDBORROWINGABI } from "../abi/constant";
import { useState } from "react";


function RepayLoan() {



  const { writeContractAsync, isPending } = useWriteContract();
  const CONTRACT_ADDRESS = LENDINGANDBORROWING;
  const HandleRepay = async () => {
    e.preventDefault();
    try {
      await toast.promise(
        (async () => {
          //  const amount  = value.toString()
          //  const argsamount = prompt("Enter the amount in wei");
          //   const argument1 = parseEther(argsamount).toString();
          // Prepare contract call
          console.log("Amount", amount);
          const { hash } = await writeContractAsync({
            address: CONTRACT_ADDRESS,
            abi: LENDINGANDBORROWINGABI,
            functionName: "repayLoan",
            args: [argument1],
            value: amount,
          });
        })(),
        {
          loading: `Approving token ...`, // Loading state message
          success: (hash) => `Approval successful! Transaction Hash:`, // Success state message with the hash
          // error: (error) => `Approval failed: ${error.message}`, // Error state message
        }
      );
    } catch (err) {
      // console.log("error message" , err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="form-container">
      <h2 className="text-sm  font-semibold  text-gray-500 underline">
        Repay Loan
      </h2>
      <form>
        <label>Repayment Amount:-</label>
        <input type="number" placeholder="Enter repayment amount" />
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Repay Loan
        </button>
      </form>
    </div>
  );
}
export default RepayLoan;
