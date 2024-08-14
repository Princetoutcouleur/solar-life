import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  const firstRow = [
    {
      number: "01",
      title: "Expertise et expérience",
      description:
        "Avec des années d'expérience dans le secteur de la vente et du marketing, notre équipe possède une profonde.",
    },
    {
      number: "02",
      title: "Réseau étendu",
      description:
        "Nous avons établi des relations solides avec les principales entreprises solaires et de câbles de la région.",
    },
  ];
  const secondRow = [
    {
      number: "03",
      title: "Approche personnalisée",
      description:
        "Nous pensons que chaque client est unique et que ses besoins doivent être pris en compte en conséquence.",
    },
    {
      number: "04",
      title: "Économies de coûts",
      description:
        "En tirant parti de notre connaissance du secteur et de notre réseau, nous pouvons vous aider à économiser de l'argent sur vos achats d'énergie solaire et de câbles.",
    },
    {
      number: "05",
      title: "Processus sans tracas",
      description:
        "Nous nous occupons de toutes les recherches, négociations et formalités administratives pour vous, rendant ainsi le processus de recherchee handle all the research, negotiations, and paperwork for you, making the process of finding.",
    }
  ];
  return (
    <div id="about" className="container my-5">
      <div className="row">
        <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12">
          <h1 className="fw-bold">Pourquoi nous choisir ?</h1>
          <p>
            Que vous souhaitiez passer à l'énergie solaire ou améliorer vos
            services de câblodistribution, notre société de vente et de
            marketing est là pour vous aider.
          </p>
        </div>
        {firstRow.map((item, index) => (
          <AboutCard
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
        {secondRow.map((item, index) => (
          <AboutCard
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="row">
      
      </div>
    </div>
  );
};

export default About;
