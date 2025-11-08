export default function ContextHolder({ children }) {
  return (
    <div
      className="
            min-h-[75vh] 
            pt-fromNav-to-Section-m
            md:pt-fromNav-to-Section-t
            min-lg:pt-fromNav-to-Section-d
            min-2xl:pt-fromNav-to-Section-bd
            flex flex-col max-md:items-center  
            min-md:grid min-md:grid-cols-1 
            min-lg:grid-cols-2 min-lg:grid-rows-1
            min-lg:px-context-padding-bigDesktop"
    >
      {children}
    </div>
  );
}
