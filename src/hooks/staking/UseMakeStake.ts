import {
    useContractWrite,
    usePrepareContractWrite
} from "wagmi";
import SCError from "../errorInterface";
import { abi as STAKINGABI } from "@/contracts/Stake.json"
import { BigNumber } from "ethers";

const useMakeStake = (stakingAddr: `0x${string}`, tier: number, amount: BigNumber, referAddr: `0x${string}`) => {

    const { config, error: contractWriteError } = usePrepareContractWrite({
        address: stakingAddr,
        abi: STAKINGABI,
        functionName: "makeStake",
        args: [
            tier,
            amount.toBigInt(),
            referAddr
        ],
    });

    const {
        data: writeData,
        isLoading: writeLoading,
        write,
    } = useContractWrite(config); 

    return {
        stakeData: writeData,
        stakeLoading: writeLoading,
        stake: write,
        stakeError: contractWriteError as SCError,
    };

}

export default useMakeStake;