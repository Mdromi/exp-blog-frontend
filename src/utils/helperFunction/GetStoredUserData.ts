function GetStoredUserData(): any | null {
    try {
      const storedUserDataString = localStorage?.getItem('user_data');
      return storedUserDataString ? JSON.parse(storedUserDataString) : null;
    } catch (error) {
      console.error("Error parsing storedUserData:", error);
      return null;
    }
  }

  export default GetStoredUserData;