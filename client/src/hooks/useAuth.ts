import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
  selectUserEmail,
  selectUserId,
} from "../store/auth/authSelectors";
import { useAppSelector } from "./useRedux";

const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const token = useAppSelector(selectToken);
  const userEmail = useAppSelector(selectUserEmail);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const userId = useAppSelector(selectUserId);

  return {
    isLoggedIn,
    token,
    userEmail,
    isLoading,
    error,
    isRefreshing,
    userId,
  };
};

export default useAuth;
