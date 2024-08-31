import instance from ".";

const getAllPets = async () => {
  const response = await instance.get("Pets/");
  return response.data;
};
const getOnePet = async (id) => {
  const response = await instance.get(`pets/${id}`);
  return response.data;
};
const createPet = async (name, type, image, available) => {
  const response = await instance.post("Pets/", {
    name: name,
    type: type,
    image: image,
    adopted: available,
  });
  return response.data;
};
export { getAllPets, createPet, getOnePet };
