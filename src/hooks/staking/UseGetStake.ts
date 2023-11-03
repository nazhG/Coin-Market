import {
    useContractRead
} from "wagmi";
import { abi as STAKINGABI } from "@/contracts/Stake.json"

const useGetStake = (stakingAddr: `0x${string}`, accountAddr: `0x${string}`) => {
    const toObject = (ob: unknown) => {
        return JSON.parse(JSON.stringify(ob, (key, value) =>
            typeof value === 'bigint'
                ? value.toString()
                : value // return everything else unchanged
        ));
    }
    const { data: stake } =
        useContractRead({
            address: stakingAddr,
            abi: STAKINGABI,
            functionName: "getStake",
            args: [
                accountAddr,
            ],
            watch: true,
        });

    if (!stake) {
        return {
            stake: {
                tier: 0,
                amount: 0,
                startTimestamp: 0,
                nextBidUp: 0,
            }
        };
    }

    let _stake = toObject(stake);

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