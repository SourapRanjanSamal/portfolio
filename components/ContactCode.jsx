import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: "website",
    link: "sourap.me",
    href: "https://",
  },
  {
    social: "email",
    link: "samalsourap@gmail.com",
    href: "mailto:samalsourap@gmail.com",
  },
  {
    social: "github",
    link: "SourapRanjanSamal",
    href: "https://github.com/SourapRanjanSamal",
  },
  {
    social: "linkedin",
    link: "Sourap Ranjan Samal",
    href: "https://www.linkedin.com/in/sourap-ranjan-samal-03625b329/",
  },

  {
    social: "instagram",
    link: "sourap_samal",
    href: "https://www.instagram.com/sourap_samal/",
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
