'use client';
import React, { useState, useRef } from 'react';
import { Form, Input, Select, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import JoditEditor from 'jodit-react';
import axios from 'axios';

const BlogPostForm = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };


  const config = {
    readonly: false,
    placeholder: 'Start typings...'
  }

  const onFinish = async (values: any) => {
    try {
      if (content.length === 0) {
        messageApi.open({
          type: 'warning',
          content: 'Please enter the content before posting the blogI',
        });
        return
      }

      const dataObject = {
        title: values.title,
        tor: values.tor,
        author: values.authorName,
        tags: values.tags,
        is_report : values.report
      }
      const formData = new FormData();
      for (const [key, value] of Object.entries(dataObject)) {
        formData.append(key, value);
      }
      formData.append('file', values.upload[0].originFileObj);
      formData.append('content', content);


      const response = await axios.post("/api/blog/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (response.data.code === 0) {
        messageApi.open({
          type: 'success',
          content: 'Blog Posted Successfully',
        });

      }

    } catch (error: any) {
      messageApi.open({
        type: 'error',
        content: 'Something Went Wrong',
      });

    }
  };
  const [messageApi, contextHolder] = message.useMessage();



  return (
    <div className='flex justify-center items-center flex-col'>
      {contextHolder}
      <div className='w-full flex p-5 justify-center items-center'>
        <h1 className='w-[30%] text-5xl font-bold p-4 text-center '>Post A New Blog</h1>
        <Form onFinish={onFinish} className='flex flex-col justify-center w-[70%] items-center border-[1px] border-[#00000076] p-10 rounded-xl shadow-md'>
          <Form.Item name="title" label="Title" rules={[{ required: true }]} className='w-full'>
            <Input />
          </Form.Item>
          <Form.Item label="Author" name="authorName" rules={[{ required: true }]} className='w-full'>
            <Input />
          </Form.Item>
          <Form.Item label="Tags" name="tags" className='w-full' rules={[{ required: true }]}>
            <Select mode="multiple">
              <Select.Option value="technology">Technology</Select.Option>
              <Select.Option value="design">Design</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Report" name="report" className='w-full' rules={[{ required: true }]}>
            <Select>
              <Select.Option value={true}>True</Select.Option>
              <Select.Option value={false}>False</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Time of reading" name="tor" rules={[{ required: true }]} className='w-full'>
            <Input />
          </Form.Item>
          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            className='w-full'
            rules={[{ required: true }]}
            getValueFromEvent={normFile}
          >
            <Upload name="logo" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item name="BlogContent" label="Blog Content" rules={[{ required: true }]} className='w-full'>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onBlur={newContent => setContent(newContent)}
              onChange={newContent => setContent(newContent)}
            />
          </Form.Item>
          <Form.Item className='w-full flex justify-center items-center mb-[-30px]'>
            <Button size='large' htmlType="submit">
              Publish Post
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BlogPostForm;
