import React from 'react';

const translate = (value, translator) => Array.isArray(value) ? value.map(item => translate(item, translator)).join(", ") : translator?.[value] ?? value;

export default function SearchTable({ context, columns }) {
	const items = context.keys().map(key => context(key));
	return (
		<table>
			<thead>
				<tr>
					{columns.map(column => (
						<th key={column.key}>{column.name}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{items.map(item => (
					<tr key={item.key}>
						{columns.map(column => (
							<td key={column.key}>{translate(item[column.key], column.translator)}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}