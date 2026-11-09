import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Form } from "react-router-dom";

const SearchBar = ({ setsearchbar }) => {
  return (
    <>
      <div className="bg-white w-86 flex gap-2 items-center justify-evenly h-16 z-100 rounded-2xl ">
        <Form className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-ink-50 border border-ink-300 rounded-[10px] w-[80%] py-2 placeholder:text-ink-400 placeholder:pl-5"
          />
          <button>
            <AiOutlineSearch className="text-4xl hover:text-brand-300 cursor-pointer transition-colors" />
          </button>
          <RxCross1
            onClick={() => setsearchbar(false)}
            className="text-3xl  cursor-pointer"
          />
        </Form>
      </div>
    </>
  );
};

export default SearchBar;
