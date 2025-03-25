"use client";

import React from "react";
import { Button } from "./ui/button";
import { SignedOut, SignUpButton } from "@clerk/nextjs";
const HeroSection = () => {
  return (
    <div className=" p-4 flex flex-col gap-4 justify-center items-center">
      <div className="text-2xl text-center md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
        Transform Your Approach to Campaign Management
      </div>
      <p className="md:w-sm text-sm text-center text-jet  dark:text-gray-300 md:text-xl lg:text-2xl">
        Revolutionize the way you manage tasks, boost productivity, and achieve
        seamless collaboration with innovative project management strategies.
      </p>
      <SignedOut>
        <SignUpButton>
          <Button variant={"blue"} size={"lg"}>
            Get Started
          </Button>
        </SignUpButton>
      </SignedOut>
    </div>
  );
};

export default HeroSection;
