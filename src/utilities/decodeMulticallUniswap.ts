import { decodeFunctionData, Hex, isHex } from "viem";
import { abi } from "./abis/uniPositionManagerV3";

export const decodeMulticallUniswap = ({ callData }: { callData: string }) => {
  if (!isHex(callData)) {
    throw new Error("Call data passed is not valid (not a hex value)");
  }
  const firstDecode = decodeFunctionData({ abi: abi, data: callData });

  const calls = firstDecode.args[0];
  if (!Array.isArray(calls)) {
    throw new Error("Decoded call data might not be from a multicall");
  }
  const decodedCalls = calls.map((call) => {
    return decodeFunctionData({ abi, data: call });
  });
  return decodedCalls;
};
