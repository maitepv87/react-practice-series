interface ResultDisplayProps {
  text: string;
}

export const ResultDisplay = ({ text }: ResultDisplayProps) => {
  return (
    <div>
      <h2>Result:</h2>
      <p>{text}</p>
    </div>
  );
};
