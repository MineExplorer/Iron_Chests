/// <reference path="./ChestTileEntity.js" />

Block.createSpecialType({
	base: 1,
	destroytime: 3,
	explosionres: 3,
	sound: "stone"
}, "iron_chest");

IDRegistry.genBlockID("copperChest");
Block.createBlockWithRotation("copperChest", [
	{name: "Copper Chest", texture: [["copper_chest", 0], ["copper_chest", 0], ["copper_chest", 2], ["copper_chest", 1], ["copper_chest", 2], ["copper_chest", 2]], inCreative: true}
], "iron_chest");
ToolAPI.registerBlockMaterial(BlockID.copperChest, "stone", 1, true);
Block.setDestroyLevel(BlockID.copperChest, 1, true);
CustomChest.setChestRender(BlockID.copperChest);

let guiCopperChest = CustomChest.createChestGui("Copper Chest", 45);

class CopperChestTE extends AdvancedChestTE {
	constructor() {
		super(guiCopperChest);
	}

	click(id, count, data, coords, player, extra) {
		if (id == ItemID.copperIronUpgrade) {
			this.upgrade(BlockID.ironChest, player);
			return true;
		}
		if (id == ItemID.copperSilverUpgrade) {
			this.upgrade(BlockID.silverChest, player);
			return true;
		}
		return false;
	}
}

new CopperChestTE().registerTile(BlockID.copperChest);

StorageInterface.createInterface(BlockID.copperChest, {
	slots: {
		"slot^0-44": {
			input: true,
			output: true
		}
	}
});
