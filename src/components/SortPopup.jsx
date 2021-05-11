
import {useState, useEffect, useRef} from 'react'


const SortPopup = ({items}) => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const activeLabel = items[activeItem]

   const onSelectItem = (index) => {
     setActiveItem(index)
    setVisiblePopup(false)
    }

  const sortRef=useRef()

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  }
  

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
    setVisiblePopup(false)
  }
}

  
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)


  }, []);
  
  
  return ( 
    <div ref={sortRef} className="sort">
              <div className="sort__label">
               
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
              </div>
              {visiblePopup && <div className="sort__popup">
                <ul>
                {
          items.map((name, index) =>(
            <li
              onClick={()=> onSelectItem(index)}
              className={activeItem === index ? 'active' : ''}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))
                }
                </ul>
              </div>}
            </div>
   );
}
 
export default SortPopup;
