import React from 'react'

const Info = () => {
  return (
    <section className="flex row">
        <div className="col-6">
        <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        </div>
        <div className="col-6 flex row">
            <h1 className="col-12">Market de Theter USDT</h1>
            <div className="col-6">
                <p>Pupularidad</p>
                <p><strong>#3</strong></p>
                <p>Volumen</p>
                <p><strong>USDT $1</strong></p>
            </div>
            <div className="col-6">
                <p>Cap. del mencado</p>
                <p><strong>USDT $1.000</strong></p>
                <p>Suministro del circulacion</p>
                <p><strong>83.09 B. USDT</strong></p>
            </div>
            <div className="col-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum maxime tempore ex sequi ducimus, laboriosam nulla distinctio. Aspernatur non distinctio delectus saepe sequi minus hic dolor debitis magnam laborum!
            </div>
        </div>
    </section>
  )
}

export default Info;
