import styles from "./Main.module.css"
import data from "../asssets/data/data.json";
import React, {useState} from 'react';

export const Main = (props) => {

  const [currentAnswer, setCurrentAnswer] = useState(null);

  const [questionNumber, setQuestionNumber] = React.useState(1);

  const handleNextBtn = () => {
    if (questionNumber < 10) {
      setQuestionNumber(questionNumber + 1)
      setCurrentAnswer(null);
    } else {
      alert("Вопросы закончились");
    }
  }

  const handleAnswerItem = (e) => {
    // TODO: fix key and answer number, 0..3 != 1..4 ))
    console.log(e.target.dataset.key+' '+data.questions[questionNumber].answer);
    if (e.target.dataset.key === data.questions[questionNumber].answer) {
      console.log("Yeaaa!!! Right!!!");
      setCurrentAnswer(e.target.dataset.key);
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
                <li className={!!currentAnswer ? styles.main__item_active : styles.main__item}>
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
