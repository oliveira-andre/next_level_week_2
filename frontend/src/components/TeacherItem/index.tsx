import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return ( 
        <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/30729516?s=460&u=61d4c46a6bed8656ec31eb6dc147fe6b21e2212e&v=4" alt="Andre Oliveira" />
            <div>
              <strong>Andre Oliveira</strong>
              <span>Quimica</span>
            </div>
          </header>

          <p>
            Maluco dos códigos
            <br /><br />
            etc etc etc
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="entrar em contato" />
              Entrar em contato
            </button>
          </footer>
        </article>
      )
}

export default TeacherItem;
