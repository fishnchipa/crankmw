"use client";

import Anchor from "../Anchor";
import Button from "../Button";
import ArrowMark from "../icons/ArrowMark";
import Select from "../Select";
import HeadlineBackDrop from "./HeadlineBackDrop";

const links = [
  "HOT PRODUCTS",
  "DOWNPIPES",
  "AIR INTAKES",
  "ENGINES",
  "RADIATORS",
  "DIFFUSERS",
  "SUSPENSIONS",
  "BRAKES",
  "FUEL PUMPS",
  "SWAG BARS",
];

const desc =
  "Crank Motor Werkes offers a wide range of services, including custom turbo kits, in-house parts, tuning packages, and dyno hire.  Whether you need turbo upgrades, custom tuning, or performance modifications, Crank Motor Werkes provides tailored solutions for serious power enthusiasts.";

export default function HeadLine() {
  return (
    <div className="flex w-full md:h-[546px] relative overflow-hidden">
      <HeadlineBackDrop />
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full h-full flex items-center gap-x-10 md:flex-row flex-col pt-[100px]">
          <section className="xl:max-w-[600px] xl:min-w-[600px] flex flex-col text-white md:justify-between ml-0 md:ml-[100px] xl:ml-[250px] transition-all duration-300">
            <div className="flex flex-col w-fit gap-y-5 pt-5 px-5 md:p-0">
              <h1 className="w-full text-[34px] font-bold leading-[40px]">
                A New Way To{" "}
                <span className="bg-gradient-to-r from-[#ffdf43] to-[#f5a329] text-transparent inline-block bg-clip-text">
                  Envision
                </span>{" "}
                Productivity
              </h1>
              <div className="flex-col justify-start gap-y-7 xl:flex hidden mb-5">
                <hr className="h-[1px] border-0 bg-white mr-[25%]" />
                <hr className="h-[1px] border-0 bg-white mr-[50%]" />
              </div>
            </div>
            <div className="w-full leading-7 font-noto-sans relative px-5 md:p-0">
              <ArrowMark />
              <p>{desc}</p>
            </div>
          </section>
          <form className="flex flex-col px-10 w-full h-fit gap-y-5 items-end bg-[#4A4A4A] py-10 md:mb-0">
            <div className="flex flex-col w-full gap-x-5 gap-y-5 xl:flex-row">
              <Select label="Make">
                <option value="solid" className="text-black">
                  Solid
                </option>
                <option value="gradient" className="text-black">
                  Gradient
                </option>
                <option value="image" className="text-black">
                  Image
                </option>
              </Select>
              <Select label="Model">
                <option value="solid" className="text-black">
                  Solid
                </option>
                <option value="gradient" className="text-black">
                  Gradient
                </option>
                <option value="image" className="text-black">
                  Image
                </option>
              </Select>
              <Select label="Year">
                <option value="solid" className="text-black">
                  Solid
                </option>
                <option value="gradient" className="text-black">
                  Gradient
                </option>
                <option value="image" className="text-black">
                  Image
                </option>
              </Select>
            </div>
            <Button
              label="SEARCH"
              className="xl:w-[calc(33.33%-13px)] text-white relative group overflow-hidden border-white hover:text-black"
              spanClassName="bg-white"
              type="submit"
            />
          </form>
        </div>
        <div className="w-full h-[102px] flex items-center p-5 xl:pl-[250px] md:pl-[100px] transition-all duration-300">
          <ul className="w-full h-[20px] flex flex-wrap items-center overflow-hidden gap-x-16 text-[#9B9B9B] font-bold whitespace-nowrap">
            {links.map((item) => {
              return (
                <li className="hover:text-[#4A4A4A]" key={item}>
                  <Anchor href="/">{item}</Anchor>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
