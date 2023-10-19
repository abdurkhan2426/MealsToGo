import React, { useContext } from "react";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
