// this componeent make a list of planets from props (which is
// from the JSON file of this project) and set the deafult value and
// by selecting another planet the state will be changed
export default function PlanetListMaker({ planetData, set, current }) {
  return planetData.map((p) => (
    <div key={p.name} className="flex flex-col text-white-Pure">
      <div
        className="w-full flex flex-row justify-between 
                        "
      >
        <div
          onClick={() => set(p.name.toLowerCase())}
          className={`        
                                        ${
                                          current.toLowerCase() ===
                                            p.name.toLowerCase() &&
                                          "border-b-3 border-white"
                                        } 
                                        w-fit h-[32px] barlow xlg:h-[80px]`}
        role="button">
          <span
            className=" text-white 
                        tracking-[0.15em]
                        text-planetList-mobile
                        md:text-planetList-tablet
                        min-lg:text-planetList-desktop
                        hover:cursor-pointer"
          >
            {p.name.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  ));
}
