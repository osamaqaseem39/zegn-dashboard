import React from "react";
import { Outlet } from "react-router";
import PublicRoute from "../components/auth/PublicRoute";

export default function AuthLayout() {
  return (
    <PublicRoute>
      <Outlet />
    </PublicRoute>
  );
}
