import { OnClickEvent, Component, Param } from "rainbowui-core";
import { Util } from 'rainbow-foundation-tools';
import PropTypes from "prop-types";
export default class FullPageItem extends Component {

    render() {
        if (this.props.autoHeight == 'true') {
            return (
                <div class="section header fp-auto-height">
                    {this.props.children}
                </div>
            );
        } if (this.props.slide == 'true') {
                return (
                    <div class="section">
                         {this.renderSlide(this)}
                    </div>
                );
        } else {
            return (
                <div class="section">
                    {this.props.children}
                </div>
            );
        }
    }
    renderSlide(component) {
        let children = component.props.children;
        if (!$.isArray(children)) {
            children = [children];
        }
        let result = [];
        for (let index = 0; index < children.length; index++) {
            result.push(<div class="slide">{children[index]}</div>);
        }
        return result;
    }
};

FullPageItem.propTypes = {
    autoHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    slide: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

FullPageItem.defaultProps = {
    autoHeight: 'false',
    slide: 'false',
};
