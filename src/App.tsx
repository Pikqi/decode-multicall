import { DecodeSingeltonMulticall } from "./components";
import { abi as uniV3 } from "./utils/abis/uniPositionManagerV3";
import { abi as dswap } from "./utils/abis/dswapManager";

function App() {
  return (
    <>
      <div className="bg-sky-100 w-full">
        <div className="max-w-2xl mx-auto space-y-8 ">
          <DecodeSingeltonMulticall abi={dswap} title="DSWAP" />
          <DecodeSingeltonMulticall abi={uniV3} title="UNISWAP V3" />
        </div>
      </div>
    </>
  );
}

export default App;
