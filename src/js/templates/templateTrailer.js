export const templateTrailer = (youtubeKey) => `
    <iframe
    class="youtube-video"
    src="https://www.youtube.com/embed/${youtubeKey}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
`;
