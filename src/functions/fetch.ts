import { ResponseItem } from "../utils/types";

const BASE_URL = 'https://beta.forextester.com/data/api/Metadata/bars/chunked?Broker=Advanced&Symbol=EURUSD&Timeframe=1&Start=57674&End=59113&UseMessagePack=false'

async function fetchData() : Promise<ResponseItem[]>{
  const data = await fetch(BASE_URL);

  return data.json();
}

export default fetchData;