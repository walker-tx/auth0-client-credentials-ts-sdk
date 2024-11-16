/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Todos } from "./todos.js";

export class SpeakeasyAuth0Example extends ClientSDK {
  private _todos?: Todos;
  get todos(): Todos {
    return (this._todos ??= new Todos(this._options));
  }
}
