IDRegistry.genBlockID("crystalChest");
Block.createBlockWithRotation("crystalChest", [
	{name: "Crystal Chest", texture: [["crystal_chest", 0], ["crystal_chest", 0], ["crystal_chest", 2], ["crystal_chest", 1], ["crystal_chest", 2], ["crystal_chest", 2]], inCreative: true}
], "iron_chest");
ToolAPI.registerBlockMaterial(BlockID.crystalChest, "stone", 1, true);
Block.setDestroyLevel(BlockID.crystalChest, 1, true);
CustomChest.setChestRender(BlockID.crystalChest);

let guiCrystalChest = CustomChest.createChestGui("Crystal Chest", 108);

class CrystalChestTE extends AdvancedChestTE {
	constructor() {
		super(guiCrystalChest);
	}
}

new CrystalChestTE().registerTile(BlockID.crystalChest);

StorageInterface.createInterface(BlockID.crystalChest, {
	slots: {
		"slot^0-107": {
			input: true,
			output: true
		}
	}
});
