function FormDataToObject(formData: FormData): Record<string, string | string[]> {
    const object: Record<string, string | string[]> = {};
    formData.forEach((value, key) => {
      if (object.hasOwnProperty(key)) {
        if (!Array.isArray(object[key])) {
          // Explicitly cast object[key] to any here
          object[key] = [object[key] as any];
        }
        (object[key] as string[]).push(value as string);
      } else {
        object[key] = value as string;
      }
    });
    return object;
  }
  
export default FormDataToObject