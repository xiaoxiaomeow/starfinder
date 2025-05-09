import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import Admonition from '@theme/Admonition';
import { IoLanguageOutline } from "react-icons/io5";
import { TbProgressCheck } from "react-icons/tb";
import { PiButterflyBold } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";

function StarfinderAdmonition(props) {
	return (
		<Admonition icon={<PiButterflyBold />} {...props} type="note" className="starfinder" title={props.title || null} />
	);
}
function OriginAdmonition(props) {
	return (
		<Admonition icon={<IoLanguageOutline />} {...props} type="note" />
	);
}
function VanillaAdmonition(props) {
	return (
		<Admonition icon={null} {...props} type="note" title={props.title || null} />
	);
}
function PencilAdmonition(props) {
	return (
		<Admonition icon={<FaPencilAlt />} {...props} type="note" />
	);
}
function TableAdmonition(props) {
	return (
		<Admonition icon="" {...props} type="note" title={props.title || null} />
	);
}
function ProgressAdmonition(props) {
	return (
		<Admonition icon={<TbProgressCheck />} {...props} type="warning" />
	);
}
const AdmonitionTypes = {
	...DefaultAdmonitionTypes,
	'starfinder': StarfinderAdmonition,
	'origin': OriginAdmonition,
	'vanilla': VanillaAdmonition,
	'pencil': PencilAdmonition,
	'table': TableAdmonition,
	'progress': ProgressAdmonition
};

export default AdmonitionTypes;