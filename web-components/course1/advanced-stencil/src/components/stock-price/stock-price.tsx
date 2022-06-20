import { Component, h, Host, Listen, Prop, State, Watch } from '@stencil/core';
import { AV_API_KEY } from '../../utils/utils';

@Component({
  tag: 'uc-stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  tickerInput: HTMLInputElement;

  @State() price: number;
  @State() userInput: string;
  @State() userInputValid = false;
  @State() loading = false;

  @Prop({ reflect: true, mutable: true }) symbol: string;

  @Watch('symbol')
  onSymbolChanged(newVal: string, oldVal: string) {
    if (newVal !== oldVal) {
      this.fetchStockPrice(newVal);
      this.userInput = newVal;
    }
  }

  onUserInput(ev: Event) {
    this.userInput = (ev.target as HTMLInputElement).value;
    if (this.userInput.trim() !== '') {
      this.userInputValid = true;
    } else {
      this.userInputValid = false;
    }
  }

  @Listen('ucSymbolSelected', { target: 'body' })
  onStockSymbolSelected(event: CustomEvent) {
    if (event.detail && event.detail !== this.symbol) {
      this.fetchStockPrice(event.detail);
      this.userInput = event.detail;
      this.userInputValid = true;
    }
  }

  fetchStockPrice(ticker) {
    this.loading = true;
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const price = parseInt(data['Global Quote']['05. price']);
        this.price = price ? price : null;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.price = null;
        this.loading = false;
      });
  }

  onFetchStockPrice(ev: Event) {
    ev.preventDefault();
    this.symbol = this.tickerInput.value;
  }

  componentWillLoad() {
    console.log('componentWillLoad');
    console.log(this.symbol);
  }

  componentDidLoad() {
    console.log('componentDidLoad');
    if (this.symbol.trim().length) {
      this.userInput = this.symbol;
      this.userInputValid = true;
      this.fetchStockPrice(this.symbol);
    }
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  disconnectedCallback() {
    console.log('componentDidUnload');
  }

  render() {
    return (
      <Host class={!this.price && !this.loading ? 'error' : ''}>
        <form onSubmit={this.onFetchStockPrice.bind(this)}>
          <input ref={el => (this.tickerInput = el)} type="text" id="stock-symbol" value={this.userInput} onInput={this.onUserInput.bind(this)} />
          <button type="submit" disabled={!this.userInputValid || this.loading}>
            Fetch
          </button>
        </form>
        <div>{this.loading ? <p>Loading</p> : <p>Price: {this.price ? this.price.toFixed(2) : 'invalid symbol'}.</p>}</div>
      </Host>
    );
  }
}
