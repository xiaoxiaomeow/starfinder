import JSXPage from '@site/src/components/JSXPage.js';
import SearchTable from '@site/src/components/SearchTable.js';

export default function WeaponList() {
	return (
		<JSXPage title="武器列表">
			<h1>武器列表</h1>
			<SearchTable
				context={require.context("../data/equipments/weapons", false, /\.json$/)}
				columns={
					[
						{ key: "name_zh", backupKey: "name_en", name: "武器" },
						{
							key: "proficiency", name: "类别", translator: {
								"Small Arms": "小型火器",
								"Longarms": "长管火器",
								"Heavy": "重型武器",
								"Grenade": "手榴弹",
								"Basic Melee": "基础近战武器",
								"Advanced Melee": "进阶近战武器",
								"Solarian": "太阳武器水晶",
								"Sniper": "狙击武器",
								"Special": "特殊武器"
							}
						},
						{
							key: "category", name: "范畴", translator: {
							}
						},
						{ key: "hands", name: "占用手" },
						{ key: "level", name: "等级" },
						{ key: "price", name: "价格" },
						{ key: "bulk", name: "负载" },
						{ key: "damage", name: "伤害" },
						{ key: "damageType", name: "伤害类型" },
						{ key: "critical", name: "重击" },
						{
							key: "special", name: "特殊", translator: {
								"archaic": "原始"
							}
						}
					]
				}
			/>
		</JSXPage>
	);
}

