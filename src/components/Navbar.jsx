import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="mx-auto flex justify-between p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu />
        </div>
        <p>
          Yum<span>Eats</span>
        </p>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}
