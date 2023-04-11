import React from "react"
import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState } from "react"

const AddWorker = () => {
  const [workerName, setWorkerName] = useState("")
  const [wage, setWage] = useState("")

  const workerNameHandler = (e) => {
    setWorkerName(e.target.value)
  }

  const wageHandler = (e) => {
    setWage(e.target.value)
  }

  const addWorkerHandler = (e) => {
    e.preventDefault()
    console.log(workerName, wage)
  }

  return (
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
        />
        <Button className="mt-2" type="submit">
          Ekle
        </Button>
      </form>
    </Card>
  )
}

export default AddWorker
