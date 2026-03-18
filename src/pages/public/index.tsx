
import { useState } from "react";

const Jugadores = [
    {nombre: "Jugador 1", posicion: "Delantero", equipo: "Equipo A", url:"https://down-co.img.susercontent.com/file/id-11134201-23030-oe42jlqk4jovd9_tn.webp"},
    {nombre: "Jugador 2", posicion: "Mediocampista", equipo: "Equipo B", url:"https://down-co.img.susercontent.com/file/id-11134201-23030-oe42jlqk4jovd9_tn.webp"},
    {nombre: "Jugador 3", posicion: "Defensor", equipo: "Equipo C", url:"https://i.pinimg.com/236x/47/8e/b2/478eb211bb63e5acc66d8064c13f960e.jpg"},
    {nombre: "Jugador 4", posicion: "Portero", equipo: "Equipo D", url:"https://down-co.img.susercontent.com/file/id-11134201-23030-oe42jlqk4jovd9_tn.webp"},
]

function PublicHome(){
    const [jugadores, setJugadores] = useState(Jugadores);

    return (
        <>
            <div className="container">
                <h1 className="text-center mt-5">Welcome to Panino Album</h1>
                <p className="text-center mt-3">This is the public home page.</p>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {
                        jugadores.map((jugador:any, index:number) => (
                            <div className="col-md-3" key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <img src={jugador.url} alt={jugador.nombre} className="card-img-top mb-3" style={{"width": "272px", "height": "272px"}} />
                                        <h5 className="card-title">{jugador.nombre}</h5>
                                        <p className="card-text">Posición: {jugador.posicion}</p>
                                        <p className="card-text">Equipo: {jugador.equipo}</p>
                                    </div>
                                </div>
                            </div>  
                        ))

                    }
                </div>
            </div>
        </>
    )

}

export default PublicHome;