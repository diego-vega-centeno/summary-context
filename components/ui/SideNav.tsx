"use client";
import NavLinks from "./NavLinks";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function SideNav() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="h-11/12">
        <NavLinks />
      </div>
      <div className="h-1/12">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <Sun className="h-8 w-8 p-1 rounded-full hover:cursor-pointer hover:bg-[var(--foreground)] hover:text-[var(--background)]" />
          ) : (
            <Moon className="h-8 w-8 p-1 rounded-full hover:cursor-pointer hover:bg-[var(--foreground)] hover:text-[var(--background)]" />
          )}
        </button>
      </div>
    </div>
  );
}
