// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { SEARCH } from "../actions";
// import "../styles/home/dist/home.css";
// const Search = () => {
//   const [searchChange, setSearchChange] = useState("");
//   const dispatch = useDispatch();
//   const searchBar = (event) => {
//     setSearchChange(event.target.value);
//   };
//   const onSearchSubmit = (e) => {
//     e.preventDefault();
//     dispatch(SEARCH(searchChange));
//   };
//   return (
//     <div>
//       <form onSubmit={onSearchSubmit}>
//         <input type="text" onChange={searchBar} value={searchChange} />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };
// export default Search;
"use strict";