import "./Footer.css"

export const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__itens">
                <div className="ancorFooter__container">
                    <a href="#"><img src="/imgs/fb.png" alt=""/></a>
                    <a href="#"><img src="/imgs/tw.png" alt=""/></a>
                    <a href="#"><img src="/imgs/ig.png" alt=""/></a>
                </div>
                    <img src="/imgs/logo.png" alt="" />
                    <span className="footer__span">Reformulado por um aluno da Alura.</span>
            </div>
        </div>
    )
}