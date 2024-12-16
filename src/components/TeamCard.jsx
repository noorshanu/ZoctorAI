
function TeamCard({ title, name, Desi }) {
  return (
    <>
      <div className="w-full h-auto  flex flex-col items-center justify-center gap-8 bg-green-box swiper-bg py-16 ">
        <h1 className=" text-lg sm:text-4xl text-gray-600 leading-relaxed text-center w-4/5">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex flex-col tracking-wider">
            <label className="text-gray-600 font-bold text-base">
              {name}
            </label>
            <label className="text-gray-400 font-normal text-sm">
              {Desi}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
