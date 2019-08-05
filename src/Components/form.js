import React from "react";
// import {placeholder} from "@babel/types";

class Form extends React.Component {
    render() {
        return (

            <form onSubmit={this.props.weatherMethod}>
               <input type="text" name = "city" placeholder="Город"/>
               <button>Получить погоду</button>
             </form>
    );
    }
}

export default Form;