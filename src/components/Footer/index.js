import React from 'react';
import moment from 'moment';

import s from './styles.css';
import Link from '../Link';

function Footer() {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <a
          className={s.updated}
          href="https://github.com/bpeters/bpeters.github.io"
          target="_blank"
        >
          updated
        </a>
        &nbsp;{moment(window.updatedLast, 'x').fromNow()}&nbsp;
      </div>
      <img src="logo.png" className={s.logo}/>
    </div>
  );
}

export default Footer;
