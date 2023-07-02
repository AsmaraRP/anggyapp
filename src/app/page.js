"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [form, setForm] = useState("");
  const [number, setNumber] = useState(0);
  const asset = [
    {
      question: "dampak yang dapat ditimbulkan oleh penyebaran viru ebola secara luas terhadap masyarakt dunia adalah ...",
      answer: [
        ["membatasi ruang gerak dan interaksi masyarakat", true],
        ["menimbulkan rasa takur melakukan untuk perjalanan jauh", false],
        ["memperkecil minal masyarakat mengonsumsi sayur dan buah", false],
        ["menurunkan kesadaran menjaga lingkungan agar tetap bersih ", false],
      ],
    },
    {
      question: "dampak yang dapat ditimbulkan oleh penyebaran virus covid 19 adalah...",
      answer: [
        ["membatasi ruang gerak penduduk", false],
        ["menimbulkan rasa takut", false],
        ["memperkecil minal masyarakat", false],
        ["menurunkan kesadaran", true],
      ],
    },
    {
      question: "berapa korban meninggal dunia karena putus cinta di dunia",
      answer: [
        ["100 jiwa", false],
        ["1000 jiwa", true],
        ["2000 jiwa", false],
        ["10000 jiwa", false],
      ],
    },
  ];
  const [data, setData] = useState(asset);
  const handleChange = (e) => {
    setData(asset);
    e.preventDefault();
    const { value } = e.target;
    setForm(value);
    setNumber(value.length);
  };

  useEffect(() => {
    console.log(form.toLowerCase());
    let result = [];
    data.map((item) => {
      if (item.question.includes(form.toLowerCase())) {
        result = [...result, item];
      }
    });
    console.log(result);
    setData(result);
  }, [form]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Image src="/anime.png" alt="logo" width={240} height={150} style={{ position: "relative", zIndex: 10 }} />
          <Image src="/ellipse.png" alt="logo" width={330} height={330} style={{ position: "absolute" }} />
        </div>
        <div className={styles.rightContainer}>
          <h1 className={styles.headerTitle}>Masukan keywords</h1>
          <div className={styles.topContainer}>
            <input className={styles.keywordForm} id="keyword" name="keyword" type="text" onChange={handleChange} />
          </div>
          <div className={styles.bottomContainer}>
            {data.map((item, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.qustionContainer}>
                  <span className={styles.questionChoice}>{item.question.slice(0, number)}</span>
                  <span className={styles.question}>{item.question.slice(number)}</span>
                </div>
                <div className={styles.answerContainer}>
                  {item.answer.map((item, index) => (
                    <p key={index} className={item[1] ? styles.answerTrue : styles.answerFalse}>
                      {(index === 0 ? "A. " : index === 1 ? "B. " : index === 2 ? "C. " : "D. ") + item[0]}
                    </p>
                  ))}
                </div>
                <p className={styles.answerFinal}>{item.answer[0][1] ? "Jawaban : A" : item.answer[1][1] ? "Jawaban : B " : item.answer[2][1] ? "Jawaban : C " : "Jawaban : D"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
