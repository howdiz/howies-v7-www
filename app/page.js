import Image from 'next/image'
import {mainContent, links, socialLinks} from './links.js';

export default function Home() {
  return (
    <article className="main__article">
      <div className="top__content">
        <Image className="profile__img" width="256" height="256" src="/profile.png" alt={`Profile image of ${mainContent.name}`} />
        <h1>{mainContent.name}</h1>
        <h2>{mainContent.tagline}</h2>
        <p>{mainContent.bio1}</p>
        <p>{mainContent.bio2}</p>
        <p>{mainContent.bio3}</p>
        <p>{mainContent.bio4}</p>
         <ul class="social-links__list">
          {socialLinks.map((link) => (
            <li class="social-links__link">
              <a href={link.url}>
                <Image name={link.icon} width="36px" height="36px" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
