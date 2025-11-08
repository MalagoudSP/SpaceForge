// in order to make a correct title with the same format this
// component takes the code of page and the title and render that
export default function TitleMaker({ code, text }) {
  return (
        <p
          className="
          barlow 
          text-white-Pure
          text-general-title-small
          min-md:text-general-title-large
          min-2xl:text-general-title-veryLarge
          min-lg:w-full min-lg:text-left
          "
        >
          <span
            className="
            mr-2
            font-bold
            text-gray
            "
          >
            {code}
          </span>
          {text}
        </p>
  );
}
