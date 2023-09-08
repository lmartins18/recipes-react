export const MealYoutubeIframe = ({ youtubeUrl }: { youtubeUrl: string }) => (
  <div className="m-6 h-[85vh]">
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${youtubeUrl.slice(
        -11
      )}?wmode=transparent`}
      title="Meal Video"
      allowFullScreen
    />
  </div>
);
