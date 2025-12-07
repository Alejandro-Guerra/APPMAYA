import AsyncStorage from "@react-native-async-storage/async-storage";


export async function saveItem(key: string, value: string): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("Error guardando valor:", error);
  }
}


export async function getItem(key: string): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log("Error obteniendo valor:", error);
    return null;
  }
}


export async function removeItem(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error eliminando valor:", error);
  }
}


export async function rememberEmail(email: string): Promise<void> {
  await saveItem("rememberedEmail", email);
}


export async function loadRememberedEmail(): Promise<string | null> {
  return await getItem("rememberedEmail");
}

export async function clearRememberedEmail(): Promise<void> {
  await removeItem("rememberedEmail");
}
