export default function numberMaker({ current, set, listNum }) {
  // this make an array for making 4 clickable circle, in
  // inc case of adding more data is paramteric
  const num = Array.from({ length: listNum }, (_, i) => i + 1);
  return num.map((n) => (
    <div
      key={n}
      onClick={() => set((prev) => (prev = n))}
      className={`  h-circleSize-m w-circleSize-m 
                    md:h-circleSize-t md:w-circleSize-t 
                    min-lg:h-circleSize-d min-lg:w-circleSize-d 
                    hover:cursor-pointer
                    border-1 text-2xl 
                    flex justify-center items-center rounded-full
                                ${
                                  current === n
                                    ? "border-none bg-white-Pure text-black"
                                    : "border-gray-500 text-white-Pure"
                                }`}
    role="button"
    aria-label="click on the numbers to check the technologies"
    >
      <span
        className="     Bellefair 
                        max-sm:text-[1.125rem] 
                        md:text-[1.5rem] 
                        xlg:text-[2rem]
                        xlg:font-bold"
      >
        {n}
      </span>
    </div>
  ));
}
