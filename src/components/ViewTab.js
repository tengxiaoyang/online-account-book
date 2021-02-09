import React from 'react';
import { IonIcon, addIcons } from 'react-svg-ionicons';
import bundle from 'react-svg-ionicons/bundles/all';
import PropTypes from 'prop-types';
import { LIST_VIEW, CHART_VIEW } from '../utility'

addIcons(bundle);

const generateLinkClass = (current, view) => {
  return (current === view) ? 'nav-link active': 'nav-link'
}
const ViewTab = (props) => {
  const { activeTab, onTabChange } = props
  
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
        <a className={generateLinkClass(activeTab, LIST_VIEW)} href="#">
          <IonIcon 
            className="rounded-circle mr-2" 
            fontSize="25px"
            color={'#007bff'}
            name='paper'
          />
          列表模式
        </a>
      </li>
      <li className="nav-item">
        <a className={generateLinkClass(activeTab, CHART_VIEW)} href="#">
          <IonIcon 
            className="rounded-circle mr-2" 
            fontSize="25px"
            color={'#007bff'}
            name='pie'
          />
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