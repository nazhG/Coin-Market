import { btnAnimation } from "../comps/utils/btnAnimation";

export default function Referidos() {
  return (
    <section className="bg-panel5 relative p-8 h-[100vh]">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source
            src="/VIDEO_FONDO_PANEL_5_e_INTERFAZ_2.mp4"
            type="video/mp4"
          />
          Tu navegador no admite video HTML5.
        </video>
        <div className="degradado"></div>
      </div>
        <div className="flex flex-col z-30 relative text-center h-full justify-around text-4xl items-center text-gray-200">
            <p>
                ¿Eres un emprendedor digital apasionado en compartir excelentes oportunidades a tu comunidad digital, Tienes objetivos enfocados en aumentar tus ingresos?
            </p>
            <p>
                ¡Avanza en tus objetivos recomendando los servicios de Staking en coin Market!
            </p>
            <p>
                Obtines <span className="text-5xl font-bold">17%</span> en Referencias directas
            </p>
            <p>
                <span className="text-5xl font-bold">3%</span> en Nivel 2
            </p>
            <p>
                <span className="text-5xl font-bold">10%</span> en Reinversiones
            </p>
            <div className="border rounded border-white">
                <input type="text" name="username" id="username" className={`p-3`} />
            </div>
            <button className={`bg-gray-200 text-blue-950 rounded-lg px-4 py-2 mb-4 ${btnAnimation}`} >
                ENVIAR SOLICITUD
            </button>
            <p className="text-2xl w-3/5">
                Recibirás un Email confirmando tu solicitud con tu Link de referidos para que inicies inmediatamente a cumplir tus objetivos en CoinMarket.
            </p>
        </div>
    </section>
  )
}
