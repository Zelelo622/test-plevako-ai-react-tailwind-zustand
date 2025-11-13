import { Outlet, useMatches } from "@tanstack/react-router";
import { ReactElement, useMemo } from "react";
import Header from "src/components/Header/Header";

const LayoutPage = (): ReactElement => {
  const matches = useMatches();

  const isNotFound = useMemo(
    () => matches.some((match) => match.globalNotFound),
    [matches]
  );

  if (isNotFound) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container px-4 flex-1 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPage;
