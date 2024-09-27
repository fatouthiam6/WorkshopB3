import supabase from "./supabase";

export async function getSalles() {
  const { data, error } = await supabase.from("Salles").select("*");

  if (error) {
    console.error(error);
    throw new Error("Les salles n'ont pas pu être chargées");
  }
  return data;
}
