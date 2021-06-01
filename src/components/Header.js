import React from 'react'
import Paper from '@material-ui/core/Paper';

function Header() {
    return (
        <Paper style={{ padding: "5px", display: "flex" }} square elevation={3}>
      <img style={{ width: "40px" }}
        src="https://www.rlogical.com/wp-content/uploads/2018/09/blog7.png"
        alt=""
      ></img>
      <h1 style={{ margin: "0", fontFamily: "limelight" }}>
        ReactNotes
      </h1>
    </Paper>
    )
}

export default Header
