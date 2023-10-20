import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface IUser {
  accessToken: string;
  displayName: string;
  email: string;
  photoURL: string;
  stsTokenManager: { refreshToken: string };
  isLoggedIn: boolean;
}
interface IUserContext {
  user: IUser | null;
  updateUserCurrentUser: (currentUser: any) => void;
}
interface IReactProvider {
  children: ReactNode;
}
const UserContext = createContext<IUserContext | null>(null);

export function UserProvider({ children }: IReactProvider) {
  const user_profile = JSON.parse(localStorage.getItem("user") || "{}");
  const [user, setUser] = useState<IUser | null>(
    user_profile ? user_profile : null
  );

  const updateUserCurrentUser = (currentUser: IUser) => {
    setUser(currentUser);
  };
  return (
    <UserContext.Provider value={{ user, updateUserCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === null) throw new Error("Context");
  return context;
}
