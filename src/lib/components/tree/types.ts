export class TreeItem {
  label = $state("");
  expanded? = $state(false);
  children? = $state<TreeItem[]>([]);

  constructor(data: TreeItem) {
    console.log("data", data);
    this.label = data.label;
    this.expanded = data.expanded;
    if (data.children) {
      for (const child of data.children) {
        this.children.push(new TreeItem(child));
      }
    }
  }
}
