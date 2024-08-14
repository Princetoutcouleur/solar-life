import React from "react";
import ExpertiseCard from "./ExpertiseCard";
const Expertise = () => {
  const expertiseData = [
    {
      title: "Solutions Solaires",
      description:
        "Exploitez la puissance du soleil et adoptez une énergie propre et renouvelable avec nos solutions solaires.",
      customClass: "solution-solaire",
    },
    {
      title: "Services de câblodistribution",
      description:
        "Restez connecté grâce à des services de câble de haute qualité qui offrent une connexion Internet et une télévision fiables et rapides.",
      customClass: "service-cable",
    },
    {
      title: "Solutions Internet",
      description:
        "Du haut débit rapide aux connexions fibre optique, nous vous aiderons à trouver le fournisseur d'accès Internet.",
      customClass: "solution-internet",
    },
    {
      title: "Services téléphoniques",
      description:
        "Découvrez des services téléphoniques économiques et riches en fonctionnalités qui vous permettent de rester connecté à vos proches.",
      customClass: "service-telephone",
    },
  ];
  return (
    <div id="expertise" className="container my-3">
      <h1 className="mb-5">Notre expertise et notre expérience</h1>
      <div className="row">
        {expertiseData.map((item, index) => (
          <ExpertiseCard
            key={index}
            title={item.title}
            description={item.description}
            customClass={item.customClass}
          />
        ))}
      </div>
    </div>
  );
};

export default Expertise;
