import '../css/footer.css';
function Footer() {
    return (
        <>
            <div className='footer-box'>
                <div className="idea-box">
                    <div className="idea-img">
                        <img className='footer-logo' src='/image/damoimlogo4.png' />
                    </div>
                    <div className="idea-text">
                        <p className="idea">πλ€λͺ¨μ - DAMOIMπ μμλ μΉ΄νκ³ λ¦¬ λ³λ‘ <br />  κ΅λ΄ λμλ¦¬ νν©μ μ μ μκ³ ,<br /> λμλ¦¬ μκ°μ κ° λμλ¦¬μμ νλ³΄κΈκ³Ό μκ°κΈ λ±μ <br /> μμ±ν  μ μλ κ° λμλ¦¬ λ³ κ²μνμ μ κ³΅νλ <br />  κ΅λ΄ λμλ¦¬ κ²μνμλλ€.</p>
                    </div>
                </div>
                <div className="intro-box">
                    <div className="intro-img">
                        <a href='https://www.notion.so/10-95302d8693d548dc93a2b876cf28195f'>
                            <img className='footer-logo' src='/image/likelion.png' />
                        </a>
                    </div>
                    <div className="intro-txt">
                        <p className="txt">μ΄μμ§ : μμ¬ν<br />
                            PM : μ μ κ²½<br />
                            FRONT-END : λ°±μΉλ―Ό, μμμ°<br />
                            BACK-END : κΉμ±μ, μ μ©ν</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;