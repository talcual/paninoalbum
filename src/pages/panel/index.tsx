
import { Outlet, Link } from "react-router";
import { useState } from "react";

function PanelHome() {
    const [HeaderText, setHeaderText] = useState("Admin Panel");

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Admin Panel</h5>
                                <p className="card-text">This is the admin panel home page.</p>
                            </div>
                            <div className="list-group list-group-flush">
                                <Link to="dashboard" className="list-group-item list-group-item-action" onClick={()=>{setHeaderText("Dashboard")}}>Dashboard</Link>
                                <Link to="my-cards" className="list-group-item list-group-item-action" onClick={()=>{setHeaderText("Mis Cartas")}}>Mis Cartas</Link>
                                <Link to="users" className="list-group-item list-group-item-action" onClick={()=>{setHeaderText("Users")}}>Users</Link>
                                <Link to="settings" className="list-group-item list-group-item-action" onClick={()=>{setHeaderText("Settings")}}>Settings</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{HeaderText}</h5>
                                <p className="card-text">Here you can manage your content and settings.</p>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-body">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PanelHome;