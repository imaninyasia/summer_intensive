import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FaShield from 'react-icons/lib/fa/shield'
import './User.css'
export default class User extends Component{

  render(){
     const {name, thumbnail, email, admin, num} = this.props
     return(
      <div>
      {(name == 'admin') ? null :
        <div className="col-md-3 col-sm-6 col-xs-12 gallery-item-wrapper photography artwork">
                        <div className="gallery-item">
                            <div className="gallery-thumb">
                                <img src={thumbnail} className="img-responsive" alt="8th gallery Thumb" style={{outline: 'none', cursor: 'inherit'}} />
                                <div className="image-overlay"></div>
                                <a href="http://placehold.it/800x600" className="gallery-zoom"><i className="fa fa-eye"></i></a>


                                <Link to={"/student/"+num} className="gallery-link"><i className="fa fa-link"></i></Link>
                            </div>
                            <div className="gallery-details">
                              <div className="editContent" style={{outline: 'none', cursor: 'inherit', outlineOffset: '-2px'}}>

        <h5> {name} {(admin) ? <FaShield /> : null}</h5>

                              </div>
                            </div>
                        </div>
                    </div>
                  }
</div>

      )
  }

}
