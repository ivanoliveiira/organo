import './Rodape.css'

const Rodape = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/fb.png" alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/tw.png" alt="twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/ig.png" alt="instagram" />
                    </a>
                </li>

            </ul>
        </section>
        <section>
            <img src="./imagens/logo.png" alt="" />
        </section>
        <section>
            <p> Desenvolvido por Ivan Oliveira </p>
        </section>
    </footer >)
}
export default Rodape
