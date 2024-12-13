import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token
        localStorage.removeItem('user'); // Remove user data (optional but recommended)

        // Redirect to the login page. Use router.push with a replace option to prevent going back
        router.push('/');

    };

    return (
        <button className="rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-500" onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;