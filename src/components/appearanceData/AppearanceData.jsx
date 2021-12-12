import React from 'react'

export const AppearanceData = ({ team }) => {
    let heightAverage = team.reduce((total, { character }) => total + (character.appearance?.height[1].substring(0, character.appearance?.height[1].length - 2) / team.length), 0)

    let weightAverage = team.reduce((total, { character }) => total + (character.appearance?.weight[1].substr(0, character.appearance?.weight[1].length - 2) / team.length), 0)
    return (
        <div>
            <ul>
                <li>
                    Altura Promedio : {isNaN(heightAverage) ? 'Valor no disponible' : `${heightAverage.toFixed(2)} cm`}
                </li>
                <li>
                    Peso Promedio : {isNaN(weightAverage) ? 'Valor no disponible' : `${weightAverage.toFixed(2)} kg`}
                </li>
            </ul>
        </div>
    )
}
