export default function Front(): JSX.Element {
  return (
    <section className="relative z-10">
      <div className="mx-auto sm:w-11/12">
        <div className="relative h-[820px] w-full bg-homefrontbg bg-cover bg-left bg-scroll bg-no-repeat py-8 sm:rounded-3xl lg:bg-center" />
      </div>
      <article className="absolute right-0 top-[50%] hidden h-1/2 w-[30%] items-end px-2 lg:flex">
        <p className="w-[80%] text-[26px] text-white">
          Find, locate and clean the trash in your area
        </p>
      </article>
    </section>
  );
}
