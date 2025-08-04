export type CustomInputProps = {
  id: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute | "textarea" | "name";
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  size?: "sm" | "md" | "lg";
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  rows?: number; // Solo aplica a textarea
};
