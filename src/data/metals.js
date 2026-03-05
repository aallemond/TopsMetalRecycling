import copperData from "./copper.json";
import brassData from "./brass.json";
import aluminumData from "./aluminum.json";
import stainlessData from "./stainless.json";
import miscData from "./misc.json";
import circuitBoardData from "./escrap.json";
import ramData from "./ram.json";
import cpuData from "./cpu.json";
import wholeData from "./whole.json";

export const metals = [
  { id: "copper", title: "Copper", data: copperData },
  { id: "brass", title: "Brass", data: brassData },
  { id: "aluminum", title: "Aluminum", data: aluminumData },
  { id: "stainless", title: "Stainless Steel", data: stainlessData },
  { id: "misc", title: "Misc", data: miscData },
  { id: "boards", title: "Circuit Boards", data: circuitBoardData },
  { id: "ram", title: "RAM", data: ramData },
  { id: "cpus", title: "CPUs", data: cpuData },
  { id: "whole", title: "Whole Units", data: wholeData }
];
