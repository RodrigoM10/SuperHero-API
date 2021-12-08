import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './barPowerstats.css'
export const BarPowerstats = ({ team }) => {


    let totalCombat = team.reduce((total, { character }) => total + (character.powerstats.combat / 6), 0)
    let totalDurability = team.reduce((total, { character }) => total + (character.powerstats.durability / 6), 0)
    let totalIntelligence = team.reduce((total, { character }) => total + (character.powerstats.intelligence / 6), 0)
    let totalPower = team.reduce((total, { character }) => total + (character.powerstats.power / 6), 0)
    let totalSpeed = team.reduce((total, { character }) => total + (character.powerstats.speed / 6), 0)
    let totalStrength = team.reduce((total, { character }) => total + (character.powerstats.strength / 6), 0)

    let powerstats = [
        {
            skill: 'Combate',
            points: totalCombat,
        },
        {
            skill: 'Durabilidad',
            points: totalDurability,
        },
        {
            skill: 'Inteligencia',
            points: totalIntelligence,
        },
        {
            skill: 'Poder',
            points: totalPower,
        },
        {
            skill: 'Velocidad',
            points: totalSpeed,
        },
        {
            skill: 'Fuerza',
            points: totalStrength,
        },
    ]


    const mapPowerstats = powerstats.map((powerstatsBar, i) => (
        <li key={i} className="list-inline row my-2 ">
            <div className="col-3 skill-name px-1">
                <span>{powerstatsBar.skill}</span>
            </div>
            <ProgressBar className="col-9 skills-progress p-0" animated now={powerstatsBar.points.toFixed(2)} label={`${powerstatsBar.points.toFixed(2)}%`} />
        </li>

    ));
    return (
        <div>
            <ul>
                {mapPowerstats}
            </ul>
        </div>
    )
}
