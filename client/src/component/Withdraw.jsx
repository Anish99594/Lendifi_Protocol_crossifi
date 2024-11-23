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



function Withdraw() {

  const { writeContractAsync, isPending } = useWriteContract();
  const CONTRACT_ADDRESS = LENDINGANDBORROWING;
  
  const handleWithdrawClick = async () => {
    console.log("Withdraw button clicked");
    e.preventDefault();
    try {
      await toast.promise(
        (async () => {
          const amount = value.toString();
          const argsamount = prompt("Enter the amount in wei");
          const argument1 = parseEther(argsamount).toString();
          // Prepare contract call
          console.log("Amount", amount);
          const { hash } = await writeContractAsync({
            address: CONTRACT_ADDRESS,
            abi: LENDINGANDBORROWINGABI,
            functionName: "borrow",
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
    <div className="form-container flex flex-col  gap-4 px-12">
      <h2 className="text-sm  font-semibold  text-gray-500 underline">Withdraw Funds:-</h2>
      <form>
        <button 
         type="submit" onClick={(e) => e.preventDefault()}>
          Withdraw
        </button>
      </form>
    </div>
  );
}
export default Withdraw;
