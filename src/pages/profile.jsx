import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();

  return (
    <div>
      <h1>profile</h1>
      <h2>Username: {username}</h2>
    </div>
  );
};

export default ProfilePage;
