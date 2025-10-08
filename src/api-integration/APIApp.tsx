import { useState } from "react";
import {
  ProviderSelector,
  LoadingIndicator,
  ErrorBanner,
  ResultDisplay,
  PromptInput,
  SubmitButton,
} from "./components";
import { integrationRouter } from "./logic/integrationRouter";

export const APIApp = () => {
  const [provider, setProvider] = useState("weather");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      setError("You must enter a parameter to query.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await integrationRouter(provider, prompt);
      setResult(response);
    } catch (err) {
      setError("There was an error while querying the service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>API Integration</h1>

      <ProviderSelector value={provider} onChange={setProvider} />
      <PromptInput value={prompt} onChange={setPrompt} />
      <SubmitButton onClick={handleSubmit} />

      {loading && <LoadingIndicator />}
      {error && <ErrorBanner message={error} />}
      {result && <ResultDisplay text={result} />}
    </main>
  );
};
