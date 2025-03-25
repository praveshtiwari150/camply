"use client";

import React from "react";
import { ToggleTheme } from "./ToggleTheme";
import { useTheme } from "next-themes";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { resolvedTheme } = useTheme();

  return (
    <nav
      className={`bg-gradient-to-r from-blue-50 dark:from-ebony to-background w-full flex justify-between items-center p-4 border-b  h-24`}
    >
      <div className={`text-3xl font-bold text-blue-600 cursor-pointer`}>
        Camply
      </div>
      <div className="flex gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button variant={"blue"} size={"lg"}>Sign In</Button>
          </SignInButton>  
        </SignedOut>
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
