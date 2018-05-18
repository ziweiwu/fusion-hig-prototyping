import React, { Component } from "react";
import PropTypes from "prop-types";

import NotificationAdapter from "../../../../adapters/GlobalNav/TopNav/NotificationAdapter";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unread: this.props.unread
    };
    this.initialProps = props;
  }

  onLinkClick = () => {
    this.props.onLinkClick(this.props.id);
  };

  render() {
    return (
      <NotificationAdapter
        {...this.props}
        onLinkClick={this.onLinkClick}
        id={this.props.id}
        unread={this.props.unread}
      >
        {this.props.children}
      </NotificationAdapter>
    );
  }
}

export function notificationElementPropType(props, propName) {
  const value = props[propName];
  if (value && value.type && value.type === Notification.name) {
    return new Error("Expected an element of type Notification.");
  }
  return null;
}

Notification.defaultProps = {
  onLinkClick: () => {}
};

Notification.propTypes = {
  /**
   * {Boolean} to show specify whether notification is read
   */
  unread: PropTypes.bool,
  /**
   * Content for notification
   */
  children: PropTypes.node,
  /**
   * Timestamp for notification (ISO date string or date instance)
   */
  timestamp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
  /**
   * A callback called when user clicks on a link in the notification
   */
  onLinkClick: PropTypes.func,
  /**
   * A callback called when user dismisses a featured notification
   */
  onDismiss: PropTypes.func,
  /**
   * Unique Id for the notification
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /**
   * {Boolean} specifies a featured notification
   */
  featured: PropTypes.bool
};
