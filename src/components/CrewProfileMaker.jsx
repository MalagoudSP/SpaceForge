// this component gets the current persona either selected by user or
// from the initial state of the UseState to feed the HTML of this part
export default function CrewProfileMaker({ current }) {
  return (
    <section
      key={current.name}
    >
      <div
        className="
        flex flex-col justify-center items-center
        min-lg:justify-start min-lg:items-start 
        min-lg:mt-[100px]"
      >
        <p
          className="
          Bellefair text-gray uppercase 
          text-crew-role-mobile 
          md:text-crew-role-tablet
          min-lg:text-crew-role-tablet"
        >
          {current.role}
        </p>
        <p
          className="
          Bellefair
          text-crew-name-mobile
          md:text-crew-name-tablet
          min-lg:text-crew-name-desktop"
        >
          {current.name}
        </p>
      </div>
      <p
        className=" text-mobile-gen barlow-reg min-h-[140px]
                    md:text-tablet-gen md:w-desc-t
                    min-lg:text-desktop-gen 
                    min-lg:md:w-desc-d
                    min-2xl:md:w-desc-bd
                    min-2xl:text-bigDesktop-gen
                    min-lg:text-left min-lg:text-justify"
      >
        {current.bio}
      </p>
    </section>
  );
}
