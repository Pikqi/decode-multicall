import { useMemo } from "react";
import { decodeMulticallUniswap } from "../decodeMulticallUniswap";
import { isHex } from "viem";

export const useDecodeUniswap = ({ callData }: { callData: string }) => {
  return useMemo(() => {
    if (!isHex(callData)) {
      return;
    }
    try {
      const a = decodeMulticallUniswap({ callData });
      console.log(a);
      return a;
    } catch (e) {
      return { error: e };
    }
  }, [callData]);
};
