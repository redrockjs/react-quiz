import styles from "./Result.module.css"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {clearAnswersAC} from "../store/action";

export const Result = () => {

  const data = useSelector(state => state.data);
  const answers = useSelector(state => state.answers);

  const dispatch = useDispatch();

  const handleNewGame = () => dispatch(clearAnswersAC());

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

  return (
    <main>
      <h2 className={styles.result__heading}>
        Результаты:
      </h2>
      <ul>
        {listItems()}
      </ul>
      <div className={styles.result__buttons}>
        <Link to={"/"}>
          <button className={styles.result__btn} onClick={handleNewGame}>Начать сначала</button>
        </Link>
      </div>
    </main>
  )
}
