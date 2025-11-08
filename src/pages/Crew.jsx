import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import CrewProfileMaker from "../components/CrewProfileMaker";
import TitleMaker from "../components/TitleMaker";
import Containers from "../components/Containers";
export default function Crew({ data }) {
  // set the crew that should be presented which as deafult is
  // the first crew of the JSON file
  const deafultPersona = data[0].name;
  const [crewPersona, setCrewPerson] = useState(deafultPersona);
  const crewPresenting = data.find(
    (crew) => crew.name.toLowerCase() === crewPersona.toLowerCase()
  );

  const bubbleMaker = () =>
    data.map((persona) => (
      <span
        key={persona.name}
        onClick={() => {
          setCrewPerson(persona.name);
        }}
        className={`
          hover:cursor-pointer 
          rounded-full 
          w-bubble-small h-bubble-small 
          min-md:w-bubble-large min-md:h-bubble-large
          min-2xl:w-bubble-veryLarge min-2xl:h-bubble-veryLarge
          `}
        style={{
          backgroundColor: crewPersona === persona.name ? "white" : "gray",
        }}
        role="button"
        aria-label="click to check out crews"
      ></span>
    ));

  return (
    <Containers.MainWrapper element={"crew"}>
      <Containers.ContextHolder>
        <Containers.TextContainer>
          <div
            className="flex flex-col items-center  
                          h-[100%] "
          >
            <TitleMaker code={"01"} text={"MEET YOUR CREW"} />
            <AnimatePresence mode="wait">
              <motion.section
                key={crewPersona}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="
                  pt-titleToDescription-small
                  min-md:pt-titleToDescription-large
                  min-2xl:pt-titleToDescription-veryLarge
                  "
              >
                {<CrewProfileMaker current={crewPresenting} />}
              </motion.section>
            </AnimatePresence>
            <div
              className=" 
                    
                    flex flex-row gap-[2vw] justify-centre
                    min-lg:justify-start min-lg:w-full 
                    min-lg:fixed 
                    min-lg:bottom-20 min-lg:left-[165px]
                    min-2xl:bottom-35 min-2xl:left-[165px]
                    
                                "
            >
              {bubbleMaker()}
            </div>
          </div>
        </Containers.TextContainer>
        <AnimatePresence mode="wait">
          <motion.section
            key={crewPersona}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="
                            max-lg:mt-[6vh] 
                            flex 
                            max-lg:justify-center 
                            min-lg:items-centre
                            min-lg:justify-center
                            min-lg:items-end
                            min-lg:ml-[15vh]
                    "
          >
            <img
              loading="lazy"
              className="
                            max-h-crew-pic-mobile 
                            md:max-h-crew-pic-tablet
                            min-lg:max-h-crew-pic-desktop 
                            "
              src={`${crewPresenting.images.webp}`}
              alt={`an image of ${crewPresenting}`}
            />
          </motion.section>
        </AnimatePresence>
      </Containers.ContextHolder>
    </Containers.MainWrapper>
  );
}
