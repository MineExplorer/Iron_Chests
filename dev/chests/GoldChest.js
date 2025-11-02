IDRegistry.genBlockID("goldChest");
Block.createBlockWithRotation("goldChest", [
	{name: "Gold Chest", texture: [["gold_chest", 0], ["gold_chest", 0], ["gold_chest", 2], ["gold_chest", 1], ["gold_chest", 2], ["gold_chest", 2]], inCreative: true}
], "iron_chest");
ToolAPI.registerBlockMaterial(BlockID.goldChest, "stone", 1, true);
Block.setDestroyLevel(BlockID.goldChest, 1, true);
CustomChest.setChestRender(BlockID.goldChest);

let guiGoldChest = CustomChest.createChestGui("Gold Chest", 81);

class GoldChestTE extends AdvancedChestTE {
	constructor() {
		super(guiGoldChest);
	}

	click(id, count, data, coords, player, extra) {
		if (id == ItemID.goldDiamondUpgrade) {
			this.upgrade(BlockID.diamondChest, player);
			return true;
		}
		return false;
	}
}

new GoldChestTE().registerTile(BlockID.goldChest);

StorageInterface.createInterface(BlockID.goldChest, {
	slots: {
		"slot^0-80": {
			input: true,
			output: true
		}
	}
});
