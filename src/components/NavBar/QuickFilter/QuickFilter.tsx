"use client";
import { useEffect, useState } from "react";
import { SpriteIcon } from "../../SpriteIcon";
import { DropDown } from "./DropDown";

export function QuickFilter() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.className = `bg-black/30 backdrop-blur-sm`;
    else document.body.className = ``;
  }, [isOpen]);

  return (
    <div className={isOpen ? "relative" : ""}>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="hidden md:flex opacity md:gap-2 shrink-0 border-l border-slate-200 pl-4"
      >
        <span
          aria-label="quick-filter select course and city"
          className="*:shrink-0 md:flex md:flex-col md:text-left "
        >
          <span className="text-xs  text-red-500">◇ Select Course & City</span>
          <span className="block font-bold text-sm text-slate-800">
            Nothing Selected
          </span>
        </span>
        <SpriteIcon
          className="size-4 stroke-2 self-end"
          iconName="down-arrow"
          aria-hidden="true"
        />
      </button>
      <DropDown isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
