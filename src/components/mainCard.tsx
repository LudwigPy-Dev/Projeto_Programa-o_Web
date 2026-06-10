import styles from "../modlues/mainCard.module.css"

function body() {
    return(
        <div className={styles.body}>
            <div className={styles.MainCard}>
                <div className={styles.h1Container}>
                    <h1>Computadores de alta qualidade<br /><p>Computadores de alta qualidade desenvolvidos para oferecer desempenho excepcional, rapidez no processamento e confiabilidade para estudos, trabalho, jogos e atividades do dia a dia.<button>Vamos lá</button></p></h1>
                </div>
            </div>
        </div>
    )
}

export default body