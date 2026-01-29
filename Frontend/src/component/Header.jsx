import React,{useMemo} from 'react'

const Header = () => {
    console.log("Header Render");
  return (
    <div>Header</div>
  )
}

export default React.memo(Header)
