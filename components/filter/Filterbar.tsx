"use client"

import Button from "../Button";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import Price from "./Price";

export default function Filterbar() {
  const clear = () => {

  }

  return (
    <div className="min-w-80 max-w-80">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-[34px] text-[#4A4A4A]">Filters</h1>
        <Button 
          className="flex flex-col font-semibold text-[18px] text-[#FAA500] justify-end pb-2 hover:text-[#FFC045]"
          onClick={clear}
        >
          Clear All
        </Button>
      </div>
      <hr className="border border-[#D1D1D1]"/>
      <div className="flex flex-col gap-y-3 mt-5">
        <Dropdown 
          label="Avaliability"
        >
          <Checkbox label="In Stock" amount={10}/> 
          <Checkbox label="Pre Order" amount={5}/> 
        </Dropdown>
        <hr className="border border-[#D1D1D1]"/>
        <Dropdown
          label="Price"
        >
          <Price max={100}/>          
        </Dropdown>
        <hr className="border border-[#D1D1D1]"/>
        <Dropdown 
          label="Category"
        >
          <Checkbox label="Body Styling" amount={10}/> 
          <Checkbox label="Exterior Styling" amount={5}/> 
          <Checkbox label="Engine / Driveline" amount={5}/> 
          <Checkbox label="Tuning" amount={5}/> 
          <Checkbox label="Exhausts" amount={5}/> 
        </Dropdown>
        <hr className="border border-[#D1D1D1]"/>
        <Dropdown 
          label="Brand"
        >
          <Checkbox label="ST Suspension" amount={10}/> 
          <Checkbox label="KW Suspension" amount={5}/> 
          <Checkbox label="Velocity AP" amount={5}/> 
          <Checkbox label="Akrapovic" amount={5}/> 
          <Checkbox label="GiroDisc" amount={5}/> 
        </Dropdown>
      </div>

        
    </div>
  )
}
