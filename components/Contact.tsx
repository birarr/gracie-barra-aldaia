"use client";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      }),
    });

    if (res.ok) setMessage("Mensaje enviado correctamente!");
  }

  return (
    <section id="contacto" className="py-20 text-center bg-blue-800">
      <h2 className="text-3xl font-bold mb-10 text-white">Contacto</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 px-6">
        <input
          name="name"
          placeholder="Nombre"
          required
          className="w-full border p-3 rounded-lg text-white placeholder-white"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          required
          className="w-full border p-3 rounded-lg text-white placeholder-white"
        />
        <input
          name="phone"
          placeholder="Teléfono"
          required
          className="w-full border p-3 rounded-lg text-white placeholder-white"
        />

        <button
          type="submit"
          className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-800 transition"
        >
          Enviar
        </button>
      </form>

      {message && <p className="mt-6 text-green-600">{message}</p>}
    </section>
  );
}
