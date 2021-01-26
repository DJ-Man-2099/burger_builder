import React, { useState, useEffect } from "react";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../../HOC/Aux/Aux";

const ErrorHandler = (WrappedComponent, axios) => {
  let Component = (props) => {
    const [start, setStart] = useState(false)
    const [reqInter, setReqInter] = useState(null)
    const [resInter, setResInter] = useState(null)
    
    //Constructor
    if (!start) {
      console.log("Called")
      setReqInter(
        axios.interceptors.request.use(
          (req) => {
            setErrorState(null);
            return req;
          },
          (error) => {
            setErrorState(error);
            return Promise.reject(error);
          }
        ));
        setResInter( 
        axios.interceptors.response.use(
          (res) => {
            return res;
          },
          (error) => {
            setErrorState(error);
            return Promise.reject(error);
          }
        ));
        setStart(true)
    }
    

    const [errorState, setErrorState] = useState(null);

    useEffect(() => {
      console.log("rerendered", axios.interceptors,reqInter, resInter);
      return () => {
        console.log("WillUnmount", reqInter, resInter);
        axios.interceptors.request.eject(reqInter);
        axios.interceptors.response.eject(resInter);
      };
    }, [reqInter, resInter]);

    const hide = () => {
      setErrorState(null);
    };

    return (
      <Aux>
        <Modal show={errorState !== null} onClick={hide}>
          {errorState !== null ? errorState.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };

  return Component;
};

export default ErrorHandler;
