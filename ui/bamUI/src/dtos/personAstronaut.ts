export interface PersonAstronaut {
  personId: number;
  name: string;
  currentRank: string;
  currentDutyTitle: string;
  careerStartDate: string | null;
  careerEndDate: string | null;
}
export interface GetAllPersonAstronautResponse {
  message: string;
  people: PersonAstronaut[];
  responseCode: number;
  success: boolean;
}

export interface GetPersonByIdResponse{
  message: string;
  person: PersonAstronaut;
  responseCode: number;
  success: boolean;
}
