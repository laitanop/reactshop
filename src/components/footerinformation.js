import React, { Component } from 'react';
// import { ResponsiveEmbed, embed } from 'react-bootstrap';


class FooterInformation extends Component {
  render() {
    return (
      <div>

        <div className="row footerinformation">
          <div className="col-sm-7">
            <div className="thumbnail ">
              <img id="landing"src="img/photoshape/ps12.jpg" alt="50x100" />
            </div>
          </div>
          <div className="col-sm-5">
            <p>"Style is about character, a point of view and a handful of perfectly designed pieces that define who your are."</p>
            <img id="landing" src="img/photoshape/ps3.jpg" alt="50x100" />
          </div>
          </div>

      </div>
    );
  }
}

export default FooterInformation;
