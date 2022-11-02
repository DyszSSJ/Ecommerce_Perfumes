import { useContext } from "react";
import PerfumesContext from "../context/perfumesProvider";

const usePerfumes = () => {
  return useContext(PerfumesContext);
};

export default usePerfumes;