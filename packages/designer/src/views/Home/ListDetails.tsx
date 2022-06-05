import { selectDataList } from "@/models/voice/select";
import { useCacheSafeSelector } from "@/utils/useCacheSafeSelector";
import { Table } from "antd";
import React, { useEffect, useState } from "react";

type TableDataProps = {
	columens: any[];
	data: any[];
};
const ListDetails: React.FC = () => {
	const ret: any = {};
	// const ret:any = useCacheSafeSelector(selectDataList)

	const [tableData, setTableData] = useState({
		columns: [],
		data: [],
	});

	useEffect(() => {
		if (ret.header) formaData(ret);
	}, [ret.header]);

	const formaData = (res?: any) => {
		//测试数据
		res = res.header
			? ret
			: ({
					header: ["新签合同", "在线人数"],
					result: [
						[1, 2],
						[123, 90],
						[333, 999],
					],
			  } as any);
		const { header, result } = res;

		const formatColumns = () => {
			const temp = header.map((v: any) => {
				return {
					title: v,
					dataIndex: v,
					key: v,
				};
			});
			return temp;
		};

		const formatData = () => {
			let temp: any[] = [];
			result.forEach((val: any, ind: number) => {
				if (val) {
					const item: any = {};
					val.forEach((cval: any, cind: number) => {
						const _key = header[cind];
						item.key = `${ind}-${cind}`;
						item[_key] = cval;
					});
					temp.push(item);
				}
			});
			return temp;
		};

		let data: any = formaData();
		let columns: any = formatColumns();

		setTableData({
			columns,
			data,
		});
	};
	return (
		<div>
			<Table columns={tableData.columns} dataSource={tableData.data}></Table>
		</div>
	);
};

export default ListDetails;
