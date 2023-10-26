import {
    useContractRead
} from "wagmi";
import { abi as STAKINGABI } from "@/contracts/Stake.json"

const useGetStake = (stakingAddr: `0x${string}`, accountAddr: `0x${string}`) => {

    const { data: stake} =
    useContractRead({
        address: stakingAddr,
        abi: STAKINGABI,
        functionName: "getStake",
        args: [
            accountAddr,
        ],
        watch: true,
    });

    return {
        stake
    };

};

export default useGetStake;