import { AppDispatch } from "@/models/store";
import { setCurrentChart } from "@/models/voice/actions";
import { getConstantsInfo } from "@/models/voice/slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import * as echarts from "echarts";
import styles from "./home.module.less";
import { barOption, lineOption } from "./utils";

const LeftMenu: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const constantsInfo = useSelector(getConstantsInfo);
	const { currentChart } = constantsInfo;
	const list = [1, 2, 3, 4];

	useEffect(() => {
		list.forEach((item: any, index: number) => {
			const id: any = document.getElementById(`chart-left${index}`);
			const chart: any = echarts.init(id);
			chart.setOption(barOption);
			if (index & 1) {
				chart.setOption(lineOption);
			} else {
				chart.setOption(barOption);
			}
		});
	}, []);

	const changeCurrentChart = (val: any) => {
		dispatch(setCurrentChart(val));
	};
	return (
		<div className={styles["left-menu"]}>
			{list.map((v: any, index: number) => {
				return (
					<div
						id={`chart-left${index}`}
						style={{ width: "100%", height: 250, marginBottom: 20 }}
						className={classnames(
							styles["bar-chart"],
							currentChart == index && styles["active"]
						)}
						onClick={() => changeCurrentChart(index)}
						key={`left-${index}`}
					></div>
				);
			})}
		</div>
	);
};

export default LeftMenu;
