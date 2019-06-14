import React from "react";
import {Row, Preloader} from "react-materialize";

export const Loading = (props) => {
  const { isBasic } = props;

  return (
      <div className="loading-container">
          <div className={isBasic ? "basic-styling" : "preview-styling"}>
              <Row className='wrapper center-align'>
                  <Row>
                      <h3 className="header-style loading-header">Loading</h3>
                  </Row>
                  <Row>
                      <Preloader flashing/>
                  </Row>
              </Row>
          </div>
      </div>
  );
};

export default Loading;