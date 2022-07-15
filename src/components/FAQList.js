import React, { useEffect, useState } from 'react';
import Question from './Question';
import QuestionForm from './QuestionForm';

const FAQList = () => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const fetchQuestions = async () => {
    try {
      const response = await fetch("/api/v1/questions")
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const questionsArray = await response.json()
      setQuestions(questionsArray)
    } catch (err) {
      console.log(`error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, []) 

  const addNewQuestion = async (newQuestion) => {
    const response = await fetch("/api/v1/questions", {
      method: 'POST',
      body: JSON.stringify(newQuestion),
      headers: new Headers({
        "Content-type": "application/json"
      })
    })

    const newQuestionFromBackend = await response.json()

    setQuestions([
      ...questions,
      newQuestionFromBackend
    ])
  }

  const toggleQuestionSelect = (id) => {
    if(id === selectedQuestion) {
      setSelectedQuestion(null)
    }
    else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected;
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => { toggleQuestionSelect(question.id) }

    return(
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return(
    <div className='page'>
      <h1>We Are Here To Help</h1>
      <div className='question-list'>
        {questionListItems}
      </div>
      <h2>Submit a question and answer</h2>
      <QuestionForm 
        addNewQuestion={addNewQuestion}
      />
    </div>
  )

}

export default FAQList;
