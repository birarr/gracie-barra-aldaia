export default function Programs() {
  return (
    <section className="py-16 bg-blue-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Nuestros Programas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Programa de Adultos</h3>
            <p>
              Clases de Jiu-Jitsu para adultos de todos los niveles, desde
              principiantes hasta avanzados.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Programa Infantil</h3>
            <p>
              Clases diseñadas para niños, enfocadas en el desarrollo físico,
              mental y social a través del Jiu-Jitsu.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Programa de Competición
            </h3>
            <p>
              Entrenamiento especializado para competidores que buscan mejorar
              su rendimiento en torneos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
