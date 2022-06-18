import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() showContactInfo: boolean = false;

  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true, mutable: true }) open: boolean;

  @Method()
  openDrawer() {
    this.open = true;
  }

  @Method()
  closeDrawer() {
    this.open = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  render() {
    let mainContent = <slot />;

    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email.</p>
          <ul>
            <li>Phone: 299-4244255</li>
            <li>
              Email: <a href="mailto:hello@hello.com">hello@hello.com</a>
            </li>
          </ul>
        </div>
      );
    }

    return [
      <div onClick={this.closeDrawer.bind(this)} class="backdrop"></div>,
      <aside>
        <header>
          <button onClick={this.closeDrawer.bind(this)}>x</button>
          <h1>{this.title}</h1>
        </header>
        <section id="tabs">
          <button class={this.showContactInfo ? null : 'active'} onClick={this.onContentChange.bind(this, 'nav')}>
            Navigation
          </button>
          <button class={this.showContactInfo ? 'active' : null} onClick={this.onContentChange.bind(this, 'contact')}>
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>,
    ];
  }
}
