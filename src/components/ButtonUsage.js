import React from 'react'
import {Button} from '@mui/material'

export default function ButtonUsage({title, onClick,variant}) {
  return (
    <>
   <Button variant={variant} onClick={onClick}>{title} </Button>
    
    </>
  )
}
