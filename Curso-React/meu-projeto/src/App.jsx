import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componentes/pages/Home";
import Empresa from "./componentes/pages/Empresa";
import Contato from "./componentes/pages/Contato";
import Projetos from "./componentes/pages/Projetos";
import Projects from "./componentes/pages/Projects";
import Container from "./componentes/layout/Container";
import Navbar from "./componentes/layout/Navbar";
import Footer from "./componentes/layout/Footer";
import Project from "./componentes/pages/Project";

import styles from "./App.module.css"

export default function App() {
  return (
    <main className={styles.principal_container}>
      <Router>
        <Navbar />

        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Empresa" element={<Empresa />} />
            <Route exact path="/Contato" element={<Contato />} />
            <Route exact path="/Projetos" element={<Projetos />} />
            <Route exact path="/Projects" element={<Projects />} />
            <Route exact path="/project/:id" element={<Project />} />
          </Routes>
        </Container>

        <Footer />
      </Router>
    </main>
  );
}
