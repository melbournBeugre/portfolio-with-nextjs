"use client";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    objet: "",
    message: "",
  });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-gray-100 px-6 py-12">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full">
        {/* En-tête */}
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
          📩 Contactez-moi
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Un projet en tête ? Envoyez-moi un message et discutons-en !
        </p>

        {/* Formulaire de contact */}
        <form className="space-y-5">
          <div className="flex gap-4">
            {/* Nom */}
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Nom"
              className="w-1/2 p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400"
            />
            {/* Prénom */}
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Prénom"
              className="w-1/2 p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Objet */}
          <input
            type="text"
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            placeholder="Objet du message"
            className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400"
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message..."
            rows={5}
            className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400"
          ></textarea>

          {/* Bouton d'envoi */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
          >
            Envoyer <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}
