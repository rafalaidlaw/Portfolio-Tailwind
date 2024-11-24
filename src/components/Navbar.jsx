import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-orange-100">
      <div className="mx-auto max-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold text-orange-500">
          Rafael<span className="text-amber-500"> Laidlaw</span>
        </h2>
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
      </div>
    </nav>
  );
};
export default Navbar;
