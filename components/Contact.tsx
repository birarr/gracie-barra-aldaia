// "use client";
// import { useState } from "react";

// export default function Contact() {
//   const [message, setMessage] = useState("");

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       body: JSON.stringify({
//         name: formData.get("name"),
//         email: formData.get("email"),
//         phone: formData.get("phone"),
//       }),
//     });

//     if (res.ok) setMessage("Mensaje enviado correctamente!");
//   }

//   return (
//     <section id="contacto" className="py-20 text-center bg-blue-800">
//       <h2 className="text-3xl font-bold mb-10 text-white">Contacto</h2>

//       <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 px-6">
//         <input
//           name="name"
//           placeholder="Nombre"
//           required
//           className="w-full border p-3 rounded-lg text-white placeholder-white"
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           type="email"
//           required
//           className="w-full border p-3 rounded-lg text-white placeholder-white"
//         />
//         <input
//           name="phone"
//           placeholder="Teléfono"
//           required
//           className="w-full border p-3 rounded-lg text-white placeholder-white"
//         />

//         <button
//           type="submit"
//           className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-800 transition"
//         >
//           Enviar
//         </button>
//       </form>

//       {message && <p className="mt-6 text-green-600">{message}</p>}
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import { toast } from "react-toastify"; // For notifications
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email + " - " + userInput.phone,
        message: userInput.message,
      };

      const res = await emailjs.send(
        serviceID as string,
        templateID as string,
        emailParams,
        userID as string,
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section id="contacto" className="py-20 text-center bg-blue-800">
        <h2 className="text-3xl font-bold mb-10 text-white">Contacto</h2>
        <div className=" flex flex-col gap-4 max-w-xl mx-auto space-y-6 px-6">
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg text-white placeholder-white"
            placeholder="Nombre"
          />
          <div>
            <input
              type="tel"
              name="phone"
              value={userInput.phone}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg text-white placeholder-white"
              placeholder="Teléfono"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={userInput.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg text-white placeholder-white"
              placeholder="email"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={userInput.message}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg text-white placeholder-white"
              placeholder="Mensaje"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white p-8 mt-8 py-3 rounded-full font-bold hover:bg-red-800 transition"
        >
          Enviar
        </button>
      </section>
    </form>
  );
}
