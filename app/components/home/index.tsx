import { Image, Space, Carousel } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const SERVES_INFO = [
  {
    title: "人才猎头",
    desc: ["海外国家中方管理岗", "中国本土技术/商业化/职能岗位"],
    target: "talent",
  },
  {
    title: "海外人才解决方案",
    desc: ["根据客户在不同国家招聘需求提供一体化海外本地人才解决方案服务"],
    target: "abroad",
  },
  {
    title: "出海咨询",
    desc: [
      "市场调研，公司注册，雇佣政策，财税咨询，营销策略，法律文化咨询......",
    ],
    target: "consultation",
  },
];

const SUCCESS_INFO = [
  {
    title: "擅长并有成功交付记录海外岗位",
    desc: "非洲区国家总经理；拉美区国家总经理；欧洲区国家总经理；东南亚销售总监；海外渠道经理；海外零售经理；海外营销总监；海外市场经理；海外财务岗；驻外HR岗......",
  },
  {
    title: "擅长并有成功交付记录本土岗位",
    desc: "高性能计算/异构计算/并行计算；AI for Science；大数据平台/架构；算法专家 - VP；CTO；移动客户端开发；UI/UX；大模型产品（TO B/C）；大前端；后端/服务端......",
  },
];

function Home() {
  return (
    <>
      <div className="home_box">
        <Image
          preview={false}
          width={"100%"}
          alt=""
          src="https://static.wixstatic.com/media/ea71bb_370144e721bc43c289bfb35fed3376d1~mv2_d_4500_2124_s_2.jpg/v1/fill/w_1597,h_534,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_370144e721bc43c289bfb35fed3376d1~mv2_d_4500_2124_s_2.jpg"
        />

        <div className="home_desc">
          <p className="home_desc_title home_desc_color">
            让人才无界 链接全球人才
          </p>

          <Space className="space_box justify_sb" align="start" size={40}>
            <span className="home_desc_line" />
            <p className="home_desc_info home_desc_color">
              致力于为中国企业提供一体化闭环全球人才招聘解决方案和本地咨询服务,为企业提供面向全球的管理人才
            </p>
          </Space>

          <div className="home_desc_more_icon">
            <PlusOutlined />
          </div>
          <div className="home_desc_more">了解更多</div>
        </div>
      </div>
      <div className="home_serve_box">
        <p className="home_serve_title">我们的服务</p>
        <p className="home_serve_desc">人才猎头，海外咨询，出海咨询</p>

        <div className="home_serve_card_box">
          {SERVES_INFO.map((item) => {
            return (
              <div key={item?.target} className="home_serve_card">
                <div className="home_serve_card_bg" />
                <div className="home_serve_card_title">{item?.title}</div>
                <div>
                  {item?.desc?.map((ele) => {
                    return (
                      <p className="home_serve_card_desc" key="ele">
                        {ele}
                      </p>
                    );
                  })}
                </div>
                <div className="home_serve_card_more">了解更多</div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <Carousel>
          {SUCCESS_INFO?.map((item) => {
            return (
              <div className="home_server_success" key={item?.title}>
                <p className="home_server_success_title">{item?.title}</p>
                <p className="home_server_success_desc">{item?.desc}</p>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="home_call">
        <p className="home_desc_title home_desc_color">准备好了解更多了么?</p>

        <Space className="space_box justify_sb" align="start" size={40}>
          <span className="home_desc_line" />
          <p className="home_desc_info home_desc_color">
            更多公司信息及业务咨询，可随时联系我们：
            <br />
            邮箱：contact@talentlinkc.com
            <br />
            地址：杭州市余杭区欧洲金融城T8幢1213室
            <br />
            电话：13681795939
          </p>
        </Space>

        <div className="home_desc_more_icon">
          <PlusOutlined />
        </div>
        <div className="home_desc_more">联系我们</div>
      </div>
    </>
  );
}

export default Home;
