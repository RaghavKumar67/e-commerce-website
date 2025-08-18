import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      {/* Main should allow full-width (for Hero Slider etc.) */}
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
