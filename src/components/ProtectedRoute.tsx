import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login'); // Redirigir a la página de inicio de sesión
        }
    }, [isAuthenticated, router]);

    return <>{isAuthenticated() ? children : null}</>;
};

export default ProtectedRoute;
