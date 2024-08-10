import { DecodeUniV3 } from "./components";
import { decodeMulticallUniswap, stringifyBI } from "./utils";

window.decode = decodeMulticallUniswap;
window.stringify = stringifyBI;

function App() {
  return (
    <>
      <div className="bg-sky-100 w-full h-screen">
        <div className="max-w-2xl mx-auto">
          <DecodeUniV3 />
        </div>
      </div>
    </>
  );
}

export default App;
