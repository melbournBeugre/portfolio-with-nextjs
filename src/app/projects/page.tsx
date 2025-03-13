import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Luxe",
    description:
      "Une plateforme de vente en ligne haut de gamme avec paiement sécurisé et interface élégante.",
    image: "/images/1.png",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Un tableau de bord interactif avec des graphiques et des statistiques en temps réel.",
    image: "/images/2.png",
  },
  {
    title: "Blog Tech & IA",
    description:
      "Un blog dédié aux dernières tendances en intelligence artificielle et développement web.",
    image: "/images/3.webp",
  },
  {
    title: "Portfolio Interactif",
    description:
      "Un portfolio dynamique avec animations et transitions fluides pour mettre en avant mes projets.",
    image: "/images/4.webp",
  },
  {
    title: "Application Mobile Fitness",
    description:
      "Une app mobile qui suit vos entraînements et propose des conseils personnalisés.",
    image: "/images/5.png",
  },
  {
    title: "Plateforme de Réservation",
    description:
      "Un système de réservation en ligne pour hôtels et restaurants avec gestion simplifiée.",
    image: "/images/6.png",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6 text-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
        🚀 Mes Projets
      </h1>
      <p className="text-lg text-gray-700 mb-12">
        Découvrez quelques-uns des projets sur lesquels j&apos;ai travaillé.
      </p>

      {/* Grid des projets */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {/* Image du projet */}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            {/* Détails */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
