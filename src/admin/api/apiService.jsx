export const fetchChildren = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/children");
      return response.json();
    } catch (error) {
      console.error("Error fetching children:", error);
      return [];
    }
  };
  
  export const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin");
      return response.json();
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };
  
