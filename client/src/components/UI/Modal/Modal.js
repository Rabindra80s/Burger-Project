import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";


const Modal = props => {

  /* shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.show !== this.props.show || nextProps.children !== this.props.children) {
    //   return true;
    // } OR
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  } */

  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
