import React from 'react'
import './circle.css'

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { GiCrossedSwords, GiMuscleUp, GiPowerLightning } from 'react-icons/gi';
import { FaHeartbeat, FaLightbulb, FaSuperpowers } from 'react-icons/fa';



export const PercentageCircle = ({ character, powerstatsData }) => {

    const { powerstats } = character;

    let circlePowerstats = [
        {
            points: powerstats?.combat,
            skill: 'Combate',
            skillIcon: <GiCrossedSwords />,
            color: 'green',

        },
        {
            points: powerstats?.durability,
            skill: 'Resistencia',
            skillIcon: <FaHeartbeat />,
            color: 'orange',
        },
        {
            points: powerstats?.intelligence,
            skill: 'Inteligencia',
            skillIcon: <FaLightbulb />,
            color: 'green',
        },
        {
            points: powerstats?.power,
            skill: 'Poder',
            skillIcon: <FaSuperpowers />,
            color: 'orange',
        },
        {
            points: powerstats?.speed,
            skill: 'Velocidad',
            skillIcon: <GiPowerLightning />,
            color: 'green',
        },
        {
            points: powerstats?.strength,
            skill: 'Fuerza',
            skillIcon: <GiMuscleUp />,
            color: 'orange',
        },
    ]


    const mapCirclePowerstats = circlePowerstats.map((circle, i) => (

        <>


            <OverlayTrigger
                key={i}
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-top}`}>
                        {circle.skill} ({circle.points}%)
                    </Tooltip>
                }
            >
                <div
                    className="my-1 p-0 d-flex justify-content-center"
                >
                    <div
                        className={`c100 p${circle.points} small ${circle.color}`}>
                        <span>{circle.skillIcon}</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                </div>

            </OverlayTrigger>

        </>
    ))

    return (
        <div className="row row-cols-3" >
            {mapCirclePowerstats}
        </div>
    )
}
