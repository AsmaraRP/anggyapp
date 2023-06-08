
"use client"
import { useState } from "react";
import styles from './page.module.css';


export default function Home() {
  const [form, setForm] = useState("")
  const asset = [
    {
      question: "mengapa anda",
      answer: "A"
    },
    {
      question: "bagaimana anda",
      answer: "B"
    },
  ]
  const [data, setData] = useState(asset)
  const handleChange = (e) => {
    setData(asset)
    e.preventDefault();
    const { value } = e.target;
    setForm(value);
  };
  const handleSubmit = () => {
    console.log(form.toLowerCase());
    let result = []
    data.map(item => {
      if (item.question.includes(form.toLowerCase())) {
        result = [...result, item]
      }
    })
    setData(result)
  }
  const handleRefresh = () => {
     setData(asset)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h1> App</h1>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.topContainer}>
            <label htmlFor="keyword" clkeyword={styles.keywordLabel}>Masukan Keyword</label>
            <input
              className={styles.keywordForm}
              id="keyword"
              name="keyword"
              type="text"
              onChange={handleChange}
            />
            <button
              type="submit"
              className={styles.keywordButton}
              onClick={handleSubmit}
            >
              Cari
            </button>
          </div>
          <div className={styles.bottomContainer}>
            {data.map((item, index)=>(
            <div className={styles.card} key={index}>
              <p className={styles.question}>{'Pertanyaan : ' + item.question}</p>
              <p className={styles.answer}>{'Jawaban :' + item.answer}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
