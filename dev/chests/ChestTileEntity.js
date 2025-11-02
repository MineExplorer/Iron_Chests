class AdvancedChestTE extends ChestTileEntity {
	upgrade(chestID, player) {
		let blockData = this.blockSource.getBlockData(this.x, this.y, this.z);
		this.blockSource.setBlock(this.x, this.y, this.z, chestID, blockData);
		let container = new ItemContainer(this.container.asLegacyContainer());
		this.clearContainer();
		this.selfDestroy();
		let tileEntity = TileEntity.addTileEntity(this.x, this.y, this.z, this.blockSource);
		tileEntity.container = container;
		Entity.setCarriedItem(player, 0, 0, 0);
	}
}