import React from 'react'
// import ReactDOM  from 'react-dom'
import Card from "./Card"
import Button from "./Button"
import classes from "./ErrorModel.module.css"

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onConfirm}/>;
};
const ErrorModel=(props)=>{
    return (
        <div>
        <div className={classes.backdrop} onClick={props.onConfirm}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.tittle}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.massage}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
        </div>
    );
}



export default ErrorModel