import React from "react";
import iconSolaire from "../Assets/sola-icon.png";
import iconDeal from "../Assets/deal-icon.png";
import iconCable from "../Assets/cable-icon.png";
import iconConsultation from "../Assets/consultation-icon.png";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const serviceData = [
    {
      icon: iconSolaire,
      title: "Solutions Solaires",
      description:
        "Exploitez la puissance du soleil et adoptez une énergie propre et renouvelable avec nos solutions solaires.",
    },
    {
      icon: iconDeal,
      title: "Offres et promotions",
      description:
        "Nous sommes fiers de garantir des offres exceptionnelles et des promotions à nos clients.",
    },
    {
      icon: iconCable,
      title: "Services de câblodistribution",
      description:
        "Restez connecté grâce à des services de câble de haute qualité qui offrent une connexion Internet et une télévision fiables et rapides.",
    },
    {
      icon: iconConsultation,
      title: "Consultation et soutien",
      description:
        "Nous comprenons que naviguer dans le paysage de l’énergie solaire et du câble peut être une tâche ardue.",
    },
  ];
  return (
    <div id="services" className="container-fluid py-5">
      <div className="container">
        <div className="text-center">
          <p className="fw-bold text-capitalize red-color">nos services</p>
          <h1 className="text-capitalize mb-4">Ce que nous faisons</h1>
        </div>
        <div className="row my-3">
          {serviceData.map((item, index) => (
            <ServicesCard key={index} icon={item.icon} title={item.title} description={item.description}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
