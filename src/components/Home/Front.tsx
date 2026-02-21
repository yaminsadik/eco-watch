export default function Front(): JSX.Element {
  return (
    <section className="relative z-10">
      <div className="mx-auto sm:w-11/12">
        {/* Responsive hero: portrait phones get 55vh, landscape/tablet 65vh, desktop 820px */}
        <div className="relative min-h-[280px] h-[55vh] w-full overflow-hidden bg-homefrontbg bg-cover bg-left bg-scroll bg-no-repeat sm:h-[65vh] sm:rounded-3xl lg:h-[820px] lg:bg-center">
          {/* Gradient overlay so tagline is legible on any image */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/65 to-transparent" />
          {/* Tagline — centred on mobile, right-aligned on desktop */}
          <p className="absolute bottom-6 left-4 right-4 text-center text-lg font-medium leading-snug text-white drop-shadow-md sm:bottom-8 sm:text-xl lg:bottom-14 lg:left-auto lg:right-10 lg:max-w-xs lg:text-left lg:text-[26px]">
            Find, locate and clean the trash in your area
          </p>
        </div>
      </div>
    </section>
  );
}
