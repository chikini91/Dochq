import styles from '../../../styles/Home.module.css'


function Plan({ title, subTitle, backgroundImage }) {
  return (
      <li className={styles.planCard} key={title}>
        <div
          className={styles.planCardInner}
          style={{ backgroundImage: `url(${backgroundImage}), url(/overlay.png)` }}
        >
          <span className={styles.hiddenCardText}/>
          <span className={styles.cardTitle}>{title}</span>
          <a className={styles.cardLink} href='#'>{subTitle}</a>
        </div>
        <div className={styles.overlay}/>
      </li>
  )
}

export { Plan }



