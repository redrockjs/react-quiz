import styles from "./Main.module.css"
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addAnswerAC} from "../store/action";
import {useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

export const Main = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFlash, setIsFlash] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const data = useSelector(state => state.data);

  const addAnswer = (value) => dispatch(addAnswerAC(value))

  const handleNextBtn = () => {
    setIsFlash(true)
    if (currentAnswer !== null) {
      addAnswer(currentAnswer);
      if (questionNumber < 10) {
        setQuestionNumber(questionNumber + 1)
        setCurrentAnswer(null);
        setIsFlash(false)
      } else {
        navigate("/result");
      }
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
                  <CSSTransition
                    in={isFlash}
                    timeout={1000}
                    classNames={{
                      enter: styles['main__item_hover'],
                      enterActive: styles['main__item_flash'],
                      exit: styles['main__item_hover'],
                      exitActive: styles['main__item_hover'],
                      exitDone: styles['main__item_hover'],
                    }}
                    onEntered={() => setIsFlash(false)}
                  >
                    <span className={styles.main__item_hover} data-key={idx} onClick={handleAnswerItem}> {el} </span>
                  </CSSTransition>
                </li>
              </React.Fragment>
            )
          })
        }
      </ul>
      <div className={styles.main__buttons}>
        <button className={styles.main__btn} onClick={handleNextBtn}>Продолжить</button>
      </div>
    </main>
  );
}
