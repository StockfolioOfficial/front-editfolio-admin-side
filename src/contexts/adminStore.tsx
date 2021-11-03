import { makeAutoObservable } from 'mobx';

export interface CreatorModel {
  name: string;
  nickname: string;
  userId: string;
}

class Admin {
  creators: CreatorModel[];

  constructor() {
    makeAutoObservable(this);
    this.creators = [];
  }

  setCreator = (creators: CreatorModel[]) => {
    this.creators = creators;
  };

  getCreatorId = (name: string) => {
    return this.creators.find((creator) => creator.name === name)?.userId;
  };
}

export default Admin;
