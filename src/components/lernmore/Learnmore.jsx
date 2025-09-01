import React from 'react'
import { useNavigate } from 'react-router-dom'

const Learnmore = () => {
  const navigate = useNavigate();
  navigate('About/')
  return (
    <div>
      i am your learnmore
    </div>
  )
}

export default Learnmore
