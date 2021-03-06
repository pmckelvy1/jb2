var React = require('react'),
    UserStore = require('../../stores/user_store'),
    UserInfo = require('./user_info'),
    UserProfileNav = require('./user_profile_nav'),
    UserProfileHeader = require('./user_profile_header'),
    UserProfileNavOptions = require('./user_profile_nav_options'),
    UserLikesSnapshot = require('./user_likes_snapshot'),
    UserFollowsSnapshot = require('./user_follows_snapshot'),
    UserProfileMain = require('./user_profile_main'),
    UserProfileSidebar = require('./user_profile_sidebar.jsx'),
    ApiUtil = require('../../util/api_util'),
    CurrentUserStore = require('../../stores/current_user_store');

var UserProfile = React.createClass({
  getInitialState: function () {
    return { user: {} };
  },

  componentDidMount: function () {
    var us = UserStore.addListener(this.onChange);
    this.setState({ usToken: us });
    ApiUtil.fetchSingleUser(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.state.usToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleUser(newProps.params.id);
  },

  onChange: function () {
    this.setState({ user: {} });
    this.setState({ user: UserStore.getUser(this.props.params.id) });
  },

  render: function () {
    if (Object.keys(this.state.user).length === 0) {
      return (
        <div className="loader">Loading...</div>
      );
    } else {
      return (
        <div>
          <UserProfileHeader user={this.state.user} />
          <UserProfileNav pathname={this.props.location.pathname} user={this.state.user} />
          <UserProfileNavOptions user={this.state.user} />
          <UserProfileSidebar user={this.state.user} />
          <UserProfileMain children={this.props.children} user={this.state.user} />
        </div>
      );
    }
  }

});

module.exports = UserProfile;
