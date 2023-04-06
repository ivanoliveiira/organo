import './Banner.css'
//importando css direto pro banner.js pra mandar direto pro APP.js
function Banner() {
    //JSX parece html mas nao é
    return (
        <header className="Banner">
            <img src="/imagens/banner.png" alt="banner principal da pagina do Orgnano" />
        </header>
    )
}

export default Banner