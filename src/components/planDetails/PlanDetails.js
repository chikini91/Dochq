import styles from '../../../styles/Home.module.css'


function PlanDetails({ title, price, benefits, handler, index }) {
  return (
    <li key={title} className={styles.detailWrapper}>
      {index === 1 && <div className={styles.popularCard}>most popular</div>}
      <h6 className={styles.detailTitle}>{title}</h6>
      <span className={styles.detailPrice}>{price}</span>
      <p className={styles.detailPeriod}>per timeframe</p>
      <ul className={styles.details}>
        {benefits.map((benefit) => {
          return (<li key={benefit} className={styles.detailItem}>
            <span className={styles.detail}>{benefit}</span>
          </li>)
        })}
      </ul>
      <button className={styles.btn} onClick={handler}>lorem</button>
    </li>
  )
}

export { PlanDetails }



