import { Card } from "antd";
import React from "react";
import styles from "./home.module.less";

const RightContent: React.FC = () => {
	const historyList: string[] = [
		"中国经济",
		"中国经济趋势",
		"进出口经济趋势1",
		"进出口经济趋势2",
		"进出口经济趋势3",
	];
	return (
		<div>
			<Card
				size="small"
				title="历史搜索"
				extra={<a href="#">隐藏</a>}
				style={{ width: "100%" }}
			>
				{historyList.map((v: any) => {
					return (
						<a
							className={styles["record-search-item"]}
							style={{ marginBottom: 15 }}
							key={v}
						>
							{v}
						</a>
					);
				})}
			</Card>
			<Card
				size="small"
				title="推荐搜索"
				extra={
					<>
						<a href="#" style={{ marginRight: 20 }}>
							换一换
						</a>
						<a href="#">隐藏</a>
					</>
				}
				style={{ width: "100%" }}
			>
				{historyList.map((v: any) => {
					return (
						<p key={v}>
							<a className={styles["record-search-item"]}>{v}</a>
						</p>
					);
				})}
			</Card>
		</div>
	);
};

export default RightContent;
