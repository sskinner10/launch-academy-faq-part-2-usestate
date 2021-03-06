import React from "react";

const ErrorList = (props) => {
    const errantFields = Object.keys(props.errors)
    if (errantFields.length > 0) {
        let index = 0
        const listOfErrors = errantFields.map((field) => {
            index++
            return (
                <li key={index}>
                  {field} {props.errors[field]}
                </li>
            )
        })
        return (
            <div>
              <ul>
                {listOfErrors}
              </ul>
            </div>
        )
    } else {
        return ""
    }

}

export default ErrorList