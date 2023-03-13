type ButtonProps = {
  title: string;
  onClick?: () => void;
  classname?: string;
};

export const Button = ({ title, classname, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm px-4 py-1 shadow rounded ${classname ?? ''}`}
    >
      {title}
    </button>
  );
};
