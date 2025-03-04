import nubbin from "../assets/nubbinsvg.svg";
export const Nubbin = () => {
  return (
    <div className="hidden md:block">
      <article className=" grid grid-flow-col grid-rows-1 ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="">
          <img
            src={nubbin}
            alt="Packaging Shadow"
            className="h-50 flex absolute"
          />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </article>
    </div>
  );
};

export default Nubbin;
