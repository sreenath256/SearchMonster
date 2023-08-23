import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input
        className="w-72 h-12 mt-5 p-2 rounded-lg outline-none"
        placeholder={props.placeHolder}
        type="text"
        onChange={props.onChange}
        
      />
    </div>
  );
};

export default SearchBox;
