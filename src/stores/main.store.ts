import { observable } from "mobx";
import {injectable} from "inversify";

@injectable()
export class MainStore {
  @observable user: String = "Guest";
}
