import banner from "../assets/banner.png";
export function Hero() {
  return (
    <div className="hero text-black min-h-screen container mx-auto">
      <div className="hero-content max-w-full px-0 grid grid-cols-1 justify-between px-3 md:grid-cols-2 md:px-0">
        <div>
          <h1 className="text-6xl font-bold">
            Build Your Ideal{" "}
            <span className="bg-gred-text bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="py-6">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="">
            <button className="btn btn-primary mr-6 bg-gred border-0">
              Explore Technologies
            </button>
            <button className="btn btn-outline text-gray-400 border-gray-400">
              Learn More
            </button>
          </div>
        </div>
        <div className="grid justify-center">
          <img alt="" src={banner} className="max-w-sm rounded-lg" />
        </div>
      </div>
    </div>
  );
}
