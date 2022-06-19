import { Component, h } from '@stencil/core';
import { AV_API_KEY } from '../../utils/utils';

@Component({
  tag: 'uc-stock-finder',
  styleUrl: 'stock-finder.css',
  shadow: true,
})
export class StockFinder {
  tickerInput: HTMLInputElement;

  onFindStock(ev: Event) {
    ev.preventDefault();
    const ticker = this.tickerInput.value;
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(console.log)
      .catch(console.log);
  }

  render() {
    return [
      <form onSubmit={this.onFindStock.bind(this)}>
        <input ref={el => (this.tickerInput = el)} type="text" id="stock-symbol" />
        <button type="submit">Find</button>
      </form>,
    ];
  }
}
