export default function Front(): JSX.Element {
  return (
    <section className="relative z-10">
      <div className="mx-auto sm:w-11/12">
        {/* Responsive hero: portrait phones 55vh, landscape/tablet 65vh, desktop 820px */}
        <div className="relative min-h-[280px] h-[55vh] w-full overflow-hidden bg-homefrontbg bg-cover bg-left bg-scroll bg-no-repeat sm:h-[65vh] sm:rounded-3xl lg:h-[820px] lg:bg-center">
          {/* Gradient overlay so tagline is legible on any image */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/65 to-transparent" />

          {/* Tagline */}
          <p className="absolute bottom-14 left-4 right-4 text-center text-lg font-medium leading-snug text-white drop-shadow-md sm:bottom-16 sm:text-xl lg:bottom-14 lg:left-auto lg:right-10 lg:max-w-xs lg:text-left lg:text-[26px]">
            Find, locate and clean the trash in your area
          </p>

          {/* Scroll-down bounce arrow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce-slow sm:bottom-5">
            <svg
              className="h-7 w-7 text-white/80 drop-shadow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
