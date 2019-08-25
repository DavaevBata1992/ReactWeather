import React from "react";
// import {placeholder} from "@babel/types";

const Form = props => (
    <form onSubmit={props.weatherMethod}>
    <input type="text" name = "city" placeholder="Город"/>
    <button>Получить погоду</button>
    </form>
)

export default Form;