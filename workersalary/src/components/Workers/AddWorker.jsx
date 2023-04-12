import React from "react"
import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState } from "react"
import ErrorModal from "../UI/ErrorModal"

const AddWorker = (props) => {
  const [workerName, setWorkerName] = useState("")
  const [wage, setWage] = useState("")
  const [error, setError] = useState()

  const minimumWage = 5000

  const workerNameHandler = (e) => {
    setWorkerName(e.target.value)
  }

  const wageHandler = (e) => {
    setWage(e.target.value)
  }

  const addWorkerHandler = (e) => {
    e.preventDefault()
    if (workerName.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz",
      })
      return
    }
    if (+wage < minimumWage) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: `Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz`,
      })
      return
    }
    setWorkerName("")
    setWage("")
    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 99999),
        name: workerName,
        wage: wage,
      },
      ...prevState,
    ])
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan ismi yazınız"
            id="name"
            onChange={workerNameHandler}
            value={workerName}
          />
          <label htmlFor="salary" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş miktarı yazınız"
            id="salary"
            onChange={wageHandler}
            value={wage}
          />
          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default AddWorker
