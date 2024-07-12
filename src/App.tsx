import { decodeMulticallUniswap } from "./utilities/decodeMulticallUniswap";
import { stringifyBI } from "./utilities/stringifyBI";

window.decode = decodeMulticallUniswap;
window.stringify = stringifyBI;
function App() {
  return (
    <>
      <div className="bg-gray-500 w-full h-screen"></div>
    </>
  );
}

export default App;
