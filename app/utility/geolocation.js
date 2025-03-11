import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function useGeolocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Location.requestForegroundPermissionsAsync()
      .then(({ status }) => {
        if (status !== "granted") {
          console.log("Please grant location permissions");
          return;
        }

        return Location.getCurrentPositionAsync({});
      })
      .then((currentLocation) => {
        if (currentLocation) {
          setLocation(currentLocation);
          console.log("Location:");
          console.log(currentLocation);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);
  return location;
}
