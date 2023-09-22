import { useEffect } from "react";
import { getAgences } from "../slices/agenceSlice";
import { useDispatch, useSelector } from "react-redux";
import AgenceCard from "../components/AgenceCard";
import { getUserInfo } from "../slices/userSlice";
import AddAgenceModal from "../components/AddAgenceModal";
import SearchBar from "../components/searchBar";
const Agences = () => {
  const dispatch = useDispatch();
  const { agenceList } = useSelector(({ agences }) => agences);
  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAgences());
  },[]);
  useEffect(() => {
    dispatch(getUserInfo());
  },[]);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: 24 }}>
        <SearchBar/>
        {isAuth && <AddAgenceModal />}
      </div>
      <div style={{display:"flex",flexWrap: "wrap",width:"80%",margin:"auto"}}>
      {agenceList.map((agence) => (
        <AgenceCard key={agence._id} agence={agence} />
      ))}
    </div>
    </div>
  );
};

export default Agences;
