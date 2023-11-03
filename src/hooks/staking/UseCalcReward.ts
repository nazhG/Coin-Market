import {
    useContractRead
} from "wagmi";
import { abi as STAKINGABI } from "@/contracts/Stake.json"

const useCalcReward = (stakingAddr: `0x${string}`, accountAddr: `0x${string}`) => {
    const { data: reward } =
    useContractRead({
        address: stakingAddr,
        abi: STAKINGABI,
        functionName: "calcReward",
        args: [
            accountAddr,
        ],
        watch: true,
    });

    return {
        reward
    };
};

export default useCalcReward;