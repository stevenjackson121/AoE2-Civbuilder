module.exports = {
	generateNames
}

function getRandomInt (max) {
	return Math.floor(Math.random() * max)
}

function generateNames (name_num) {
	var bin1mini = 56
	var bin2mini = 36

	var bin0 = [
		"Romanian",
		"Austrian",
		"Venetian",
		"Vatican",
		"Mesopotamian",
		"Albanian",
		"Polish",
		"Apache",
		"Arabian",
		"Assyrian",
		"Balkan",
		"Basque",
		"Catalan",
		"Cherokee",
		"Corsican",
		"Danish",
		"Nordic",
		"Dutch",
		"Estonian",
		"Galician",
		"Hawaiian",
		"Hungarian",
		"Icelandic",
		"Inuit",
		"Kurdish",
		"Macedonian",
		"Maltese",
		"Nubian",
		"Sardinian",
		"Serbian",
		"Somalian",
		"Swahili",
		"Swedish",
		"Tibetan",
		"Thai",
		"Ukranian",
		"Welsh",
		"Irish",
		"Indonesian",
		"Australian",
		"Moldovian",
		"Etruscan",
		"Aegean",
		"Sumerian",
		"Scythian",
		"Jamaican",
		"Nigerian",
		"Himalayan",
		"Fatimid",
		"Carthaginian",
		"Kush",
		"Sassanid",
		"Prussian",
		"Qing",
		"Han",
		"Crimean",
		"Iberian",
		"Alexandrian",
		"Western",
		"Northern",
		"Eastern",
		"Southern",
		"Tunisian",
		"Cretan",
		"Ionian",
		"Bavarian",
		"Carolingian",
		"Novgorod",
		"Saxon",
		"Scottish",
		"Athenian",
		"Spartan",
		"Croatian",
		"Latin",
		"Olmec",
		"Thracian",
		"Illyrian",
		"Bactrian",
		"Song",
		"Cao",
		"Akkadian",
		"Filipino",
		"Hindu",
		"Zulu"
	]

	var bin1 = [
		"Bloody",
		"Ancient",
		"Burning",
		"Hallowed",
		"Eternal",
		"Divine",
		"Forgotten",
		"Lost",
		"Holy",
		"Broken",
		"Golden",
		"Exalted",
		"Haunted",
		"Sacred",
		"Melting",
		"Lonely",
		"Wooden",
		"False",
		"Tiny",
		"Mysterious",
		"Silver",
		"Celestial",
		"Ethereal",
		"Blessed",
		"Mystical",
		"Occult",
		"Cursed",
		"Enchanted",
		"Bewitched",
		"Phantom",
		"Terrifying",
		"Dark",
		"Infernal",
		"Gleaming",
		"Scarlet",
		"Emerald",
		"Diamond",
		"Wicked",
		"Frozen",
		"Mythical",
		"Legendary",
		"Forbidden",
		"True",
		"Obsidian",
		"Crimson",
		"Iron",
		"Bronze",
		"Copper",
		"Crystal",
		"Arcane",
		"Sapphire",
		"Grand",
		"Archaic",
		"Magnificent",
		"Gigantic",
		"Colossal",

		"Savage",
		"Devoted",
		"Valiant",
		"Corrupt",
		"Pious",
		"Fearless",
		"Courageous",
		"Barbarous",
		"Brave",
		"Grim",
		"Nefarious",
		"Pompous",
		"Zealous",
		"Wandering",
		"Righteous",
		"Scar-faced",
		"Daring",
		"Bold",
		"Murderous",
		"Raging",
		"Fallen",
		"Supreme",
		"Annointed",
		"Chosen",
		"Solemn",
		"Loyal",
		"Merciful",
		"Untouchable",
		"Fervent",
		"Regal",
		"Majestic",
		"Humble",
		"Meek",
		"Stoic",
		"Staunch",
		"Furious",
		"Doomed",
		"Renowned",
		"Heartless",
		"Illegitimate",
		"Devout",
		"Devious",
		"Hopeless",
		"Honorable",
		"Impetuous",
		"Free",
		"Prideful",
		"Starving",
		"Famished",
		"Punishing",
		"Pale",
		"Filthy",
		"Unwavering",
		"Forsworn",
		"Forsaken",
		"Bearded",
		"Plumed",
		"Downtrodden",
		"Cunning",
		"Evil",
		"Unyielding",
		"Cruel",
		"Unfortunate",
		"Crippled",
		"Blind",
		"Deaf",
		"Headless",
		"Untameable",
		"Fierce",
		"Foreign",
		"Virtuous",
		"Noble",
		"Lionhearted",
		"Stalwart",
		"Resolute",
		"One-Eyed",
		"Honest",
		"Contemptuous",
		"United",
		"Silent",
		"Tough",
		"Great",
		"Clever",
		"Mischievious",
		"Cutthroat",
		"Beloved",
		"Mighty",
		"Grotesque",
		"Timid",
		"Foolish",
		"Frail",
		"Troubled",
		"Determined",
		"Exuberant",
		"Faithful",
		"Obedient",
		"Young",
		"Swift",
		"Innumerable",
		"Obsequious",
		"Hideous",
		"Crooked",
		"Generous",
		"Enchanting",
		"Charming",
		"Defiant",
		"Arrogant",
		"Clumsy",
		"Handsome"
	]

	var bin2 = [
		"Fangs",
		"Hammers",
		"Eagles",
		"Bears",
		"Snakes",
		"Beacons",
		"Lions",
		"Tigers",
		"Wolves",
		"Panthers",
		"Jaws",
		"Claws",
		"Keepers",
		"Seekers",
		"Rulers",
		"Lords",
		"Warlords",
		"Kings",
		"Admirals",
		"Captains",
		"Servants",
		"Heirs",
		"Ancestors",
		"Creators",
		"Pillars",
		"Shields",
		"Wings",
		"Lances",
		"Arrows",
		"Swords",
		"Blossoms",
		"Ravens",
		"Lizards",
		"Ghouls",
		"Harbingers",
		"Founders",

		"Pillagers",
		"Ravagers",
		"Warriors",
		"Guardians",
		"Soldiers",
		"Protectors",
		"Haunters",
		"Watchmen",
		"Berserkers",
		"Gypsies",
		"Wanderers",
		"Explorers",
		"Pioneers",
		"Colonists",
		"Pilgrims",
		"Refugees",
		"Architects",
		"Fathers",
		"Sons",
		"Daughters",
		"Brothers",
		"Sisters",
		"Mothers",
		"Maidens",
		"Couriers",
		"Thieves",
		"Jokers",
		"Exiles",
		"Outcasts",
		"Prophets",
		"Masters",
		"Cannibals",
		"Nomads",
		"Riders",
		"Men",
		"Hunters",
		"Heroes",
		"Raiders",
		"Pirates",
		"Sailors",
		"Hounds",
		"Adventurers",
		"Charlatans",
		"Demons",
		"Buccaneers",
		"Priests",
		"Necromancers",
		"Wizards",
		"Scribes",
		"Ministers",
		"Pyromancers",
		"Soothsayers",
		"Warmongers",
		"Torchbearers",
		"Weepers",
		"Widows",
		"Weavers",
		"Tailors",
		"Horsemen",
		"Cowards",
		"Beasts",
		"Apostles",
		"Spirits",
		"Wretches",
		"Exterminators",
		"Masons",
		"Misfits",
		"Traitors",
		"Seamstresses",
		"Witches",
		"Giants",
		"Bowmen",
		"Brewers",
		"Archers",
		"Cobblers",
		"Liars",
		"Infidels",
		"Warlocks",
		"Spies",
		"Ambushers",
		"Scouts",
		"Knights",
		"Missionaries",
		"Visionaries",
		"Devils",
		"Titans",
		"Bandits",
		"Outlaws",
		"Merchants",
		"Surgeons",
		"Mercernaries",
		"Plunderers",
		"Chieftans",
		"Jesters",
		"Vagabonds",
		"Bastards",
		"Assassins",
		"Beggars",
		"Dragons",
		"Serfs",
		"Peasants",
		"Gladiators",
		"Avengers",
		"Lunatics",
		"Temptresses",
		"Brutes",
		"Guerillas",
		"Rebels",
		"Barbarians",
		"Fellows",
		"Destroyers",
		"Conquerors",
		"Angels",
		"Druids",
		"Poets",
		"Monks",
		"Travellers",
		"Challengers",
		"Agents",
		"Harvesters",
		"Peddlers",
		"Shepherds",
		"Fishermen",
		"Vigilantes",
		"Fugitives",
		"Souls",
		"Companions",
		"Grifters",
		"Executioners",
		"Marauders",
		"Bards",
		"Clerics",
		"Paladins",
		"Crusaders",
		"Saints",
		"Squires",
		"Princes",
		"Burglars"
	]

	var bin3 = [
		"Purity",
		"Sanctity",
		"Peace",
		"War",
		"Bloodshed",
		"Anguish",
		"Greed",
		"Decadence",
		"Lust",
		"Power",
		"the Damned",
		"the Dead",
		"Mercy",
		"the Sea",
		"the Moon",
		"the Sun",
		"the Sky",
		"the Earth",
		"the Heavens",
		"Ice",
		"Fire",
		"Light",
		"Old",
		"Death",
		"Doom",
		"the Wind",
		"the Tides",
		"Pain",
		"the West",
		"the East",
		"the North",
		"the South",
		"the Messiah",
		"the Apocalypse",
		"Spring",
		"Winter",
		"Destruction",
		"Decay",
		"Disease",
		"Turmoil",
		"Devastation",
		"Glory",
		"Chaos",
		"Order",
		"Fertility",
		"Envy",
		"Mischief",
		"Honor",
		"Shame",
		"Tranquility",
		"Divination",
		"Alchemy",
		"Grief",
		"Terror",
		"Horror",
		"Deceit",
		"the Deep",
		"the Abyss",
		"the Chasm",
		"Sin",
		"Hell",
		"Nature",
		"the Desert",
		"the Storm",
		"the Tempest",
		"the Gods",
		"Sacrifice",
		"Torture",
		"Treason",
		"Treachery",
		"Fortune",
		"Luck",
		"Gloom",
		"Sorrow",
		"the People",
		"the Commonwealth",
		"Passion",
		"Youth",
		"Wisdom",
		"Revenge",
		"the Condemned",
		"Guilt",
		"Revolution",
		"Revelation",
		"Faith",
		"Tyranny",
		"Freedom",
		"Darkness",
		"Hunger",
		"Thirst",
		"Desire",
		"Rage",
		"Agony",
		"Suffering",
		"Despair",
		"Defeat",
		"Victory",
		"Woe",
		"Life",
		"Love",
		"Bliss",
		"Wrath",
		"Scorn",
		"Spite",
		"Torment",
		"Hate",
		"Fury",
		"Fear",
		"Dread",
		"Jealousy",
		"Pity",
		"Liberty",
		"Justice",
		"Knowledge",
		"Strength",
		"Beauty",
		"the Law",
		"the Unknown",
		"Long Ago",
		"Secrets",
		"Truth",
		"Defiance",
		"Retribution",
		"Misery",
		"Lightning",
		"Thunder",
		"Shadows",
		"the Afterlife",
		"Luxury",
		"Hellfire",
		"Hope",
		"Chivalry",
		"Heresy",
		"Gluttony",
		"Plague",
		"Carnage",
		"Betrayal",
		"the Steppe",
		"the Plains",
		"the Jungle",
		"the Rainforest",
		"the Tundra",
		"the Savanna",
		"the Bog",
		"the North Pole",
		"the South Pole",
		"Black Magic",
		"Destiny"
	]

	var bin4 = [
		"Skull",
		"Banner",
		"Cross",
		"Sword",
		"Lily",
		"Comet",
		"Book",
		"Staff",
		"Cane",
		"River",
		"Bridge",
		"Spider",
		"Crow",
		"Beach",
		"Castle",
		"Crown",
		"Throne",
		"Horse",
		"Fort",
		"Treasure",
		"Fountain",
		"Lake",
		"Valley",
		"Tree",
		"Mountain",
		"Rose",
		"Swamp",
		"Torch",
		"Ring",
		"Jewel",
		"Palace",
		"Goblet",
		"Chalice",
		"Grail",
		"Boar",
		"Sphinx",
		"Tomb",
		"Crypt",
		"Vault",
		"Dungeon",
		"Obelisk",
		"Sarcophagus",
		"Vase",
		"Urn",
		"Necklace",
		"Bracelet",
		"Flag",
		"Tapestry",
		"Temple",
		"Shrine",
		"Chapel",
		"Church",
		"Ruins",
		"Abbey",
		"Mask",
		"Mosque",
		"Fortress",
		"Harp",
		"Loom",
		"Tome",
		"Scroll",
		"Horn",
		"Tusk",
		"Cape",
		"Crest",
		"Serpent",
		"Viper",
		"Gallows",
		"Guillotine",
		"Blizzard",
		"Falcon",
		"Bible",
		"Gates",
		"Pyramid",
		"Jaguar",
		"Pond",
		"Flame",
		"Star",
		"Chamber",
		"Robes",
		"Sceptre",
		"Dagger",
		"Knife",
		"Cutlass",
		"Rapier",
		"Caverns",
		"Nightmare",
		"Dream",
		"Chains",
		"Shackles",
		"Arrow",
		"Spear",
		"Shield",
		"Helmet",
		"Forge",
		"Anvil",
		"Lair",
		"Saddle",
		"Parchment",
		"Volcano",
		"Catacombs",
		"Skeleton",
		"Apple",
		"Cathedral",
		"Relic",
		"Forest",
		"Phoenix",
		"Monolith",
		"Unicorn",
		"Oasis",
		"Bugle"
	]

	var bin5 = [
		"Order",
		"Empire",
		"Realm",
		"Kingdom",
		"Republic",
		"Dominion",
		"Dynasty",
		"Caliphate",
		"Alliance",
		"Dictatorship",
		"Fellowship",
		"Brotherhood",
		"Aristochracy",
		"Guild",
		"Nation",
		"Coalition",
		"Cult",
		"League",
		"Union",
		"Confederation",
		"Slayers",
		"Horde",
		"Tribe",
		"Clan",
		"Clergy",
		"Lords",
		"Bastion",
		"Batallion",
		"Haven",
		"Federation",
		"Khanate",
		"Principality",
		"Duchy"
	]

	var bin6 = [
		"Bothnia",
		"Naples",
		"Kattegat",
		"Cyprus",
		"Galway",
		"Samarkand",
		"Cape Finisterre",
		"Quiberon",
		"Lake Lemond",
		"the Shimmering Sea",
		"Transylvania",
		"the Alps",
		"the Bosporus",
		"Zanzibar",
		"Timbuktu",
		"Ougadougou",
		"Bucharest",
		"Kiev",
		"Tripoli",
		"Benghazi",
		"Rhodes",
		"Tasmania",
		"Borneo",
		"Trincomalee",
		"Usedom",
		"Alcatraz",
		"Malta",
		"Constantinople",
		"Wolfsburg",
		"Borodino",
		"Agincourt",
		"Boroughbridge",
		"Rochelle",
		"Smyrna",
		"L'Anguille",
		"Thessalonica",
		"Belgrade",
		"Ravenspur",
		"Brunkeberg",
		"Granada",
		"Tehuantepec",
		"Palenque",
		"Chichen Itza",
		"Zacatecas",
		"Florence",
		"Mount Hiei",
		"Tottori",
		"Kyoto",
		"Pyongyang",
		"Toulouse",
		"al-Hirah",
		"Antioch",
		"Jerusalem",
		"Mecca",
		"Damascus",
		"Heavenfield",
		"Bablyon",
		"Aleppo",
		"Helipolis",
		"Dongola",
		"Nishapur",
		"Kathmandu",
		"Bologne",
		"York",
		"Buszacz",
		"Corinth",
		"Cephalonia",
		"Garigliano",
		"Baghdad",
		"Arcadiopolis",
		"Skopje",
		"al-Bakr",
		"Azaz",
		"Medina",
		"Acuncagua",
		"Navarre",
		"Heraclea",
		"Lisbon",
		"Wexford",
		"Rawalpindi",
		"Fujigawa",
		"Mizushima",
		"Hattin",
		"Philomelion",
		"Titicaca",
		"Marseille",
		"Chernigov",
		"Falkirk",
		"Madagascar",
		"Maghreb",
		"Habsburg",
		"El Alamein",
		"Casablanca",
		"Intombe",
		"Ulundi",
		"Namibia",
		"Babatunde",
		"Simba",
		"Chernobyl"
	]

	names = []
	for (var i=0; i<name_num; i++) {
		var name = ''
		//Template 0: the bin0 bin2/bin5
		//Template 1: the bin1 bin2
		//Template 2&7: bin2 of bin3
		//Template 3&8: bin2 of the bin1mini bin4
		//Template 4: the bin1 bin2 of bin3
		//Template 5: the bin5 of bin2
		//Template 6: the bin1 bin0 bin2
		//Template 9: bin2 of bin6
		var name_template = getRandomInt(10)
		if (name_template == 0) {
			var rand1 = getRandomInt(bin0.length)
			var rand2 = getRandomInt(bin5.length)
			var coin = getRandomInt(2)
			if (coin == 0) {
				rand2 = getRandomInt(bin2.length - bin2mini) + bin2mini
			}
			name += 'The '
			name += bin0[rand1]
			name += ' '
			if (coin == 0) {
				name += bin2[rand2]
				bin2.splice(rand2, 1)
			} else {
				name += bin5[rand2]
				bin5.splice(rand2, 1)
			}
			bin0.splice(rand1, 1)
		} else if (name_template == 1) {
			var rand1 = getRandomInt(bin1.length)
			var rand2 = getRandomInt(bin2.length)
			if (rand1 >= bin1mini) {
				rand2 = getRandomInt(bin2.length - bin2mini) + bin2mini
			}
			name += 'The '
			name += bin1[rand1]
			name += ' '
			name += bin2[rand2]
			bin1.splice(rand1, 1)
			bin2.splice(rand2, 1)
			if (rand1 < bin1mini) {
				bin1mini--
			}
			if (rand2 < bin2mini) {
				bin2mini--
			}
		} else if ((name_template == 2) || (name_template == 7)) {
			var rand1 = getRandomInt(bin2.length)
			var rand2 = getRandomInt(bin3.length)
			name += bin2[rand1]
			name += ' of '
			name += bin3[rand2]
			bin2.splice(rand1, 1)
			bin3.splice(rand2, 1)
			if (rand1 < bin2mini) {
				bin2mini--
			}
		} else if ((name_template == 3) || (name_template == 8)) {
			var rand1 = getRandomInt(bin2.length)
			var rand2 = getRandomInt(bin1mini)
			var rand3 = getRandomInt(bin4.length)
			name += bin2[rand1]
			name += ' of the '
			name += bin1[rand2]
			name += ' '
			name += bin4[rand3]
			bin2.splice(rand1, 1)
			bin1.splice(rand2, 1)
			bin4.splice(rand3, 1)
			bin1mini--
			if (rand1 < bin2mini) {
				bin2mini--
			}
		} else if (name_template == 4) {
			var rand1 = getRandomInt(bin1.length)
			var rand2 = getRandomInt(bin2.length)
			var rand3 = getRandomInt(bin3.length)
			if (rand1 >= bin1mini) {
				rand2 = getRandomInt(bin2.length - bin2mini) + bin2mini
			}
			name += 'The '
			name += bin1[rand1]
			name += ' '
			name += bin2[rand2]
			name += ' of '
			name += bin3[rand3]
			bin1.splice(rand1, 1)
			bin2.splice(rand2, 1)
			bin3.splice(rand3, 1)
			if (rand1 < bin1mini) {
				bin1mini--
			}
			if (rand2 < bin2mini) {
				bin2mini--
			}
		} else if (name_template == 5) {
			var rand1 = getRandomInt(bin5.length)
			var rand2 = getRandomInt(bin2.length - bin2mini) + bin2mini
			name += 'The '
			name += bin5[rand1]
			name += ' of '
			name += bin2[rand2]
			bin5.splice(rand1, 1)
			bin2.splice(rand2, 1)
		} else if (name_template == 6) {
			var rand1 = getRandomInt(bin1.length)
			var rand2 = getRandomInt(bin0.length)
			var rand3 = getRandomInt(bin2.length - bin2mini) + bin2mini
			name += 'The '
			name += bin1[rand1]
			name += ' '
			name += bin0[rand2]
			name += ' '
			name += bin2[rand3]
			bin1.splice(rand1, 1)
			bin0.splice(rand2, 1)
			bin2.splice(rand3, 1)
			if (rand1 < bin1mini) {
				bin1mini--
			}
		} else if (name_template == 9) {
			var rand1 = getRandomInt(bin2.length)
			var rand2 = getRandomInt(bin6.length)
			name += bin2[rand1]
			name += ' of '
			name += bin6[rand2]
			bin2.splice(rand1, 1)
			bin6.splice(rand2, 1)
			if (rand1 < bin2mini) {
				bin2mini--;
			}
		}
		names.push(name)
	}
	return names
}
