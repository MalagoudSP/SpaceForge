import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import TitleMaker from "../components/TitleMaker";
import NumberMaker from "../components/NumberMaker";
import TechnoDescMaker from "../components/TechnoDescMaker";
import Containers from "../components/Containers";

export default function Technology({ data }) {
  // the state set to render the first technology in the JSON file
  const [selectionId, setId] = useState(1);
  const currentTechno = data[selectionId - 1];

  return (
    <Containers.MainWrapper element={"technology"}>
      <Containers.ContextHolder>
        <div
          className="
            min-lg:flex min-lg:flex-col"
        >
          <TitleMaker code={"03"} text={"SPACE LAUNCH 101"} />
          <div
            className="
                min-lg:h-full
                min-lg:flex 
                min-lg:flex-row 
                min-lg:items-end
                min-lg:justify-between
                min-lg:w-[calc(100vw-189px)] 
                min-2xl:w-[calc(100vw-220px)]"
          >
            <AnimatePresence mode="wait">
              <motion.section
                key={selectionId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="
                    max-md:h-tech-pic-mobile
                    max-md:-ml-page-padding-m
                    max-md:-mr-page-padding-m
                    min-md:-ml-page-padding-t
                    min-md:-mr-page-padding-t
                    max-md:mx-auto
                    max-lg:mt-tech-pic-padding-t
                    max-lg:mb-tech-pic-padding-b
                    md:h-tech-pic-tablet
                    min-lg:min-w-tech-pic-desktop
                    min-lg:min-h-tech-pic-desktop
                    min-lg:order-1
                    min-2xl:min-w-tech-pic-bigDesktop
                    min-2xl:min-h-tech-pic-bigDesktop"
              >
                <div
                  className="w-full h-full  
                    bg-no-repeat bg-cover bg-center "
                  style={{
                    backgroundImage:
                      window.innerWidth < 768
                        ? `url(/technology/image-${currentTechno.name
                            .toLowerCase()
                            .split(" ")
                            .join("-")}-landscape.jpg)`
                        : `url(/technology/image-${currentTechno.name
                            .toLowerCase()
                            .split(" ")
                            .join("-")}-portrait.jpg)`,
                  }}
                  role="image"
                ></div>
              </motion.section>
            </AnimatePresence>
            <Containers.TextContainer>
              <div className="min-lg:h-full min-lg:flex min-lg:items-end ">
                <section
                  className="   min-lg:w-tech-desc-d
                                      min-lg:h-fit
                                      min-lg:flex min-lg:flex-row 
                                      min-lg:items-end
                                      lg:gap-[5vw]
                                      min-lg:gap-10"
                >
                  <section
                    className=" flex justify-center max-md:mb-4
                                      max-lg:flex-row  gap-4
                                      max-lg:mb-6
                                      min-lg:flex-col
                                      min-lg:justify-between"
                  >
                    {
                      <NumberMaker
                        listNum={data.length}
                        current={selectionId}
                        set={setId}
                      />
                    }
                  </section>
                  <section
                    className=" 
                        flex flex-col justify-between
                        min-lg:w-full 
                        min-2xl:justify-end"
                  >
                    <div className="min-lg:flex min-lg:h-full items-end">
                      <p
                        className=" Bellefair opacity-50 text-center mb-4
                                    text-tech-termonology-mobile 
                                    md:text-tech-termonology-tablet 
                                    lg:text-tech-termonology-desktop "
                      >
                        THE TERMINOLOGY…
                      </p>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.section
                        key={selectionId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className=" min-lg:flex min-lg:flex-col 
                                          min-lg:justify-between"
                      >
                        <TechnoDescMaker data={currentTechno} />
                      </motion.section>
                    </AnimatePresence>
                  </section>
                </section>
              </div>
            </Containers.TextContainer>
          </div>
        </div>
      </Containers.ContextHolder>
    </Containers.MainWrapper>
  );
}
