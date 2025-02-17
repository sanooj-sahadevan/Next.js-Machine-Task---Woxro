export default function HeroSection() {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-[#3b200b] text-[#f3e5d0]">
      <div className="text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="grid grid-cols-5 gap-1">
            {/* First row */}
            <div className="col-span-1 bg-[#f3e5d0] w-6 h-6"></div>
            <div className="col-span-1 bg-[#f3e5d0] w-6 h-6"></div>
            <div className="col-span-1 bg-[#f3e5d0] w-6 h-6"></div>
            {/* Second row */}
            <div className="col-span-1 bg-[#f3e5d0] w-6 h-6"></div>
            <div className="col-span-1 bg-[#f3e5d0] w-6 h-6"></div>
          </div>
        </div>

        {/* Text */}
        <h1 className="text-3xl md:text-4xl font-serif max-w-2xl mx-auto">
          The first media company crafted for the digital first generation.
        </h1>
      </div>
    </section>
  );
}
