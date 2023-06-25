export const DropdownStringItem = ({ item }: { item: string }) => (
  <a
    className={`flex gap-3 [&>*]:my-auto hover:bg-slate-200 hover:dark:bg-slate-600 p-2`}
    href="#"
  >
    <p>{item}</p>
  </a>
);
