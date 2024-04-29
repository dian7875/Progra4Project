import image from "../assets/Icon.png"
import "./Header.css"
const Header = () => {
  return (
    <>
      <div className="Header">
        <img width={70} src={image} alt="" />
        <p>University Three Duckling</p>
      </div>
    </>
  )
}

export default Header
