import React, {useRef, useState} from "react";
import {lessonsType} from "./destructuring.test";

export type ManType = {
    name: string
    age: number
    lessons: Array <lessonsType>
    address: {street: {title: string}}

}

type PropsType ={
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDimychState (m: string) {
    return [m, function (){}]
}

function useDimychState2 (m: string) {
    return {
        message: m,
        setMessage(){}
    }
}

export const ManComponent: React.FC <PropsType> = ({title, man, ...props}) => {

    const {message, setMessage} = useDimychState2 ("hello")

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>{props.car.model}</div>
    </div>
}