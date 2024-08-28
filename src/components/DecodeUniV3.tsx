import React from "react";
import { cx } from "../utils";
import { useDecodeUniswap } from "../utils/hooks/useDecodeUniswap";

const DecodeUniV3: React.FC<{ className?: string }> = ({ className }) => {
  const [callData, setCallData] = React.useState("");
  const decoded = useDecodeUniswap({ callData });
  return (
    <div className={cx("flex flex-col gap-8", className)}>
      <button className="">Decode</button>

      <textarea
        value={callData}
        onChange={(e) => setCallData(e.target.value)}
        rows={5}
        cols={40}
      />
      <textarea value={decoded?.toString()} rows={40}></textarea>
    </div>
  );
};

export { DecodeUniV3 };
