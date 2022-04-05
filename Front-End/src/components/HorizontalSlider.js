import './HorizontalSlider.css'

const HorizontalSlider = ({ items, title, onItemSelect }) => {
  
  
  return (
   
    <div  className="slider-container">
      <div className="title">{title}</div>

        {items.map((item) => {
        return (
            <div 
            className="item-container"
            onClick={() => {
              onItemSelect(item)
            }}>
            <img src={'/images/'+item.mobImage} className="homeimg" alt = " " /> 
            <div id='myTable' className="item-title tr" >{item.mname}({item.mcolor})</div>
            <div className="item-title">{item.mprice}/-</div> 
          </div>   
          )
        })}
    </div>
  )
}

export default HorizontalSlider
