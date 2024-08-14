import React from "react";
import team from "../Assets/team.png";

const Team = () => {
  return (
    <div id="team" className="red-bg container-fluid py-5">
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4 d-flex justify-content-center align-items-center">
            <div>
              <h1 className="mb-3">Qui nous sommes</h1>
              <p>
                Bienvenue dans notre société de vente et de marketing, où nous
                sommes spécialisés dans l'aide aux clients pour obtenir des
                offres intéressantes auprès des principales sociétés d'énergie
                solaire et de câbles de la région de DC, du Maryland et de la
                Virginie. Nous comprenons que trouver les solutions solaires et
                de câbles adaptées à vos besoins peut être un défi. tâche ardue,
                c'est pourquoi nous sommes là pour rendre le processus plus
                facile et plus abordable pour vous.
              </p>
              <a href="#conatct">
                <button className="btn btn-light mt-3 rounded-pill">
                  Contactez-nous
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex position-relative">
            <img src={team} alt="team" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
