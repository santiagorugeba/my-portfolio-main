export default function Hero() {
  return (
    <header className="relative">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-10 md:pt-8 md:pb-16">
        {/* Badget ubicación */}
        <div className="mb-6 flex justify-center">
          <span className="px-3 py-1 rounded-lg text-sm glass text-brand-graphite dark:text-brand-light border border-brand-graphite/20 dark:border-white/10">
            Disponible · Bogotá, Colombia
          </span>
        </div>

        {/* Título centrado y llamativo */}
        <h1 className="text-center font-extrabold leading-tight tracking-tight
                       text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px]
                       text-brand-graphite dark:text-brand-light">
          Santiago Ruge Ballesteros
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl
                      text-brand-graphite/90 dark:text-brand-light/90">
          Product Designer con experiencia internacional diseñando plataformas digitales que generan impacto real en negocio y usuarios.
        </p>

        {/* Chips de skills */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {["Figma","Product Design","Web & App Design","User Interviews","Usability Testing","Design Systems","Agile / Scrum"].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg text-sm glass
                         text-brand-graphite dark:text-brand-light
                         border border-brand-graphite/20 dark:border-white/10
                         bg-brand-sand/20 dark:bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
