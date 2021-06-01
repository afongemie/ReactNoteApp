import { Paper } from '@material-ui/core';
import React from 'react'

function Footer() {
    return (
        <div>
            <Paper style={{ 
                paddingBottom: "10px", paddingTop: "10px", position: "absolute", bottom: "10", 
                width: "100%", textAlign: "center", }} square elevation={3}>
                Copyright &copy; {new Date().getFullYear()} A.Fongemie
            </Paper>
        </div>
    )
}

export default Footer;
