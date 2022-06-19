import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'uc-stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  @State() price: number = 0;

  onFetchStockPrice(ev: Event) {
    ev.preventDefault();
    fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo')
      .then(res => res.json())
      .then(data => {
        this.price = parseInt(data['Global Quote']['05. price']);
      })
      .catch(console.log);
  }

  render() {
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input type="text" id="stock-symbol" />
        <button type="submit">Fetch</button>
      </form>,
      <div>
        <p>Price: {this.price ? this.price.toFixed(2) : 'n/a'}.</p>
      </div>,
    ];
  }
}
