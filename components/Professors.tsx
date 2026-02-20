import Image from "next/image";

export default function Professors() {
  return (
    <section className="py-20 bg-white dark:bg-white text-center">
      <h2 className="text-3xl font-bold mb-12 text-gbRed">
        Nuestros Profesores
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        <div className="bg-white dark:bg-white rounded-xl shadow-lg p-6">
          <Image
            src="/professor1.jpeg"
            alt="Profesor principal Gracie Barra Aldaia"
            width={400}
            height={400}
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">Profesor Iuri Fonseca</h3>
          <p className="text-gray-600">
            Cinturón Negro certificado por Gracie Barra.
          </p>
        </div>

        <div className="bg-white dark:bg-white rounded-xl shadow-lg p-6">
          <Image
            src="/professor2.jpg"
            alt="Profesor asistente Gracie Barra Aldaia"
            width={400}
            height={400}
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">Profesor Ubiratan Rodrigues</h3>
          <p className="text-gray-600">
            Cinturón Negro certificado por Gracie Barra.
          </p>
        </div>
      </div>
    </section>
  );
}
