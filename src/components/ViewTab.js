import React from 'react';
import { IonIcon, addIcons } from 'react-svg-ionicons';
import bundle from 'react-svg-ionicons/bundles/all';
import PropTypes from 'prop-types';

addIcons(bundle);

const generateLinkClass = (current, view) => {
  return (current === view) ? 'nav-link active': 'nav-link'
}
const ViewTab = (props) => {
  const { activeTab, onTabChange } = props
  
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          列表模式
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          图表模式
        </a>
      </li>
    </ul>
  )
}

// PriceList.propTypes = {
//   items: PropTypes.array.isRequired,
//   onModifyItem: PropTypes.func.isRequired,
//   onDeleteItem: PropTypes.func.isRequired,
// }
// PriceList.defaultProps = {
//   onModifyItem: () => {
    
//   }
// }

export default ViewTab;