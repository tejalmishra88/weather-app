import React from 'react'
import { Grid } from '@mui/material'

const Day1 = (props) => {
  console.log('props....', props)
  return (
    <>
    <Grid  item
        xs={2}
        sx={{
          textAlign: 'center',
          border: '1px solid blue',
        }}>
   <h1> {props.day} </h1>
  <div>conditions={props.conditions}</div>
  <div>maxTemp={props.maxTemp} <span>&#8451;</span>
  {props.maxTemp>35 ? `<label> temp warning 🔴</label>` : null
  }
  </div>

  <div>wind={props.wind} km/h
  {props.wind>30 && <label> strong wind warning 🟠</label>
  }
  </div>
  </Grid>
    </>
  )
}

export default Day1
