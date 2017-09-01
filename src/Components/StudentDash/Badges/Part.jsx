import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import React, { Component } from 'react';

class Part extends Component{
constructor(props){
  super(props)


}

render(){
  let {name, progress, check, course, videos, part_id}= this.props
  let classN=""
  if (progress=='not started'){
    progress="http://www.pngmart.com/files/4/Circle-PNG-Transparent-Image.png"
    classN = "!start"
  }
  else if (progress=='begun') {
    progress="https://maxcdn.icons8.com/Share/icon/Astrology//first_quarter1600.png"
    classN = "start"
  }
  else if (progress=='completed'){
    progress="http://iconshow.me/media/images/ui/ios7-icons/png/512/circle-filled.png"
    classN = "completes"
  }
  const part = (
  <Tooltip id="tooltip"><strong>course{course}check{check}part_id{part_id} </strong> </Tooltip>)
  return(
    <div>

    {(check==course.toString())?
    <OverlayTrigger placement="top" overlay={part}>
  <img className={classN} onClick={this.props.video_show.bind(this, videos)}id='part'src={progress} />

  </OverlayTrigger>


   : null}

   </div>
    )

}

}
export default Part
