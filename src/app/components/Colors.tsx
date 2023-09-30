import React from 'react'
interface colorsProp {
  setColor: (color: string) => void
}
export default function Colors({ setColor }: colorsProp) {
  const colors = [
    '#BAE2FF',
    '#B9FFDD',
    '#FFE8AC',
    '#FFCAB9',
    '#F99494',
    '#9DD6FF',
    '#ECA1FF',
    '#DAFF8B',
    '#FFA285',
    '#CDCDCD',
    '#979797',
    '#A99A7C',
  ]
  return (
    <div className='absolute z-10 gap-3 top-[112%] left-[-50%] py-1 flex justify-center flex-wrap border bg-white border-[#D9D9D9] w-[290px] rounded-[9px] md:flex-nowrap md:w-[580px] shadow-sm'>
      {colors.map((color, index) => {
        return (
          <div key={index} id={color} className='w-9 h-9 rounded-full cursor-pointer' style={{ backgroundColor: color }} onClick={() => setColor(color)} />
        )
      })}
    </div>
  )
} 