import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import LayoutPage from "../providers/LayoutPage";
import Spinner from "src/components/Spinner/Spinner";

const HomePage = lazy(() => import("../../pages/Home/HomePage"));
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

export const rootRoute = createRootRoute({
  component: LayoutPage,
  notFoundComponent: () => (
    <Suspense fallback={<Spinner />}>
      <NotFoundPage />
    </Suspense>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<Spinner />}>
      <HomePage />
    </Suspense>
  ),
});


const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({ routeTree });
