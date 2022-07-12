import React, {useState} from "react";

const defaultQuestionForm = {
    question: "",
    answer: ""
}

const QuestionForm = (props) => {
    const [newQuestion, setNewQuestion] = useState(defaultQuestionForm)

    const handleQuestionSubmit = (event) => {
        event.preventDefault()
        props.addNewQuestion(newQuestion)
    }

    const handleInputChange = (event) => {
        setNewQuestion({
            ...newQuestion,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }


    return (
        <form onSubmit={handleQuestionSubmit}>
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