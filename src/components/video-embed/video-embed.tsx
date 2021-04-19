import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'video-embed',
  styleUrl: 'video-embed.css',
})
export class VideoEmbed {
  @Prop() title: string;
  @Prop() subtitle: string;
  @Prop() url: string;
  @Prop() isdark: boolean;

  render() {
    const isDarkMode = this.isdark;

    function VideoContainer(props) {
      const src = props.url;

      if (src) {
        return (
          <div class="videoContainerResponsive">
            <iframe frameBorder="0" allowFullScreen={true} src={src}></iframe>
          </div>
        );
      }
      return <div class="noVideoFound">Whoops, no video loaded.</div>;
    }

    return (
      <div class={isDarkMode ? 'card card-dark' : 'card card-light'}>
        {this.title && <div class="title">{this.title}</div>}
        {this.subtitle && <div class="subtitle" innerHTML={this.subtitle}></div>}
        <VideoContainer url={this.url} />
      </div>
    );
  }
}
