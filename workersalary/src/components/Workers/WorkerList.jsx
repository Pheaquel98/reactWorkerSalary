import React from "react"
import Card from "../UI/Card"

const WorkerList = () => {
  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş</span>
        </li>
        <li>
          <span>Emin Başbayan</span>
          <span>6000₺</span>
        </li>
      </ul>
    </Card>
  )
}

export default WorkerList
