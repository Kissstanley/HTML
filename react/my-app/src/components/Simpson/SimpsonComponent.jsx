import styles from './SimpsonComponent.module.css'
const SimpsonComponent =(props)=>{
    const {firstname, lastname, age, gender, photo}=props
    return(
        <div className={styles.block}>
            <h1>{firstname}</h1>
            <h1>{lastname}</h1>
            <h3>{age}</h3>
            <h3>{gender}</h3>
            <div className={styles.photo}>
                {photo}
            </div>
        </div>
    )
};

export default SimpsonComponent;