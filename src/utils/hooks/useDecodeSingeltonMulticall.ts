import { useMemo } from "react";
import { decodeSingeltonMulticall } from "../decodeSingeltonMulticall";
import { isHex, Abi } from "viem";

export const useDecodeSingeltonMulticall = ({
  callData,
  abi,
}: {
  callData: string;
  abi: Abi;
}) => {
  return useMemo(() => {
    if (!isHex(callData)) {
      return;
    }
    try {
      const a = decodeSingeltonMulticall({ callData, abi });
      console.log(a);
      return a;
    } catch (e) {
      return { error: e };
    }
  }, [callData]);
};
