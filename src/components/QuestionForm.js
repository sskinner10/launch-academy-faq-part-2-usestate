import React, {useState} from "react";

import ErrorList from "./ErrorList";
import _ from "lodash";

const defaultQuestionForm = {
    question: "",
    answer: ""
}

const QuestionForm = (props) => {
    const [newQuestion, setNewQuestion] = useState(defaultQuestionForm)
    const [errors, setErrors] = useState({})

    const handleInputChange = (event) => {
        setNewQuestion({
            ...newQuestion,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    
    const validateQuestionForSubmit = () => {
        let submitErrors = {}
        const requiredFields = ["question", "answer"]
        requiredFields.forEach(field => {
            if (newQuestion[field].trim() === "") {
                submitErrors = {
                    ...submitErrors,
                    [field]: "is blank"
                }
            }
        })
        setErrors(submitErrors)
        return _.isEmpty(submitErrors)
    }

    const handleQuestionSubmit = (event) => {
        event.preventDefault()
        if (validateQuestionForSubmit()) {
            props.addNewQuestion(newQuestion)
            setNewQuestion(defaultQuestionForm)
        }
    }
    
    return (
        <form onSubmit={handleQuestionSubmit}>
            <ErrorList 
                errors={errors}
            />
            <label htmlFor="question">
                Question:
                <input name="question" id="question" type="text" onChange={handleInputChange}/>
            </label>
            <label htmlFor="answer">
                Answer:
                <input name="answer" id="answer" type="text" onChange={handleInputChange}/>
            </label>
            <div className="button-group">
                <input type="submit" value="Submit" className="button"/>
            </div>
        </form>
    )
}

export default QuestionForm