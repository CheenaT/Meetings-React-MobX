import React from 'react';

class TimeBlocks extends React.Component {

  render() {
    return(
      <React.Fragment>
        {Array.apply(null, { length: 136 }).map((el, i) => (
          <div key={i}>
            <progress
              value="0"
              max="100"
              className={"box number" + i}
              onDragStart={ e => this.preventDefault(e) }
            />
            <div
              className={"plus-box plus" + i}
              tabIndex="0"
              onDragStart={ e => this.preventDefault(e) }
              // onBlur={() => this.setState({moreInfoPopup: false})}
            > {/* tabIndex need for working onBlur https://webaim.org/techniques/keyboard/tabindex */}
              <div className={"box__plus-h horizontal" + i}></div>
              <div className={"box__plus-v vertical" + i}></div>
            </div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default TimeBlocks;
