export class SlashCommandList {
  constructor(options) {
    this.items = options.props.items;
    this.command = options.props.command;
    this.editor = options.props.editor;
    this.range = options.props.range;

    this.element = document.createElement("div");
    this.element.classList.add("slash-command-list");
    options.target.appendChild(this.element);

    this.render();
  }

  $set(props) {
    this.items = props.items;
    this.render();
  }

  $handleKeyDown(props) {
    // Implement key navigation here
  }

  $destroy() {
    this.element.remove();
  }

  render() {
    this.element.innerHTML = `
        <ul role="listbox">
          ${this.items
        .map(
          (item, index) => `
            <li role="option" data-index="${index}">
              ${item.title}
            </li>
          `
        )
        .join("")}
        </ul>
      `;

    this.element.querySelectorAll("li").forEach((li, index) => {
      li.addEventListener("click", () => {
        this.command(this.items[index]);
      });
    });
  }
}