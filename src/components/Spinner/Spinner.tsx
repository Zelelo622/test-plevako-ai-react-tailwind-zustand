import { ReactElement } from "react";

export default function Spinner(): ReactElement {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-inherit z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}
