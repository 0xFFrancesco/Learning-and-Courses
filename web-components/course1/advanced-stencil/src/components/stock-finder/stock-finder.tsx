import { Component, Event, EventEmitter, h, State } from '@stencil/core';
import { AV_API_KEY } from '../../utils/utils';

@Component({
  tag: 'uc-stock-finder',
  styleUrl: 'stock-finder.css',
  shadow: true,
})
export class StockFinder {
  tickerInput: HTMLInputElement;

  @State() searchResult: { symbol: string; name: string }[] = [];

  @Event({ bubbles: true, composed: true }) ucSymbolSelected: EventEmitter<string>;

  onFindStock(ev: Event) {
    ev.preventDefault();
    const ticker = this.tickerInput.value;
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(data => (this.searchResult = data['bestMatches'].map(item => ({ symbol: item['1. symbol'], name: item['2. name'] }))))
      .catch(console.log);
  }

  onSymbolSelect(symbol: string) {
    this.ucSymbolSelected.emit(symbol);
  }

  render() {
    return [
      <form onSubmit={this.onFindStock.bind(this)}>
        <input ref={el => (this.tickerInput = el)} type="text" id="stock-symbol" />
        <button type="submit">Find</button>
      </form>,
      <ul>
        {this.searchResult.map(item => (
          <li onClick={this.onSymbolSelect.bind(this, item.symbol)}>
            <strong>{item.symbol}</strong> - {item.name}
          </li>
        ))}
      </ul>,
    ];
  }
}
