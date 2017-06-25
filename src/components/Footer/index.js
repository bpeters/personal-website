import React from 'react';
import moment from 'moment';

import s from './styles.css';
import Link from '../Link';

function Footer() {
  return (
    <div className={s.container}>
      <p className={s.text}>
        <a
          className={s.updated}
          href="https://github.com/bpeters/bpeters.github.io"
          target="_blank"
        >
          updated
        </a>
        &nbsp;{moment(window.updatedLast, 'x').fromNow()}&nbsp;
      </p>
      <img src="logo.png" className={s.logo}/>
    </div>
  );
}

export default Footer;
