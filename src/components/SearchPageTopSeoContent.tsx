import { IoMdArrowDropdown } from "react-icons/io";
const SearchPageTopSeoContent = ({ state }) => {
  return (
    <div className="mb-10">
      <div>
        <img
          className="w-full h-80 object-cover"
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="container-wrapper py-5">
        <p className="text-lg mb-2">{state?.name}</p>
        <p className="text-para line-clamp-3">
          {state?.description}Paragraphs are the building blocks of papers. Many
          students define paragraphs in terms of length: a paragraph is a group
          of at least five sentences, a paragraph is half a page long, etc. In
          reality, though, the unity and coherence of ideas among sentences is
          what constitutes a paragraph.
        </p>
        <div className="flex gap-2 items-center justify-end">
          <p className="text-right text-para text-blue">Read more </p>
          <span>
            <IoMdArrowDropdown className="text-blue" />
          </span>
        </div>
      </div>

      <hr className="container-wrapper border-slate-300" />
    </div>
  );
};

export default SearchPageTopSeoContent;
