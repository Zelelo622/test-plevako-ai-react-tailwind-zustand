import type { ReactElement } from "react";
import { IDividerProps } from "./types";

const Divider = ({ className }: IDividerProps): ReactElement => {
  return <div className={`w-full border-b border-stroke ${className}`} />;
};

export default Divider;
