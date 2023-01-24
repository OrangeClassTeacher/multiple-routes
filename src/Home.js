import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [navi, setNavi] = useState(false);
  const navigate = useNavigate();
  if (navi) {
    return <Navigate to="/about/2" />;
  }

  return (
    <div>
      Home
      <form>
        <input type="text" />
        <button
          onClick={(e) => {
            e.preventDefault();
            // setNavi(tru.e);

            navigate("/about/1");
          }}
        >
          go to
        </button>
      </form>
    </div>
  );
}
