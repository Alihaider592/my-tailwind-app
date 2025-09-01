import React from 'react'

const Readmorebtn = ({text="Read More" , className=`` , hover=""}) => {
  return (
<button
className={`px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg text-white  ${className}`}
>
        {text}
</button>
  )
}

export default Readmorebtn