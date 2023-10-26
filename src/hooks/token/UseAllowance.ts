import {
    erc20ABI,
    useContractRead
} from "wagmi";

const useAllowance = (tokenAddr: `0x${string}`, ownerAddr: `0x${string}`, spenderAddr: `0x${string}`) => {


    const { data: approvedAmount, isLoading: approvedAmountLoading } =
    useContractRead({
      address: tokenAddr,
      abi: erc20ABI,
      functionName: "allowance",
      args: [ownerAddr, spenderAddr],
      watch: true,
    });

    return {
        allowanceAmount: approvedAmount,
        allowanceLoading: approvedAmountLoading,
    };

}

export default useAllowance;