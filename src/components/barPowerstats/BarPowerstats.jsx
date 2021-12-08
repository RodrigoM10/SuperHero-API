import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './barPowerstats.css'
export const BarPowerstats = () => {
    const now = 60;
    
    return (
        <div>
            <ul>
                <li className="list-inline row my-2 ">
                    <div className="col-3 skill-name px-1">
                        <span>Combate</span>
                    </div>
                    <ProgressBar className="col-9 skills-progress p-0"  animated now={45}  label={`${now}%`} />
                </li>
            </ul>
        </div>
    )
}
