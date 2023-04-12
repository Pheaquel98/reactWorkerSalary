import React from "react"
import Button from "./Button"
import Card from "./Card"

const ErrorModal = () => {
  return (
    <div className="fixed top-1/4 left-0 flex justify-center mx-auto w-screen z-50 ">
      <Card className="w-[36rem] border">
        <header>
          <h2>İsim Alanı Zorunludur</h2>
        </header>
        <section>Lütfen bir isim giriniz</section>
        <footer>
          <Button>Tamam</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal
