// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You, will need to add an onClick event pass through your props and update the hard coded Likes
import React, {useState}from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'




  const LikeSection = (props) =>{

    const [likes,setLikes] = useState(0)

  const increase = () => {
    setLikes (likes + 1) 
  }

  return (
    <div>
      <div className="like-section"
        key="likes-icons-container">
          <Heart onLikeChange = {increase} /> 
        <div className="like-section-wrapper">
        <FontAwesomeIcon icon={faComment} /> 
        </div> 
      </div>
      <LikeChanger  count = {likes}   />
    </div>
  )}
  //Set Props
function Heart(props){
  const { onLikeChange} = props

return (<div onClick= {onLikeChange}  className="like-section-wrapper">
<FontAwesomeIcon icon={faHeart} />
</div>
)}


function LikeChanger(props){
const { count} = props


return <p className="like-number">{count} likes</p>

}

export default LikeSection;
