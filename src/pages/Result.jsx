import styles from "./Result.module.css"
import {useSelector} from "react-redux";

export const Result = () => {

  const data = useSelector(state => state.data);
  const answers = useSelector(state => state.answers);

  data.questions.forEach((el, idx) => {
    if (idx > 0) {
      console.log(el.number + '. ' + el.question
        + ' правильный ответ:' + el.answers[Number(el.answer) - 1]
        + ' ваш ответ' + el.answers[answers[idx - 1]]);
    }
  })


  let listItems = () => {
    return data.questions.map((el, idx) => {
        return (idx > 0) &&
          <li className={styles.result__item}>
            <div className={styles.result__wrapper}>
              <div className={styles.result__question}> {el.number} {el.question}</div>
              <div className={
                el.answers[Number(el.answer) - 1] === el.answers[answers[idx - 1]]
                  ? styles.result__answers_right
                  : styles.result__answers
              }
              > {el.answers[answers[idx - 1]]}</div>
            </div>
          </li>
      }
    )
  }

  console.log(answers);

  return (
    <main>
      <h2 className={styles.result__heading}>
        Результаты:
      </h2>
      <ul>

        {listItems()}
        {/*<li className={styles.result__item}>*/}
        {/*  <div className={styles.result__wrapper}>*/}
        {/*    <div className={styles.result__question}> 1. Какая страна производит больше всего кофе в мире?</div>*/}
        {/*    <div className={styles.result__answers}>Индонезия</div>*/}
        {/*  </div>*/}
        {/*</li>*/}
      </ul>
      <div className={styles.result__buttons}>
        <button className={styles.result__btn}>Начать сначала</button>
      </div>
    </main>
  )
}
