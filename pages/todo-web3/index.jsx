import React, { useState, useEffect } from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
  useMetamask,
  useAddress,
  useDisconnect,
} from "@thirdweb-dev/react";
import { Input, SimpleGrid, Button } from "@mantine/core";

const index = () => {
  const [input, setInput] = useState();
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  const { contract } = useContract(
    "0x62077c4C0f11c9F16b8A819B75cC9227D5051591"
  );
  const { data, isLoading: getLoading } = useContractRead(contract, "getTodo");
  const { mutateAsync: setTodo, isLoading: setLoading } = useContractWrite(
    contract,
    "setTodo"
  );

  const call = async () => {
    try {
      const data = await setTodo([input]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="m-20">
      {address ? (
        <div>
          <h3>{address}</h3>
          <Button fullWidth onClick={disconnect} className="bg-blue-400 mb-5">
            Logout
          </Button>
        </div>
      ) : (
        <Button fullWidth onClick={connectWithMetamask} className="bg-blue-400 mb-5">
          Login
        </Button>
      )}

      <SimpleGrid cols={2}>
        <div>
          <Input
            placeholder="Add Todo"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => call()} className="bg-blue-400 mt-5">
            Add Todo
          </Button>
          <div className="mt-5">
            {setLoading ? <div>Loading...</div> : <div>Sukses</div>}
          </div>
        </div>
        <div>
          {getLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {data.map((item, i) => (
                <h1 key={i}>{item}</h1>
              ))}
            </div>
          )}
        </div>
      </SimpleGrid>
    </div>
  );
};

export default index;
