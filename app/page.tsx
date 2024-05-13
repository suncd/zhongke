"use client";
import { useState } from "react";
import { Space, Menu } from "antd";

import Home from "@/app/components/home";

function Index() {
  const [current, setCurrent] = useState("home");

  const items = [
    {
      label: "首页",
      key: "home",
    },
    {
      label: "关于我们",
      key: "about_us",
    },
    {
      label: "人才猎头",
      key: "talent",
    },
    {
      label: "海外招聘",
      key: "abroad",
    },
    {
      label: "出海咨询",
      key: "consultation",
    },
    {
      label: "联系我们",
      key: "contact_us",
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Space className="space_box" direction="vertical" size={0}>
      <Space className="space_box space_padding justify_sb">
        <div style={{ fontSize: 20 }}>众科人力</div>

        <Menu
          className="space_box"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{
            fontSize: 20,
          }}
        />
      </Space>

      {
        {
          home: <Home />,
        }[current]
      }
    </Space>
  );
}

export default Index;
