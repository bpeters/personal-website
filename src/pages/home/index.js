import React, { Component } from 'react';

import Footer from '../../components/Footer';

import s from './styles.css';

const projects = [
  {
    title: 'ETHPING',
    description: 'decentralized outreach and connections',
    links: [
      {
        title: 'website',
        url: 'https://ethping.com',
      },
      {
        title: 'github',
        url: 'https://github.com/ethping',
      },
    ],
  },
  {
    title: 'LMNOP',
    description: 'wireless 3.0 on the blockchain',
    links: [
      {
        title: 'website',
        url: 'https://lmnop.network',
      },
      {
        title: 'github',
        url: 'https://github.com/lmnop',
      },
    ],
  },
  {
    title: 'Seven Sails',
    description: 'strategic board game with pirates',
    links: [
      {
        title: 'website',
        url: 'http://sevensails.world',
      },
    ],
  },
  {
    title: 'Litestreak',
    description: 'top down twitch shooter web game',
    links: [
      {
        title: '2d multiplayer',
        url: 'https://litestreak-2d.herokuapp.com/',
      },
      {
        title: 'github',
        url: 'https://github.com/bpeters/litestreak',
      },
      {
        title: '3d singleplayer',
        url: 'https://litestreak.herokuapp.com/',
      },
      {
        title: 'github',
        url: 'https://github.com/bpeters/litestreak3D',
      },
    ],
  },
  {
    title: 'Suburban Violence',
    description: '2d grocery store jousting web game',
    links: [
      {
        title: '2d local multiplayer',
        url: 'https://suburban-violence.herokuapp.com/',
      },
      {
        title: 'github',
        url: 'https://github.com/bpeters/suburbanviolence',
      },
    ],
  },
  {
    title: 'Secret Set',
    award: 'SXSW 2016 Hackathon Winner',
    description: 'secret music sets from your favorite artists',
    alert: 'iOS app deactivated',
    links: [
      {
        title: 'website',
        url: 'https://secretset.herokuapp.com/',
      },
      {
        title: 'iOS demo',
        url: 'https://devpost.com/software/secret-set',
      },
      {
        title: 'github',
        url: 'https://github.com/bpeters/secretset',
      },
    ],
  },
  {
    title: 'Not A Fight Club',
    description: 'sentiment analysis for text messages',
    alert: 'iOS app deactivated',
    links: [
      {
        title: 'website',
        url: 'https://naft.herokuapp.com/',
      },
      {
        title: 'iOS demo',
        url: 'https://devpost.com/software/not-a-fight-club',
      },
      {
        title: 'github',
        url: 'https://github.com/bpeters/nafc',
      },
    ],
  },
  {
    title: 'Bunches',
    description: 'student group messaging app',
    alert: 'iOS app deactivated',
    links: [
      {
        title: 'github',
        url: 'https://github.com/bpeters/bunches',
      },
    ],
  },
];

const renderLinks = (links) => {
  return links.map((link, i) => {
    return (
      <div>
        <a
          className={s.projectLink}
          href={link.url}
          target="_blank"
          key={i}
        >
          {link.title}
        </a>
      </div>
    );
  })
};

const renderAward = (award) => {
  if (award) {
    return (
      <div className={s.projectAward}>
        {award}
      </div>
    );
  }

  return null;
}

const renderAlert = (alert) => {
  if (alert) {
    return (
      <div className={s.projectAlert}>
        {alert}
      </div>
    );
  }

  return null;
}

const renderProjects = () => {
  return projects.map((project, i) => {
    return (
      <div className={s.project} key={i}>
        <div className={s.projectTitle}>
          {project.title}
        </div>
        {renderAward(project.award)}
        <div className={s.projectDescription}>
          {project.description}
        </div>
        {renderAlert(project.alert)}
        {renderLinks(project.links)}
      </div>
    );
  })
};

class HomePage extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.body}>
          <div className={s.title}>
            Hi, my name is
            <span className={s.green}>&nbsp;Brennen Peters&nbsp;</span>
          </div>
          <div className={s.text}>
            I like
            <b>&nbsp;building & designing&nbsp;</b>
            stuff
          </div>
          <div className={s.text}>
            I love
            <b>&nbsp;traveling&nbsp;</b>
          </div>
          <div className={s.text}>
            I fucking love
            <b>&nbsp;coffee&nbsp;</b>
          </div>
          <div className={s.spacer} />
          <a className={s.link} href="https://github.com/bpeters" target="_blank">
            github/bpeters
          </a>
          <a className={s.link} href="https://www.linkedin.com/in/brennenpeters/" target="_blank">
            linkedin/brennenpeters
          </a>
          <a className={s.link} href="https://www.instagram.com/brennen_peters/" target="_blank">
            instagram/brennen_peters
          </a>
          <div className={s.logo}>
            <img
              className={s.portrait}
              src="portrait.png"
            />
          </div>
          <a className={s.ethlink} href="https://etherscan.io/address/brennen.eth" target="_blank">
            brennen.eth
          </a>
          <div className={s.small}>
            I like ethereum
          </div>
          <div className={s.projects}>
            Projects
          </div>
          <div className={s.small}>
            I work on too many things at once…
          </div>
          {renderProjects()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
