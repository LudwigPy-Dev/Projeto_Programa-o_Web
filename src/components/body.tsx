import { CgCardSpades } from "react-icons/cg"
import styles from "../modlues/body.module.css"
import Card from "./card"
import FCard from "./footerCard"
import { FaMemory, FaSadCry, FaSalesforce, FaUser } from "react-icons/fa"
import { FaComputer, FaUpwork } from "react-icons/fa6"
import Ajuda from "./cardAjuda"
import { LuCpu } from "react-icons/lu"
import { BsDeviceSsd } from "react-icons/bs"
import { IoWifi } from "react-icons/io5"
function body() {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.h1Container}>
                    <h1>Soluções para todas as necessidades<p>Trabalhamos com uma linha completa de produtos e serviços para o seu dia a dia, estudos ou empresa.</p></h1>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                <Card titulo="Para você" paragrafo="Equipamentos e acessórios ideais para tarefas diárias, estudos, entretenimento e muito mais." simbolo={FaUser} />
                <Card titulo="Para empresas" paragrafo="Soluções eficientes para a produtividade do seu negócio com suporte dedicado." simbolo={FaUpwork} />
                <Card titulo="Para estudantes" paragrafo="Tecnologia acessível para facilitar o aprendizado e a realização dos seus projetos." simbolo={CgCardSpades} />
                <Card titulo="Peças e upgrades" paragrafo="Encontre as peças certas para melhorar o seu equipamento." simbolo={FaSalesforce}/>
            </div>
                <div className={styles.container}>
                    <div className={styles.h1Container}>
                        <h1>Por que comprar com a gente?</h1>
                    </div>
                </div>
            <div className={styles.cardsContainer}>
                <Card titulo="Marcas confiáveis" paragrafo="Trabalhamos com as melhores marcas do mercado." simbolo={FaSalesforce} />
                <Card titulo="Garantia" paragrafo="Todos os produtos com garantia e procedência comprovada." simbolo={FaUpwork} />
                <Card titulo="Entrega rápida" paragrafo="Enviamos para todo o Brasil com agilidade e segurança." simbolo={FaUpwork} />
                <Card titulo="Parcele em até 12x" paragrafo="Condições facilitadas para você realizar seus projetos." simbolo={FaSadCry}/>
                <Card titulo="Compra segura" paragrafo="Seus dados protegidos em ambiente 100% seguro." simbolo={FaSadCry}/>
            </div>
            <div className={styles.dicasAjuda}>
                <div className={styles.h1Container}>
                    <h1>Dicas e Ajuda <p>Dicas, soluções e suporte para tornar sua experiência ainda melhor.</p></h1>
                </div>
                <Ajuda simbolo={FaComputer} link="Descubra >"/>
                <Ajuda simbolo={FaUpwork} link="Veja >"/>
                <Ajuda simbolo={FaUser} link="Descubra >"/>
            </div>
                <div className={styles.mainCardCont}>
                    <div className={styles.h1Container}>
                        <h1>Destaques da semana<br/><p>Os melhores Destaques da semana se encontra aqui, com computadores de alto desempenho para o seu dia a dia</p></h1>
                        <div className={styles.espCont}>
                            <h2><div className={styles.symbol}><FaMemory /></div> 16 GB RAM</h2>
                            <h2><div className={styles.symbol}><LuCpu /></div>AMD RYZEN 5600GT</h2>
                            <h2><div className={styles.symbol}><BsDeviceSsd /></div>SSD 512GB</h2>
                            <h2><div className={styles.symbol}><IoWifi /></div>CONEXÃO WI-FI</h2>
                        </div>
                    </div>
                </div>
            <footer>
                <FCard titulo={`Atendimento ao cliente`} descricao="Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida ou problema." />
                <FCard titulo={`Política de devolução`} descricao="Oferecemos uma política de devolução flexível para garantir a sua satisfação." />
                <FCard titulo={`Segurança`} descricao="Garantimos a segurança dos seus dados e transações em nosso site." />
            </footer>
            <hr />
            <h2 className={styles.h2}>© 2024 PC Parts. Todos os direitos reservados.</h2>
        </div>
    )
}

export default body