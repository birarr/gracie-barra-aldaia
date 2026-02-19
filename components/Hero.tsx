export default function Hero() {
  return (
    <section className="bg-red-500 bg-[url(/gracie_barra_fighters_charcoal.jpg)] bg-blend-soft-light bg-center text-white py-24 text-center">
      <h1 className="text-5xl font-bold mb-6 text-white text-shadow-lg p-4">
        Gracie Barra Aldaia
      </h1>
      <p className="text-xl mb-8 text-white text-shadow-lg">
        Más que un deporte, un estilo de vida.
      </p>
      <a
        href="#contacto"
        className="bg-white text-red-500 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
      >
        Reserva tu clase gratuita
      </a>
    </section>
  );
}
