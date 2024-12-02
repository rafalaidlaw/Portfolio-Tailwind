import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-orange-100  ">
      <div className=" align-element flex flex-col sm:flex-row sm:gap-x-16 sm:items-center animate-fade1">
        <article className="grid grid-rows-2">
          <h2 className="text-3xl font-bold text-orange-500">
            Rafael<span className="text-amber-500"> Laidlaw</span>
          </h2>

          <p className="lg:text-center sm:text-left relative font-mono text-orange-300">
            WebDev
          </p>
        </article>
        <article className="grid grid-rows-2">
          <div className="flex gap-x-3">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-orange-500 text-lg tracking-wide hover:text-amber-900 duration-300"
                >
                  {text}
                </a>
              );
            })}
          </div>
        </article>
      </div>
    </nav>
  );
};
export default Navbar;
