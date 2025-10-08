interface SubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      Consult service
    </button>
  );
};
