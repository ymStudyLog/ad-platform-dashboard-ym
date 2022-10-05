import React from "react";
import AdItem from "./AdItem";
import styled from "@emotion/styled";
import { AdListDataType } from "../../types";
import { useAdList } from "../../api/useAdList";

export interface IProps {
  props: { id: number; budget: number };
}

const AdList = () => {
  // const [adList, setAdList] = useRecoilState<AdListDataType[]>(adListState);
  const { getAdList } = useAdList();
  const [adList, setAdList] = React.useState<AdListDataType[]>([]);
  
  const query : string = "?status=active&status=closed";
  React.useEffect(() => { 
    getAdList(query).then((data)=>setAdList(data))
    .catch(() => console.log("data dispatch error"));
  }, []);
  
  return (
    <AdListContainer>
      {adList?.map((aditem: AdListDataType) => (
        <AdItem key={aditem.id} aditem={aditem} />
      ))}
    </AdListContainer>
  );
};

export default AdList;

const AdListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
