import { SearchBar } from "./SearchBar";
type DropDownProps = {
  isOpen: boolean;
  setIsOpen: Function;
};
export function DropDown({ isOpen, setIsOpen }: DropDownProps) {
  return (
    <div
      className={`p-4 top-[166%] bg-white w-[60vw] max-w-2xl to-30% absolute ${isOpen ? "block" : "hidden"}`}
    >
      <div className="flex mb-3 justify-between">
        <h3 className="font-bold text-[16px] ">Select Your Preference</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-blue-900 font-semibold"
        >
          Close
        </button>
      </div>
      <SearchBar />

      
    </div>
  );
}
