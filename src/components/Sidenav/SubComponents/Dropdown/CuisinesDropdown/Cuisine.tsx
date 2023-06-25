export const Cuisine = ({ cuisine }: { cuisine: string }) => {
    const imgUrl = new URL(
      `../../../../../assets/img/flags/${cuisine}.svg`,
      import.meta.url
    ).href;
    return (
      <a
        className={`flex gap-3 [&>*]:my-auto hover:bg-slate-200 hover:dark:bg-slate-600 px-2`}
        href="#"
      >
        <img
          src={imgUrl}
          alt={cuisine + " flag"}
          className="h-10 w-10"
          loading="lazy"
        />
        <p>{cuisine}</p>
      </a>
    );
  };