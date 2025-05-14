const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const listDir = "weapons/lists/";
const taskFile = "weapons/task.json";
const htmlDir = "weapons/htmls/";
const jsonDir = "weapons/jsons/";
const deployDir = "../src/data/equipments/weapons/";
async function getPQueue() {
	const { default: PQueue } = await import('p-queue');
	return new PQueue({
		concurrency: 10,
		interval: 1000
	});
}
function mergeCommaElements(arr) {
	const result = [];
	let i = 0;

	while (i < arr.length) {
		if (arr[i] === ',') {
			if (result.length > 0 && i + 1 < arr.length) {
				const last = result.pop();
				result.push(last + ', ' + arr[i + 1]);
				i += 2;
			} else {
				result.push(arr[i]);
				i++;
			}
		} else {
			result.push(arr[i]);
			i++;
		}
	}

	return result;
}

const weaponTypes = ['AdvMelee', 'Ammo', 'BasicMelee', 'Grenade', 'Heavy', 'Longarms', 'SmallArms', 'Sniper', 'Solarian', 'Special'];
async function getList() {
	const baseUrl = "https://www.aonsrd.com/Weapons.aspx?Proficiency=";
	if (!fs.existsSync(listDir)) fs.mkdirSync(listDir);
	for (const type of weaponTypes) {
		const url = baseUrl + type;
		const file = listDir + type + '.html';
		console.log('feteching from ' + url);
		const response = await axios.get(url);
		fs.writeFileSync(file, response.data);
	}
}

function listToTasks() {
	const tasks = [];
	for (const type of weaponTypes) {
		const sourceFile = listDir + type + '.html';
		const sourceHtml = fs.readFileSync(sourceFile);
		const $ = cheerio.load(sourceHtml);

		$('a[href^="WeaponDisplay.aspx"]').each((_, element) => {
			const $element = $(element);
			const href = $element.attr('href');
			let text = $element.text().trim();
			if (type === 'Ammo') text = text.replace(/\s*\(.*?\)\s*/g, '').trim();
			let category = "";
			if (!(type === 'Grenade' || type === 'Solarian')) category = $(element.parent.parent.nextSibling).text().trim();
			if (category === '—') category = "";
			tasks.push({
				href,
				text,
				category
			});
		});
	}
	fs.writeFileSync(taskFile, JSON.stringify(tasks));
}

async function taskToHtml() {
	const tasksJson = fs.readFileSync(taskFile);
	const tasks = JSON.parse(tasksJson);
	const baseUrl = 'https://www.aonsrd.com/';
	const queue = await getPQueue();
	if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir);
	for (const task of tasks) {
		const name = task.text;
		const href = task.href;
		const url = baseUrl + href;
		const file = htmlDir + name + '.html';
		if (!fs.existsSync(file)) {
			queue.add(async () => {
				console.log('feteching from ' + url);
				const response = await axios.get(url);
				fs.writeFileSync(file, response.data);
			});
		}
		else {
			console.log(file + ' already fetched.');
		}
	}
	await queue.onIdle();
}

function htmlToJson() {
	const tasksJson = fs.readFileSync(taskFile);
	const tasks = JSON.parse(tasksJson);
	const baseUrl = 'https://www.aonsrd.com/';
	for (const task of tasks) {
		const name = task.text;
		const href = task.href;
		const url = baseUrl + href;
		const sourceFile = htmlDir + name + '.html';
		const sourceHtml = fs.readFileSync(sourceFile);
		const $ = cheerio.load(sourceHtml);
		const targetFile = jsonDir + name + ".json";
		const dumUrl = new URL(href, 'http://dummybase.com');
		const family = dumUrl.searchParams.get('Family');

		console.log('parsing ' + sourceFile);

		let description = "";
		let anchor = null;
		if (family === 'None') {
			$('h3.framing').each((_, element) => {
				const $title = $(element);
				const $content = $($title[0].nextSibling);
				if ($title.text().trim() === 'Description') description = $content.text().trim()
			});
			$('h1.title').each((_, element) => {
				const $title = $(element);
				const $link = $title.find('a');
				if ($link.length && $link.text().trim() === name) {
					anchor = $title[0].nextSibling;
				}
			})
		}
		else {
			$('h1.title').each((_, element) => {
				const $title = $(element);
				const $content = $($title[0].nextSibling);
				if ($title.text().trim() === family) description = $content.text().trim()
			});
			$('h2.title').each((_, element) => {
				const $title = $(element);
				const $link = $title.find('a');
				if ($link.length && $link.text().trim() === name) {
					anchor = $title[0].nextSibling;
				}
			})
		}
		const textContentArray = [];
		while (anchor) {
			const anchorText = $(anchor).text().trim().replace(";", "");
			if (anchorText.length > 0) textContentArray.push(anchorText);
			anchor = anchor.nextSibling;
		}
		const mergedArray = mergeCommaElements(textContentArray);

		let source = "", level = "", price = "", hands = "", proficiency = "", damage = "", damageType = [], critical = "", bulk = "", special = [], capacity = "";
		let i = 0;
		while (i < mergedArray.length) {
			if (mergedArray[i] === 'Source') source = mergedArray[i + 1];
			if (mergedArray[i] === 'Level') level = mergedArray[i + 1];
			if (mergedArray[i] === 'Price') price = mergedArray[i + 1];
			if (mergedArray[i] === 'Hands') hands = mergedArray[i + 1];
			if (mergedArray[i] === 'Proficiency') proficiency = mergedArray[i + 1];
			if (mergedArray[i] === 'Damage') {
				const damageItem = mergedArray[i + 1]
				damageMatch = damageItem.match(/^\d+d\d+/);
				if (damageMatch) {
					damage = damageMatch[0];
					damageType = damageItem.replace(damage, "").trim().split(/\s*&\s*/);
				}
				else {
					damage = damageItem;
				}
			}
			if (mergedArray[i] === 'Critical') critical = mergedArray[i + 1];
			if (mergedArray[i] === 'Bulk') bulk = mergedArray[i + 1];
			if (mergedArray[i] === 'Special') special = mergedArray[i + 1].split(/\s*,\s*/);
			if (mergedArray[i] === 'Capacity') capacity = mergedArray[i + 1];
			i++;
		}


		const info = {
			key: name,
			url: url,
			family: family,
			name_en: name,
			description_en: description,
			source: source,
			level: level,
			price: price,
			hands: hands,
			proficiency: proficiency,
			category: task.category,
			damage: damage,
			damageType: damageType,
			critical: critical,
			bulk: bulk,
			special: special,
			capacity: capacity
		};

		fs.writeFileSync(targetFile, JSON.stringify(info));
	}
}

function deploy() {
	const tasksJson = fs.readFileSync(taskFile);
	const tasks = JSON.parse(tasksJson);
	if (!fs.existsSync(deployDir)) fs.mkdirSync(deployDir);
	for (const task of tasks) {
		const name = task.text;
		const sourceFile = jsonDir + name + '.json';
		const targetFile = deployDir + name + ".json";
		const sourceJson = JSON.parse(fs.readFileSync(sourceFile));
		let targetJson = {};
		if (fs.existsSync(targetFile)) targetJson = JSON.parse(fs.readFileSync(targetFile));

		console.log('deploying ' + sourceFile);
		for (const key in sourceJson) {
			targetJson[key] = sourceJson[key];
		}
		fs.writeFileSync(targetFile, JSON.stringify(targetJson, null, '\t'));
	}

}

listToTasks();
// taskToHtml();
htmlToJson();
deploy();