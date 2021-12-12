import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './barPowerstats.css'


import { GiCrossedSwords, GiMuscleUp, GiPowerLightning } from 'react-icons/gi';
import { FaHeartbeat, FaLightbulb, FaSuperpowers } from 'react-icons/fa';


export const BarPowerstats = ({ team }) => {
    
    let totalCombat = team.reduce((total, { character }) => total + (character.powerstats.combat / 6), 0)
    let totalDurability = team.reduce((total, { character }) => total + (character.powerstats.durability / 6), 0)
    let totalIntelligence = team.reduce((total, { character }) => total + (character.powerstats.intelligence / 6), 0)
    let totalPower = team.reduce((total, { character }) => total + (character.powerstats.power / 6), 0)
    let totalSpeed = team.reduce((total, { character }) => total + (character.powerstats.speed / 6), 0)
    let totalStrength = team.reduce((total, { character }) => total + (character.powerstats.strength / 6), 0)
    
    let powerstatsData = [
        {
            totalPoints: totalCombat,
            skill: 'Combate',
            skillIcon: <GiCrossedSwords />,
        },
        {
            totalPoints: totalDurability,
            skill: 'Resistencia',
            skillIcon: <FaHeartbeat />,
        },
        {
            totalPoints: totalIntelligence,
            skill: 'Inteligencia',
            skillIcon: <FaLightbulb />,
            
        },
        {
            totalPoints: totalPower,
            skill: 'Poder',
            skillIcon: <FaSuperpowers />,

        },
        {
            totalPoints: totalSpeed,
            skill: 'Velocidad',
            skillIcon: <GiPowerLightning />,

        },
        {
            totalPoints: totalStrength,
            skill: 'Fuerza',
            skillIcon: <GiMuscleUp />,
        },
    ]

    let powerstatsOrder = powerstatsData.sort(function (a, b) { return b.totalPoints - a.totalPoints });


    const mapPowerstats = powerstatsOrder.map((powerstatsBar, i) => (

        <li key={i} className="list-inline row my-2 ">
            <div className="col-3 skill-name pe-0 text-start">
                <span>{powerstatsBar.skill}</span>
            </div>
            <ProgressBar
                className={`col-9 skills-progress p-0 green-bar`}
                now={isNaN(powerstatsBar.totalPoints) ? 50 : powerstatsBar.totalPoints.toFixed(2)}
                label={isNaN(powerstatsBar.totalPoints) ? 'Valor no disponible' : `${powerstatsBar.totalPoints.toFixed(2)}`} />
        </li>

    ));
    return (
        <div >
            <ul className="p-0 mx-3">
                {mapPowerstats}
            </ul>
        </div>
    )
}
