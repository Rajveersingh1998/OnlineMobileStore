import './HorizontalSlider.css'


const HorizontalSliderBrand = ({ items, title, onItemSelect }) => {

 
  return (
    <div className="slider-container">
      <div className="title">{title}</div>

      {items.map((item) => {
        return (
          <div
            className="item-container"
            onClick={() => {
              onItemSelect(item)
            }}>
              
            <img alt=" " src={'/images/'+item.brandImage} className="image" />
            <div className="item-title">{item.bname}</div>
          </div>
        )
      })}
    </div>
  )
}

export default HorizontalSliderBrand
