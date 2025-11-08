export default function NavListMaker({ setVisibile, setPage, page }) {
  const navConfigure = (element) => {
    return `z-2 ${
      page === element
        ? "max-sm:border-r-4 md:border-b-2"
        : `max-sm:active:border-r-4 border-gray-500 md:active:border-b-2 
                    min-lg:hover:border-b-2 `
    }      md:h-[100%] md:flex md:flex-col md:items-center md:justify-center 
                    max-sm:text-nav-text-mobile
                    min-md:text-nav-text-tablet
                    min-lg:text-nav-text-desktop
                    min-2xl:text-nav-text-bigDeskton min-2xl:font-thin 
                    text-white-Pure hover:cursor-pointer`;
  };
  const navtextDistance = `font-bold mr-3 md:mr-2 min-xl:font-normal`;
  const list = ["Home", "Crew", "Destination", "Technology"];

  const navListHtml = (list) =>
    list.map((el, index) => (
      <div
        onClick={() => {
          setPage(`${el}`);
          setVisibile((prev) => !prev);
        }}
        className={navConfigure(`${el}`)}
      >
        <div>
          <span className={navtextDistance}>{`0${index}`}</span>
          {`${el}`}
        </div>
      </div>
    ));
  return (
    <div
      className="
                      barlow flex 
                      max-sm:flex-col max-sm:gap-4  max-sm:text-left 
                      min-md:justify-end min-md:w-full min-md:gap-8 
                      min-md:pr-page-padding-d h-full"
    >
      {navListHtml(list)}
    </div>
  );
}
