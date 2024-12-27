"use client"
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
  const [resourcesMenu, setResourcesMenu] = useState(false);
  const [certificatesMenu, setCertificatesMenu] = useState(false);
  const [dashboardMenu, setDashboardMenu] = useState(true);
  const [checkListsMenu, setCheckListsMenu] = useState(false);
  const [calendarMenu, setCalendarMenu] = useState(false);
  const [selectedChecklist, setSelectedChecklist] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <AppContext.Provider value={{ data, setData, dashboardMenu, setDashboardMenu, checkListsMenu, setCheckListsMenu, stats, setStats, resourcesMenu, setResourcesMenu, certificatesMenu, setCertificatesMenu,calendarMenu,setCalendarMenu, selectedChecklist, setSelectedChecklist }}>
          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
}
