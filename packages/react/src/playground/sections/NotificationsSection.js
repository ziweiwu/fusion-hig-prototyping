import React, { PureComponent } from "react";
import PlaygroundSection from "../PlaygroundSection";
import {
  Button,
  Notifications,
  NotificationV1 as Notification,
  TextLink,
  Shortcut
} from "../../hig-react";

const sampleNotifications = [
  {
    id: 0,
    unread: true,
    type: "primary",
    children: (
      <div>
        <p>
          <b>Your subscription expires May 5</b>
        </p>
        <p>
          Maya<br />
          Media & Entertainment Collection<br />
          Product Design Collection<br />
          2 more
        </p>
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={() => {
              console.log("notifications id 1");
            }}
          />
        </p>
      </div>
    )
  },
  {
    id: 1,
    unread: true,
    type: "success",
    children: (
      <div>
        <p>
          <b>Your subscription expires April 20</b>
        </p>
        <p>
          AutoCAD<br />
          Architecture Construction Engineering Collection<br />
          Product Design Collection<br />
        </p>
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={() => {
              console.log("notifications id 2");
            }}
          />
        </p>
      </div>
    )
  },
  {
    id: 3,
    unread: true,
    type: "error",
    children: (
      <div>
        <p>
          <b>Your subscription expires June 15</b>
        </p>
        <p>
          AutoCAD<br />
          Architecture Construction Engineering Collection<br />
          HIG<br />
        </p>
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={() => {
              console.log("notifications id 2");
            }}
          />
        </p>
      </div>
    )
  },
  {
    id: 4,
    unread: true,
    type: "warning",
    children: (
      <div>
        <p>
          <b>Your subscription expires June 15</b>
        </p>
        <p>A new version of Autodesk Revit is available for download.</p>
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={() => {
              console.log("notifications id 2");
            }}
          />
        </p>
      </div>
    )
  }
];

class NotificationsSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      seenNotificationIds: [],
      notifications: sampleNotifications,
      readIds: this._initialReadNotifications(sampleNotifications),
      notificationsLoading: false
    };
  }

  onNotificationsClick = eventInfo => {
    console.log("on notifications click", eventInfo);
  };

  onNotificationsScroll = eventInfo => {
    if (eventInfo.percentageScrolled > 0.5) {
      this.setState({ notificationsLoading: true }, () =>
        setTimeout(() => this.setState({ notificationsLoading: false }), 3000)
      );
    }
  };

  onNotificationLinkClick = notificationId => {
    this.setState({
      readIds: [...new Set([...this.state.readIds, notificationId])]
    });
  };

  addNotification = () => {
    const newNotification = {
      id: this.state.notifications.length,
      unread: true,
      onLinkClick: this.onNotificationLinkClick,
      children: (
        <div>
          <p>
            You have 4 new seats of <b>Product Design Collection</b>{" "}
            subscription, switched from <b>Building Design Suite Premium</b>
            subscription.
          </p>
          <p>
            <TextLink text="Learn how to switch" />
            {" or "}
            <TextLink text="Assign users" />
          </p>
        </div>
      )
    };

    this.setState({
      notifications: [...this.state.notifications, newNotification]
    });
  };

  transformedNotifications = notifications =>
    notifications.map(notification =>
      Object.assign({}, notification, {
        onLinkClick: this.onNotificationLinkClick,
        unread: !this.state.readIds.includes(notification.id)
      })
    );

  featuredNotification = () => (
    <Notification
      id={2}
      onDismiss={this.featuredNotificationDismissed}
      onLinkClick={this.onNotificationLinkClick}
    >
      <div>
        <p>
          <b>New enhancements to subscription management lorum ipsom gas</b>
        </p>
        <p>
          Lorum reduce seats on your subscriptions and upcoming payments in your
          account
        </p>
        <p>
          <TextLink text="Primary link" />
          {" or "}
          <TextLink text="Secondary link" />
        </p>
      </div>
    </Notification>
  );

  featuredNotificationDismissed = () => {
    console.log("Feature notification dismissed");
  };

  _initialReadNotifications = notifications =>
    notifications
      .filter(notification => !notification.unread)
      .map(notification => notification.id);

  render() {
    return (
      <PlaygroundSection title="Notifications">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="standard"
            title="Add notification"
            onClick={this.addNotification}
          />

          <Notifications
            title="Notifications"
            onClick={this.onNotificationsClick}
            onClickOutside={event => {
              console.log("notifications on click outside", event);
            }}
            onScroll={this.onNotificationsScroll}
            featuredNotification={this.featuredNotification()}
            loading={this.state.notificationsLoading}
          >
            {this.state.notifications.map(notification => (
              <Notification
                unread={!this.state.readIds.includes(notification.id)}
                key={notification.id}
                onLinkClick={this.onNotificationLinkClick}
                id={notification.id}
                title={notification.title}
                type={notification.type}
              >
                {notification.children}
              </Notification>
            ))}
          </Notifications>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Notifications title="Empty Notifications" />
        </div>

        <hr />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Notification
            id={1}
            unread
            featured
            onLinkClick={id => console.log("notification id", id)}
            onDismiss={() => {
              console.log("feaured notification dismissed");
            }}
          >
            {sampleNotifications[0].children}
          </Notification>
        </div>

        <hr />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Shortcut
            icon="settings"
            onClick={() => console.log("shortcut clicked")}
            title="shortcut"
          />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Shortcut
            icon="settings"
            title="shortcut"
            link={"http://www.autodesk.com"}
          />
        </div>
      </PlaygroundSection>
    );
  }
}

export default NotificationsSection;
