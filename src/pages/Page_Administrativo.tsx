import styles from "../modlues/administrativo.module.css"
import Card from "../components/card" // Importação do card menor (baseado no seu primeiro código)
import MainCard from "../components/mainCard" // Renomeado para MainCard para evitar conflito com o Card menor
import FCard from "../components/footerCard"
import Ajuda from "../components/cardAjuda"

// Ícones selecionados para o cenário corporativo/contábil
import { FaMemory, FaLock, FaChartLine, FaHeadset } from "react-icons/fa"
import { FaComputer, FaFileInvoiceDollar, FaRegBuilding } from "react-icons/fa6"
import { LuCpu } from "react-icons/lu"
import { BsDeviceSsd } from "react-icons/bs"
import { MdMonitor } from "react-icons/md"
import { FaUpwork, FaUser } from "react-icons/fa6"

function Page_Administrativo() {
    return(
        <div>
            {/* Cabeçalho da Página */}
            <div className={styles.container}>
                <div className={styles.h1Container}>
                    <h1 style={{textAlign: 'center', fontSize: '35px', maxWidth: '800px', margin: '0 auto'}}>
                        Dispositivo corporativo para gestão administrativa e contábil.
                        <p>Desempenho confiável para multitarefas, planilhas complexas, sistemas ERP e segurança de dados.</p>
                    </h1>
                </div>
            </div>

            {/* Seção 1: Por que este PC é ideal para a área? */}
            <div className={styles.cardsContainer}>
                <Card titulo="Multitarefa Eficiente" paragrafo="Memória RAM de sobra para rodar sistemas contábeis, navegadores e planilhas simultaneamente sem travamentos." simbolo={FaMemory} />
                <Card titulo="Mais Produtividade" paragrafo="Suporte e fluidez para uso de múltiplos monitores, ideal para conferência de notas e balanços." simbolo={MdMonitor} />
                <Card titulo="Segurança de Dados" paragrafo="Armazenamento rápido e seguro para proteger informações sensíveis da sua empresa e clientes." simbolo={FaLock} />
                <Card titulo="Sistemas ERP" paragrafo="Processadores otimizados para extrair relatórios em softwares de gestão empresarial." simbolo={FaChartLine}/>
            </div>

            {/* Seção 2: Vantagens para Empresas */}
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

            {/* Seção 3: Destaque da Recomendação (O PC em si) */}
            <div className={styles.mainCardCont}>
                <div className={styles.h1Container}>
                    <h1>Recomendação Ideal: PC Office Pro<br/>
                    <p>A configuração perfeita com o custo-benefício que a sua contabilidade precisa.</p></h1>d
                </div>
            </div>

            {/* Seção 4: Dicas e Suporte */}
                   <div className={styles.dicasAjuda}>
                         <div className={styles.h1Container}>
                             <h1>Dicas e Ajuda <p>Dicas, soluções e suporte para tornar sua experiência ainda melhor.</p></h1>
                         </div>
                         <Ajuda simbolo={FaComputer} link="Descubra >"/>
                         <Ajuda simbolo={FaUpwork} link="Veja >"/>
                         <Ajuda simbolo={FaUser} link="Descubra >"/>
                     </div>

            {/* Footer */}
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