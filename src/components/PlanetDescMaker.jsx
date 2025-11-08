// for switching to another item, motion and anmiateprecense is used
import { motion, AnimatePresence } from "framer-motion";

// this componenet takes the planet data and the current presented planet
// which is getting from react state
export default function planetDescMaker({ planetData, current }) {
  const planetToRender = planetData.find(
    (p) => p.name.toLowerCase() === current.toLowerCase()
  );

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={planetToRender.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className=" 
                    lg:w-full min-h-[450px]"
      >
        <div
          className=" flex flex-col justify-center items-center  
                      w-full my-6 text-white-Pure 
                      lg:items-start "
        >
          <h1
            className="   Bellefair uppercase 
                          text-planetName-mobile 
                          md:text-planetName-tablet  
                          2xl:text-planetName-desktop "
          >
            {planetToRender.name}
          </h1>
          <p
            className="mt-4 border-gray-500 text-center 
                       text-mobile-gen  min-h-[160px]
                       text-white font-extralight 
                       barlow-reg mb-6  

                       
                       border-b-1 pb-6 leading-7
                       md:text-tablet-gen  md:w-tablet 
                       md:border-b-2 md:pb-7
                       md:min-h-[120px]
                       min-lg:w-full
                       min-lg:text-justify  
                       min-lg:text-desktop-gen
                       min-2xl:text-bigDesktop-gen
                       

                       min-xlg:h-[200px] 

                       barlow-reg min-h-[140px]
                       
                                          "
          >
            {planetToRender.description}
          </p>
        </div>
        <div
          className="flex flex-col justify-center gap-4
                     items-center text-white-Pure text-center
                       
                     md:flex-row md:justify-around md:mx-auto
                     min-md:mb-12 md:w-tablet

                     lg:w-desktop-destination
                     xlg:w-desktop-xlg-destination-desc
                     "
        >
          <div>
            <p
              className="uppercase text-[0.875rem] font-light 
                              tracking-[2px] text-white-Pure 
                              xlg:text-[1.75rem]"
            >
              AVG. DISTANCE
            </p>
            <p className="text-[1.75rem] Bellefair xlg:text-[1.5rem]">
              {planetToRender.distance}
            </p>
          </div>
          <div>
            <p
              className="uppercase text-[0.875rem] font-light 
                              tracking-[2px] text-white-Pure xlg:text-[1.75rem]"
            >
              Est. travel time
            </p>
            <p className="text-[1.75rem] Bellefair xlg:text-[1.5rem]">
              {planetToRender.travel}
            </p>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
