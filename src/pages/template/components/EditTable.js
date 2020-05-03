import {connect} from 'dva';
import React from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: dataIndex!='description',
              message: `${title} 必填！`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '属性名称',
        dataIndex: 'attrName',
        editable:true
      },
      {
        title: '描述',
        dataIndex: 'description',
        editable:true
      },
      {
        title: '下限',
        dataIndex: 'min',
        editable:true
      },
      {
        title: '上限',
        dataIndex: 'max',
        editable:true
      },
      {
        title: '计量单位',
        dataIndex: 'unit',
        editable:true
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="确定要删除吗?" okText="确定" cancelText="取消"onConfirm={() => this.handleDelete(record.attrName)}>
              <a>删除</a>
            </Popconfirm>
          ) : null,
      },
    ];
    // console.log(this.props.flag,333333)
    this.state = {
      dataSource: this.props.flag==='edit'?this.props.tableData:[],
      count: this.props.flag==='edit'?this.props.tableData.length:0,
    };
  }

  handleDelete = attrName => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.attrName !== attrName) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
        attrName: '名称',
        description: '描述',
        min:0,
        max:100,
        unit:'m/s'
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.attrName === item.attrName);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource } = this.state;
    this.props.dispatch({
        type:'template/updateStates',
        payload:{
            tableData:dataSource
        }
    })
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          添加属性
        </Button>
        <Table
          rowKey={record=>record.attrName+Math.random()}
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={{defaultPageSize:5}}
        />
      </div>
    );
  }
}
export default connect(({template})=>(template))(EditableTable)