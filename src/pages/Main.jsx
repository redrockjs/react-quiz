import styles from "./Main.module.css"
import data from "../asssets/data/data.json";
import React, {useState} from 'react';

export const Main = (props) => {

  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [questionNumber, setQuestionNumber] = React.useState(1);

  const handleNextBtn = () => {
    if (questionNumber < 10) {
      setQuestionNumber(questionNumber+1)
      setCurrentAnswer(null);
    } else {
      alert("Вопросы закончились");
    }
  }

  const handleAnswerItem = (e) => {
    let trgAnswer = +e.target.dataset.key;
    let curAnswer = +data.questions[questionNumber].answer-1;

    if (trgAnswer === curAnswer) setCurrentAnswer(trgAnswer);
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
                <li className={currentAnswer===idx ? styles.main__item_active : styles.main__item}>
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
