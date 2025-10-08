export const connectEcho = (message: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket("wss://ws.postman-echo.com/raw");

    socket.onopen = () => {
      socket.send(message);
    };

    socket.onmessage = (event) => {
      resolve(`Echo received: "${event.data}"`);
      socket.close();
    };

    socket.onerror = (error) => {
      console.log("WebSocket error:", error);
      reject("WebSocket connection error.");
    };
  });
};
