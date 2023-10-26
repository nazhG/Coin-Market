import {
    erc20ABI,
    useContractWrite,
    usePrepareContractWrite
} from "wagmi";
import { BigNumber } from "ethers";
import SCError from "../errorInterface";

const useApprove = (tokenAddr: `0x${string}`, accountAddr: `0x${string}`, amount: BigNumber) => {

    const { config, error: contractWriteError } = usePrepareContractWrite({
        address: tokenAddr,
        abi: erc20ABI,
        functionName: "approve",
        args: [
            accountAddr,
            amount.toBigInt(),
        ],
    });

    // Get the write function
    const {
        data: writeData,
        isLoading: writeLoading,
        write,
    } = useContractWrite(config);

    return {
        approveData: writeData,
        approveLoading: writeLoading,
        approve: write,
        approveError: contractWriteError as SCError,
    };

}

export default useApprove;