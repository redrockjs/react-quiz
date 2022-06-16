import styles from "./Main.module.css"
import data from "../asssets/data/data.json";
import React from 'react';

export const Main = (props) => {

  const [questionNumber, setQuestionNumber] = React.useState(1);

  const handleNextBtn = () => {
    if (questionNumber < 10) {
      setQuestionNumber(questionNumber + 1)
    } else {
      alert("Вопросы закончились");
    }
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
                <li className={styles.main__item}>
                  <span className={styles.main__item_hover}> {el} </span>
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
