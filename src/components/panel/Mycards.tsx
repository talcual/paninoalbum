
import { useState } from "react";

const Cromos = [
    {nombre: "Jugador 1", posicion: "Delantero", equipo: "Equipo A", url:"https://down-co.img.susercontent.com/file/id-11134201-23030-oe42jlqk4jovd9_tn.webp"},
    {nombre: "Jugador 2", posicion: "Mediocampista", equipo: "Equipo B", url:"https://down-co.img.susercontent.com/file/id-11134201-23030-oe42jlqk4jovd9_tn.webp"},
    {nombre: "Jugador 3", posicion: "Defensor", equipo: "Equipo C", url:"https://i.pinimg.com/236x/47/8e/b2/478eb211bb63e5acc66d8064c13f960e.jpg"},
    {nombre: "Jugador 4", posicion: "Portero", equipo: "Equipo D", url:"https://down-co.img.susercontent.com/file/id-11134201-23030-oe42jlqk4jovd9_tn.webp"},
]

function Mycards() {
    const [cromos, setCromos] = useState(Cromos);

    return (
        <>
            <div className="card mt-4">
                <div className="card-body">
                    <div className="row">
                        {cromos.map((cromo, index) => (
                            <div className="col-md-3" key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <img src={cromo.url} alt={cromo.nombre} className="card-img-top mb-3" style={{"width": "272px", "height": "272px"}} />
                                        <h5 className="card-title">{cromo.nombre}</h5>
                                        <p className="card-text">Posición: {cromo.posicion}</p>
                                        <p className="card-text">Equipo: {cromo.equipo}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mycards;