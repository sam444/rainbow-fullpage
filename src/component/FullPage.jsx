import { Component } from "rainbowui-core";
import { Util } from 'rainbow-foundation-tools';
import PropTypes from 'prop-types';

export default class FullPage extends Component {
    componentDidMount() {
        this.initFullPage();
    }
    componentWillUnmount() {
        this.refreshFullPage();
    }
    componentDidUpdate() {
        ComponentContext.put(this.componentId, this);
        super._componentDidUpdate();
        this.initFullPage();
    }
    initFullPage() {
        $("#" + this.componentId).fullpage({
            // scrollOverflow: Util.parseBool(this.props.scrollOverflow),
            resize: Util.parseBool(this.props.resize),
        });
    }
    refreshFullPage() {
        const fullpage = $.fn.fullpage;
        fullpage.destroy('all');
    }

    render() {
        return (
            <div id={this.props.id}>
                {this.renderFullPageItem(this)}
            </div>
        );

    }
    renderFullPageItem(component) {
        let children = component.props.children;
        if (!$.isArray(children)) {
            children = [children];
        }
        if (children != null) {
            return children.map(function (item) {
                return item;
            });
        }
    }

};
/**
 * FullPage component prop types
 */
FullPage.propTypes = $.extend({}, Component.propTypes, {
    // scrollOverflow: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    resize: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
});

/**
 * Get FullPage component default props
 */
FullPage.defaultProps = $.extend({}, Component.defaultProps, {
    //  scrollOverflow: 'false',
    resize: 'false',

});
