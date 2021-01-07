import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from './ListItem';
class FilterableList extends Component {
  render() {
    const { searchTerm, filterOption } = this.props;
    const list = this.props.files;
    const lists = list.filter(file => file.name.includes(searchTerm) && (filterOption === 'All' || file.status.includes(filterOption)));
    console.log(filterOption);
   const data = lists.map((item,i) => <ListItem name={item.name} size={item.size} status={item.status}  key={i}/>)

    return <div className='FilterableList'>{ data}</div>;
  }
}
FilterableList.defaultProps = {
  files: [],
};
export default FilterableList;
