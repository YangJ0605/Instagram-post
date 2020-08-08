import React from 'react';
import {
  Form,
  Input,
  Select,
} from 'antd';

const FormSizeDemo = React.forwardRef((props, ref) => {
  const handleFinish = (value) => {
   const {setAllPostData} = props
   setAllPostData((oldData) => {
    let {url, category} = value
    category = category.toLocaleLowerCase()
    let newData = JSON.parse(JSON.stringify(oldData))
    newData[category].push({
      _uid: Math.random().toString(),
      image: url,
      ig_handle: '@add',
      date: '2020-08-08 19:00'
    })
    return newData
   })
  }
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleFinish}
        ref = {ref}
      >
        <Form.Item label="选择分类" rules= {[
          {required: true, message: '请选择分类'}
        ]} name='category'>
          <Select>
            <Select.Option value="Storage">Storage</Select.Option>
            <Select.Option value="Bedroom">Bedroom</Select.Option>
            <Select.Option value="Living">Living</Select.Option>
            <Select.Option value="Dining">Dining</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="添加图片" rules = {[
          {required: true, message: '请输入一个图片地址'}
        ]} name='url'>
          <Input />
        </Form.Item>
      </Form>
    </>
  );
})

export default FormSizeDemo