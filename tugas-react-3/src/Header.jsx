import React from 'react'

const headerStyle={
  fontSize : 50,
  fontFamily : 'TimesNewRoman',
  backgroundColor : 'yellow',
  justifyContent : 'center',
  

}

const header = () =>{
    const nama = 'Sucii'
    return (
        <header style={headerStyle}>{nama}</header>
      )
} 

export default header;




