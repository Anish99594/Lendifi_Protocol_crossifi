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

function Borrow() {
  const [value, setValue] = useState("");

  const { writeContractAsync, isPending } = useWriteContract();
  const CONTRACT_ADDRESS = LENDINGANDBORROWING;

  const handleBorrowingClick = async (e, value) => {
    e.preventDefault();
    console.log("Borrowing button clicked", value);
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
    <div className="form-container">
      <h2 className="text-sm  font-semibold  text-gray-500 underline">
        {" "}
        Borrow Funds &nbsp; &nbsp;{" "}
      </h2>
      <form>
        <label>Amount to Borrow:-</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            handleBorrowingClick(e, value);
          }}
        >
          {" "}
          Borrow
        </button>
      </form>
    </div>
  );
}
export default Borrow;
