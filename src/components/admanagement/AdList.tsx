import React from "react";
import AdItem from "./AdItem";
import styled from "@emotion/styled";
import { AdListDataType } from "../../types";
import { useAdList } from "../../api/hooks/useAdList";

export interface IProps {
  props: { id: number; budget: number };
}

type Props = {
  statusQuery : string;
}

const AdList = (props: Props) => {
  const { statusQuery } = props;
  const { getAdList } = useAdList();
  const [adList, setAdList] = React.useState<AdListDataType[]>([]);
  
  React.useEffect(() => { 
    getAdList(statusQuery).then((data)=>setAdList(data))
    .catch(() => console.log("data dispatch error"));
  }, [statusQuery]);
  
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
