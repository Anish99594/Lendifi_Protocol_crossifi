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

function Deposit() {
  const [value, setValue] = useState("");

  const { writeContractAsync, isPending } = useWriteContract();
  const CONTRACT_ADDRESS = LENDINGANDBORROWING;

  // handleLandingClick
  const handleLandingClick = async (e, value) => {
    e.preventDefault();

    console.log("Landing button clicked");
    console.log("deposit input value",value);

    try {
      await toast.promise(
        (async () => {
          const amount = value.toString();
          // Prepare contract call
          console.log("Amount", amount);

          const { hash } = await writeContractAsync({
            address: CONTRACT_ADDRESS,
            abi: LENDINGANDBORROWINGABI,
            functionName: "deposit",
            args: [],
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

  // input changes
  const handleInputChange = async (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="form-container">
      <h2 className=" text-sm  font-semibold  text-gray-500 underline">
        Deposit Funds
      </h2>
      <form>
        <label>Amount to Deposit:-</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={value}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          onClick={(e) => {
            handleLandingClick(e,value);
          }}
        >
          Deposit
        </button>
      </form>
    </div>
  );
}
export default Deposit;
