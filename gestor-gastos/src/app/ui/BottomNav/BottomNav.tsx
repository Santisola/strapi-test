"use client";

import React, { useState } from "react";
import { NuevoGastoButton } from "./components/ButtonNuevoGasto/NuevoGastoButton";
import { FormNuevoGasto } from "./components/FormNuevoGasto/FormNuevoGasto";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./styles.css";
import { HomeIcon } from "./components/Icons/HomeIcon";
import { GastosIcon } from "./components/Icons/GastosIcon";
import { ReportesIcon } from "./components/Icons/ReportesIcon";
import { UserIcon } from "./components/Icons/UserIcon";

export const BottomNav = ({ tiposDeGastos }: any) => {
  const [isNuevoGastoActive, setIsNuevoGastoActive] = useState(false);
  const path = usePathname();

  return (
    <>
      <nav id="bottomNav">
        <FormNuevoGasto
          isOpen={isNuevoGastoActive}
          tiposDeGastos={tiposDeGastos}
        />
        <ul>
          <li className={path === "/" ? "active" : ""}>
            <Link href="/">
              <HomeIcon />
              Inicio
            </Link>
          </li>
          <li className={path === "/gastos" ? "active" : ""}>
            <Link href="/gastos">
              <GastosIcon />
              Gastos
            </Link>
          </li>

          <li>
            <NuevoGastoButton
              handleToggleClick={() =>
                setIsNuevoGastoActive(!isNuevoGastoActive)
              }
              isOpen={isNuevoGastoActive}
            />
          </li>

          <li className={path === "/reportes" ? "active" : ""}>
            <Link href="/reportes">
              <ReportesIcon />
              Reportes
            </Link>
          </li>

          <li className={path === "/perfil" ? "active" : ""}>
            <Link href="/">
              <UserIcon />
              Perfil
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
