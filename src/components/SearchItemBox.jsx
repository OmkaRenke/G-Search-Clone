import React from 'react'
import "../style/SearchItemBox.css"
const SearchItemBox = ({data}) => {
    function createMarkup(html) {
        return {__html: html};
      }
  return (
    <div  className='itemBox'>
       <div className='windowLink' onClick={()=>window.open(data.link)}>
            <div className='formattedUrl'>{data.formattedUrl}</div>
            <div className='title'>{data.title}</div>
       </div>
       <div className='details' dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}/>
    </div>
  )
}

export default SearchItemBox