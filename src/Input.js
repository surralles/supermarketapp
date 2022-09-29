import React from 'react';
import clsx from "clsx";
export default function Input(props) {
    const {className,type = "text", ...rest} = props;
    const classes = clsx ("ui-textfield", className)
    
    return <input className={classes} type={type} {...rest} />;
}
