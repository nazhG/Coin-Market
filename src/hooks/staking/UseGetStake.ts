import {
    useContractRead
} from "wagmi";
import { abi as STAKINGABI } from "@/contracts/Stake.json"

const useGetStake = (stakingAddr: `0x${string}`, accountAddr: `0x${string}`) => {

    const { data: stake  } =
        useContractRead({
            address: stakingAddr,
            abi: STAKINGABI,
            functionName: "getStake",
            args: [
                accountAddr,
            ],
            watch: true,
        });

    let _stake = JSON.parse(JSON.stringify(stake));

    return {
        stake: {
            tier: _stake?.tier,
            amount: _stake?.amount,
            startTimestamp: _stake?.startTimestamp,
            nextBidUp: _stake?.nextBidUp,
        }
    };

};

export default useGetStake;