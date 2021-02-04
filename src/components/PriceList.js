import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  // const { name, number, isHuman, tags } = props
  
  return (
    <ul className="list-group list-grop-flush">
      {
        items.map((item) => (
          <li 
            className="
              list-group-item 
              d-flex justify-content-between 
              align-items-center
            "
            key={item.id}
          >
            <span className="col-1 badge badge-primary">
              {/* {item.category.name} */}
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                style={{ backgroundColor: '#007bff', padding: '5px'}}
                color={'#fff'}
                icon={item.category.iconName}
              />

            </span>
            <span className="col-5">
              {item.title}
            </span>
            <span className="col-2 font-weight-bold">
              {(item.category.type === 'income') ? '+' : '-'}
              {item.price}元
            </span>
            <span className="col-2">
              {item.date}
            </span>
            <a className="col1"
              onClick={() => {onModifyItem(item)}}
            >
              {/* 编辑 */}
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                style={{ backgroundColor: '#28a745', padding: '5px'}}
                color={'#fff'}
                icon='ios-create-outline'
              />
            </a>
            <a className="col1"
              onClick={() => {onDeleteItem(item)}}
            >
              {/* 删除 */}
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                style={{ backgroundColor: '#dc3545', padding: '5px'}}
                color={'#fff'}
                icon='ios-close'
              />
            </a>
          </li>
        ))
      }
    </ul>
  )
}
// class NameCard extends React.Component {
//   render() {
//     const { name, number, isHuman, tags } = this.props
//     return (
//       <div className="alert alert-success">
//         <h4 className="alert-heading">{name}</h4>
//         <ul>
//           <li>电话：{number}</li>
//           <li>{ isHuman ? '人类' : '外星生物' }</li>
//           <hr/>
//           <p>
//             { tags.map((tag, index) => (
//               <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
//             ))}
//           </p>
//         </ul>
//       </div>
//     )
//   }
// }

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
}
export default PriceList;