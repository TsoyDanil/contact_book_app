import React from 'react'
import './Backdrop.css'
import IBackdropProps from './IBackdropProps'

const Backdrop: React.FunctionComponent<IBackdropProps> = (props): React.ReactElement => {
    return(
        <div>
            {props.show ? 
            <div className="Backdrop"/> : null}
        </div>
    )
}

export default Backdrop