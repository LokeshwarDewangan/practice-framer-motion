import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 mt-20" >
      <h1 className="text-2xl" >Welcome to my website</h1>
      <div className="links_container flex justify-center items-center w-full gap-10">
        <Link className="underline" to="/framer-motion">Framer Motion</Link>
        <Link className="underline" to="/masonry">Masonry</Link>
      </div>
    </div>
  );
};

export default Homepage;
