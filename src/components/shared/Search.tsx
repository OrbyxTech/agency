interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  containerClasses?: string;
}

const Search = ({ value, onChange, placeholder, containerClasses }: Props) => {
  return (
    <div className={containerClasses}>
      <input
        className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border rounded-lg
       border-b-slate-300 p-3 placeholder-slate-400 focus:border-slate-500
       transition-colors duration-200 w-full"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
