export const fetchUsers = async (page = 1) => {
    const response = await fetch(`http://localhost:3000/user/${page}`, {
      method: 'POST',
    });
    const data = await response.json();
    return data.data || [];
  };
  
  export const fetchProducts = async (page = 1) => {
    const response = await fetch(`http://localhost:3000/product/${page}`, {
      method: 'POST'
    });
    const data = await response.json();
    return data.data || [];
  };
  