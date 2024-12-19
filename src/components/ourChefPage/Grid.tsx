import React, { ReactNode } from 'react'

const Grid = ({children}:{children:ReactNode}) => {
  return (
    <div className='wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[30px] space-y-1 my-[50px] md:my-[120px]'>
      {children}
    </div>
  )
}

export default Grid;