import React, { useState } from "react";
import Dropdown from "./Dropdown";
// import Test from './Testdropdown'

let components = [
{ "title": "React", "id": "react" },
 { "title":"Angular", "id": "angular" }, 
{ "title": "Vue", "id": "vue" }, 
{ "title":"Ember", "id": "ember" } 
];
let color=["red", "green", " black"]
 
let arr= components.map((user)=> user.title)
let newArr= arr.concat(color)
console.log(newArr);

export default function Home() {
  

  return (
    <div>
      <h1>Home Page</h1>
      <Dropdown data={newArr} />
      {/* <Test data={newArr} /> */}
    </div>
  );
}