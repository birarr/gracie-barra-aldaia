export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Gracie Barra Aldaia. Todos los
        derechos reservados.
      </p>
      <p>
        Síguenos en{" "}
        <a
          href="https://www.facebook.com/graciebarra.aldaia"
          className="underline"
        >
          Facebook
        </a>{" "}
        y{" "}
        <a
          href="https://www.instagram.com/graciebarra.aldaia"
          className="underline"
        >
          Instagram
        </a>
        .
      </p>
    </footer>
  );
}
