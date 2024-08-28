import { Abi, decodeFunctionData, isHex } from "viem";
import { stringifyBI } from "./stringifyBI";

export const decodeSingeltonMulticall = ({
  callData,
  abi,
}: {
  callData: string;
  abi: Abi;
}) => {
  if (!isHex(callData)) {
    throw new Error("Call data passed is not valid (not a hex value)");
  }
  const firstDecode = decodeFunctionData({ abi: abi, data: callData });

  //@ts-expect-error aaa
  const calls = firstDecode.args[0];
  if (!Array.isArray(calls)) {
    throw new Error("Decoded call data might not be from a multicall");
  }
  const decodedCalls = calls.map((call) => {
    return decodeFunctionData({ abi, data: call });
  });
  return stringifyBI(decodedCalls, 4);
};
