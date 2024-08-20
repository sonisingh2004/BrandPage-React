import styles from './Frame.module.css'
import pic2 from './images/amazon.png'
import pic1 from './images/flipkart.png'
import pic from './images/shoe_image.png'
function Frame() {
    return (
        <div className={styles.main}>
            <div className={styles.about}>
                <div className={styles.title}>YOUR FEET DESERVE THE BEST</div>
                <div className={styles.subtitle}>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                    OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
                    YOU WITH OUR SHOES.
                </div>
                <div className={styles.buttons}>
                    <button className={styles.b1}>Shop Now</button>
                    <button className={styles.b2}>Category</button>
                </div>
                <div>
                    <div className={styles.available}>Also available on</div>
                    <div className={styles.images}>
                        <img className={styles.img} src={pic1}></img>
                        <img className={styles.img} src={pic2}></img>
                    </div>
                </div>
            </div>

            <div className={styles.image}>
                <img src={pic}></img>
            </div>
        </div>
    )
}
export default Frame
