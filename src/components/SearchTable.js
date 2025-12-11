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
	if (!filter) return items;
	let filteredItems = items;
	for (const filterKey in filter) {
		if (columns.some(column => column.key === filterKey)) {
			const column = columns.filter(column => column.key === filterKey)[0];
			const filterItems = filter[filterKey].split(",");
			if (column.isArray) {
				filteredItems = filteredItems.filter(item => filterItems.some(filterItem => item[filterKey].includes(filterItem)));
			}
			else {
				filteredItems = filteredItems.filter(item => filterItems.includes(item[filterKey]));
			}
		}
	}
	console.log(filteredItems);
	if (filter.sort) {
		const isNumber = columns.some(column => column.key === filter.sort && column.isNumber);
		const isArray = columns.some(column => column.key === filter.sort && column.isArray);
		const comparator = (item1, item2) => {
			if (isNumber) {
				let item1Value = parseInt(item1[filter.sort].replace(",", ""));
				let item2Value = parseInt(item2[filter.sort].replace(",", ""));
				if (Number.isNaN(item1Value)) item1Value = 0;
				if (Number.isNaN(item2Value)) item2Value = 0;
				return item1Value - item2Value;
			} else if (isArray) {
				let item1Value = (item1[filter.sort] ?? []).join(", ");
				let item2Value = (item2[filter.sort] ?? []).join(", ");
				return item1Value.localeCompare(item2Value);
			} else {
				let item1Value = item1[filter.sort] ?? "";
				let item2Value = item2[filter.sort] ?? "";
				return item1Value.localeCompare(item2Value);
			}
		};
		if (filter.descending) {
			filteredItems.sort((item1, item2) => -comparator(item1, item2));
		}
		else {
			filteredItems.sort(comparator);
		}
	}
	console.log(filteredItems);
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

function createSortButton(filter, history, column) {
	const onClick = function () {
		const searchParams = new URLSearchParams();
		for (const filterKey in filter) {
			if (filterKey != column.key) searchParams.set(filterKey, filter[filterKey]);
		}
		if (filter.sort !== column.key) searchParams.set("sort", column.key);
		else if (!filter.descending) searchParams.set("descending", true);
		else {
			delete searchParams.delete("sort");
			delete searchParams.delete("descending");
		}
		history.push({ pathname: location.pathname, search: searchParams.toString() });
	}
	return (
		<button
			key={column.key}
			className={filter && filter.sort === column.key ? "starfinder checkboxButton checked" : "starfinder checkboxButton"}
			role="checkbox"
			onClick={() => onClick()}
		>
			<div className="starfinder label">{column.name}</div>
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
				<div style={{ "display": "flex", "alignItems": "stretch", "flexWrap": "wrap" }}>
					<b>排序：</b>{columns.filter(column => !column.disableSort).map(column => createSortButton(filter, history, column))}
					<br />
				</div>
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