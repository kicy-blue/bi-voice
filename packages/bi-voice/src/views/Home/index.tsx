import React, { useEffect, useState } from "react";
import { Col, Layout, Row, Select, Input } from "antd";
import {
	AlignLeftOutlined,
	AppstoreOutlined,
	AudioOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/models/store";
import { getConstantsInfo } from "@/models/voice/slice";
import { fetchDataList } from "@/models/voice/async-actions";
import { setShowModel } from "@/models/voice/actions";
import ListDetails from "./ListDetails";
import LeftMenu from "./LeftMenu";
import MainContent from "./MainContent";
import RightContent from "./RightContent";
import styles from "./home.module.less";

const { Header, Sider, Content } = Layout;
const { Option } = Select;
const { Search } = Input;

const Home: React.FC = () => {
	const dispath = useDispatch<AppDispatch>();
	const constantsInfo: any = useSelector(getConstantsInfo);
	const { showModal } = constantsInfo;
	const [type, setType] = useState("normal");

	useEffect(() => {
		const params = {
			type: 0,
			question: "在7月智慧生活的新签合同额度和在编人数",
			speech: "",
			length: "",
		};
		// dispath(fetchDataList(params))
	}, []);

	const onSearch = (value: any) => {
		console.log(value);
	};
	const changemodel = (type: any) => {
		dispath(setShowModel(type));
	};
	const suffix = (
		<AudioOutlined
			style={{
				fontSize: 16,
				color: "#1890ff",
			}}
		/>
	);

	return (
		<Layout className={styles["page"]}>
			<Header style={{ position: "fixed", zIndex: 99, width: "100%" }}>
				<Row className={styles["page-header"]}>
					<Col span={4}></Col>
					<Col span={14} className={styles["page-header-center"]}>
						<Select
							defaultValue="0"
							style={{ width: 120, marginRight: 15 }}
							size="large"
						>
							<Option value="0">全部</Option>
						</Select>
						<Search
							placeholder="请输入"
							enterButton
							size="large"
							suffix={suffix}
							onSearch={onSearch}
							allowClear
							style={{ borderRadius: 10 }}
						/>
					</Col>
					<Col span={6} className={styles["page-header-right"]}>
						<AlignLeftOutlined
							style={{ color: showModal === "single" ? "#0f85e3" : "#a0a0a0" }}
							onClick={() => changemodel("single")}
						/>
						<AppstoreOutlined
							style={{ color: showModal === "all" ? "#0f85e3" : "#a0a0a0" }}
							onClick={() => changemodel("all")}
						/>
					</Col>
				</Row>
			</Header>
			<Content className={styles["page-mainContent"]}>
				{type === "normal" && <ListDetails />}
				<Row>
					<Col span={4}>
						<div style={{ display: showModal === "single" ? "block" : "none" }}>
							<LeftMenu />
						</div>
					</Col>
					<Col span={14}>
						<MainContent />
					</Col>
					<Col>
						<RightContent />
					</Col>
				</Row>
			</Content>
		</Layout>
	);
};

export default Home;
