import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Registro } from './components/Interfaces';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Frase } from './components/Frase';
import { CardPotencias } from './components/CardPotencias';
import { CardCadastroAparelho } from './components/CardCadastroAparelho';
import { CardDescricaoConsumo } from './components/CardDescricaoConsumo';
import { CardValorFinal } from './components/CardValorFinal';
import { CardAparelhosCadastrados } from './components/CardAparelhosCadastrados';
import { Motivacao } from './components/Motivacao';
import { Simulacao } from './components/Simulacao';
import { Footer } from './components/Footer';
import styles from './App.module.css';
import './global.css';

export function App() {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [editarRegistro, setEditarRegistro] = useState<Registro | null>(null);
  const [aparelhoEscolhido, setAparelhoEscolhido] = useState(['', '']);
  const valorKWH = 1.016800;
  const percentualIluminacaoPublica = 0.05941397141;
  let total = 0;
  let totalFinal = 0;

  const handleRemoverRegistro = (id: number) => {
    setRegistros(registros.filter((registro) => registro.id !== id));
  };

  function handleEditarRegistro(id: number) {
    const registro = registros.find((registro) => registro.id === id);
    if (registro != null) {
      setRegistros(registros.filter((registro) => registro.id !== id));
      setEditarRegistro(registro);
    }
  }

  registros.map((registro: Registro) => {
    const valorParcial = registro.kwh[1].valor.toFixed(2);
    const valorParcial2 = parseFloat(valorParcial);
    total += valorParcial2;
  });

  totalFinal = (percentualIluminacaoPublica * total) + total;

  return (
    <>
      <Header />

      <Routes>

        <Route path='' element={
          <div className={styles.corpo}>
          <Banner imagem={"https://energiaarion.com.br/wp-content/uploads/2019/02/lampada-de-energia-1024x559.jpg"} />
          <Frase />
          <CardPotencias setAparelhoEscolhido={setAparelhoEscolhido} />
          <CardCadastroAparelho registros={registros} setRegistros={setRegistros} aparelhoEscolhido={aparelhoEscolhido} setAparelhoEscolhido={setAparelhoEscolhido} setEditarRegistro={setEditarRegistro} editarRegistro={editarRegistro} />
          <CardDescricaoConsumo total={total} valorKWH={valorKWH} pil={percentualIluminacaoPublica} />
          <CardValorFinal total={totalFinal} />
          <CardAparelhosCadastrados registros={registros} handleRemoverRegistro={handleRemoverRegistro} total={total} handleEditarRegistro={handleEditarRegistro} />
        </div>
        } />

        <Route path='/motivacao' element={
          <>
            <Banner imagem={"https://sunne.com.br/wp-content/uploads/2023/11/Imagem-Blog-su145.webp"} />
            <Motivacao />
          </>
        } />

        <Route path='/simulacao' element={
          <>
            <Banner imagem={"https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2023/06/iStock-1405880267-scaled.jpg"} />
            <Simulacao />
          </>
        } />

      </Routes>

      <Footer />
    </>
  )
}
