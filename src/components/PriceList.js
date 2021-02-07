import React from 'react';
import { IonIcon, addIcons } from 'react-svg-ionicons';
import bundle from 'react-svg-ionicons/bundles/all';
import PropTypes from 'prop-types';

addIcons(bundle);

const PriceList = (props) => {
  const { items, onModifyItem, onDeleteItem } = props
  
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
              <IonIcon
                className="rounded-circle"
                fontSize="30px"
                style={{ backgroundColor: '#007bff', padding: '5px'}}
                color={'#fff'}
                name={item.category.iconName}
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
              <IonIcon
                className="rounded-circle"
                fontSize="30px"
                style={{ backgroundColor: '#28a745', padding: '5px'}}
                color={'#fff'}
                name='create'
              />
            </a>
            <a className="col1"
              onClick={() => {onDeleteItem(item)}}
            >
              {/* 删除 */}
              <IonIcon
                className="rounded-circle"
                fontSize="30px"
                style={{ backgroundColor: '#dc3545', padding: '5px'}}
                color={'#fff'}
                name='close'
              />
            </a>
          </li>
        ))
      }
    </ul>
  )
}

// class PriceList extends React.Component {
//   constructor(props) {
//     super(props)
//     // this.handleSubmit = this.handleSubmit.bind(this)
//     const { items, onModifyItem, onDeleteItem } = props
//   }
//   // handleSubmit(event) {
//   //   if (this.textInput.value.length === 0) {
//   //     alert("留言内容为空")
//   //   } else {
//   //     this.props.onAddComment(this.textInput.value)
//   //     this.textInput.value = ''
//   //     event.preventDefault()
//   //   }
//   // }
//   render() {
//     const { items, onModifyItem, onDeleteItem } = this.props
//     return (
//       <ul className="list-group list-grop-flush">
//         {
//           items.map((item) => (
//             <li 
//               className="
//                 list-group-item 
//                 d-flex justify-content-between 
//                 align-items-center
//               "
//               key={item.id}
//             >
//               <span className="col-1 badge badge-primary">
//                 {/* {item.category.name} */}
//                 <IonIcon
//                   className="rounded-circle"
//                   fontSize="30px"
//                   style={{ backgroundColor: '#007bff', padding: '5px'}}
//                   color={'#fff'}
//                   name={item.category.iconName}
//                 />
  
//               </span>
//               <span className="col-5">
//                 {item.title}
//               </span>
//               <span className="col-2 font-weight-bold">
//                 {(item.category.type === 'income') ? '+' : '-'}
//                 {item.price}元
//               </span>
//               <span className="col-2">
//                 {item.date}
//               </span>
//               <a className="col1"
//                 onClick={() => {onModifyItem(item)}}
//               >
//                 {/* 编辑 */}
//                 <IonIcon
//                   className="rounded-circle"
//                   fontSize="30px"
//                   style={{ backgroundColor: '#28a745', padding: '5px'}}
//                   color={'#fff'}
//                   name='create'
//                 />
//               </a>
//               <a className="col1"
//                 onClick={() => {onDeleteItem(item)}}
//               >
//                 {/* 删除 */}
//                 <IonIcon
//                   className="rounded-circle"
//                   fontSize="30px"
//                   style={{ backgroundColor: '#dc3545', padding: '5px'}}
//                   color={'#fff'}
//                   name='close'
//                 />
//               </a>
//             </li>
//           ))
//         }
//       </ul>
//     )
//   }
// }

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
}
PriceList.defaultProps = {
  onModifyItem: () => {
    
  }
}

export default PriceList;