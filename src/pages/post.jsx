import React, { useState, useEffect } from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { getData } from "../request/getPostPage";
import Layout from "../components/layout";
import Header from '../components/header'
import PostItem, {PostWrapper} from '../components/post-item'

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const postArr = ["Storage", "Bedroom", "Living", "Dining", "Other"];

const Post = () => {
  const [allPostData, setAllPostData] = useState(null)
  const genExpandIcon = ({ isActive }) => {
    return <div>{isActive ? <MinusOutlined /> : <PlusOutlined />}</div>;
  };
  useEffect(() => {
    (async () => {
      const {
        story: { content },
      } = await getData();
      setAllPostData(content)
    })();
  }, []);

  return (
    <Layout>
      <Collapse
        defaultActiveKey={["0"]}
        onChange={callback}
        expandIconPosition="right"
        accordion={true}
        showArrow={false}
        expandIcon={genExpandIcon}
        ghost
      >
        {
          postArr.map((item, index) => (
            <Panel key={index} header={<Header text={item} />}>
             <PostWrapper>
             {
               allPostData && allPostData[item.toLocaleLowerCase()].map(post => (
                 <PostItem key={post._uid} post={post} />
               ))
              }
             </PostWrapper>
            </Panel>
          ))
        }
      </Collapse>
    </Layout>
  );
};

export default Post;
