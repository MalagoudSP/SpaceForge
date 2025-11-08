import Containers from "../components/Containers";
function Home({ setDestinationPage, setpage }) {
  return (
    <Containers.MainWrapper element={"home"}>
      <Containers.ContextHolder>
        <Containers.TextContainer>
          <div className="min-lg:text-left flex flex-col h-full justify-center">
            <p
              className="barlow
                  font-thin
                  text-home-upperText-small
                  min-md:text-home-upperText-large
                  min-2xl:text-home-upperText-veryLarge"
            >
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1
              className="Bellefair 
                  text-home-title-small
                  min-md:text-home-title-large
                  min-2xl:text-home-title-veryLarge"
            >
              SPACE
            </h1>
            <p
              className="text-mobile-gen barlow-reg
                  md:text-tablet-gen md:w-desc-t
                  min-lg:text-desktop-gen 
                  min-lg:md:w-desc-d
                  min-2xl:md:w-desc-bd
                  min-2xl:text-bigDesktop-gen
                  min-lg:text-left min-lg:text-justify"
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </Containers.TextContainer>
        <div
          className="min-lg:flex min-lg:justify-center 
            min-lg:items-center min-lg:h-full min-lg:ml-[25vh]"
        >
          <section
            className="
              relative
              h-explore-outercir-radius-small
              min-md:h-explore-outercir-radius-large
              min-2xl:h-explore-outercir-radius-veryLarge
              my-explore-my-long 
              flex flex-col items-center justify-center
              min-md:my-explore-my-short"
          >
            <div>
              <button
                onClick={() => {
                  setDestinationPage((prev) => !prev);
                  setpage("Destination");
                }}
                className="   
                                  absolute left-[50%] top-[50%] -translate-1/2 z-1
                                  opacity-0
                                  bg-white-Pure rounded-full
                                  w-explore-outercir-radius-small
                                  h-explore-outercir-radius-small
                                  min-md:w-explore-outercir-radius-large
                                  min-md:h-explore-outercir-radius-large
                                  min-2xl:h-explore-outercir-radius-veryLarge
                                  min-2xl:w-explore-outercir-radius-veryLarge
                                  active:opacity-20 hover:opacity-20
                                  hover:cursor-pointer"
                aria-label="click on the explore to go to destination page"
              ></button>
              <div
                className="   z-0
                                  absolute left-[50%] top-[50%] -translate-1/2
                                  flex items-center justify-center
                                  bg-white-Pure rounded-full
                                  w-explore-cir-radius-small
                                  h-explore-cir-radius-small
                                  min-md:w-explore-cir-radius-large
                                  min-md:h-explore-cir-radius-large
                                  min-2xl:w-explore-cir-radius-veryLarge
                                  min-2xl:h-explore-cir-radius-veryLarge"
              >
                <span
                  className="Bellefair text-black
                      text-home-explore-small
                      min-md:text-home-explore-large"
                >
                  Explore
                </span>
              </div>
            </div>
          </section>
        </div>
      </Containers.ContextHolder>
    </Containers.MainWrapper>
  );
}
export default Home;
