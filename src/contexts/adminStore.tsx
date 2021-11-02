import { makeAutoObservable } from 'mobx';

export interface CreatorModal {
  name: string;
  nickname: string;
  userId: string;
}

class Admin {
  creators: CreatorModal[];

  constructor() {
    makeAutoObservable(this);
    this.creators = [];
  }

  setCreator = (creators: CreatorModal[]) => {
    this.creators = creators;
  };
}

export default Admin;
