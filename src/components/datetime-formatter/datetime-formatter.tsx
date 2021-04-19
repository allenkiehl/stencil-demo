import { Component, h, Prop } from '@stencil/core';

import moment from 'moment';

@Component({
  tag: 'datetime-formatter',
  styleUrl: 'datetime-formatter.css',
  shadow: true,
})
export class DateTimeFormatter {
  @Prop() timestamp: string;
  @Prop() format: string = 'MM/DD/YY @ h:mm A';
  @Prop() displaytype: string;

  render() {
    let formattedDate;

    switch (this.displaytype) {
      case 'ago':
        formattedDate = moment(this.timestamp).fromNow();
        break;
      default:
        formattedDate = moment(this.timestamp).format(this.format);
    }

    return <div>{formattedDate}</div>;
  }
}
