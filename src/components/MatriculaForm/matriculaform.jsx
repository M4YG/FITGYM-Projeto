import React from "react";
import "./matriculaform.css"
import { Link } from "react-router-dom";

const Formulariomatricula = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o reload da página
    alert("Site temporariamente fora do ar. Por favor, tente novamente mais tarde.");
  };

  return (
    <>
    <div className="Forms-MainContainer">
      <div className="form-container">
        <h2 className="title">Matrícula</h2>

        <form id="matriculaForm" className="form" onSubmit={handleSubmit}>
          <input type="text" name="nome" placeholder="Nome" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="senha" placeholder="Senha" required />
          <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" required />

          <div className="row">
            <input type="text" name="ddd" placeholder="DDD" required />
            <input type="text" name="telefone" placeholder="Telefone" required />
          </div>

          <input type="file" name="foto" />

          <button type="submit">Enviar</button>
        </form>

        <div className="contato">
          <p>
            Em caso de dúvidas, entre em contato pelo email <strong>contato@fitgym.com</strong>
          </p>
          <p>
            ou pelo telefone <strong>4002-8922</strong>
          </p>
        </div>

        <div className="login-opcao">
          <p>
            Já possui conta?
            <Link>
                Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Formulariomatricula;
