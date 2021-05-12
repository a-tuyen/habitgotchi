import { useState, useEffect } from "react";
import axios from "axios";

// custom Hook
export default function useApplicationData() {
  const [state, setState] = useState({
    ActivePet: {},
    Status: {},
    MyPetInventory: [],
    PetShop: [],
    DailyChallenges: {},
    balanceCoins: 0,
    UserChallenges: {},
  });
  //  uses API to load data from API

  useEffect(() => {
    const digitalPetpromise = axios.get("/api/digitalpet");
    const statusdataPromise = axios.get("/api/statdata");
    const myPetInventorydataPromise = axios.get("/api/mypetinventory");
    const Petshopdatapromise = axios.get("/api/petshop");
    const DailyChallengesPromise = axios.get("/api/dailychallenges");
    const balanceCoinspromise = axios.get("/api/balancecoins");
    const userChallengesPromise = axios.get("/api/userchallenges");
    Promise.all([
      digitalPetpromise,
      statusdataPromise,
      myPetInventorydataPromise,
      Petshopdatapromise,
      DailyChallengesPromise,
      balanceCoinspromise,
      userChallengesPromise,
      
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        ActivePet: all[0].data.message,
        Status: all[1].data.message,
        MyPetInventory: all[2].data.message,
        PetShop: all[3].data.message,
        DailyChallenges: all[4].data.message,
        balanceCoins: parseInt(all[5].data.message.sum),
        UserChallenges: all[6].data.message,

      }));
    });
  }, []);

  function buydigitalpet(itemcoins, id) {
    if (itemcoins < parseInt(state.balanceCoins)) {
      const balanceCoins = state.balanceCoins - itemcoins;
      console.log(balanceCoins);
      const PetShop = { ...state.PetShop[id - 1], purchased: true };
      console.log("Petshop", PetShop);
      console.log("id", id);
      axios.put(`/api/Shop`, { balanceCoins, PetShop, id }).then((response) => {
        console.log("Response", response);
        setState((prev) => ({ ...prev, PetShop, balanceCoins }));
      });
    }
  }

  // function updateDailyChallenges(step_goal, water_goal, active_min_goal, id) {
  //   if (itemcoins < parseInt(state.balanceCoins)) {
  //     const balanceCoins = state.balanceCoins - itemcoins;
  //     console.log(balanceCoins);
  //     const PetShop = { ...state.PetShop[id - 1], purchased: true };
  //     console.log("Petshop", PetShop);
  //     console.log("id", id);
  //     axios.put(`/api/Shop`, { balanceCoins, PetShop, id }).then((response) => {
  //       console.log("Response", response);
  //       setState((prev) => ({ ...prev, PetShop, balanceCoins }));
  //     });
  //   }
  // }

  return { state, buydigitalpet };
}

