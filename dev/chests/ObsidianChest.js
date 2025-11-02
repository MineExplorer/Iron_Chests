IDRegistry.genBlockID("obsidianChest");
Block.createBlockWithRotation("obsidianChest", [
	{name: "Obsidian Chest", texture: [["obsidian_chest", 0], ["obsidian_chest", 0], ["obsidian_chest", 2], ["obsidian_chest", 1], ["obsidian_chest", 2], ["obsidian_chest", 2]], inCreative: true}
], {
	base: 1,
	destroytime: 3,
	explosionres: 10000,
	sound: "stone"
});
ToolAPI.registerBlockMaterial(BlockID.obsidianChest, "stone", 1, true);
Block.setDestroyLevel(BlockID.obsidianChest, 1, true);
CustomChest.setChestRender(BlockID.obsidianChest);

let guiObsidianChest = CustomChest.createChestGui("Obsidian Chest", 108);

class ObsidianChestTE extends AdvancedChestTE {
	constructor() {
		super(guiObsidianChest);
	}
}

new ObsidianChestTE().registerTile(BlockID.obsidianChest);

StorageInterface.createInterface(BlockID.obsidianChest, {
	slots: {
		"slot^0-107": {
			input: true,
			output: true
		}
	}
});
