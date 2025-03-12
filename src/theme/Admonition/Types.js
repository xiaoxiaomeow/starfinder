import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import Admonition from '@theme/Admonition';
import { IoLanguageOutline } from "react-icons/io5";
import { TbProgressCheck } from "react-icons/tb";
import { PiButterflyBold } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";

function StarfinderAdomonition(props) {
	return (
		<Admonition icon={<PiButterflyBold />} {...props} type="note" className="starfinder" title={props.title || null} />
	);
}
function OriginAdmonition(props) {
	return (
		<Admonition icon={<IoLanguageOutline />} {...props} type="note" />
	);
}
function VanillaAdomonition(props) {
	return (
		<Admonition icon={null} {...props} type="note" title={props.title || null} />
	);
}
function PencilAdomonition(props) {
	return (
		<Admonition icon={<FaPencilAlt />} {...props} type="note" />
	);
}
function TableAdmonition(props) {
	return (
		<Admonition icon="" {...props} type="note" />
	);
}
function ProgressAdmonition(props) {
	return (
		<Admonition icon={<TbProgressCheck />} {...props} type="warning" />
	);
}
const AdmonitionTypes = {
	...DefaultAdmonitionTypes,
	'starfinder': StarfinderAdomonition,
	'origin': OriginAdmonition,
	'vanilla': VanillaAdomonition,
	'pencil': PencilAdomonition,
	'table': TableAdmonition,
	'progress': ProgressAdmonition
};

export default AdmonitionTypes;