import React from 'react';
//import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const modal = (props) => {
    return (
        <CSSTransition 
            in={props.show} 
            timeout={{
                enter: 400,
                exit: 1000
            }} 
            mountOnEnter 
            unmountOnExit
            classNames={{ // esta propiedad es para cuando se usa la clase CSSTransition, de lo contrario es Transition
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClose'
            }}>
            <div className="Modal">
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
        </CSSTransition>
    )
};

export default modal;