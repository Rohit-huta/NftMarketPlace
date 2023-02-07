import React from 'react'
import assets from '../assets'
import styles from '../styles/Globals'

const FeatureCard = ({iconUrl, iconText, react}) => (
  <div className={styles.featureCard} onClick={() => react ? window.open("https://reactnative.dev/") : window.open("https://www.javascript.com/") }>
    <img src={iconUrl} alt='icon' className={styles.featureImg}/>
    <p className={styles.pText}>{iconText}</p>
    </div>
)
const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology, React Native.
          </p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" react/>
          <FeatureCard iconUrl={assets.javascript} iconText="Javascript"/>
        </div>
      </div>
    </div>
  )
}

export default Features