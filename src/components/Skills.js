import html from "../assets/images/badge-html.png";
import js from "../assets/images/badge-js.png"
import css from "../assets/images/badge-css.png"
import jquery from "../assets/images/badge-jquery.png"
import bootstrap from "../assets/images/badge-bootstrap.png"
import bulma from "../assets/images/badge-bulma.png"
import node from "../assets/images/badge-node.png"
import express from "../assets/images/badge-express.png"
import sequelize from "../assets/images/badge-sequelize.png"
import mysql from "../assets/images//badge-mysql.png"
import postgres from "../assets/images/badge-postgresql.png"
import mongo from "../assets/images/badge-mongodb.png"
import heroku from "../assets/images/badge-heroku.png"
import github from "../assets/images/badge-github.png"
import git from "../assets/images/badge-git.png"



export default function Skills() {
    return (
        <div id="skills-contaier" className="card-container">
            <div id="card3" className="card no-display">
                <div className="card-body3">
                    <h2 id="skills-title">Skills</h2>
                    <div className="skills-info">
                        <div className="row">
                            <div className="col-sm">
                                <img className="row-1" src={html} alt="html"/>
                            </div>
                            <div className="col-sm">
                                <img className="row-1" src={js} alt="js"/>
                            </div>
                            <div className="col-sm">
                                <img className="row-1" src={css} alt="css"/>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm">
                            <img className="row-3" src={jquery} alt="jquery"/>
                        </div>
                        <div className="col-sm">
                            <img className="row-2" src={bootstrap} alt="bootstrap"/>
                        </div>
                        <div className="col-sm">
                            <img className="row-2" src={bulma} alt="bulma"/>
                        </div>
                        </div>
                        <div className="row">
                        <div className = "col-sm">
                            <img className="row-3" src={node} alt="node"/>
                        </div>
                        <div className = "col-sm">
                            <img id="express" className="row-3" src={express} alt="express"/>
                        </div>
                        <div className = "col-sm">
                            <img id="seq" className="row-3" src={sequelize} alt="sequelize"/>
                        </div>
                        </div>
                        <div className="row">
                        <div className = "col-sm">
                            <img className="row-4" src={mysql} alt="mysql"/>
                        </div>
                        <div className = "col-sm">
                            <img className="row-4" src={postgres} alt="postgres"/>
                        </div>
                        <div className = "col-sm">
                            <img id="mongo" className="row-4" src={mongo} alt="mongo"/>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm">
                            <img id="heroku" className="row-5" src={heroku} alt="heroku"/>
                        </div>
                        <div className="col-sm">
                            <img className="row-5" src={github} alt="github"/>
                        </div>
                        <div className="col-sm">
                            <img className="row-5" src={git} alt="git"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}