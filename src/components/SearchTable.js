import { useHistory, useLocation } from '@docusaurus/router';
import { useEffect, useState } from 'react';
import { StarfinderAdmonition } from './../theme/Admonition/Types';

function translate(value, translator) {
	return Array.isArray(value) ? value.map(item => translateSingle(item, translator)).join(", ") : translateSingle(value, translator);
}
function translateSingle(value, translator) {
	return translator?.[value] ?? value;
}
function translateSingleWithNull(value, translator) {
	const translation = translateSingle(value, translator);
	if (!translation) return "-";
	else return translation;
}

function filterAccordingTo(items, columns, filter) {
	let filteredItems = items;
	for (const filterKey in filter) {
		if (columns.some(column => column.key === filterKey)) {
			const column = columns.filter(column => column.key === filterKey)[0];
			const filterItems = filter[filterKey].split(",");
			if (column.useContains) {
				filteredItems = filteredItems.filter(item => filterItems.some(filterItem => filterItem.includes(item[filterKey])));
			}
			else {
				filteredItems = filteredItems.filter(item => filterItems.includes(item[filterKey]));
			}
		}
	}
	return filteredItems;
}

function createFilterButton(filter, history, column, columnValue) {
	const onClick = function () {
		const current = (filter[column.key] != null) ? filter[column.key].split(",") : [];

		const index = current.indexOf(columnValue);
		if (index == -1) current.push(columnValue);
		else current.splice(index, 1);

		const searchParams = new URLSearchParams();
		for (const filterKey in filter) {
			if (filterKey != column.key) searchParams.set(filterKey, filter[filterKey]);
		}
		if (current.length > 0) searchParams.set(column.key, current.join(","));
		history.push({ pathname: location.pathname, search: searchParams.toString() });
	}
	return (
		<button
			key={columnValue}
			className={filter && filter[column.key] && filter[column.key].split(",").includes(columnValue) ? "starfinder checkboxButton checked" : "starfinder checkboxButton"}
			role="checkbox"
			onClick={() => onClick()}
		>
			<div className="starfinder label">{translateSingleWithNull(columnValue, column.translator)}</div>
		</button>
	);
}

export default function SearchTable({ context, columns }) {
	const location = useLocation();
	const history = useHistory();

	const [filter, setFilter] = useState();

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const adjustedFilter = Object.fromEntries(searchParams.entries());
		setFilter(adjustedFilter);
	}, [location.search]);

	let items = context.keys().map(key => context(key));
	return (
		<div>
			<StarfinderAdmonition title="筛选">
				{columns.filter(column => !column.disableFilter).map(column => (
					<div key={column.key} style={{ "display": "flex", "alignItems": "stretch", "flexWrap": "wrap" }}>
						<b>{column.name}：</b>{
							(() => {
								let distinctKeys = column.keysOverride;
								if (!distinctKeys) {
									const keys = items.map(item => item[column.key]);
									distinctKeys = [];
									for (const key of keys) {
										const keyArray = Array.isArray(key) ? key : [key];
										for (const subKey of keyArray) {
											if (!distinctKeys.includes(subKey)) distinctKeys.push(subKey);
										}
									}
								}
								if (column.isNumber) {
									distinctKeys.sort((a, b) => {
										if (a === '') return -1;
										if (b === '') return 1;
										return a - b;
									});
								}
								else distinctKeys.sort();
								return distinctKeys.map(key => createFilterButton(filter, history, column, key))
							})()
						}
						<br />
					</div>
				))}
			</StarfinderAdmonition>
			<table>
				<thead>
					<tr>
						{columns.map(column => (
							<th key={column.key}>{column.name}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{filterAccordingTo(items, columns, filter).map(item => (
						<tr key={item.key}>
							{columns.map(column => (
								<td key={column.key}>{translate(item[column.key] ?? item[column.backupKey], column.translator)}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}