IDRegistry.genBlockID("silverChest");
Block.createBlockWithRotation("silverChest", [
	{name: "Silver Chest", texture: [["silver_chest", 0], ["silver_chest", 0], ["silver_chest", 2], ["silver_chest", 1], ["silver_chest", 2], ["silver_chest", 2]], inCreative: true}
], "iron_chest");
ToolAPI.registerBlockMaterial(BlockID.silverChest, "stone", 1, true);
Block.setDestroyLevel(BlockID.silverChest, 1, true);
CustomChest.setChestRender(BlockID.silverChest);

let guiSilverChest = CustomChest.createChestGui("Silver Chest", 72);

class SilverChestTE extends AdvancedChestTE {
	constructor() {
		super(guiSilverChest);
	}

	click(id, count, data, coords, player, extra) {
		if (id == ItemID.silverGoldUpgrade) {
			this.upgrade(BlockID.goldChest, player);
			return true;
		}
		return false;
	}
}

new SilverChestTE().registerTile(BlockID.silverChest);

StorageInterface.createInterface(BlockID.silverChest, {
	slots: {
		"slot^0-71": {
			input: true,
			output: true
		}
	}
});
