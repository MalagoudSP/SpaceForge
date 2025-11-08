
import { useContext, useState } from "react";
import { navContext } from "../App";
// import necessary data for making the nav bar
import NavListMaker from "./NavListMaker";
import logo from "/shared/logo.svg";
import hamburger from "/shared/icon-hamburger.svg";
import closeTab from "/shared/icon-close.svg";

export default function Nav() {
  const { page, setPage } = useContext(navContext);
  const [menoVisibile, setVisibile] = useState(false);

  return (
    <div
      className=" flex flex-row max-sm:h-nav-height-m 
                  min-md:h-nav-height-t 
                  items-center
                  min-md:-mr-page-padding-d
                  min-2xl:-mr-page-padding-bd
                  min-lg:pt-[40px]  min-lg:h-nav-height-d 

                  "
    >
      <nav
        className={`max-md:z-99
                    max-md:flex max-md:flex-col text-white  
                    max-md:w-[70vw] max-md:h-screen  
                    max-md:fixed max-md:top-0 
                    
                    max-md:pt-[calc(5rem+var(--spacing-nav-height-m))]
                    max-md:pl-6 max-sm:backdrop-blur-[40px] 
                    max-md:bg-[#0B0D17]/40 
                    ${
                      menoVisibile
                        ? "max-md:right-0"
                        : "max-md:-right-100 max-md:opacity-0"
                    } 
                    trasform transition-all duration-[2000ms] ease-in-out

                    min-md:h-full min-md:items-center min-md:bg-[#FFFFFF10] 
                    min-md:flex md:flex-row min-md:w-[100%] min-md:order-2
                    
                    `}
      >
        <NavListMaker setVisibile={setVisibile} page={page} setPage={setPage} />
      </nav>
      <div
        className=" 
                  relative mx-auto 
                  max-sm:w-[calc(100%-var(--spacing-page-padding-m))] 
                  flex flex-row justify-between items-center 
                  min-md:order-1  
                  min-md:w-[calc(3rem+var(--spacing-logo-size-large))] 
                  "
      >
        <div>
          <img
            onClick={() => {
              setPage("Home");
            }}
            className="w-logo-size-small h-logo-size-small 
                       
                       rotate-0 
                       active:rotate-360 min-md:hover:rotate-360
                       translate transition-rotate duration-[2100ms] ease-in-out
                       min-md:w-logo-size-large min-md:h-logo-size-large 
                       hover:cursor-pointer
                       
                       "
            src={logo}
            alt="logo of space travelling"
            aria-label="click to go to home page"
            role="buttom"
          />
        </div>

        <img
          className={`absolute right-0 z-999
                      ${
                        menoVisibile
                          ? "opacity-0 rotate-90"
                          : "opacity-100 rotate-0"
                      }
                      transform transition-all duration-[2100ms] 
                      min-md:hidden`}
          onClick={() => {
            setVisibile((prev) => !prev);
          }}
          src={hamburger}
          aria-label="click to open up the nav"
          alt=" a hamburger-meno icon"
          role="buttom"
          aria-expanded={`${menoVisibile}`}
        />

        <img
          className={`absolute right-0 z-999 
                      ${
                        menoVisibile
                          ? "opacity-100 rotate-0"
                          : "opacity-0 rotate-90"
                      }
                      transform transition-all duration-[2100ms]
                      min-md:hidden`}
          onClick={() => {
            setVisibile((prev) => !prev);
          }}
          src={closeTab}
          aria-label="click to close nav"
          alt=" a close tab"
          role="buttom"
        />
      </div>
      <div className="hidden min-lg:block w-[80%] bg-gray h-[1px] order-1"></div>
    </div>
  );
}
