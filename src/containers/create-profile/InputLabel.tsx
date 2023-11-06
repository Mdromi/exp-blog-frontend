interface InputLabelProps {
  label?: string;
  className?: string;
  htmlFor?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({
  label,
  className,
  htmlFor,
}) => {
  const defaultClassName =
    "block text-sm font-medium leading-6 text-accent-content";

  return (
    <label
      htmlFor={htmlFor}
      className={
        className ? `${defaultClassName} ${className}` : defaultClassName
      }
    >
      {label}
    </label>
  );
};

export default InputLabel;
