import styles from "./style.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.facebook.com/youcef.zeraibi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        href="https://www.instagram.com/4ealyoucef/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a
        href="https://wa.me/0563251943"
        target="_blank"
        rel="noopener noreferrer"
      >
        Whatsapp
      </a>
      {/* <a>LinkedIn</a> */}
    </div>
  );
}
