import React from "react";
import logo from "../Assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { id: 1, url: "#", text: "ACCEUIL" },
    { id: 2, url: "#", text: "À PROPOS DE NOUS" },
    { id: 3, url: "#", text: "INITIATIVES SOLAIRES" },
    { id: 4, url: "#", text: "NOS PRESTATIONS" },
    { id: 5, url: "#", text: "COMMUNAUTÉ" },
    { id: 6, url: "#", text: "ESTHÉTIQUE" },
  ];
  const services = [
    { id: 1, url: "#", text: "Solutions Solaires" },
    { id: 2, url: "#", text: "Offres et promotions" },
    { id: 3, url: "#", text: "Services de câblodistribution" },
    { id: 4, url: "#", text: "Consultation et soutien" },
  ];
  return (
    <div id="footer" className="pt-5 pb-3 bg-black text-white">
      <div className="container mb-4">
        <p>
          Que vous souhaitiez passer à l'énergie solaire ou améliorer vos
          services de câblodistribution, notre société de vente et de marketing
          est là pour vous aider. Contactez-nous dès aujourd'hui pour commencer
          à économiser sur vos factures d'énergie et profiter d'une connectivité
          fiable des principales sociétés d'énergie solaire et de câble de la
          région de Washington DC, du Maryland et de la Virginie. Obtenez les
          meilleures offres avec nous et embrassez un avenir plus brillant et
          plus connecté.
        </p>
      </div>
      <hr />
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div>
              <img src={logo} alt="logo" className="mb-3" />
              <p>
                Contactez-nous dès aujourd'hui pour découvrir nos services et
                profiter des offres exceptionnelles disponibles auprès des
                principales entreprises d'énergie solaire et de câble de la
                région de Washington DC, du Maryland et de la Virginie.
                Laissez-nous être votre partenaire de confiance pour trouver les
                meilleures solutions pour vos besoins en énergie et en
                connectivité.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div>
              <h6>Liens rapides</h6>
              <ul className="list-unstyled">
                {quickLinks.map((link) => (
                  <li key={link.id} className="mb-2">
                    <a
                      href={link.url}
                      className="text-decoration-none text-white"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <h6>Services</h6>
            <ul className="list-unstyled">
              {services.map((link) => (
                <li key={link.id} className="mb-2">
                  <a
                    href={link.url}
                    className="text-decoration-none text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <h6>Contact</h6>
            <ul className="list-unstyled">
              <li>0123456789</li>
              <li>companyname@gmail.com</li>
            </ul>
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none text-white">
                Facebook
              </a>
              <a href="#" className="text-decoration-none text-white">
                Twitter
              </a>
              <a href="#" className="text-decoration-none text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container text-center">
        <p>© 2024 Solar Life - développé par The_Princetoutcouleur</p>
      </div>
    </div>
  );
};

export default Footer;
