const React = require("react");
const { DOM: dom, PropTypes } = React;
require("./Dropdown.css");

class Dropdown extends React.Component {

  getInitialState() {
    return {
      dropdownShown: false
    };
  }

  toggleDropdown(e) {
    this.setState({
      dropdownShown: !this.state.dropdownShown,
    });
  }

  renderPanel() {
    return dom.div(
      {
        className: "dropdown",
        onClick: this.toggleDropdown,
        style: { display: (this.state.dropdownShown ? "block" : "none") }
      },
      this.props.panel
    );
  }

  renderButton() {
    return dom.button(
      {
        className: "dropdown-button",
        onClick: this.toggleDropdown
      },
      "»"
    );
  }

  renderMask() {
    return dom.div({
      className: "dropdown-mask",
      onClick: this.toggleDropdown,
      style: { display: (this.state.dropdownShown ? "block" : "none") }
    });
  }

  render() {
    return dom.div({ className: "dropdown-block" },
      this.renderPanel(),
      this.renderButton(),
      this.renderMask()
    );
  }

}

Dropdown.propTypes = {
  panel: PropTypes.object
};

Dropdown.displayName = "Dropdown";

module.exports = Dropdown;
