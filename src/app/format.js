/**
 * It navigates to the saved itemToSelect item. After delete it navigate to the next item. 
 * After add it navigates to the new added item if it is displayed in the tree. If not it navigates to the first item.
 * @private
 */
_findItem: function () {
  var itemToSelect = this.getModel("appView").getProperty("/itemToSelect");
  if (itemToSelect) {
    var sPath = this._fnGetPathWithSlash(itemToSelect);
    var oItem = this._oListSelector.findListItem(sPath);
    if (!oItem) { //item is not viewable in the tree. not in the current tree page.
      oItem = this._oListSelector.findFirstItem();
      if (oItem) {
        sPath = oItem.getBindingContext().getPath();
      } else {
        this.getRouter().getTargets().display("detailNoObjectsAvailable");
        return;
      }
    }
    this._oListSelector.selectAListItem(sPath);
    this._showDetail(oItem);
  }
}