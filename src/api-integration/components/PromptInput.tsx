interface PromptInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const PromptInput = ({ value, onChange }: PromptInputProps) => {
  return (
    <div>
      <label htmlFor="prompt">Query parameter:</label>
      <input
        id="prompt"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ej: Miami, Florida, USA..."
      />
    </div>
  );
};
