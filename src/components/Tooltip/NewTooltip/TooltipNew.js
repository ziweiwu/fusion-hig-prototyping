import React from 'react';
import {Manager, Reference, Popper} from 'react-popper';
import Button from '@hig/button';
import classNames from 'classnames';
import '@hig/button/build/index.css';
import '../tooltip.css';
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
    this.setState((prevState) => ({
      hide: !prevState.hide,
    }));
  }

  onMouseEnter() {
    this.setState(() => ({
      hide: true,
    }));
  }

  onMouseLeave() {
    this.setState(() => ({
      hide: false,
    }));
  }

  render() {
    const props = this.props;
    const tooltipTitleClass = classNames({
      'hig-tooltip-title': true
    });
    const tooltipDescriptionClass = classNames({
      'hig-tooltip-description': true
    });
    const tooltipInnerContentClass = classNames({
      'hig-tooltip-inner-content': true
    });
    const tooltipLink = classNames({
      'hig-tooltip-link': true
    });

    const tooltipChildenWrapper = classNames({
      'hig-tooltip-children-wrapper': true,
      'hip-tooltip': true
    });

    const tooltipArrowTop = classNames({
      'hig-tooltip-arrow': true,
      'hig-tooltip-placement-top': true,
    });

   const tooltipArrowRight = classNames({
      'hig-tooltip-placement-right': true,
     'hig-tooltip-arrow': true,
   })
    const tooltip = classNames({
      'hig-tooltip': true,
    });

    return (
      <Manager>
        <div>
          <Reference>
            {({ref}) => (
              <div ref={ref} onClick={this.toggleHide}
                   className={tooltip}/*onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}*/>
                <Button type="primary" title="My button"/>
              </div>
            )}
          </Reference>
          {!this.state.hide &&
          <Popper placement={props.placement}>
            {({ref, style, placement, arrowProps}) => (
              <div ref={ref} style={style} data-placement={placement} className={tooltipChildenWrapper}>
                {props.content}
                <div ref={arrowProps.ref} className={tooltipArrowRight} style={arrowProps.style} />
              </div>
            )}
          </Popper>
          }
        </div>
      </Manager>
    );
  }
}
