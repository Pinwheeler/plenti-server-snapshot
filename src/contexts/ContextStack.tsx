import React from "react";
import { FirebaseProvider } from "./FirebaseContext";

export const ContextStack: React.FC = (props) => (
  <FirebaseProvider>{props.children}</FirebaseProvider>
);
