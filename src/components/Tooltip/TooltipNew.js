import React from 'react';
import {Manager, Reference, Popper} from 'react-popper';
import Button from '@hig/button';
import '@hig/button/build/index.css';


export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
    };
    this.toggleHide = this.toggleHide.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  toggleHide() {
    this.setState((prevState) => ({ hide: !prevState.hide,
    }));
  }

  onMouseEnter(){
    this.setState(()=>({
      hide: true,
    }));
  }
  onMouseLeave(){
    this.setState(()=>({
      hide: false,
    }));
  }

  render() {
    const props = this.props;
    return (
      <Manager>
        <div>
          <Reference>
            {({ref}) => (
              <div ref={ref} onClick={this.toggleHide} /*onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}*/>
              <Button type="primary" title="My button"/>
              </div>
            )}
          </Reference>
          {!this.state.hide &&
            <Popper placement="left">
              {({ref, style, placement, arrowProps}) => (
                <div ref={ref} style={style} data-placement={placement}>
                  {props.content}
                  <div ref={arrowProps.ref} style={arrowProps.style}/>
                </div>
              )}
            </Popper>
          }
        </div>
      </Manager>
    );
  }
}
