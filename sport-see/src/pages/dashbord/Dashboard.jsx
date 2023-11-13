import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./dashboard.css";

import calories from "../../assets/images/calories.png";
import proteines from "../../assets/images/protein.png";
import glucides from "../../assets/images/carbs.png";
import lipides from "../../assets/images/fat.png";

//graphiques
import ActivityBarChart from "../../components/Recharts/BarChart";
import ActivityRadarChart from "../../components/Recharts/RadarChart";
import ActivityRadialBarChart from "../../components/Recharts/RadialBarChart";
import NavVertical from "../../components/NavVertical/NavVertical";

//import dataUser from "../../services/api/mock";
import dataUser from "../../services/api/call";

import PropTypes from "prop-types";
import ActivityLineChart from "../../components/Recharts/LineChart";

/** *
 * [Dashbord is A function that fetches and displays user data.]
 *
 * @param {number} id - The user's ID.
 * @param {string} categorie - The category of data to retrieve (optional).
 * @param {function} useParams - A hook for accessing URL parameters.
 * @param {function} useState - A hook for creating state variables.
 * @param {function} useEffect - A hook for performing side effects in a functional component.
 * @param {function} useNavigate - A hook for navigating to a different page.
 * @returns {null} If user data is not yet available.
 * @returns {JSX} The JSX for displaying the user's main data, activity data, session data, and performance data.
 *
 */
function Dashbord() {
    const { id } = useParams(); //useParams permet d'obtenir le paramètre id de l'URL.
    const { categorie } = useParams(); //useParams permet d'obtenir le paramètre categorie de l'URL.
    //useState créer des variables d'état qui seront utilisées pour stocker des données sur l'utilisateur, son activité, ses sessions et ses performances.
    const [userMain, setUserMain] = useState();
    const [userActivity, setUserActivity] = useState();
    const [userSessions, setUserSessions] = useState();
    const [userPerformance, setUserPerformance] = useState();
    const navigate = useNavigate();

    /**
     * Fetches user data and stores it in state variables.
     *
     * @param {number} id - The user's ID.
     * @param {string} categorie - The category of data to retrieve (optional).
     * @param {function} navigate - A function for navigating to a different page.
     */
    useEffect(() => {
        const fetchData = () => {
            try {
                if (id === "12" || id === "18") {
                    dataUser(id, categorie)
                        .then((data) => {
                            if (typeof data !== "undefined") {
                                try {
                                    setUserMain(data);
                                } catch (error) {
                                    console.log(
                                        "Erreur des données principales de l'utilisateur:",
                                        error
                                    );
                                }

                                dataUser(id, "activity")
                                    .then((data) => {
                                        try {
                                            setUserActivity(data);
                                        } catch (error) {
                                            console.log(
                                                "Erreur des données d'activité de l'utilisateur:",
                                                error
                                            );
                                        }
                                    })
                                    .catch((error) =>
                                        console.log("Erreur des données d'activité:", error)
                                    );

                                dataUser(id, "average-sessions")
                                    .then((data) => {
                                        try {
                                            setUserSessions(data);
                                        } catch (error) {
                                            console.log(
                                                "Erreur des données des sessions utilisateur:",
                                                error
                                            );
                                        }
                                    })
                                    .catch((error) =>
                                        console.log("Erreur des données des sessions:", error)
                                    );

                                dataUser(id, "performance")
                                    .then((data) => {
                                        try {
                                            setUserPerformance(data);
                                        } catch (error) {
                                            console.log(
                                                "Erreur des données de performances de l'utilisateur:",
                                                error
                                            );
                                        }
                                    })
                                    .catch((error) =>
                                        console.log("Erreur des données de performances:", error)
                                    );
                            }
                        })
                        .catch((error) =>
                            console.log("Erreur des données utilisateur:", error)
                        );
                } else {
                    navigate("/error");
                }
            } catch (error) {
                console.log("Erreur lors de la récupération des données:", error);
                navigate("/error");
            }
        };

        fetchData();
    }, [id, categorie, navigate]);

    if (!userMain || !userActivity || !userSessions || !userPerformance) {
        return null;
    }

    return (
        <>
            <NavVertical />
            <div className="pageProfil">
                <div className="titleProfil">
                    <h1>
                        Bonjour <span>{userMain.firstName}</span>
                    </h1>
                    <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
                </div>

                <div className="graphiques">
                    <section className="horizonGauche">
                        <div className="activity">
                            <ActivityBarChart userActivity={userActivity.sessions} />
                        </div>
                        <div className="carre">
                            <div className="sessions">
                                <ActivityLineChart userSessions={userSessions.sessions} />
                            </div>

                            <div className="performance">
                                <ActivityRadarChart userPerformance={userPerformance.data} />
                            </div>

                            <div className="score">
                                <ActivityRadialBarChart userMain={userMain.todayScore * 100} />
                            </div>
                        </div>
                    </section>
                    <section className="iconDroite">
                        <div className="calories">
                            <img  src={calories} alt="icon calorie" />
                            <div className="infos">
                                <h3>{userMain.calorie}kCal</h3>
                                <p>Calories</p>
                            </div>
                        </div>
                        <div className="proteines">
                            <img src={proteines} alt="icon proteine" />
                            <div className="infos">
                                <h3>{userMain.proteine}g</h3>
                                <p>Proteines</p>
                            </div>
                        </div>
                        <div className="glucides">
                            <img src={glucides} alt="icone glucide" />
                            <div className="infos">
                                <h3>{userMain.glucide}g</h3>
                                <p>Glucides</p>
                            </div>
                        </div>
                        <div className="lipides">
                            <img src={lipides} alt="icon lipide" />
                            <div className="infos">
                                <h3>{userMain.lipide}g</h3>
                                <p>Lipides</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Dashbord;
