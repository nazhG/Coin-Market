import {
    erc20ABI,
    useContractRead
} from "wagmi";

const useBalance = (tokenAddr: `0x${string}`, ownerAddr: `0x${string}`) => {


    const { data: approvedAmount, isLoading: approvedAmountLoading } =
    useContractRead({
      address: tokenAddr,
      abi: erc20ABI,
      functionName: "balanceOf",
      args: [ownerAddr],
      watch: true,
    });

    return {
        balance: approvedAmount,
        balanceLoading: approvedAmountLoading,
    };

}

export default useBalance;