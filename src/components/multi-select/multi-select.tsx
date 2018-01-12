import { Component, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'multi-select',
  styleUrl: 'multi-select.scss'
})

export class MultiSelect {
  @Prop() vertical: boolean = false;
  @Prop() labelAvailable: string;
  @Prop() labelSelected: string;

  @State() listAvailable: any[] = [];
  @State() listSelected: any[] = [];

  @Method()
  handleClick(event) {
    const selected = {
      value: event.target.getAttribute('data-value'),
      text: event.target.getAttribute('data-text'),
      selected: true
    };

    this.listSelected = [ { value: 10, text: "test" } ];
    this.listAvailable = [ { value: 11, text: "WTF"} ];
  }

  constructor() {
    const data = [ 
      { value: 1, text: "Option 1", selected: false },
      { value: 2, text: "Option 2", selected: false },
      { value: 3, text: "Option 3", selected: true },
      { value: 4, text: "Option 4", selected: false },
      { value: 5, text: "Option 5", selected: true },
      { value: 6, text: "Option 6", selected: false }
    ];

    data.forEach((item) => {
      if (!item.selected) {
        this.listAvailable.push(item);
      } else {
        this.listSelected.push(item);
      }
    });
  }

  render() {

    let labelAvailableHTML = null;
    let labelSelectedHTML = null;
    if (this.labelAvailable) {
      labelAvailableHTML = <h2>{this.labelAvailable}</h2>;
    }

    if (this.labelSelected) {
      labelSelectedHTML = <h2>{this.labelSelected}</h2>;
    }

    return (
      <div class="multi-select">
        <div class="multi-select__panel">
          {labelAvailableHTML}
          <ul class="multi-select__list">
            {this.listAvailable.map((item) =>
              <li data-value={item.value} onClick={this.handleClick.bind(this)}>{item.text}</li>
            )}
          </ul>
        </div>
        <div class="multi-select__panel">
          {labelSelectedHTML}
          <ul class="multi-select__list">
            {this.listSelected.map((item) =>
              <li data-value={item.value} onClick={this.handleClick.bind(this)}>{item.text}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
 
}
