import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IUser {
  accessToken: string;
  displayName: string;
  email: string;
  photoURL: string;
  stsTokenManager: { refreshToken: string };
}
interface IUserContext {
  user: IUser | null;
}
interface IReactProvider {
  children: ReactNode;
}
const UserContext = createContext<IUserContext | undefined>(undefined);

export function UserProvider({ children }: IReactProvider) {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(userData);
  }, []);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("Context");
  return context;
}
