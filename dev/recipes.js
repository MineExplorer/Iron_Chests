// Recipes
Callback.addCallback("PreLoaded", function() {
	// Chests
	if (ItemID.ingotCopper) {
		Recipes.addShaped({id: BlockID.copperChest, count: 1, data: 0}, [
			"xxx",
			"xax",
			"xxx"
		], ['x', ItemID.ingotCopper, -1, 'a', 54, -1]);
	}

	Recipes.addShaped({id: BlockID.ironChest, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', 265, -1, 'a', 54, -1]);

	Recipes.addShaped({id: BlockID.ironChest, count: 1, data: 0}, [
		"xgx",
		"gag",
		"xgx"
	], ['x', 265, -1, 'a', BlockID.copperChest, -1, 'g', 20, -1]);

	if (ItemID.ingotSilver) {
		Recipes.addShaped({id: BlockID.silverChest, count: 1, data: 0}, [
			"xxx",
			"xax",
			"xxx"
		], ['x', ItemID.ingotSilver, -1, 'a', BlockID.copperChest, -1]);

		Recipes.addShaped({id: BlockID.silverChest, count: 1, data: 0}, [
			"xgx",
			"gag",
			"xgx"
		], ['x', ItemID.ingotSilver, -1, 'a', BlockID.ironChest, -1, 'g', 20, -1]);
	}

	Recipes.addShaped({id: BlockID.goldChest, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', 266, -1, 'a', BlockID.ironChest, -1]);

	Recipes.addShaped({id: BlockID.goldChest, count: 1, data: 0}, [
		"xgx",
		"gag",
		"xgx"
	], ['x', 266, -1, 'a', BlockID.silverChest, -1, 'g', 20, -1]);

	Recipes.addShaped({id: BlockID.diamondChest, count: 1, data: 0}, [
		"ggg",
		"xax",
		"ggg"
	], ['x', 264, -1, 'a', BlockID.goldChest, -1, 'g', 20, -1]);

	Recipes.addShaped({id: BlockID.diamondChest, count: 1, data: 0}, [
		"ggg",
		"gag",
		"xxx"
	], ['x', 264, -1, 'a', BlockID.silverChest, -1, 'g', 20, -1]);

	Recipes.addShaped({id: BlockID.crystalChest, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', 20, -1, 'a', BlockID.diamondChest, -1]);

	Recipes.addShaped({id: BlockID.obsidianChest, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', 49, -1, 'a', BlockID.diamondChest, -1]);

	// Upgrades
	if (ItemID.ingotCopper) {
		Recipes.addShaped({id: ItemID.woodCopperUpgrade, count: 1, data: 0}, [
			"xxx",
			"xax",
			"xxx"
		], ['x', ItemID.ingotCopper, -1, 'a', 5, -1]);

		Recipes.addShaped({id: ItemID.copperIronUpgrade, count: 1, data: 0}, [
			"xgx",
			"gag",
			"xgx"
		], ['x', 265, -1, 'a', ItemID.ingotCopper, -1, 'g', 20, -1]);
	}

	Recipes.addShaped({id: ItemID.woodIronUpgrade, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', 265, -1, 'a', 5, -1]);

	if (ItemID.ingotCopper && ItemID.ingotSilver) {
		Recipes.addShaped({id: ItemID.copperSilverUpgrade, count: 1, data: 0}, [
			"xxx",
			"xax",
			"xxx"
		], ['x', ItemID.ingotSilver, -1, 'a', ItemID.ingotCopper, -1]);
	}

	Recipes.addShaped({id: ItemID.ironGoldUpgrade, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', 266, -1, 'a', 265, -1]);

	if (ItemID.ingotSilver) {
		Recipes.addShaped({id: ItemID.silverGoldUpgrade, count: 1, data: 0}, [
			"xgx",
			"gag",
			"xgx"
		], ['x', 266, -1, 'a', ItemID.ingotSilver, -1, 'g', 20, -1]);
	}

	Recipes.addShaped({id: ItemID.goldDiamondUpgrade, count: 1, data: 0}, [
		"ggg",
		"xax",
		"ggg"
	], ['x', 264, -1, 'a', 266, -1, 'g', 20, -1]);

	Recipes.addShaped({id: ItemID.diamondCrystalUpgrade, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', 20, -1, 'a', 49, -1]);

	Recipes.addShaped({id: ItemID.diamondObsidianUpgrade, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', 49, -1, 'a', 20, -1]);
});
