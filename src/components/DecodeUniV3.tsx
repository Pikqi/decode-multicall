import React from "react";
import { cx } from "../utils";
import { Abi } from "viem";
import { useDecodeSingeltonMulticall } from "../utils/hooks/useDecodeSingeltonMulticall";

const DecodeSingeltonMulticall: React.FC<{
  className?: string;
  abi: Abi;
  title: string;
}> = ({ className, abi, title }) => {
  const [callData, setCallData] = React.useState("");
  const decoded = useDecodeSingeltonMulticall({ callData, abi });
  return (
    <div className={cx("flex flex-col gap-2", className)}>
      <h1 className="text-lg">{title}</h1>
      <textarea
        value={callData}
        onChange={(e) => setCallData(e.target.value)}
        rows={5}
        cols={40}
      />
      <textarea value={decoded?.error || decoded} rows={30}></textarea>
    </div>
  );
};

export { DecodeSingeltonMulticall };
