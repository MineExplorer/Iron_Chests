IDRegistry.genBlockID("ironChest");
Block.createBlockWithRotation("ironChest", [
	{name: "Iron Chest", texture: [["iron_chest", 0], ["iron_chest", 0], ["iron_chest", 2], ["iron_chest", 1], ["iron_chest", 2], ["iron_chest", 2]], inCreative: true}
], "iron_chest");
ToolAPI.registerBlockMaterial(BlockID.ironChest, "stone", 1, true);
Block.setDestroyLevel(BlockID.ironChest, 1, true);
CustomChest.setChestRender(BlockID.ironChest);

let guiIronChest = CustomChest.createChestGui("Iron Chest", 54);

class IronChestTE extends AdvancedChestTE {
	constructor() {
		super(guiIronChest);
	}

	click(id, count, data, coords, player, extra) {
		if (id == ItemID.ironGoldUpgrade) {
			this.upgrade(BlockID.goldChest, player);
			return true;
		}
		return false;
	}
}

new IronChestTE().registerTile(BlockID.ironChest);

StorageInterface.createInterface(BlockID.ironChest, {
	slots: {
		"slot^0-53": {
			input: true,
			output: true
		}
	}
});
