import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/55931083?s=460&u=decb47f1df439788e9e0c24ed8aaf6215b0b6ec0&v=4" alt="Antonio Victor melo Trindade" />
        <div>
          <strong>Antonio Victor Melo Trindade</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das maiores loucuras no mundo da tecnologia pelo mundo.
            <br />
        <br />
            Entusiasta das maiores loucuras no mundo da tecnologia pelo mundo. Entusiasta das maiores loucuras no mundo da tecnologia pelo mundo. Entusiasta das maiores loucuras no mundo da tecnologia pelo mundo.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong> R$ 50,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em Contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;