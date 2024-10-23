import { RotatingLines } from "react-loader-spinner";

const BtnLoader = () => (
  <RotatingLines
    strokeColor="#010123"
    strokeWidth="5"
    animationDuration="0.75"
    width="24"
    visible={true}
  />
);

export default BtnLoader;
