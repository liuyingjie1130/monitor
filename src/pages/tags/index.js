import Table from './components/Table'
import { Component} from 'react';
import {connect} from 'dva';

class Tags extends Component {
  constructor(props) {
      super(props)
      this.state={
          
      }
    }
  

render(){
  return (
      <div>
          <Table/>
      </div>
  );
}
}
export default connect()(Tags)