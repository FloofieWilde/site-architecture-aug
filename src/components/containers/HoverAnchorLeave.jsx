import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HoverAnchorLeave = ({id}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const target = document.getElementById(id);
  useEffect(() => {
    if (!target) return;

    const handleLeave = () => {
      navigate(location.pathname + location.search, { replace: true });
      target.classList.remove('active');
    };

    target.addEventListener('mouseleave', handleLeave);

    return () => {
      target.removeEventListener('mouseleave', handleLeave);
    };
  }, [navigate, location, id, target]);

  return null;
};

export default HoverAnchorLeave;