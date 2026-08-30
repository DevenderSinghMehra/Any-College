"use client";
import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";
import { SpriteIcon } from "../SpriteIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/src/store/store";
import Link from "next/link";
import { setCurrentCollege } from "@/src/store/slices/currentCollegeSlice";
import { College } from "@/src/store/slices/collegeSlice";

//!optimize isValidChar later.
export function SearchBar() {
  const [text, setText] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const prevChar = useRef("");
  const dispatch = useDispatch();
  const colleges = useSelector((state: RootState) => state.college.colleges);
  const suggestions = useMemo(() => {
    const query = text.trim().toLowerCase();
    if (!query) return [];

    const matches = colleges.filter(({ name, city, state }) =>
      [name, city, state].join("").includes(text),
    );
    return matches.slice(0, 6);
  }, [colleges, text]);



  const showSuggestions = text.trim().length > 0;

  function isValidChar(char: string): boolean {
    let state: boolean = false;

    if (char === " " && char === prevChar.current) {
      state = false; //isSpaceRepeat -- let the extra be there more explicit
    } else if (char === "-" || char === ":" || char === " ") {
      //only this 2 symbols are allowed.
      state = true;
    } else {
      const code = char.toLowerCase().charCodeAt(0);
      if (code >= 97 && code <= 122) state = true; //isAlphabet
    }
    // --
    prevChar.current = char; //update for all

    return state;
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const value: string = e.currentTarget.value;
    if (value) {
      const lastChar: string = value[value.length - 1];
      if (!isValidChar(lastChar)) return;
    }
    setText(value); //"" and value are allowed
  }

  function selectCollege(college: College) {
    setIsFocus(false);
    dispatch(setCurrentCollege(college));
  }

  return (
    <div className="relative flex flex-1 lg:max-w-[580px]">
      <div
        className={`flex w-full items-center gap-3 rounded-xl ${isFocus ? "outline-2 outline-slate-500" : ""}  bg-[#fafafa] px-5`}
      >
        <SpriteIcon
          className="size-5 shrink-0 text-slate-500"
          aria-hidden="true"
          iconName="search"
        />
        <input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={onChangeHandler}
          value={text}
          className="flex-1 py-3 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
          placeholder="Search for Colleges, Exams, Courses and More.."
          aria-label="Search colleges, exams, and courses"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={showSuggestions}
          aria-controls="college-suggestions"
          type="text"
        />
      </div>
      <button className="text-white hidden md:block rounded-xl active:bg-rose-300 ml-4 font-semibold bg-rose-500 py-3 px-6">
        Search
      </button>
      {showSuggestions && (
        <div
          id="college-suggestions"
          role="listbox"
          className="absolute left-0 right-0 top-full max-h-[60vh] z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
        >
          {suggestions.length > 0 ? (
            suggestions.map((college) => {
              const { name, city, state } = college;
              return (
                <Link
                  href={`/colleges/${name}${city}`}
                  key={`${name}-${city}`}
                  className="block w-full px-4 py-3 text-left transition-colors hover:bg-red-50 focus:bg-red-50 focus:outline-none"
                  onClick={() => selectCollege(college)}
                >
                  <span className="block uppercase truncate text-sm font-medium text-slate-800">
                    {name}
                  </span>
                  <span className="mt-0.5 capitalize block truncate text-xs text-slate-500">
                    {city ? `${city},` : ""} {state}
                  </span>
                </Link>
              );
            })
          ) : (
            <strong className="px-4 inline-block py-3 text-sm text-slate-500">
              No colleges found
            </strong>
          )}
        </div>
      )}
    </div>
  );
}
