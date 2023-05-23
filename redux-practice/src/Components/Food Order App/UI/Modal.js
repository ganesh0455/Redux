import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { HIDE_MODEL } from '../../../Actions/Food';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onBackDrop} />;
};

const ModalOverlay = (props) => {
   
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    const dispatch=useDispatch();
    const onBackDrop=()=>{
        dispatch({type:HIDE_MODEL});
    }
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onBackDrop={onBackDrop} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;