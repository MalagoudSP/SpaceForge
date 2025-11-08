import Nav from "../components/nav";
export default function MainWrapper({ children, element }) {
  return (
    <main
      style={{
        "--bg-mobile": `url(/${element}/background-${element}-mobile.jpg)`,
        "--bg-tablet": `url(/${element}/background-${element}-tablet.jpg)`,
        "--bg-desktop": `url(/${element}/background-${element}-desktop.jpg)`,
      }}
      className={`
      z-0
      text-white text-center
      min-h-screen bg-cover
      px-page-padding-m
      bg-[image:var(--bg-mobile)]
      md:px-page-padding-t
      md:bg-[image:var(--bg-tablet)]
      min-lg:px-page-padding-d
      min-lg:bg-[image:var(--bg-desktop)]
      min-2xl:px-page-padding-bd
      
    `}
      aria-current={`${element} page`}
    >
      <Nav />
      {children}
    </main>
  );
}
