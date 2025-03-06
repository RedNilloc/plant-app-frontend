import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export default function useKeyboardUp() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardOpenListener = Keyboard.addListener("keyboardDidShow", () =>
      setIsKeyboardOpen(true)
    );
    const keyboardCloseListener = Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardOpen(false)
    );

    return () => {
      if (keyboardOpenListener) keyboardOpenListener.remove();
      if (keyboardCloseListener) keyboardCloseListener.remove();
    };
  }, []);

  return isKeyboardOpen;
}
