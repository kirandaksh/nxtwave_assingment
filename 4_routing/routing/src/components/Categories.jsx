import React from 'react'
import usePaginationContext from '../contexts/paginationContext';
function Categories(props) {
  const {categories , setCurrCategory } = props;
  const {setPageNum} = usePaginationContext();
  return (
   <>
         <button className="category_option"
                  onClick = { () => {setCurrCategory("All categories")
                                      setPageNum(1)
                  } }>
                        All Categories</button>
                    {categories.map((category)=>{
                        return <button 
                        className="category_option"
                        onClick={()=>{
                            setCurrCategory(category);
                            setPageNum(1);
                         //   console.log(category);
                        }}>{category}</button>
                    })}
   </>
  )
}

export default Categories
// This component renders a list of category buttons. When a button is clicked, it sets the