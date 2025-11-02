IDRegistry.genItemID("woodCopperUpgrade");
Item.createItem("woodCopperUpgrade", "Wood to Copper Chest Upgrade", {name: "wood_copper_upgrade"}, {stack: 1});

IDRegistry.genItemID("woodIronUpgrade");
Item.createItem("woodIronUpgrade", "Wood to Iron Chest Upgrade", {name: "wood_iron_upgrade"}, {stack: 1});

IDRegistry.genItemID("copperIronUpgrade");
Item.createItem("copperIronUpgrade", "Copper to Iron Chest Upgrade", {name: "copper_iron_upgrade"}, {stack: 1});

IDRegistry.genItemID("copperSilverUpgrade");
Item.createItem("copperSilverUpgrade", "Copper to Silver Chest Upgrade", {name: "copper_silver_upgrade"}, {stack: 1});

IDRegistry.genItemID("ironGoldUpgrade");
Item.createItem("ironGoldUpgrade", "Iron to Gold Chest Upgrade", {name: "iron_gold_upgrade"}, {stack: 1});

IDRegistry.genItemID("silverGoldUpgrade");
Item.createItem("silverGoldUpgrade", "Silver to Gold Chest Upgrade", {name: "silver_gold_upgrade"}, {stack: 1});

IDRegistry.genItemID("goldDiamondUpgrade");
Item.createItem("goldDiamondUpgrade", "Gold to Diamond Chest Upgrade", {name: "gold_diamond_upgrade"}, {stack: 1});

IDRegistry.genItemID("diamondCrystalUpgrade");
Item.createItem("diamondCrystalUpgrade", "Diamond to Crystal Chest Upgrade", {name: "diamond_crystal_upgrade"}, {stack: 1});

IDRegistry.genItemID("diamondObsidianUpgrade");
Item.createItem("diamondObsidianUpgrade", "Diamond to Obsidian Chest Upgrade", {name: "diamond_obsidian_upgrade"}, {stack: 1});

function upgradeChest(x, y, z, player) {
	let region = BlockSource.getDefaultForActor(player);
	let item = Entity.getCarriedItem(player);
	let chestID;
	if (region.getBlockId(x, y, z) == 54) { // validation
		if (item.id == ItemID.woodCopperUpgrade) {
			chestID = BlockID.copperChest;
		}
		if (item.id == ItemID.woodIronUpgrade) {
			chestID = BlockID.ironChest;
		}
	}
	if (!chestID) return;
	// copy container
	let chest = region.getBlockEntity(x, y, z);
	let size = chest.getSize();
	if (size > 27) return;
	let container = new ItemContainer();
	for (let i = 0; i < size; i++) {
		let slot = chest.getSlot(i);
		container.setSlot("slot" + i, slot.id, slot.count, slot.data, slot.extra);
		chest.setSlot(i, 0, 0, 0);
	}
	// set block
	let rotation = (region.getBlockData(x, y, z) - 2) ^ 1;
	region.setBlock(x, y, z, chestID, rotation);
	let tileEntity = TileEntity.addTileEntity(x, y, z, region);
	VanillaSlots.registerServerEventsForContainer(container);
	tileEntity.container = container;
	// clear item in hand
	Entity.setCarriedItem(player, 0, 0, 0);
}

Callback.addCallback("ItemUseLocal", function(coords, item, block, player) {
	if (block.id == 54 && (item.id == ItemID.woodCopperUpgrade || item.id == ItemID.woodIronUpgrade)) {
		Network.sendToServer("IronChests.upgrade_wood_chest", {x: coords.x, y: coords.y, z: coords.z});
	}
});

Network.addServerPacket("IronChests.upgrade_wood_chest", function(client, data) {
	upgradeChest(data.x, data.y, data.z, client.getPlayerUid());
});