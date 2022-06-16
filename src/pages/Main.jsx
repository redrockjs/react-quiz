import styles from "./Main.module.css"
import data from "../asssets/data/data.json";
import {useState} from "react";

export const Main = (props) => {

  const [questionNumber, setQuestionNumber] = useState(1);

  const resultArr = [];

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
        <li className={styles.main__item}>{data.questions[questionNumber].answers[0]} </li>
        <li className={styles.main__item}>{data.questions[questionNumber].answers[1]} </li>
        <li className={styles.main__item}>{data.questions[questionNumber].answers[2]} </li>
        <li className={styles.main__item}>{data.questions[questionNumber].answers[3]} </li>
      </ul>
      <div className={styles.main__buttons}>
        <button className={styles.main__btn} onClick={handleNextBtn}>Продолжить
        </button>
      </div>
    </main>
  );
}
