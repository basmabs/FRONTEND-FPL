import Http from "../utils/Http";
const addSondage = async (data) => {
  return await Http.post('addSondage', data)
};
const getSondage = async () => {
  return await Http.get('/getSondage')
};
const getSondagebyid = async (id) => {
  return await Http.get('/getSondagebyid/' + id)
};
const updateSondage = async (id,data ) => {
  return await Http.put('/updateSondage/' + id, data)
};
const deleteSondage = async (id) => {
  return await Http.delete('/deleteSondage/' + id)
};

const handleClick = async (data) => {
  return await Http.post('/handleClick', data)
};

const findVote = async (data) => {
  return await Http.post('/vote/:option', data)
}
const getVote = async (id) => {
  return await Http.get('/votes/' + id)
};
const SondageServices = {
  addSondage,
  getSondage,
  getSondagebyid,
  updateSondage,
  deleteSondage,
  handleClick,
  findVote,
  getVote
};
export default SondageServices;