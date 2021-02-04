import React from 'react';

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
              {item.category.name}
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
            <button className="col1 btn-primary"
              onClick={() => {onModifyItem(item)}}
            >
              编辑
            </button>
            <button className="col1 btn-danger"
              onClick={() => {onDeleteItem(item)}}
            >
              删除
            </button>
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

export default PriceList;