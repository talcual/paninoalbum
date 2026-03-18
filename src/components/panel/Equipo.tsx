
import { useParams } from "react-router";

function Equipo() {

    const params = useParams();

    return (
        <>
            <div className="container mt-4">
                <h2>Equipo</h2>
                <p>{params.id}.</p>
            </div>
        </>
    );
}

export default Equipo;