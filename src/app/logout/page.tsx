// app/logout/page.tsx

"use client";

import { supabase } from "~/lib/supabaseClient";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("Logout failed: " + error.message);
    } else {
      alert("Logged out successfully!");
      router.push("/login");
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
