import React from 'react';
import { Link } from 'gatsby';

class ComponentOverview extends React.Component {
  renderItems = currentItem => {
    const component = currentItem.item;

    let componentUrl;
    if (component === 'Multiselect') {
      componentUrl = '/components/dropdown';
    } else if (component === 'UI shell') {
      componentUrl = '/experimental/ui-shell';
    } else {
      componentUrl = `/components/${component.toLowerCase().replace(' ', '-')}`;
    }

    let componentImg;
    try {
      componentImg = require(`../../content/components/overview/images/${component}.svg`);
    } catch (e) {
      componentImg = require('../../content/components/overview/images/NoImage.svg');
    }

    return (
      <li className="component-item" key={component}>
        <div className="bx--aspect-ratio bx--aspect-ratio--align bx--aspect-ratio--1x1">
          <div className="bx--aspect-ratio--object">
            <Link to={componentUrl} className="component-item__link">
              <img
                src={componentImg}
                alt={component}
                className="component-item__img"
              />
              <p className="component-name">{component}</p>
            </Link>
          </div>
        </div>
      </li>
    );
  };

  render() {
    const componentList = require('../../data/components.json'); // eslint-disable-line
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-12 ibm--offset-lg-4 ibm--col-bleed">
          <ul className="component-overview">
            {Object.keys(componentList.items).map(item => {
              return this.renderItems(componentList.items[item]);
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ComponentOverview;
