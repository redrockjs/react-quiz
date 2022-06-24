import styles from "./Main.module.css"
//import data from "../asssets/data/data.json";
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addAnswerAC} from "../store/action";
import {useNavigate} from "react-router-dom";

export const Main = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const data = useSelector(state => state.data);

  const addAnswer = (value) => dispatch(addAnswerAC(value))

  const handleNextBtn = () => {
    //TODO кажется тут нужно оптимизировать
    if (questionNumber < 10) {
      setQuestionNumber(questionNumber + 1)
      setCurrentAnswer(null);
      addAnswer(currentAnswer);
    } else {
      addAnswer(currentAnswer);
      navigate("/result");
    }
  }

  const handleAnswerItem = (e) => {
    setCurrentAnswer(+e.target.dataset.key);
  }

  return (
    <main>
      <h2 className={styles.main__heading}>Вопросы</h2>
      <p className={styles.main__question}>
        {questionNumber + '. ' + data.questions[questionNumber].question}
      </p>
      <h2 className={styles.main__heading}>Ответы</h2>
      <ul className={styles.main__answers}>
        {
          data.questions[questionNumber].answers.map((el, idx) => {
            return (
              <React.Fragment key={idx}>
                <li className={currentAnswer === idx ? styles.main__item_active : styles.main__item}>
                  <span className={styles.main__item_hover} data-key={idx} onClick={handleAnswerItem}> {el} </span>
                </li>
              </React.Fragment>
            )
          })
        }
      </ul>
      <div className={styles.main__buttons}>
        <button className={styles.main__btn} onClick={handleNextBtn}>Продолжить
        </button>
      </div>
    </main>
  );
}
