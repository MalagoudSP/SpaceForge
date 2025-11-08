import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PlanetListMaker from "../components/PlanetListMaker";
import PlanetDescMaker from "../components/PlanetDescMaker";
import TitleMaker from "../components/TitleMaker";
import Containers from "../components/Containers";
export default function Destination({ data }) {
  const deafultPlanet = data[0].name;
  // set the first item in the data list as deafult value
  const [planet, setPlanet] = useState(deafultPlanet);

  return (
    <Containers.MainWrapper element={"destination"}>
      <Containers.ContextHolder>
        <div
          className="flex flex-col max-lg:items-center
            justify-start "
        >
          <TitleMaker code={"02"} text={"PICK YOUR DESTINATION"} />
          <div
            className="
                min-h-planet-wrapper-mobile
                md:min-h-planet-wrapper-tablet
                min-lg:min-h-planet-wrapper-desktop
                flex items-center
                min-2xl:items-end"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={planet}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img
                  loading="eager"
                  className="
                          max-h-planet-pic-mobile 
                          min-md:max-h-planet-pic-tablet min-md:w-planet-pic-tablet
                          min-lg:max-h-planet-pic-desktop min-lg:w-planet-pic-desktop
                          min-2xl:min-h-planet-pic-bigDesktop min-2xl:min-w-planet-pic-bigDesktop"
                  src={`./destination/image-${planet.toLowerCase()}.webp`}
                  alt={`an image of ${planet}`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* description holder */}
        <Containers.TextContainer>
          <section
            className="w-full min-lg:flex min-lg:flex-col
              min-lg:justify-end min-lg:h-full "
          >
            <section
              className=" flex flex-row justify-center gap-[5vw] 
                  min-lg:justify-start"
            >
              {
                <PlanetListMaker
                  planetData={data}
                  set={setPlanet}
                  current={planet}
                />
              }
            </section>
            {<PlanetDescMaker planetData={data} current={planet} />}
          </section>
        </Containers.TextContainer>
      </Containers.ContextHolder>
    </Containers.MainWrapper>
  );
}
