"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import { useState } from "react";
import "./globals.css";
import AppContext from "./context/appContext";

import Users from "./context/userData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [data, setData] = useState(Users)
  const [stats, setStats] = useState(false);
  const [resources, setResources] = useState(false);
  const [certificates, setCertificates] = useState(false);
  const [dashboardMenu, setDashboardMenu] = useState(true);
  const [checklistsShow, setChecklistsShow] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppContext.Provider value={{ data, setData, dashboardMenu, setDashboardMenu, checklistsShow, setChecklistsShow, stats, setStats, resources, setResources, certificates, setCertificates }}>
          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
}
