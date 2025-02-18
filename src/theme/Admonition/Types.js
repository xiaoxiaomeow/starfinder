import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import Admonition from '@theme/Admonition';
import Starfinder from '@site/static/img/Desna.svg';
import Language from '@site/static/img/language.svg';
import Progress from '@site/static/img/progress.svg';

function StarfinderAdomonition(props) {
	return (
		<Admonition icon={<Starfinder />} {...props} type="note" className="starfinder" />
	);
}
function TableAdmonition(props) {
	return (
		<Admonition icon="" {...props} type="note" />
	);
}
function OriginAdmonition(props) {
	return (
		<Admonition icon={<Language />} {...props} type="note" />
	);
}
function ProgressAdmonition(props) {
	return (
		<Admonition icon={<Progress />} {...props} type="warning" />
	);
}
const AdmonitionTypes = {
	...DefaultAdmonitionTypes,
	'starfinder': StarfinderAdomonition,
	'table': TableAdmonition,
	'origin': OriginAdmonition,
	'progress': ProgressAdmonition
};

export default AdmonitionTypes;