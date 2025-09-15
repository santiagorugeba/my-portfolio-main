export default function Hero() {
  return (
    <header className="relative">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-10 md:pt-8 md:pb-16">
        {/* Badget ubicación */}
        <div className="mb-6 flex justify-center">
          <span className="px-3 py-1 rounded-lg text-sm glass text-[var(--brand-graphite)] dark:text-[var(--brand-light)]">
            Disponible · Bogotá, Colombia
          </span>
        </div>

        {/* Título centrado y llamativo */}
        <h1 className="text-center font-extrabold leading-tight tracking-tight
                       text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px]
                       text-[var(--brand-dark)] dark:text-[var(--brand-light)]">
          Santiago Ruge Ballesteros
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl
                      text-[var(--brand-graphite)] dark:text-[var(--brand-light)]">
          Product Designer con experiencia internacional diseñando plataformas digitales que generan 
          impacto real en negocio y usuarios.
        </p>

        {/* Chips de skills */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {["Figma","Product Design","Web & App Design","User Interviews","Usability Testing","Design Systems","Agile / Scrum"].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg text-sm glass
                         text-[var(--brand-graphite)] dark:text-[var(--brand-light)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
