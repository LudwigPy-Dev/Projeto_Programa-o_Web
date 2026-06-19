import styles from "../modules/body.module.css"
import Card from "../components/card"
import FCard from "../components/footerCard"

import { FaMemory, FaLock, FaChartLine, FaHeadset, FaTachometerAlt } from "react-icons/fa"
import { FaFileInvoiceDollar, FaRegBuilding } from "react-icons/fa6"
import { MdMonitor } from "react-icons/md"
import { LuCpu } from "react-icons/lu"
import { BsDeviceSsd } from "react-icons/bs"

function Page_Administrativo() {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.h1Container}>
                    <h1 style={{textAlign: 'center', fontSize: '35px', maxWidth: '800px', margin: '0 auto'}}>
                        Dispositivo corporativo para gestão administrativa e contábil.
                        <p>Desempenho confiável para multitarefas, planilhas complexas, sistemas ERP e segurança de dados.</p>
                    </h1>
                </div>
            </div>

            <div className={styles.cardsContainer}>
                <Card titulo="Multitarefa Eficiente" paragrafo="Memória RAM de sobra para rodar sistemas contábeis, navegadores e planilhas simultaneamente sem travamentos." simbolo={FaMemory} />
                <Card titulo="Mais Produtividade" paragrafo="Suporte e fluidez para uso de múltiplos monitores, ideal para conferência de notas e balanços." simbolo={MdMonitor} />
                <Card titulo="Segurança de Dados" paragrafo="Armazenamento rápido e seguro para proteger informações sensíveis da sua empresa e clientes." simbolo={FaLock} />
                <Card titulo="Sistemas ERP" paragrafo="Processadores otimizados para extrair relatórios em softwares de gestão empresarial." simbolo={FaChartLine}/>
            </div>

            <div className={styles.container}>
                <div className={styles.h1Container}>
                    <h1>Vantagens para o seu Escritório</h1>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                <Card titulo="Faturamento B2B" paragrafo="Emissão rápida de Nota Fiscal para CNPJ e condições especiais para lotes." simbolo={FaFileInvoiceDollar} />
                <Card titulo="Garantia Corporativa" paragrafo="Equipamentos com garantia estendida e peças de alta durabilidade para rotinas intensas." simbolo={FaRegBuilding} />
                <Card titulo="Atendimento Especializado" paragrafo="Consultores prontos para entender e dimensionar a demanda de hardware da sua equipe." simbolo={FaHeadset} />
            </div>
            <div className={styles.mainCardCont} style={{backgroundImage:'url(images/PC_Administrativo.png),linear-gradient(to top,var(--bg-card) 40%, var(--emerald) 100%)',
                backgroundSize: '400px, cover',
            }}>
                <div className={styles.h1Container}>
                    <h1>Recomendação Ideal: PC Office Pro<br/>
                    <p>A configuração perfeita com o custo-benefício que a sua contabilidade precisa.</p></h1>
                <div className={styles.espCont}>
            <h2>
              <div className={styles.symbol}>
                <FaMemory />
              </div>{" "}
              8GB DDR4
            </h2>
            <h2>
              <div className={styles.symbol}>
                <LuCpu />
              </div>
              Intel Core i3-10100
            </h2>
            <h2>
              <div className={styles.symbol}>
                <FaTachometerAlt />
              </div>
             Vídeo Integrado Intel UHD 630
            </h2>
            <h2>
              <div className={styles.symbol}>
                <BsDeviceSsd />
              </div>
              SSD Kingston A400 480GB
            </h2>
          </div>
          </div>
            </div>
            <footer>
                <FCard titulo={`Suporte Corporativo`} descricao="Canal de atendimento exclusivo com prioridade para empresas e escritórios." />
                <FCard titulo={`Política de Devolução`} descricao="Facilidade na troca ou adequação de equipamentos corporativos." />
                <FCard titulo={`Segurança B2B`} descricao="Seus dados de faturamento e pagamentos protegidos em ambiente seguro." />
            </footer>
            <hr />
            <h2 className={styles.h2}>© 2026 PC Parts. Todos os direitos reservados.</h2>
        </div>
    )
}

export default Page_Administrativo