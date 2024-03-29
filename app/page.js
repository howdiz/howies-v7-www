import Image from 'next/image'
import {mainContent, links, socialLinks} from './links.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  return (
    <article className="main__article">
      <div className="top__content">
        <Image unoptimized='true' priority='true' className="profile__img" width="256" height="256" src="/profile.png" alt={`Profile image of ${mainContent.name}`} />
        <h1>{mainContent.name}</h1>
        <h2>Product <a href="https://edg.io">@edgio</a>, twin dad, coffee geek</h2>
        <p>{mainContent.bio1}</p>
        <p>{mainContent.bio2}</p>
        <p>{mainContent.bio3}</p>
        <p>{mainContent.bio4}</p>
         <ul className="social-links__list">
          <a href="https://twitter.com/howdiz"><li class="nes-icon twitter is-large"/></a>
          <a href="https://www.linkedin.com/in/howieross" ><li class="nes-icon linkedin is-large"/></a>
          <a href="https://github.com/howdiz" ><li class="nes-icon github is-large"/></a>
        </ul>
      </div>
    </article>
  )
}
