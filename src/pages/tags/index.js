import Table from './components/Table'
import { Component} from 'react';
import {connect} from 'dva';
import CollapsePanel from '../../components/highSearch/SearchBar'

class Tags extends Component {
  constructor(props) {
      super(props)
      this.state={
          
      }
    }
  

render(){
  return (
      <div>
          <CollapsePanel/>
          <Table/>
      </div>
  );
}
}
export default connect()(Tags)