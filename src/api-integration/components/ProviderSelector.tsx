type ProviderSelectorProps = {
  value: string;
  onChange: (newProvider: string) => void;
};

export const ProviderSelector = ({
  value,
  onChange,
}: ProviderSelectorProps) => {
  return (
    <div>
      <select
        id="provider"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="weather">WeatherAPI - REST/fetch</option>
        <option value="news">NewsAPI - REST/axios</option>
        <option value="countries">Countries API - GraphQL</option>
        <option value="websocket">Echo - WebSocket</option>
      </select>
    </div>
  );
};
