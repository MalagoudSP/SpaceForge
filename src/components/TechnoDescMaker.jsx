// this component make the description for the input technology
// that is set to the state of the APP
export default function technoDescMaker({ data }) {
  return (
    <div
      className="   flex flex-col justify-center items-center
                    min-lg:items-start min-lg:justify-between
                    
                    min-lg:min-h-[210px]
                    min-2xl:min-h-[200px]
                    min-2xl:justify-start
                    
                    "
    >

        <p
          className=" Bellefair uppercase  max-lg:mb-4 
                      
                      text-tech-title-mobile 
                      md:text-tech-title-tablet
                      min-lg:text-tech-title-desktop
                      "
        >
          {data.name}
        </p>
              <div className="min-lg:flex min-lg:flex-col 
                      
                      max-2xl:min-h-[120px] max-2xl:justify-start 
                                            " >
        <p
          className=" max-md:min-h-[180px]
                      text-center text-white 
                      font-extralight
                      text-text-mobile-gen
                      md:text-tablet-gen
                      min-lg:text-desktop-gen
                      min-2xl:text-bigDesktop-gen
                      min-lg:text-justify
                      
                      "
        >
          {data.description}
        </p>

      </div>
    </div>
  );
}
