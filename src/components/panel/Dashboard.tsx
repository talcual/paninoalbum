

function Dashboard() {
    return (
        <>
            <div className="card mt-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Cantidad de Cartas</h5>
                                    <p className="card-text">10.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Usuarios Registrados</h5>
                                    <p className="card-text">5.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Total de Visitas</h5>
                                    <p className="card-text">100.</p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;