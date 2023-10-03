import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent  {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  async componentWillRender(){
    let cnt = 0; 
    while(cnt != 100){
      console.log("Component will render!"); 
      cnt++; 
    }
  }

  render() {
    console.log("Component rendered!");
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
