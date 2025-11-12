import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import LayoutPage from "../providers/LayoutPage";

const HomePage = lazy(() => import("../../pages/Home/HomePage"));
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

export const rootRoute = createRootRoute({
  component: LayoutPage,
  notFoundComponent: () => (
    <Suspense fallback={<div>Загрузка...</div>}>
      <NotFoundPage />
    </Suspense>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<div>Загрузка...</div>}>
      <HomePage />
    </Suspense>
  ),
});


const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({ routeTree });
