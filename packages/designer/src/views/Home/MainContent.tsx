import { setShowModel } from "@/models/voice/actions";
import { getConstantsInfo } from "@/models/voice/slice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { barOption, lineOption } from "./utils";
import styles from "./maincontent.module.less";
import { Carousel } from "antd";
import * as echarts from "echarts";

const MainContent: React.FC = () => {
	const constantsInfo: any = useSelector(getConstantsInfo);
	const { showModal } = constantsInfo;
	const list = [1, 2, 3, 4];

	useEffect(() => {
		list.forEach((item: any, index: number) => {
			const id: any = document.getElementById(`chart-main${index}`);
			const chart: any = echarts.init(id);
			chart.setOption(barOption);
			if (index & 1) {
				chart.setOption(lineOption);
			} else {
				chart.setOption(barOption);
			}
		});
	}, [showModal]);
	return (
		<div>
			{showModal === "all" ? (
				<>
					{list.map((v: any, index: number) => {
						return (
							<div className={styles["banner"]} key={index}>
								<div id={`chart-main${index}`} style={{ height: 600 }}></div>
							</div>
						);
					})}
				</>
			) : (
				<Carousel autoplay dots={false}>
					{list.map((v: any, index: number) => {
						return (
							<div className={styles["banner"]} key={index}>
								<div id={`chart-main${index}`} style={{ height: 600 }}></div>
							</div>
						);
					})}
				</Carousel>
			)}
		</div>
	);
};

export default MainContent;
