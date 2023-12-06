export type ChargingPointDetails = {
  chargerId: number;
  title: string;
  postCode?: string | null;
};

export type RootStackParamList = {
  MyEv: undefined;
  ChargingStation: ChargingPointDetails;
};

export type RootBottomTabsParamList = {
  Main: undefined;
  ChargeAway: undefined;
  MyLocation: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        RootBottomTabsParamList {}
  }
}
