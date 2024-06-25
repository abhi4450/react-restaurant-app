import classes from "./MealItemForm.module.css"

const MealItemForm = () => {
    return <form>
        <label htmlFor="amount" >Amount</label>
        <input className={classes.input} type="number" id="amount" />
        <button className={classes.button}>+ Add</button>
    </form>
};

export default MealItemForm;
